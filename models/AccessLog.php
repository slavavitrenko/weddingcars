<?php

namespace app\models;

use Yii;
use app\models\user\User;

/**
 * This is the model class for table "access_log".
 *
 * @property integer $id
 * @property string $action
 * @property integer $user_id
 * @property integer $item_id
 * @property string $changed
 * @property string $attributes
 * @property string $model_class
 * @property integer $created_at
 */
class AccessLog extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'access_log';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['action', 'user_id', 'item_id', 'changed', 'attributes', 'model_class', 'created_at'], 'required'],
            [['user_id', 'item_id', 'created_at'], 'integer'],
            [['changed', 'attributes'], 'string'],
            [['action'], 'string', 'max' => 25],
            [['model_class'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'action' => Yii::t('app', 'Action'),
            'user_id' => Yii::t('app', 'User ID'),
            'item_id' => Yii::t('app', 'Item ID'),
            'changed' => Yii::t('app', 'Changed'),
            'attributes' => Yii::t('app', 'Attributes'),
            'model_class' => Yii::t('app', 'Model Class'),
            'created_at' => Yii::t('app', 'Created At'),
        ];
    }

    public function getUser(){
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }
}
