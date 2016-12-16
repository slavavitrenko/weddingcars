<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\LoginForm;
use app\models\ContactForm;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;

use app\models\Settings;
use app\models\Orders;


class SiteController extends \yii\web\Controller
{
    
    use \app\traits\AjaxTrait;
    
    public function init(){
        $this->layout = '@app/views/layouts/frontend/frontend';
        $this->enableCsrfValidation = false;
        return parent::init();
    }

    public function beforeAction($action)
    {            
        if ($action->id == 'confirm') {
        }

        return parent::beforeAction($action);
    }
    // public function behaviors()
    // {
    //     return [
    //         'access' => [
    //             'class' => AccessControl::className(),
    //             'rules' => [
    //                 [
    //                     'allow' => true,
    //                     'roles' => ['@'],
    //                 ],
    //             ],
    //         ],
    //     ];
    // }

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
            'confirm' => [
                'class' => 'voskobovich\liqpay\actions\CallbackAction',
                'callable' => 'confirm'
            ],
            'xml' => [
                'class' => 'app\actions\Yml',
            ]
        ];
    }

    public function actionIndex(){
        $model = new ContactForm;
        if($model->load(Yii::$app->request->post()) && $model->contact(Settings::get('email'))){
            Yii::$app->session->setFlash('success', Yii::t('app', 'Contact form submtted'));
            return $this->refresh();
        }
        return $this->render('index', ['model' => $model]);
    }

    public function actionPay($id)
    {
        $model = Orders::findOne($id);

        return $this->render('test', ['model' => $model]);
    }
    
    public function actionTerms(){
        return $this->render('terms', ['text' => Settings::get('terms')]);
    }

    public function actionDriver(){
        return $this->render('driver');
    }

    public function actionContact(){
        $model = new ContactForm;
        if($model->load(Yii::$app->request->post()) && $model->contact(Settings::get('email'))){
            Yii::$app->session->setFlash('success', Yii::t('app', 'Contact form submtted'));
            return $this->refresh();
        }
        return $this->render('contact', ['model' => $model]);
    }

    public function actionClients(){
        return $this->render('clients');
    }

    public function actionAdvanced(){
        return $this->render('advanced');
    }

    // public function actionSendall(){
    //     $users = \app\models\user\User::find()->where(['type' => 'driver'])->all();

    //     foreach($users as $user){
    //         Yii::$app->sms->send("Здравствуйте, " . $user->fio . ".\nВаши данные для входа в Яндекс.Почту:\nАдрес: http://mail.ya.ru\nлогин: " . $user->username . "@weddingcars.pl.ua\nпароль: " . $user->username . "w", $user->phone);
    //     }
    // }

}
