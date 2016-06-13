<?php

namespace app\controllers\user;

use Yii;
use dektrium\user\Finder;


class Registrationcontroller extends \dektrium\user\controllers\RegistrationController
{
	public function init(){
		$this->layout = '@app/views/layouts/main-login';
		return parent::init();
	}
}