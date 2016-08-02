<?php

namespace app\controllers;

use Yii;
use app\models\Auto;
use app\models\user\RegistrationForm;
use app\models\user\User;


class DriverController extends \yii\web\Controller
{

    use \app\traits\AjaxTrait;

	public function init(){
		$this->layout = '@app/views/layouts/frontend/frontend';
		return parent::init();
	}

	public function actionIndex(){
		return Yii::$app->user->isGuest ? $this->guest() : $this->exist();
	}

	private function guest(){

		$autoModel = new Auto;
		$userModel = Yii::createObject(RegistrationForm::className());

        $errors = $this->performAjaxValidation($userModel, false);
        $this->performAjaxValidation($autoModel, true, $errors);

		if($userModel->load(Yii::$app->request->post()) && $autorModel->load(Yii::$app->request->post()) && $userModel->register()){
			$autoModel->user_id = $userModel->id;
			Yii::$app->getUser()->login(User::findOne($userModel->id, 0));
			if($autoModel->save()){
				Yii::$app->session->setFlash('success', Yii::t('app', 'Your auto registration accepted. Thank you.'));
				return $this->redirect(['/auto']);
			}
			else {
				Yii::$app->user->logout();
				User::findOne($userModel->id)->delete();
			}
		}

		return $this->render('guest', ['user' => $userModel, 'auto' => $autoModel]);
	}

	private function exist(){
		$model = new Auto;
		$this->performAjaxValidation($model);
		if($model->load(Yii::$app->request->post()) && $model->save()){
			Yii::$app->session->setFlash('success', Yii::t('app', 'Your auto registration accepted. Thank you.'));
			return $this->redirect(['/auto']);
		}
		return $this->render('exist', ['model' => $model]);
	}

}
