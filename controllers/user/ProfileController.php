<?php

namespace app\controllers\user;

use Yii;


class ProfileController extends \dektrium\user\controllers\ProfileController
{

    public function actionIndex()
    {
        return $this->actionShow(Yii::$app->user->getId());
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