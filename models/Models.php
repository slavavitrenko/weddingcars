<?php

namespace app\models;

use Yii;
use app\models\Brands;

class Models extends \yii\db\ActiveRecord
{

    public static function tableName()
    {
        return 'models';
    }

    public function rules()
    {
        return [
            [['brand_id', 'name'], 'required'],
            [['brand_id'], 'integer'],
            [['name'], 'string', 'max' => 255],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'brand_id' => Yii::t('app', 'Brand ID'),
            'name' => Yii::t('app', 'Name'),
        ];
    }

    public function getBrand(){
        return $this->hasOne(Brands::className(), ['id' => 'brand_id']);
    }

    public function getBrandname(){
        return $this->brand->name;
    }
}
