<?php

namespace app\models\user;

use Yii;

class User extends \dektrium\user\models\User
{

	public function scenarios()
    {
        $scenarios = parent::scenarios();
        // add field to scenarios
        $scenarios['create'][]   = 'fio';
        $scenarios['update'][]   = 'fio';
        $scenarios['register'][] = 'fio';
        $scenarios['settings'][] = 'fio';
        $scenarios['create'][]   = 'phone';
        $scenarios['update'][]   = 'phone';
        $scenarios['register'][] = 'phone';
        $scenarios['settings'][] = 'phone';
        $scenarios['create'][]   = 'type';
        $scenarios['update'][]   = 'type';
        $scenarios['register'][] = 'type';
        $scenarios['settings'][] = 'type';
        return $scenarios;
    }
	public function rules(){
		$rules = parent::rules();
		$rules[] = [['fio', 'phone', 'type'], 'required'];
		$rules[] = [['fio'], 'match', 'pattern' => '/^[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+\s[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+\s[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+$/u', 'message' => Yii::t('app', 'You must enter data such as your passport')];
		$rules[] = [['phone'], 'match', 'pattern' => '/^\+380([0-9]{9})+$/', 'message' => Yii::t('app', 'Phone not correct')];
		$rules[] = [['type'], 'match', 'pattern' => '/^(driver|client)$/', 'message' => Yii::t('app', 'You must select driver or client')];
		return $rules;
	}

	public function attributeLabels(){
		$labels = parent::attributeLabels();
		$labels['fio'] = Yii::t('app', 'FIO');
		$labels['phone'] = Yii::t('app', 'Phone');
		$labels['type'] = Yii::t('app', 'Account type');
		return $labels;
	}
}