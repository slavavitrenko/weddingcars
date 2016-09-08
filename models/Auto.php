<?php

namespace app\models;

use Yii;
use app\models\user\User;
use app\models\Images;
use app\models\Orders;
use app\models\Brands;
use app\models\Models;
use app\models\Comments;
use app\models\Categories;


class Auto extends \yii\db\ActiveRecord
{

    public $images;
    
    
    public function behaviors(){
        return [
            'class' => 'app\behaviors\AccessLogBehavior',
        ];
    }

    public static function tableName()
    {
        return 'auto';
    }

    public function rules()
    {
        return [
            // ['bus_type', 'required', 'when' => function($model){return $model->type == 'bus';},
            // 'whenClient' => 'function(attribute, value){ return $("input[name=\'Auto[type]\']:checked").val() == "bus";}'],
            [['car_number', 'brand', 'model', 'year', 'color'/*, 'retro'*/, 'hour_cost', 'few_hours_cost', 'outside_cost', 'pass_count', 'category_id', 'decor'], 'required'],
            [['car_number'], 'unique', 'message' => Yii::t('app', 'Selected auto already exist')],
            [['car_number'], 'string', 'max' => 8, 'min' => 5],
            [['user_id', 'retro', 'brand', 'model', 'category_id'], 'integer'],
            [['name', 'type', 'color', 'description'], 'string', 'max' => 255],
            [['user_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['user_id' => 'id']],
            [['type'], 'match', 'pattern' => '/^(car|limousine|bus)$/', 'message' => Yii::t('app', 'Please select car, limousine or bus')],
            [['year'], 'integer', 'min' => 1900, 'max' => date('Y')],
            [['bus_type'], 'match', 'pattern' => '/^(usual|micro)$/', 'message' => Yii::t('app', 'Please select type of bus')],
            // [['body'], 'required', 'when' => function($model){return $model->type == 'car';},
            // 'whenClient' => 'function(attribute, value){return $("input[name=\'Auto[type]\']:checked").val() == "car";}'],
            [['body'], 'match', 'pattern' => '/^(car|suv)$/'],
            // [['images'], 'file', 'maxFiles' => 10, 'skipOnEmpty' => false, 'extensions' => 'gif, jpg, png'],
            ['images', 'safe'],

            [['decor', 'client_decor', 'checked'], 'match', 'pattern' => '/^(0|1)$/', 'message' => Yii::t('app', 'You must choose "yes" or "no"')],
            [['category_id', 'popularity'], 'default', 'value' => '0'],
            ['popularity', 'safe'],
            [['pass_count'], 'integer', 'min' => 1, 'max' => 200],
            [['hour_cost', 'few_hours_cost', 'outside_cost'], 'number', 'min' => 0.01, 'max' => 100000, 'tooSmall' => Yii::t('app', 'Auto must don`t be free)')]
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'user_id' => Yii::t('app', 'User ID'),
            'name' => Yii::t('app', 'Name'),
            'type' => Yii::t('app', 'Type'),
            'brand' => Yii::t('app', 'Brand'),
            'model' => Yii::t('app', 'Model'),
            'year' => Yii::t('app', 'Year'),
            'color' => Yii::t('app', 'Color'),
            'body' => Yii::t('app', 'Body'),
            'retro' => Yii::t('app', 'Retro'),
            'bus_type' => Yii::t('app', 'Bus Type'),
            'images' => Yii::t('app', 'Images'),
            'fio' => Yii::t('app', 'Fio'),
            'decor' => Yii::t('app', 'Decor'),
            'client_decor' => Yii::t('app', 'Client Decor'),
            'pass_count' => Yii::t('app', 'Pass Count'),
            'category_id' => Yii::t('app', 'Category'),
            'description' => Yii::t('app', 'Description'),
            'hour_cost' => Yii::t('app', 'Cost Per Hour'),
            'few_hours_cost' => Yii::t('app', 'Cost Per Few Hours'),
            'outside_cost' => Yii::t('app', 'Outside Cost per km'),
            'car_number' => Yii::t('app', 'Car Number'),
        ];
    }

    public function getCategory(){
        return $this->hasOne(Categories::className(), ['id' => 'category_id']);
    }

    public function getAutoBrand(){
        return $this->hasOne(Brands::className(), ['id' => 'brand']);
    }

    public function getAutoModel(){
        return $this->hasOne(Models::className(), ['id' => 'model']);
    }

    public function getUser()
    {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }

    public function getFio(){
        return $this->user ? $this->user->fio : Yii::t('app', 'Not set');
    }

    public function getPictures(){
        return $this->hasMany(Images::className(), ['car_id' => 'id']);
    }

    public function getPicture(){
        return$this->hasOne(Images::className(), ['car_id' => 'id']);
    }

    public function getName(){
        return $this->autoBrand->name . ' ' . $this->autoModel->name;
    }

    public function beforeSave($insert){
        if($this->isNewRecord){
            $this->user_id = Yii::$app->user->identity->id;
        }
        return parent::beforeSave($insert);
    }

    public function beforeValidate(){
        if($this->car_number){
            $this->car_number = str_replace(' ', '', $this->car_number);
        }
        return parent::beforeValidate();
    }

    public function beforeDelete(){
        $images = Images::find()->where(['car_id' => $this->id])->all();
        foreach($images as $image){
            $image->delete();
        }
        $orders = Orders::find()->where(['car_id' => $this->id])->all();
        foreach($orders as $order){
            $order->delete();
        }
        return true;
    }

    public function getComments(){
        return $this->hasMany(Comments::className(), ['auto_id' => 'id']);
    }

    public function getFullname(){
        return $this->autoBrand->name . ' ' . $this->autoModel->name;
    }

    public static function getPopular($count=10){
        return self::find()->orderBy(['popularity' => SORT_DESC])->joinWith(['autoBrand', 'autoModel', 'picture', 'comments'])->limit($count)->all();
    }

}
