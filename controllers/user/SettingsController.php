<?php

namespace app\controllers\user;

use Yii;
use yii\base\Model;
use yii\web\Response;
use yii\widgets\ActiveForm;

class SettingsController extends \dektrium\user\controllers\SettingsController
{

    use \app\traits\AjaxTrait;

    protected function performAjaxValidation(Model $model)
    {
        if (Yii::$app->request->post('ajax') && $model->load(Yii::$app->request->post())) {
            Yii::$app->response->format = Response::FORMAT_JSON;
            echo json_encode(ActiveForm::validate($model));
            Yii::$app->end();
        }
    }

}