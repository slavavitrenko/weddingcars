<?php

namespace app\models;

use Yii;


class Notifications extends \yii\db\ActiveRecord
{

    public static function tableName()
    {
        return 'notifications';
    }

    public static function notify(array $options = []){
        $model = new Notifications;
        return $model->load($options, '') && $model->save(false);
    }
}