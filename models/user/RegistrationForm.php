<?php

namespace app\models\user;

use Yii;

class RegistrationForm extends \dektrium\user\models\RegistrationForm
{

	public $phone;
	public $fio;


	public function rules(){
		$rules = parent::rules();
		$rules[] = [['fio'], 'required'];
		$rules[] = [['fio'], 'match', 'pattern' => '/^[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+\s[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+\s[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+$/u', 'message' => Yii::t('app', 'You must enter data such as your passport')];
        $rules[] = [['phone'], 'required'];
        $rules[] = [['phone'], 'match', 'pattern' => '/^\+380([0-9]{9})+$/', 'message' => Yii::t('app', 'Phone not correct')];
		return $rules;
	}

	public function attributeLabels(){
		$labels = parent::attributeLabels();
        $labels['fio'] = Yii::t('app', 'FIO');
		$labels['phone'] = Yii::t('app', 'Phone');
		return $labels;
	}
}