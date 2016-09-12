<?php

$params = require(__DIR__ . '/params.php');

$config = [
    'id' => 'weddingcars',
    'name' => Yii::t('app', 'Wedding Cars'),
    'language' => 'ru',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'defaultRoute' => 'site/index',
    'components' => [
        'view' => [
            'theme' => [
                'pathMap' => [
                    '@dektrium/user/views' => '@app/views/user',
                    '@vendor/voskobovich/liqpay/widgets/views' => '@app/views/widgets'
                ],
            ],
        ],
        'user' => [
            'identityClass' => 'app\models\user\User',
            'returnUrl' => ['/orders'],
        ],
        'assetManager' => [
            'class' => 'yii\web\AssetManager',
            // 'appendTimestamp' => true,
            'bundles' => [
                'yii\web\YiiAsset' => [
                    'sourcePath' => null,
                    'basePath' => '@webroot',
                    'baseUrl' => '@web',
                    'js' => ['js/yii.js'],
                ],
                'yii\authclient\widgets\AuthChoiceAsset' => [
                    'sourcePath' => null,
                    'basePath' => '@webroot',
                    'baseUrl' => '@web',
                    'js' => ['js/authchoice.js'],
                ],
                'kartik\datetime\DateTimePickerAsset' => [
                    'sourcePath' => null,
                    'basePath' => '@webroot/datetimepicker-fix/',
                    'baseUrl' => '@web/datetimepicker-fix',
                ],
            ],
        ],
        'request' => [
            'cookieValidationKey' => 'TIcpcFSiaR9JfHjSJdiW61fms30Fze7F',
        ],
        'cache' => [
            // 'class' => 'yii\caching\FileCache',
            'class' => 'yii\caching\DummyCache',
            // 'class' => 'yii\redis\Cache',
            // 'redis' => [
            //     'hostname' => 'localhost',
            //     'port' => 6379,
            //     'database' => 0,
            // ]
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => require(__DIR__ . '/mailer.php'),
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => require(__DIR__ . '/db.php'),
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'suffix' => '.html',
            'rules' => [
                '/' => 'site/index',
                'categories/all' => 'category/index',
                'order/<id:\d+>' => 'order',
                'page/<id:\d+>' => '/pages/view',
                'orders/<id:\d+>' => '/orders/view',
                'category/<id:\d+>' => 'category/list',
                '/<id:\d+>' => 'category/view',
            ],
        ],
        'i18n' => [
            'translations' => [
                'app' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@app/messages',
                    'sourceLanguage' => 'en',
                    'fileMap' => [
                        'app' => 'app.php',
                    ],
                ],
                'user' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@app/messages',
                    'sourceLanguage' => 'en',
                    'fileMap' => [
                        'user' => 'user.php',
                    ],
                ],
                'rbac' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@app/messages',
                    'sourceLanguage' => 'en',
                    'fileMap' => [
                        'rbac' => 'rbac.php',
                    ],
                ],
            ],
        ],
        'authClientCollection' => [
            'class'   => \yii\authclient\Collection::className(),
            'clients' => [
                'vkontakte' => [
                    'class'        => 'dektrium\user\clients\VKontakte',
                    'clientId'     => '5501958',
                    'clientSecret' => 'fThdaGgLsZqhthOwyppU',
                ],
                'facebook' => [
                    'class'        => 'dektrium\user\clients\Facebook',
                    'clientId'     => '287710171567401',
                    'clientSecret' => 'fe2fc254cb04c8f297715b6cfbc7de9b',
                ],
                'google' => [
                    'class'        => 'dektrium\user\clients\Google',
                    'clientId'     => '47666163515-l74vtmg2sfth5t7rru47nedhrank3lj0.apps.googleusercontent.com',
                    'clientSecret' => 'kkJtv4T7gn89XQGA1wJeMG94',
                ],
                'yandex' => [
                    'class'        => 'dektrium\user\clients\Yandex',
                    'clientId'     => '852f88417fc84db48018e288de94c52b',
                    'clientSecret' => 'fcf0313235e14b40b509dc3c007d0f25'
                ],
            ],
        ],
    ],
    'modules' => [
        'liqpay' => [
            'class' => 'pistol88\liqpay\Module',
            // 'public_key' => 'i49048593185',
            // 'private_key' => 's2I6Zz8fHstyJkXMA6bFxh0UcK8guQoGvOxSMW2k',
            'currency' => 'UAH',
            'pay_way' => null,
            'version' => 3,
            'sandbox' => YII_DEBUG,
            'language' => 'ru',
            'result_url' => '/page/thanks',
            'paymentName' => 'Оплата заказа',
            'server_url' => 'http://weddingcars.pl.ua/site/confirm',
        ],
        'redactor' => 'yii\redactor\RedactorModule',
        'user' => [
            'class' => 'dektrium\user\Module',
            'admins' => ['admin'],
            'enableUnconfirmedLogin' => true,
            'enableRegistration' => true,
            'enableConfirmation' => false,
            'enableGeneratingPassword' => false,
            'controllerMap' => [
                'settings' => 'app\controllers\user\SettingsController',
                'profile' => 'app\controllers\user\ProfileController',
                'admin' => 'app\controllers\user\AdminController',
                'registration' => 'app\controllers\user\RegistrationController',
                'security' => 'app\controllers\user\SecurityController',
                'recovery' => 'app\controllers\user\RecoveryController',
            ],
            'modelMap' => [
                'User' => 'app\models\user\User',
                'UserSearch' => 'app\models\user\UserSearch',
                'SettingsForm' => 'app\models\user\SettingsForm',
                'RegistrationForm' => 'app\models\user\RegistrationForm'
            ],
        ],
        'rbac' => [
            'class' => 'dektrium\rbac\RbacWebModule',
        ],
    ],
    'params' => $params,
];


// if (YII_ENV_DEV) {

//     // configuration adjustments for 'dev' environment
//     $config['bootstrap'][] = 'debug';
//     $config['modules']['debug'] = [
//         'class' => 'yii\debug\Module',
//         'allowedIPs' => ['127.0.0.1', '192.168.0.*', '93.78.238.18', '188.163.35.131']
//     ];

//     $config['bootstrap'][] = 'gii';
//     $config['modules']['gii'] = [
//         'class' => 'yii\gii\Module',
//         'allowedIPs' => ['127.0.0.1', '192.168.0.*', '93.78.238.18', '188.163.35.131'],
//     ];
// }

return $config;
