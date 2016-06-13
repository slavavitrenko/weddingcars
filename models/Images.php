<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "images".
 *
 * @property integer $id
 * @property integer $car_id
 * @property string $path
 */
class Images extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'images';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['car_id', 'path'], 'required'],
            [['car_id'], 'integer'],
            [['path'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'car_id' => Yii::t('app', 'Car ID'),
            'path' => Yii::t('app', 'Path'),
        ];
    }

    public function beforeDelete(){
        @unlink('uploads/cars/' . $this->path);
        return true;
    }

    public function getSrc(){
        return '/uploads/cars/' . $this->path;
    }

}
