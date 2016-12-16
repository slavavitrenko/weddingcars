<?php

namespace voskobovich\liqpay\actions;

use voskobovich\liqpay\forms\CallbackForm;
use Yii;
use yii\base\Action;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use app\models\Orders;
use app\models\Settings;
use yii\helpers\Url;



class CallbackAction extends Action
{
	public $callable;

	public function init()
	{
		parent::init();

		if (empty($this->callable)) {
			throw new InvalidParamException('Param "callable" can not be empty.');
		}
	}

	public function run()
	{
		Yii::$app->response->format = 'json';
		$post =Yii::$app->request->post();

		if (empty($post['data']) || empty($post['signature'])) {
			throw new BadRequestHttpException();
		}

		$post['signature'] = str_replace('\\/', '/', $post['signature']);
		$post['data'] = str_replace('\\/', '/', $post['data']);

		$post =Yii::$app->request->post();
		$file = fopen('confirm.txt', 'w+');
		fwrite($file, json_encode($post) . "\r\n\r\n");
		fclose($file);

		$liqPay = Yii::$app->getModule('liqpay');
		$sign = base64_encode(sha1(Settings::get('liqpay_private_key') . $post['data'] . Settings::get('liqpay_private_key'), 1));

		$model = new CallbackForm();
		$data = json_decode(base64_decode($post['data']), true);
		$model->load($data, '');

		if (!YII_DEBUG && (!$model->validate() || $sign !== $post['signature'])) {
			throw new BadRequestHttpException('Data is corrupted');
		}

		$order = Orders::find()->where(['order_id' => $model->order_id])->limit(1)->one();
		if(!$order){
			return 'No such orders with requested order_id';
		}
		if(in_array($order->paid, ['success', 'sandbox', 'wait_accept'])){
			return 'success';
		}

		Yii::$app->sms->send(
				"Поступил авансовый платеж по заказу № " . $order->id . ". Детали:\n" . Url::to(['/orders/view', 'id' => $order->id], true),
				$order->car->user->phone
			);
		
		$order->updateAttributes(['paid' => $data['status']]);

		if(($order->car->user->partner == '1') && in_array($data['status'], ['success', 'sandbox'])){
			$userScore = $order->car->user->score;
			$cost = $order->cost;
			$order->updateAttributes(['partner_percent' => Settings::get('partner_percent')]);
			$order->car->user->updateAttributes(['score' => $userScore + ($cost / 100 * Settings::get('partner_percent'))]);
		}

		if($data['status'] == 'failure'){
			$order->generateOrderId();
		}

		if(YII_DEBUG && in_array($data['status'], ['sandbox', 'wait_accept'])){
			$this->sendEmail($order, true);
		}
		if($data['status'] == 'success'){
			$this->sendEmail($order, false);
		}

		// echo $sign . "\n";
		// echo $post['signature'] . "\n";
		Yii::$app->end();
	}

	private function sendEmail($model, $test=false){
		$mail = Yii::$app->mailer->compose()
		->setTo($model->car->user->email)
		->setFrom([Settings::get('admin_email') => Yii::$app->params['siteName']]);

		if($test){
			$mail->setSubject(Yii::t('app', 'Test pay'))
			->setTextBody(Yii::t('app', 'The test order was payed. Link - {link}', ['link' => \yii\helpers\Url::to(['/orders/view', 'id' => $model->id], true)]));
		}
		else {
			$mail->setSubject(Yii::t('app', 'Order was payed.'))
			->setTextBody(Yii::t('app', 'Order was payed. Link - {link}', ['link' => \yii\helpers\Url::to(['/orders/view', 'id' => $model->id], true)]));
		}

		$mail->send();
	}

}
