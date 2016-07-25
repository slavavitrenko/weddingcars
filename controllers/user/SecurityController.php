<?php

namespace app\controllers\user;

use Yii;

class SecurityController extends \dektrium\user\controllers\SecurityController
{

	public function init(){
		$this->layout = '@app/views/layouts/frontend/frontend';
		return parent::init();
	}
}