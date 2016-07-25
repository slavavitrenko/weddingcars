<?php

namespace app\models;

use Yii;


class Settings extends \yii\db\ActiveRecord
{

    public static function tableName()
    {
        return 'settings';
    }

    public function rules()
    {
        return [
            [['admin_email'], 'required'],
            [['admin_email'], 'string', 'max' => 255],
        ];
    }

    public function attributeLabels()
    {
        return [
            'admin_email' => Yii::t('app', 'Admin Email'),
        ];
    }

    public static function get($option=null){
        $entry = ($entry = self::find()->select([$option])->one()) ? $entry[$option] : null;
        return $entry;
    }
}
