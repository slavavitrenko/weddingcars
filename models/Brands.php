<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "brands".
 *
 * @property integer $id
 * @property string $name
 * @property string $picture
 */
class Brands extends \yii\db\ActiveRecord
{
    
    public function behaviors(){
        return [
            'class' => 'app\behaviors\AccessLogBehavior',
        ];
    }
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'brands';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name', 'picture'], 'string', 'max' => 255],
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
            'picture' => Yii::t('app', 'Picture'),
        ];
    }

    public static function find(){
        return parent::find()->orderBy(['brands.name' => SORT_ASC]);
    }
    
}
