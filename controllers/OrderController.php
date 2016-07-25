<?php

namespace app\controllers;

use Yii;
use app\models\Orders;
use app\models\user\RegistrationForm;
use app\models\user\User;
use yii\base\Model;
use yii\web\Response;
use yii\widgets\ActiveForm;


class OrderController extends \yii\web\Controller
{

    use \app\traits\AjaxTrait;

	public function init(){
		$this->layout = '@app/views/layouts/frontend/frontend';
		return parent::init();
	}

	public function actionIndex($id){
		return Yii::$app->user->isGuest ? $this->guest($id) : $this->exist($id);
	}
	
	private function guest($id){

		$orderModel = new Orders;
		$orderModel->car_id = $id;
		$userModel = Yii::createObject(RegistrationForm::className());

        $this->performAjaxValidation($orderModel, $userModel);

		if($userModel->load(Yii::$app->request->post()) && $orderModel->load(Yii::$app->request->post()) && $userModel->register()){
			$orderModel->user_id = $userModel->id;
			Yii::$app->getUser()->login(User::findOne($userModel->id, 0));
			if($orderModel->save()){
				Yii::$app->session->setFlash('success', Yii::t('app', 'Your order accepted. Thank you.'));
				return $this->redirect(['/orders']);
			}
			else {
				Yii::$app->user->logout();
				User::findOne($userModel->id)->delete();
			}
		}

		return $this->render('guest', ['user' => $userModel, 'order' => $orderModel]);
	}

	private function exist($id){
		$model = new Orders;
		$model->car_id = $id;
		if($model->load(Yii::$app->request->post()) && $model->save()){
			Yii::$app->session->setFlash('success', Yii::t('app', 'Your order accepted. Thank you.'));
			return $this->redirect(['/orders']);
		}
		return $this->render('exist', ['model' => $model]);
	}

	protected function performAjaxValidation($order, $user)
    {
        if (Yii::$app->request->isAjax && ($order->load(Yii::$app->request->post()) && ($user->load(Yii::$app->request->post())))) {
            Yii::$app->response->format = Response::FORMAT_JSON;
            echo json_encode(
            	array_merge(ActiveForm::validate($order), ActiveForm::validate($user)));
            Yii::$app->end();
        }
    }
}
