<?php

namespace app\models;

use Yii;
use app\models\user\User;
use app\models\Images;
use app\models\Brands;
use app\models\Models;

class Auto extends \yii\db\ActiveRecord
{

    public $images;

    public static function tableName()
    {
        return 'auto';
    }

    public function rules()
    {
        return [
            ['bus_type', 'required', 'when' => function($model){return $model->type == 'bus';},
            'whenClient' => 'function(attribute, value){ return $("input[name=\'Auto[type]\']:checked").val() == "bus";}'],
            [['type', 'brand', 'model', 'year', 'color', 'retro'], 'required'],
            [['user_id', 'retro'], 'integer'],
            [['name', 'type', 'brand', 'model', 'color'], 'string', 'max' => 255],
            [['user_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['user_id' => 'id']],
            [['type'], 'match', 'pattern' => '/^(car|limousine|bus)$/', 'message' => Yii::t('app', 'Please select car, limousine or bus')],
            [['year'], 'integer', 'min' => 1900, 'max' => date('Y')],
            [['bus_type'], 'match', 'pattern' => '/^(usual|micro)$/', 'message' => Yii::t('app', 'Please select type of bus')],
            [['body'], 'required', 'when' => function($model){return $model->type == 'car';},
            'whenClient' => 'function(attribute, value){return $("input[name=\'Auto[type]\']:checked").val() == "car";}'],
            [['body'], 'match', 'pattern' => '/^(car|suv)$/'],
            [['images'], 'file', 'maxFiles' => 10, 'skipOnEmpty' => true, 'extensions' => 'gif, jpg'],

        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'user_id' => Yii::t('app', 'User ID'),
            'name' => Yii::t('app', 'Name'),
            'type' => Yii::t('app', 'Type'),
            'brand' => Yii::t('app', 'Brand'),
            'model' => Yii::t('app', 'Model'),
            'year' => Yii::t('app', 'Year'),
            'color' => Yii::t('app', 'Color'),
            'body' => Yii::t('app', 'Body'),
            'retro' => Yii::t('app', 'Retro'),
            'bus_type' => Yii::t('app', 'Bus Type'),
            'images' => Yii::t('app', 'Images'),
            'fio' => Yii::t('app', 'Fio')
        ];
    }

    public function getAutoBrand(){
        return $this->hasOne(Brands::className(), ['id' => 'brand']);
    }

    public function getAutoModel(){
        return $this->hasOne(Models::className(), ['id' => 'model']);
    }

    public function getUser()
    {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }

    public function getFio(){
        return $this->user ? $this->user->fio : Yii::t('app', 'Not set');
    }

    public function getPictures(){
        return $this->hasMany(Images::className(), ['car_id' => 'id']);
    }

    public function beforeSave($insert){
        $this->user_id = Yii::$app->user->identity->id;
        return parent::beforeSave($insert);
    }

    public function beforeDelete(){
        $images = Images::find()->where(['car_id' => $this->id])->all();
        foreach($images as $image){
            $image->delete();
        }
        return true;
    }

}
