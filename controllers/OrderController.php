<?php

namespace app\controllers;

use Yii;
use app\models\Orders;
use app\models\user\RegistrationForm;
use app\models\user\User;
use app\models\Auto;


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

        $errors = $this->performAjaxValidation($userModel, false);
        $this->performAjaxValidation($orderModel, true, $errors);

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
		$this->performAjaxValidation($model);
		if($model->load(Yii::$app->request->post()) && $model->save()){
			Yii::$app->session->setFlash('success', Yii::t('app', 'Your order accepted. Thank you.'));
			return $this->redirect(['/orders']);
		}
		return $this->render('exist', ['order' => $model]);
	}

	public function actionNew(){
		return Yii::$app->user->isGuest ? $this->newDriver() : $this->existDriver();
	}

	private function newDriver(){

		$autoModel = new Auto;
		$autoModel->retro = '0';
        $autoModel->client_decor = '0';
        $autoModel->decor = '0';
		$userModel = Yii::createObject(RegistrationForm::className());

        $errors = $this->performAjaxValidation($userModel, false);
        $this->performAjaxValidation($autoModel, true, $errors);

		if($userModel->load(Yii::$app->request->post()) && $autoModel->load(Yii::$app->request->post()) && $userModel->validate()){
			$userModel->type = 'driver'; 
			$userModel->register(false);
			
			$autoModel->user_id = $userModel->id;
			Yii::$app->getUser()->login(User::findOne($userModel->id, 0));
			if($autoModel->save()){
				Yii::$app->session->setFlash('success', Yii::t('app', 'Your order accepted. Thank you.'));
				return $this->redirect(['/auto']);
			}
			else {
				Yii::$app->user->logout();
				User::findOne($userModel->id)->delete();
			}
		}

		return $this->render('newDriver', ['user' => $userModel, 'auto' => $autoModel]);
	}

	private function existDriver(){
		$model = new Auto;
		$model->retro = '0';
        $model->client_decor = '0';
        $model->decor = '0';
		$this->performAjaxValidation($model);
		if($model->load(Yii::$app->request->post()) && $model->save()){
			Yii::$app->session->setFlash('success', Yii::t('app', 'Your order accepted. Thank you.'));
			return $this->redirect(['/auto']);
		}
		return $this->render('existDriver', ['model' => $model]);
	}


}
