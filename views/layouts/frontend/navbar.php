<?php

use yii\helpers\Html;
use yii\helpers\Url;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use app\models\Pages;
use app\models\Settings;

$pages = Yii::$app->cache->get('pages');
if(!$pages){
  $pages = Pages::find()->orderBy('id ASC')->where(['active' => '1'])->all();
  Yii::$app->cache->set('pages', $pages);
}


$items = [];
$items[] = ['img src="/images/header__logo-min.png" class="header__logo  hidden-sm  hidden-md  hidden-lg" alt="logo">'];
$items[] = ['label' => Yii::t('app', 'Home'), 'url' => ['/site/index']];
$items[] = ['label' => Yii::t('app', 'Cars'), 'url' => ['/category/index']];
foreach($pages as $page){
  $items[] = ['label' => $page->title, 'url' => ['/pages/view', 'id' =>  $page->id]];
}

?>
<header class="header header--bgc">
  <div class="container">
    <div class="row">
      <div class="col-md-3  col-sm-3 col-sm-push-4 col-xs-12 hidden-xs text-right ">
        <img src="/images/header__logo-min.png" class="header__logo" alt="logo">
    </div>
    <div class="col-md-4  col-sm-4 col-sm-pull-3 hidden-xs">
        <a target='_blank' href="<?=Settings::get('vk_link') ? Settings::get('vk_link') : '#'?>" class="header__icon header__icon--vk"></a>
        <a target='_blank' href="<?=Settings::get('fb_link') ? Settings::get('fb_link') : '#'?>" class="header__icon header__icon--fb"></a>
        <a target='_blank' href='<?=Settings::get('in_link') ? Settings::get('in_link') : '#'?>' class="header__icon header__icon--insta"></a>
        <a target='_blank' href="<?=Settings::get('tw_link') ? Settings::get('tw_link') : '#'?>" class="header__icon header__icon--twitter"></a>
    </div>
    <div class="col-sm-3 hidden-xs">
        <a href="tel:<?=Settings::get('phone1')?>" class="header__info header__info--phone">
          <?=Settings::get('phone1')?>
      </a>
      <a href="tel:<?=Settings::get('phone2'); ?>" class="header__info  header__info--marker">
         <?=Settings::get('phone2'); ?>
     </a>
 </div>
 <div class="col-md-2 col-sm-2 col-xs-12 text-right hidden-xs">
  <?php if(Yii::$app->user->isGuest) : ?>
    <a href="<?=Url::to(['/user/login'])?>" class="header__link"><?=Yii::t('app', 'Login'); ?>/</a>
    <a href="<?=Url::to(['/user/register']); ?>" class="header__link"><?=Yii::t('app', 'Register'); ?></a>
<?php else : ?>
    <a href="<?=Url::to(['/orders'])?>" class="header__link"><?=Yii::t('app', 'Dashboard'); ?> / </a>
    <a href="<?=Url::to(['/user/logout']); ?>" data-method="post" class="header__link"><?=Yii::t('app', 'Logout'); ?></a>
<?php endif; ?>
</div>
</div>
<div class="row">
    <div class="col-lg-offset-1 col-lg-10 header__navbar">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" id="nav-icon1" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
          </button>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <?=\yii\widgets\Menu::widget([
        'options' => ['class' => 'nav navbar-nav text-center'],
          'items' => $items
      ]); ?>
</div>
<!-- /.navbar-collapse -->
</div>
<!-- /.container-fluid -->
</nav>
</div>
</div>
<?php if (Yii::$app->controller->id == 'site' && Yii::$app->controller->action->id == 'index'): ?>
    <div class="row">
      <div class="col-md-offset-2 col-md-8 text-center">
        <h1 class="header__title">
          Прокат свадебных автомобилей  в Полтаве
      </h1>
      <h3 class="header__subtitle">
          Подберите себе автомобиль по цене oт 250 грн/час
      </h3>
      <button data-href="<?=Url::to(['/category']); ?>" class="header__button">Подобрать Авто</button>
  </div>
</div>
<?php endif; ?>
</div>
</header>