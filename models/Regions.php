<?php

namespace app\models;

use Yii;


class Regions extends \yii\db\ActiveRecord
{
    
    public function behaviors(){
        return [
            'class' => 'app\behaviors\AccessLogBehavior',
        ];
    }

    public static function tableName()
    {
        return 'regions';
    }

    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name'], 'string', 'max' => 255],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Name'),
        ];
    }
}
