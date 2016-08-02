<?php

namespace app\controllers\user;

use Yii;
use yii\base\Model;
use yii\web\Response;
use yii\widgets\ActiveForm;
use dektrium\user\models\Profile;
use app\models\user\SettingsForm;


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

    public function actionProfile()
    {
        $model = $this->finder->findProfileById(Yii::$app->user->identity->getId());

        if ($model == null) {
            $model = Yii::createObject(Profile::className());
            $model->link('user', Yii::$app->user->identity);
        }

        $this->performAjaxValidation($model);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->getSession()->setFlash('success', Yii::t('user', 'Your profile has been updated'));
            return $this->redirect(['/user/settings/profile']);
        }

        return $this->render('profile', [
            'model' => $model,
        ]);
    }

    /**
     * Displays page where user can update account settings (username, email or password).
     *
     * @return string|\yii\web\Response
     */
    public function actionAccount()
    {
        $model = Yii::createObject(SettingsForm::className());

        $this->performAjaxValidation($model);
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            Yii::$app->session->setFlash('success', Yii::t('user', 'Your account details have been updated'));
            return $this->redirect(['/user/settings/account']);
        }

        return $this->render('account', [
            'model' => $model,
        ]);
    }

}