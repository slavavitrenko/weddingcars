<?php

namespace app\base;

use Yii;

class Controller extends \yii\web\Controller{

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