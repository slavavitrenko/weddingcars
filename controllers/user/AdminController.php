<?php

namespace app\controllers\user;

use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use app\models\user\RegistrationForm;


class AdminController extends \dektrium\user\controllers\AdminController
{

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

	public function render($view, $params = [])
    {
        if(Yii::$app->request->isAjax){
            return $this->getView()->renderAjax($view, $params, $this) . '<span class="hidden main-title">' . $this->view->title . '</span>';
        }
        else{
            $content = $this->getView()->render($view, $params, $this);
            return $this->renderContent($content);
        }
    }
}