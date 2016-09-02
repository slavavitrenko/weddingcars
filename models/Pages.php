<?php

namespace app\models;

use Yii;
use app\models\AccessLog;


/**
 * This is the model class for table "pages".
 *
 * @property integer $id
 * @property string $title
 * @property string $text
 * @property integer $active
 */
class Pages extends \yii\db\ActiveRecord
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
        return 'pages';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'text', 'active'], 'required'],
            [['title', 'text'], 'string'],
            [['active'], 'integer'],
            [['active'], 'match', 'pattern' => '/^([0-1])$/']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'title' => Yii::t('app', 'Title'),
            'text' => Yii::t('app', 'Text'),
            'active' => Yii::t('app', 'Page is Active'),
        ];
    }

    public function getChanges(){
        return AccessLog::find()->where(['model_class' => $this->className()]);
    }
}
