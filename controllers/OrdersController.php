<?php

namespace app\controllers;

use Yii;
use app\models\Orders;
use app\models\search\Orders as OrdersSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use app\models\Settings;
use yii\helpers\Url;
use yii\filters\AccessControl;


class OrdersController extends Controller
{

    use \app\traits\AjaxTrait;

    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    public function actionIndex()
    {
        $searchModel = new OrdersSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionView($id)
    {
        $model = $this->findModel($id);
        if($model->car->user_id != Yii::$app->user->identity->id && !Yii::$app->user->can('manager') && $model->user_id != Yii::$app->user->identity->id){
            throw new NotFoundHttpException('The requested page does not exist.');
        }
        return $this->render('view', [
            'model' => $model,
        ]);
    }

    public function actionCreate()
    {
        $model = new Orders();

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            $model->confirmed = '0';
            $model->paid = '0';
            $model->save(false);
            Yii::$app->sms->send("Ваш заказ автомобиля принят. Детали:" . Url::to(['/orders/view', 'id' => $model->id], true), $model->user->phone);
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    public function actionArchive($id){
        $model = $this->findModel($id);
        if(Yii::$app->user->identity->id != $model->car->user_id){
            Yii::$app->session->setFlash('danger', Yii::t('app', 'You are not allowed to acces for this section'));
            return $this->redirect(['index']);
        }
        $model->updateAttributes(['archive' => $model->archive == '1' ? '0' : '1']);
        return $this->redirect(['index']);
    }

    public function actionConfirm($id){

        Yii::$app->response->format = 'json';

        $model = $this->findModel($id);
        if($model->car->user_id != Yii::$app->user->identity->id){
            throw new NotFoundHttpException();
        }

        $model->updateAttributes([
                'confirmed' => '1'
            ]);

        Yii::$app->sms->send("Ваша заявка на аренду автомобила принята водителем. Ожидается оплата заказа. Детали: " . Url::to(['/orders/view', 'id' => $model->id], true), $model->user->phone);

        Yii::$app->mailer->compose()
                        ->setTo($model->user->email)
                        ->setFrom([Settings::get('admin_email') => Yii::$app->params['siteName']])
                        ->setSubject(Yii::t('app', 'Your order has been confirmed'))
                        ->setTextBody(Yii::t('app', 'Your order has been confirmed and you may pay to it. Link - {link}', ['link' => Url::to(['/orders/view', 'id' => $model->id], true)]))
                        ->send();

        return $this->redirect(['view', 'id' => $id]);
    }

    public function actionDelete($id)
    {
        $model = $this->findModel($id);
        if((Yii::$app->user->identity->id != $model->user_id) && (!Yii::$app->user->can('manager'))){
            Yii::$app->session->setFlash('danger', Yii::t('app', 'You are not allowed to acces for this section'));
            return $this->redirect(['index']);
        }
        
        if($model->confirmed == '1'){
            Yii::$app->session->setFlash('danger', Yii::t('app', 'Order is confirmed. You can`t delete it'));
        }
        else {
            $model->delete();
        }

        return $this->redirect(['index']);
    }

    protected function findModel($id)
    {   
        if (($model = Orders::findOne($id)) !== null) {
            if(
                !Yii::$app->user->can('manager')
                && !Yii::$app->user->identity->type == 'driver'
                && $model->user_id != Yii::$app->user->identity->id
                ){
                throw new NotFoundHttpException('The requested page does not exist.');
            }
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
