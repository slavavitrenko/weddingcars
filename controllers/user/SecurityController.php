<?php

namespace app\controllers\user;

use Yii;
use yii\filters\AccessControl;

class SecurityController extends \dektrium\user\controllers\SecurityController
{

	public function init(){
		$this->layout = '@app/views/layouts/frontend/frontend';
		return parent::init();
	}

	public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    ['allow' => true, 'actions' => ['login', 'auth', 'blocked'], 'roles' => ['?']],
                    ['allow' => true, 'actions' => ['login', 'auth', 'logout'], 'roles' => ['@']],
                ],
            ],
        ];
    }
}