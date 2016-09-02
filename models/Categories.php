<?php

namespace app\models;

use Yii;
use app\models\Auto;


class Categories extends \yii\db\ActiveRecord
{
    
    public function behaviors(){
        return [
            'class' => 'app\behaviors\AccessLogBehavior',
        ];
    }

    public static function tableName()
    {
        return 'categories';
    }

    public function rules()
    {
        return [
            [['name', 'picture'], 'required'],
            [['name'], 'string', 'max' => 255],
            [['picture'], 'file'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'name' => Yii::t('app', 'Name'),
            'picture' => Yii::t('app', 'Picture'),
        ];
    }

    public function beforeDelete(){
        @unlink($this->picture);
        return parent::beforeDelete();
    }

    public function getSrc(){
        return '/' . $this->picture;
    }

    public function getCars(){
        return $this->hasMany(Auto::className(), ['category_id' => 'id'])->where(['checked' => '1']);
    }
}
