<?php

namespace app\controllers\user;

use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use app\models\user\RegistrationForm;
use yii\web\NotFoundHttpException;
use app\models\Role;


class AdminController extends \dektrium\user\controllers\AdminController
{

    use \app\traits\AjaxTrait;

    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete'  => ['post'],
                    'confirm' => ['post'],
                    'block'   => ['post'],
                ],
            ],
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                        'matchCallback' => function () {
                            return (Yii::$app->user->can('admin') or Yii::$app->user->can('manager'));
                        },
                    ],
                ],
            ],
        ];
    }


    public function actionCreate()
    {

        $model = Yii::createObject(RegistrationForm::className());

        $this->performAjaxValidation($model);

        if ($model->load(Yii::$app->request->post()) && $model->register()) {

            return $this->redirect(['/user/admin/index']);
        }

        return $this->render('create', [
            'user'  => $model,
            'module' => $this->module,
        ]);
    }

    public function actionChangeRole($id, $role){
        if($id == Yii::$app->user->identity->id){
            return 0;
        }
        Yii::$app->response->format = 'json';
        if(!in_array($role, ['admin', 'manager', 'client', 'driver'])){
            throw new NotFoundHttpException(Yii::t('app', 'Selected role doesn` exist'));
        }
        if($assignment = Role::find()->where(['user_id' => $id])->one()){
            $assignment->item_name = $role;
            return $assignment->save() ? 1 : $role->errors;
        } else{
            $assignment = new Role;
            $assignment->user_id = $id;
            $assignment->item_name = $role;
            return $assignment->save();
        }

    }

    public function actionBlock($id)
    {
        if ($id == Yii::$app->user->getId()) {
            Yii::$app->getSession()->setFlash('danger', Yii::t('user', 'You can not block your own account'));
        } else {
            $user  = $this->findModel($id);
            if ($user->getIsBlocked()) {
                $user->unblock();
                Yii::$app->getSession()->setFlash('success', Yii::t('user', 'User has been unblocked'));
            } else {
                $user->block();
                Yii::$app->getSession()->setFlash('success', Yii::t('user', 'User has been blocked'));
            }
        }

        return $this->redirect(['/user/admin']);
    }

    public function actionDelete($id)
    {
        if ($id == Yii::$app->user->getId()) {
            Yii::$app->getSession()->setFlash('danger', Yii::t('user', 'You can not remove your own account'));
        } else {
            $model = $this->findModel($id);
            $event = $this->getUserEvent($model);
            $this->trigger(self::EVENT_BEFORE_DELETE, $event);
            $model->delete();
            Role::deleteAll(['user_id' => $id]);
            $this->trigger(self::EVENT_AFTER_DELETE, $event);
            Yii::$app->getSession()->setFlash('success', Yii::t('user', 'User has been deleted'));
        }

        return $this->redirect(['index']);
    }

    public function actionPay($id){
        $model = $this->findModel($id);
        $model->updateAttributes(['score' => '0']);
        Yii::$app->session->setFlash('success', Yii::t('app', 'Remuneration marked as paid'));
        return $this->redirect(['index']);
    }
}