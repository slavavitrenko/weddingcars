<?php

namespace app\models;

use Yii;
use app\models\Auto;


class Images extends \yii\db\ActiveRecord
{

    public static function tableName()
    {
        return 'images';
    }

    public function rules()
    {
        return [
            [['car_id', 'path'], 'required'],
            [['car_id'], 'integer'],
            [['path'], 'string', 'max' => 255],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'car_id' => Yii::t('app', 'Car ID'),
            'image' => Yii::t('app', 'Image'),
            'car_id' => Yii::t('app', 'Auto'),
        ];
    }

    public function beforeDelete(){
        @unlink(__DIR__ . '/../web/uploads/cars/' . $this->path);
        return true;
    }

    public function getSrc(){
        return '/uploads/cars/' . $this->path;
    }

    public function getCar(){
        return $this->hasOne(Auto::className(), ['id' => 'car_id']);
    }

}
