<?php

namespace app\traits;

use Yii;
use yii\helpers\Url;
use yii\base\Model;
use yii\web\Response;
use yii\widgets\ActiveForm;


trait AjaxTrait
{

	public function render($view, $params = [])
    {
        if(Yii::$app->request->isAjax && !Yii::$app->request->get('_pjax')){
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

	protected function performAjaxValidation($model, $stop=true, $errors=[])
    {
        if (Yii::$app->request->post('ajax') && $model->load(Yii::$app->request->post())) {
            Yii::$app->response->format = Response::FORMAT_JSON;
            if($stop){
                echo json_encode(array_merge(ActiveForm::validate($model), $errors));
            }
            else{
                return ActiveForm::validate($model);
            }
            if($stop){Yii::$app->end();}
        }
    }

    public function redirect($url, $statusCode = 200, $ajax=true)
    {
        if(Yii::$app->request->isAjax && $ajax === true){
            Yii::$app->response->format = 'json';
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
