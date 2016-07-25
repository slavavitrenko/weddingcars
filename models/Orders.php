<?php

namespace app\models;

use Yii;


class Orders extends \yii\db\ActiveRecord
{

    public $terms;

    public static function tableName()
    {
        return 'orders';
    }

    public function rules()
    {
        return [
            [['car_id', 'city', 'datetime', 'km', 'hours', 'route'], 'required'],
            [['user_id', 'car_id', 'hours', 'city_out', 'km', 'paid', 'confirmed', 'created_at'], 'integer'],
            [['route', 'description'], 'string'],
            [['city'], 'string', 'max' => 255],
            [['created_at'], 'default', 'value' => date('Y-m-d H:i')],
            [['city_out', 'km', 'confirmed', 'paid'], 'default', 'value' => '0'],
            [['datetime'], 'date', 'format' => 'php:Y-m-d H:i'],
            [['terms'], 'match', 'pattern' => '/^1$/', 'message' => Yii::t('app', 'You must agree the terms')],
            [['terms'], 'default', 'value' => '0'],
            [['terms'], 'required', 'message' => Yii::t('app', 'You must agree the terms')]
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'user_id' => Yii::t('app', 'User'),
            'car_id' => Yii::t('app', 'Auto'),
            'city' => Yii::t('app', 'City'),
            'datetime' => Yii::t('app', 'Datetime'),
            'hours' => Yii::t('app', 'Hours'),
            'city_out' => Yii::t('app', 'City Out'),
            'km' => Yii::t('app', 'Km'),
            'route' => Yii::t('app', 'Route'),
            'description' => Yii::t('app', 'Description'),
            'paid' => Yii::t('app', 'Paid'),
            'confirmed' => Yii::t('app', 'Confirmed by Driver'),
            'created_at' => Yii::t('app', 'Created At'),
            'terms' => Yii::t('app', 'Agree Terms')
        ];
    }

    public function getCar(){
        return $this->hasOne(Auto::className(), ['id' => 'car_id']);
    }

    public function getUser(){
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }

    public function label($label){
        return $this->attributeLabels()[$label];
    }

    public function beforeSave($insert){
        if(empty($this->user_id)){
            $this->user_id = Yii::$app->user->identity->id;
        }
        return parent::beforeSave($insert);
    }
}
