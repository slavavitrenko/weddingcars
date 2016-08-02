<?php

namespace voskobovich\liqpay;

use voskobovich\liqpay\forms\PaymentForm;
use Yii;
use yii\base\Component;
use yii\base\InvalidParamException;
use app\models\Settings;


/**
 * Class LiqPay
 * @package voskobovich\liqpay
 */
class LiqPay extends Component
{
    public $public_key;
    public $private_key;
    public $version = 3;
    public $debug = false;
    public $sandbox = false;
    public $language = 'ru';
    public $server_url;
    public $result_url;
    public $paymentName;
    public $action = 'pay';

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();

        $this->public_key = Settings::get('liqpay_public_key');
        $this->private_key = Settings::get('liqpay_private_key');

        if (empty($this->public_key)) {
            throw new InvalidParamException('Param "public_key" can not be empty.');
        }

        if (empty($this->private_key)) {
            throw new InvalidParamException('Param "private_key" can not be empty.');
        }
    }

    /**
     * @param $params
     * @return PaymentForm
     */
    public function buildForm($params)
    {
        $model = new PaymentForm();
        $model->load($params, '');
        $model->public_key = $this->public_key;
        $model->version = $this->version;
        $model->sandbox = $this->sandbox;
        $model->language = $this->language;
        $model->server_url = $this->server_url;
        $model->result_url = \yii\helpers\Url::toRoute(['/site/index'], true);
        $model->action = $this->action;

        return $model;
    }

    /**
     * @param $params
     * @return string
     */
    public function getData($params)
    {
        return base64_encode(json_encode($params));
    }

    /**
     * @param $params
     * @return string
     */
    public function getSignature($params)
    {
        $data = $this->getData($params);
        return base64_encode(sha1($this->private_key . $data . $this->private_key, 1));
    }
}