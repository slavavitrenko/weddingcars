<?php

namespace app\models\user;

use Yii;

class RegistrationForm extends \dektrium\user\models\RegistrationForm
{

	public $type;
	public $phone;
	public $fio;
	public $id;

	public function rules(){
		$rules = parent::rules();
		$rules[] = [['fio', 'phone'], 'required'];
        // $rules[] = [['type'], 'required', 'message' => Yii::t('app', 'You must choose account type')];
        $rules[] = [['type'], 'default', 'value' => 'client'];
		$rules[] = [['fio'], 'match', 'pattern' => '/^[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+\s[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+\s[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+$/u', 'message' => Yii::t('app', 'You must enter data such as your passport')];
        $rules[] = [['phone'], 'match', 'pattern' => '/^\+380([0-9]{9})+$/', 'message' => Yii::t('app', 'Phone not correct')];
        $rules[] = [['type'], 'match', 'pattern' => '/^(driver|client)$/', 'message' => Yii::t('app', 'You must select driver or client')];
		unset($rules['usernameRequired']);
		return $rules;
	}

	public function attributeLabels(){
		$labels = parent::attributeLabels();
        $labels['fio'] = Yii::t('app', 'FIO');
		$labels['phone'] = Yii::t('app', 'Phone');
		$labels['type'] = Yii::t('app', 'Account type');
		return $labels;
	}

	public function register()
    {
        if (!$this->validate()) {
            return false;
        }

        /** @var User $user */
        $user = Yii::createObject(User::className());
        $user->setScenario('register');
        $this->loadAttributes($user);

        if (!$user->register()) {
            return false;
        }

        $this->id = $user->id;

        Yii::$app->session->setFlash(
            'info',
            Yii::t('user', 'Your account has been created and a message with further instructions has been sent to your email')
        );

        return true;
    }

    public function label($label){
        return $this->attributeLabels()[$label];
    }
}