<?php

namespace app\controllers\user;

use Yii;

class SettingsController extends \dektrium\user\controllers\SettingsController
{

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