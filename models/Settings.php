<?php

namespace app\models;

use Yii;


class Settings extends \yii\db\ActiveRecord
{

    public $id;
    
    public function behaviors(){
        return [
            // 'class' => 'app\behaviors\AccessLogBehavior',
        ];
    }

    public static function tableName()
    {
        return 'settings';
    }

    public function rules()
    {
        return [
            [['admin_email'], 'required'],
            [['admin_email', 'liqpay_public_key', 'liqpay_private_key', 'vk_link', 'fb_link', 'tw_link', 'in_link', 'address', 'phone1', 'phone2', 'email'], 'string', 'max' => 255],
            [['terms'], 'string', 'max' => 50000],
            [['latitude', 'longitude'], 'string', 'max' => 25],
            ['partner_percent', 'integer', 'min' => 1, 'max' => '99'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'admin_email' => Yii::t('app', 'Admin Email'),
            'liqpay_public_key' => Yii::t('app', 'LiqPay Public Key'),
            'liqpay_private_key' => Yii::t('app', 'LiqPay Private Key'),
            'fb_link' => Yii::t('app', 'Facebook Link'),
            'vk_link' => Yii::t('app', 'Vk Link'),
            'in_link' => Yii::t('app', 'Instagram Link'),
            'tw_link' => Yii::t('app', 'Twitter Link'),
            'address' => Yii::t('app', 'Address'),
            'phone1' => Yii::t('app', 'Phone 1'),
            'phone2' => Yii::t('app', 'Phone 2'),
            'email' => Yii::t('app', 'Contact Email'),
            'terms' => Yii::t('app', 'Terms of use'),
            'partner_percent' => Yii::t('app', 'Partner Percent'),
        ];
    }

    public static function get($option=null){
        $entry = Yii::$app->cache->get('settings_' . $option);
        if(!$entry){
            $entry = ($entry = self::find()->select([$option])->one()) ? $entry[$option] : null;
            Yii::$app->cache->set('settings_' . $option, $entry);
        }
        return $entry;
    }
    
}
