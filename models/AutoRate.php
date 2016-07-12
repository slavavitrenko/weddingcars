<?php

namespace app\models;

use Yii;
use app\models\Rate;

/**
 * This is the model class for table "auto_rate".
 *
 * @property integer $id
 * @property integer $auto_id
 * @property integer $rate_id
 * @property string $price
 */
class AutoRate extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'auto_rate';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['auto_id', 'rate_id', 'price'], 'required'],
            [['auto_id', 'rate_id'], 'integer'],
            [['price'], 'number'],
            [['rate_id'], 'validateUnique']
        ];
    }

    public function validateUnique($attr, $params){
        if(($rate = AutoRate::find()->where(['auto_id' => $this->auto_id, 'rate_id' => $this->rate_id])->one()) && $rate->id != $this->id){
            $this->addError($attr, Yii::t('app', 'Rate already exist'));
        }
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'auto_id' => Yii::t('app', 'Auto ID'),
            'rate_id' => Yii::t('app', 'Name'),
            'price' => Yii::t('app', 'Price'),
            'name' => Yii::t('app', 'Rate')
        ];
    }

    public function getRate(){
        return $this->hasOne(Rate::className(), ['id' => 'rate_id']);
    }

    public function getName(){
        return $this->rate->name;
    }
}
