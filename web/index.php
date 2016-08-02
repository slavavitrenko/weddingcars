<?php

defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');

// defined('YII_DEBUG') or define('YII_DEBUG', false);
// defined('YII_ENV') or define('YII_ENV', 'prod');


require(__DIR__ . '/../vendor/autoload.php');
require(__DIR__ . '/../vendor/yiisoft/yii2/Yii.php');

Yii::$classMap['voskobovich\liqpay\LiqPay'] = __DIR__ . '/../base/LiqPay.php';
Yii::$classMap['voskobovich\liqpay\forms\PaymentForm'] = __DIR__ . '/../base/PaymentForm.php';
Yii::$classMap['voskobovich\liqpay\actions\CallbackAction'] = __DIR__ . '/../base/CallbackAction.php';

$config = require(__DIR__ . '/../config/web.php');

(new yii\web\Application($config))->run();
