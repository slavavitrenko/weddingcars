<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\Settings;

class SettingsController extends Controller{

	use \app\traits\AjaxTrait;

	public function actionIndex(){
		$model = Settings::find()->one();
		if($model->load(Yii::$app->request->post()) && $model->save()){
			Yii::$app->session->setFlash('success', Yii::t('app', 'Settings succesfully saved'));
			return $this->refresh();
		}
		return $this->render('index', ['model' => $model]);
	}

}