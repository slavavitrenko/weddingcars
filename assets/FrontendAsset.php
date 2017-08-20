<?php

namespace app\assets;

use yii\web\AssetBundle;


class FrontendAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css',
        '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css',
        'css/custom.min.css',
        'css/frontend.css',
        'css/media-screens.min.css',
    ];
    public $js = [
        'js/frontend.js',
        '//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.js',
        'js/scripts.js',
    ];
    public $depends = [
        'yii\bootstrap\BootstrapAsset',
        'yii\web\YiiAsset',
        'rmrevin\yii\fontawesome\AssetBundle',
    ];
}
