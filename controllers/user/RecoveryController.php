<?php 

namespace app\controllers\user;

class RecoveryController extends \dektrium\user\controllers\RecoveryController
{
	public function init(){
		parent::init();
		$this->layout = '@app/views/layouts/frontend/frontend';
	}
}