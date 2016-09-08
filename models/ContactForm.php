<?php

namespace app\models;

use Yii;
use yii\base\Model;

/**
 * ContactForm is the model behind the contact form.
 */
class ContactForm extends Model
{
    public $name;
    public $email;
    public $body;
    // public $verifyCode;


    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['name', 'email', 'body'], 'required'],
            // email has to be a valid email address
            ['email', 'email'],
            // verifyCode needs to be entered correctly
            // ['verifyCode', 'captcha'],
        ];
    }

    public function attributeLabels()
    {
        return [
            // 'verifyCode' => 'Verification Code',
        ];
    }

    public function contact($email)
    {
        if ($this->validate()) {
            Yii::$app->mailer->compose()
                ->setTo($email)
                ->setFrom([Yii::$app->params['adminEmail'] => $this->name . '(' . $this->email . ')'])
                ->setSubject('Сообщение с формы сайта WeddingCars.pl.ua')
                ->setTextBody($this->body)
                ->send();

            return true;
        }
        return false;
    }
}
