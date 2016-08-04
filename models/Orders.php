<?php

namespace app\models;

use Yii;
use app\models\user\User;
use app\models\Auto;
use app\models\Brands;
use app\models\Models;


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
            [['terms'], 'required', 'message' => Yii::t('app', 'You must agree the terms')],
            [['user_id', 'car_id', 'hours', 'confirmed', 'created_at'], 'integer'],
            [['route', 'description'], 'string'],
            [['paid'], 'string', 'max' => 255],
            [['paid'], 'default', 'value' => 'not'],
            [['city'], 'string', 'max' => 255],
            [['created_at'], 'default', 'value' => time()],
            [['city_out', 'km', 'confirmed'], 'default', 'value' => '0'],
            [['datetime'], 'date', 'format' => 'php:Y-m-d H:i'],
            [['hours', 'km'], 'integer', 'max' => 999, 'min' => 1],
            [['terms'], 'match', 'pattern' => '/^1$/', 'message' => Yii::t('app', 'You must agree the terms')],
            [['terms'], 'default', 'value' => '0'],
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

    public function getAutoModel(){
        return $this->hasOne(Models::className(), ['id' => 'model'])->via('car');
    }

    public function getAutoBrand(){
        return $this->hasOne(Brands::className(), ['id' => 'brand'])->via('car');
    }

    public function label($label){
        return $this->attributeLabels()[$label];
    }

    public function beforeSave($insert){
        if(empty($this->order_id)){
            $this->order_id = Yii::$app->security->generateRandomString(100);
        }
        if(empty($this->user_id)){
            $this->user_id = Yii::$app->user->identity->id;
        }
        return parent::beforeSave($insert);
    }

    public function afterSave($insert, $changedattributes){
        // if($this->isNewRecord){
            $car = Auto::findOne($this->car_id);
            $car->popularity = $car->popularity + 1;
        // }
        return parent::afterSave($insert, $changedattributes);
    }

    public function getCost(){
        return $this->car->hour_cost;
    }

    public function  getId(){
        return $this->order_id;
    }

    public function getStatus(){
        return '<span class="label label-' . (in_array($this->paid, ['success', 'sandbox']) ? 'primary' : 'danger') . '">' . Yii::t('app', $this->paid) . '</span>';
    }

    public function generateOrderId(){
        $this->updateAttributes([
                'order_id' => Yii::$app->security->generateRandomString(100)
            ]);
    }
    
}
