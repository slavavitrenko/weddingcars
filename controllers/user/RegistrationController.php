<?php

namespace app\controllers\user;

use Yii;
use dektrium\user\Finder;
use app\models\user\User;
use app\models\user\RegistrationForm;


class Registrationcontroller extends \dektrium\user\controllers\RegistrationController
{

	public function init(){
		$this->layout = '@app/views/layouts/frontend/frontend';
		return parent::init();
	}

    public function actionRegister()
    {
        $model = Yii::createObject(RegistrationForm::className());

        $this->performAjaxValidation($model);

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
        	$userId = $model->register(false);
        	Yii::$app->user->login(User::findOne($userId), 0);
        	return $this->redirect(['/orders']);
        }

        return $this->render('register', [
            'model'  => $model,
            'module' => $this->module,
        ]);
    }
}