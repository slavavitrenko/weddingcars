<?php

namespace app\models;

use Yii;
use app\models\user\User;


class Comments extends \yii\db\ActiveRecord
{

    public $code;

    public static function tableName()
    {
        return 'comments';
    }

    public function rules()
    {
        return [
            [['auto_id', 'rating', 'text'], 'required'],
            [['user_id', 'auto_id', 'created_at'], 'integer'],
            [['rating'], 'number'],
            [['text'], 'string'],
            [['created_at'], 'default', 'value' => time()],
            [['user_id'], 'default', 'value' => Yii::$app->user->identity->id],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'user_id' => Yii::t('app', 'User ID'),
            'auto_id' => Yii::t('app', 'Auto ID'),
            'rating' => Yii::t('app', 'Rating'),
            'text' => Yii::t('app', 'Comment Text'),
            'created_at' => Yii::t('app', 'Created At'),
        ];
    }

    public function getUser(){
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }
}
