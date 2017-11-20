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
	<link rel="icon" href="/favicon.ico"><link rel="shortcut icon" href="/favicon.ico">

	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-84396014-1', 'auto');
	  ga('send', 'pageview');

	</script>
	
	<?php $this->head() ?>
</head>
<body class='<?=Yii::$app->controller->id == 'site' && Yii::$app->controller->action->id == 'index' ? 'home' : ''?> <?=Yii::$app->controller->id . '-' . Yii::$app->controller->action->id; ?>'>

	<?php if(!YII_DEBUG): ?>
		<!-- <div id="preloader"></div> -->
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
					<p class="footer__info">&copy; 2016  <a href="http://reactlogic.com.ua">React Logic</a>  | WeddingCars.pl.ua - Прокат свадебных автомобилей</p>
				</div>
				<div class="col-md-4">
				</div>
			</div>
		</div>
	</footer>

	<!-- Счетчик Яндекс.Метрики -->
	<script type="text/javascript">
	    (function (d, w, c) {
	        (w[c] = w[c] || []).push(function() {
	            try {
	                w.yaCounter40078115 = new Ya.Metrika({
	                    id:40078115,
	                    clickmap:true,
	                    trackLinks:true,
	                    accurateTrackBounce:true,
	                    webvisor:true
	                });
	            } catch(e) {
	            	console.error('Отвалился YaCounter');
	            }
	        });

	        var n = d.getElementsByTagName("script")[0],
	            s = d.createElement("script"),
	            f = function () { n.parentNode.insertBefore(s, n); };
	        s.type = "text/javascript";
	        s.async = true;
	        s.src = "https://mc.yandex.ru/metrika/watch.js";

	        if (w.opera == "[object Opera]") {
	            d.addEventListener("DOMContentLoaded", f, false);
	        } else { f(); }
	    })(document, window, "yandex_metrika_callbacks");
	</script>
	<noscript><div><img src="https://mc.yandex.ru/watch/40078115" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
	<!-- END: Счетчик Яндекс.Метрики -->


	<!-- Код тега ремаркетинга Google -->
	<!--------------------------------------------------
	С помощью тега ремаркетинга запрещается собирать информацию, по которой можно идентифицировать личность пользователя. Также запрещается размещать тег на страницах с контентом деликатного характера. Подробнее об этих требованиях и о настройке тега читайте на странице http://google.com/ads/remarketingsetup.
	--------------------------------------------------->
	<script type="text/javascript">
	/* <![CDATA[ */
	var google_conversion_id = 871330184;
	var google_custom_params = window.google_tag_params;
	var google_remarketing_only = true;
	/* ]]> */
	</script>
	<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
	</script>
	<noscript>
	<div style="display:inline;">
	<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/871330184/?guid=ON&script=0"/>
	</div>
	</noscript>

	<?php $this->endBody() ?>

	<!-- Google conversion analytics (Регистрация) -->
	<script type="text/javascript">
	/* <![CDATA[ */
	var google_conversion_id = 871330184;
	var google_conversion_language = "en";
	var google_conversion_format = "3";
	var google_conversion_color = "ffffff";
	var google_conversion_label = "vx2DCJyGiWsQiOO9nwM";
	var google_remarketing_only = false;
	/* ]]> */
	</script>
	<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>
	<noscript>
	<div style="display:inline;">
	<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/871330184/?label=vx2DCJyGiWsQiOO9nwM&guid=ON&script=0"/&gt;
	</div>
	</noscript>
	<!-- END: Google conversion analytics -->
</body>
</html>
<?php $this->endPage() ?>