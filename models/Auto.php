<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "auto".
 *
 * @property integer $id
 * @property string $name
 * @property string $type
 * @property string $brand
 * @property string $model
 * @property string $year
 * @property string $color
 * @property string $body
 * @property integer $retro
 * @property integer $bus
 * @property integer $bus_type
 */
class Auto extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'auto';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'type', 'brand', 'model', 'year', 'color', 'body', 'retro', 'bus', 'bus_type'], 'required'],
            [['year'], 'safe'],
            [['retro', 'bus', 'bus_type'], 'integer'],
            [['name', 'type', 'brand', 'model', 'color', 'body'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Name'),
            'type' => Yii::t('app', 'Type'),
            'brand' => Yii::t('app', 'Brand'),
            'model' => Yii::t('app', 'Model'),
            'year' => Yii::t('app', 'Year'),
            'color' => Yii::t('app', 'Color'),
            'body' => Yii::t('app', 'Body'),
            'retro' => Yii::t('app', 'Retro'),
            'bus' => Yii::t('app', 'Bus'),
            'bus_type' => Yii::t('app', 'Bus Type'),
        ];
    }
}
