<?php

namespace app\models;

use Yii;


class Categories extends \yii\db\ActiveRecord
{

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
}
