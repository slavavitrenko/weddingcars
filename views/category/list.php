<?php

use yii\helpers\Html;
use yii\helpers\Url;

$this->title = $category->name;
$this->params['breadcrumbs'][] = $this->title;

?>

<section class="ourcars order__layout ourcars--bgc">
	<div class="container">
			<?=\yii\widgets\Breadcrumbs::widget([
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
            ])?>
		<div class="row">
			<div class="col-lg-offset-4 col-lg-4 col-md-offset-2 col-md-8 text-center">
				<h3 class="ourcars__title"><?=$category->name; ?></h3>
			</div>
		</div>
		<div class="row">
			<?php foreach($autos as $auto): ?>
				<?php if($category->cars): ?>
				<div class="col-lg-3 col-md-4 col-sm-6 ourcars__border">
					<a href="<?=Url::to(['/category/view', 'id' =>  $auto->id]); ?>" class="ourcars__car">
						<div class="ourcars__image" style='background: url(<?=$auto->picture->src; ?>) no-repeat; background-position: center center; background-size: contain;' alt="car"></div>
						<h3 class="ourcars__subtitle"><?=$auto->autoBrand->name; ?> <?=$auto->autoModel->name; ?></h3>
						<span>мест: <?=$auto->pass_count; ?></span>
						<span>от <?=$auto->hour_cost; ?> грн/час</span>
					</a>
				</div>
			<?php endif; ?>
			<?php endforeach; ?>
		</div>
		<div class="row">
			<div class="col-md-offset-3 col-md-6 text-center">
				<button data-href='<?=Url::to(['/category']); ?>' class="ourcars__button">Вернуться</button>
			</div>
		</div>
	</div>
</section>

