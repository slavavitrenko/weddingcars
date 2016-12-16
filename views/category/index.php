<?php

use yii\helpers\Html;
use yii\helpers\Url;
use app\models\Categories;
use app\models\Auto;

$categories = Yii::$app->cache->get('categories');
if(!$categories){
	$categories = Categories::find()/*->joinWith(['cars'])*/->all();
	Yii::$app->cache->set('categories', $categories);
}



$this->title = Yii::t('app', 'Categories');
?>

<section class="order">
	<div class="container order__layout order__layout--steps">
		<div class="row">
			<div class="col-lg-offset-4 col-lg-4 col-md-offset-2 col-md-8 text-center">
				<h3 class="ourcars__title ourcars__title--page">Все автомобили</h3>
			</div>
		</div>
		<div class="row categories ourcars__car--page">
				<?php if($categories): ?>
			<?php foreach($categories as $category): ?>
				<div class="col-lg-3 col-md-4 col-sm-6">
					<a href="<?=Url::to(['/category/list', 'id' => $category->id]); ?>" class="ourcars__car">
						<div class="ourcars__image" style='background: url(<?=$category->src; ?>) no-repeat; background-position: center center; background-size: contain;' alt="car"></div>
						<h3 class="ourcars__subtitle"><?=$category->name?></h3>
						<?php
                            $statData = Yii::$app->cache->get('stat_category_' . $category->id);
                            if(!$statData){
                                $statData['min_pass_count'] = Auto::find()->where(['category_id' => $category->id])->min('pass_count');
                                $statData['max_pass_count'] = Auto::find()->where(['category_id' => $category->id])->max('pass_count');
                                $statData['min_per_hour'] = Auto::find()->where(['category_id' => $category->id])->min('hour_cost');
                                Yii::$app->cache->set('stat_category_' . $category->id, $statData);
                            }
                        ?>
                        <div class="category-description">
	                        <?php if($statData['min_pass_count']): ?>
	                            <span>от <?=$statData['min_pass_count']; ?> до <?=$statData['max_pass_count']; ?> мест</span>
	                        <?php endif; ?>
	                        <?php if($statData['min_per_hour']): ?>
	                            <span>от <?=$statData['min_per_hour']; ?> грн/час</span>
	                        <?php endif; ?>
                        </div>

					</a>
				</div>
			<?php endforeach; ?>
			<?php else: ?>
				<h2 class='text-center'>Автомобили проходят верификацию. Они скоро здесь появятся</h2>
			<?php endif; ?>
		</div>
	</div>
</section>