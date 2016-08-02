<?php

namespace app\models\user;

use Yii;
use dektrium\user\Mailer;
use dektrium\user\Module;

class SettingsForm extends \dektrium\user\models\SettingsForm
{
	public $fio;
    public $phone;
    public $type;

    public function __construct(Mailer $mailer, $config = [])
    {
        $this->mailer = $mailer;
        $this->setAttributes([
            'fio' => $this->user->fio,
            'phone' => $this->user->phone,
            'type' => $this->user->type,
        ], false);
        parent::__construct($mailer, $config);
    }

	public function rules(){
		$rules = parent::rules();
		$rules[] = [['fio', 'phone'], 'required'];
        $rules[] = [['type'], 'required', 'when' => function($model){ return !Yii::$app->user->can('admin'); }];
		$rules[] = [['fio'], 'match', 'pattern' => '/^[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+\s[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+\s[\`\'\-а-яёА-ЯЁЩЁЇІЄщёіїє]+$/u', 'message' => Yii::t('app', 'You must enter data such as your passport')];
        $rules[] = [['phone'], 'match', 'pattern' => '/^\+380([0-9]{9})+$/', 'message' => Yii::t('app', 'Phone not correct')];
        $rules[] = [['type'], 'match', 'pattern' => '/^(driver|client|admin)$/', 'message' => Yii::t('app', 'You must select driver or client')];
		return $rules;
	}

	public function attributeLabels(){
		$labels = parent::attributeLabels();
        $labels['fio'] = Yii::t('app', 'FIO');
		$labels['phone'] = Yii::t('app', 'Phone');
        $labels['type'] = Yii::t('app', 'Account type');
		return $labels;
	}

    public function save()
    {
        if ($this->validate()) {
            $this->user->scenario = 'update';
            $this->user->username = $this->username;
            $this->user->type = $this->type;
            $this->user->fio = $this->fio;
            $this->user->phone = $this->phone;
            $this->user->password = $this->new_password;
            if ($this->email == $this->user->email && $this->user->unconfirmed_email != null) {
                $this->user->unconfirmed_email = null;
            } elseif ($this->email != $this->user->email) {
                switch ($this->module->emailChangeStrategy) {
                    case Module::STRATEGY_INSECURE:
                        $this->insecureEmailChange();
                        break;
                    case Module::STRATEGY_DEFAULT:
                        $this->defaultEmailChange();
                        break;
                    case Module::STRATEGY_SECURE:
                        $this->secureEmailChange();
                        break;
                    default:
                        throw new \OutOfBoundsException('Invalid email changing strategy');
                }
            }

            return $this->user->save();
        }

        return false;
    }

}