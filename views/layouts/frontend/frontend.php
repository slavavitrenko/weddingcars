<?php

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\FrontendAsset;

FrontendAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
	<meta charset="<?= Yii::$app->charset ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?= Html::csrfMetaTags() ?>
	<title><?= Html::encode($this->title) ?> | <?=Yii::$app->params['siteName']?></title>
	<?php $this->head() ?>
</head>
<body class='<?=Yii::$app->controller->id == 'site' && Yii::$app->controller->action->id == 'index' ? 'home' : ''?> <?=Yii::$app->controller->id . '-' . Yii::$app->controller->action->id; ?>'>

<?php if(!YII_DEBUG): ?>
  <div id="preloader"></div>
<?php endif; ?>

  <a href="#" class="scrollToTop">
    <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
  </a>
  
	<?php $this->beginBody() ?>

	<?=$this->render('navbar'); ?>
	<?= $this->render('content', ['content' => $content]) ?>

	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<p class="footer__info">&copy; 2016 | WeddingCars.pl.ua - Прокат свадебных автомобилей в Полтаве</p>
				</div>
				<div class="col-md-4">
				</div>
			</div>
		</div>
	</footer>
	
	<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>