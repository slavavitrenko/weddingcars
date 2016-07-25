<?php

namespace yii\web;

use Yii;
use yii\helpers\Url;
use yii\base\Model;
use yii\web\Response;
use yii\widgets\ActiveForm;


class Controller extends \yii\base\Controller
{

	public function render($view, $params = [])
    {
        if(Yii::$app->request->isAjax){
            return \dmstr\widgets\Alert::widget()
            .
            $this->getView()->renderAjax($view, $params, $this) . '<span class="hidden main-title">' . $this->view->title . '</span>'
            .
            '<div class="pull-right">'
            .
            \yii\widgets\Breadcrumbs::widget([
                'links' => isset($this->view->params['breadcrumbs']) ? $this->view->params['breadcrumbs'] : [],
            ]) . '</div>'
            ;
        }
        else {
            $content = $this->getView()->render($view, $params, $this);
            return $this->renderContent($content);
        }
    }

	protected function performAjaxValidation($model)
    {
        if (Yii::$app->request->post('ajax') && $model->load(Yii::$app->request->post())) {
            Yii::$app->response->format = Response::FORMAT_JSON;
            echo json_encode(ActiveForm::validate($model));
            Yii::$app->end();
        }
    }

    public function redirect($url, $statusCode = 200, $ajax=true)
    {
        Yii::$app->response->format = 'json';
        if(Yii::$app->request->isAjax && $ajax === true){
            Yii::$app->getResponse()->setStatusCode($statusCode);
            return Url::to($url);
        }
        else {
            return Yii::$app->getResponse()->redirect(Url::to($url), $statusCode);
        }
    }

    public function refresh($anchor = '')
    {
        return $this->redirect(Yii::$app->getRequest()->getUrl() . $anchor);
    }

}
