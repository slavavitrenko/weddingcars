<?php

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;

?>

<?php
NavBar::begin([
    'brandLabel' => 'My Company',
    'brandUrl' => Yii::$app->homeUrl,
    'options' => [
        'class' => 'navbar-inverse navbar-fixed-top',
    ],
]);

$items = [];

if(!Yii::$app->user->isGuest){
    $items[] = ['label' => Yii::t('app', 'Dashboard'), 'url' => ['/orders']];
}

$items[] = Yii::$app->user->isGuest ? (
            ['label' => Yii::t('app', 'Login'), 'url' => ['/user/login']]
        ) : (
            '<li>'
            . Html::beginForm(['/user/logout'], 'post', ['class' => 'navbar-form'])
            . Html::submitButton(
                Yii::t('app', 'Logout') . ' (' . Yii::$app->user->identity->username . ')',
                ['class' => 'btn btn-link']
            )
            . Html::endForm()
            . '</li>'
        );

echo Nav::widget([
    'options' => ['class' => 'navbar-nav navbar-right'],
    'items' => $items
]);
NavBar::end();
?>