<?php

use yii\helpers\Html;
use yii\helpers\Url;
use app\models\Categories;
use app\models\Auto;

$categories = Yii::$app->cache->get('categories');
if(!$categories){
	$categories = Categories::find()->joinWith(['cars'])->all();
	Yii::$app->cache->set('categories', $categories);
}



$this->title = Yii::t('app', 'Categories');
?>

<section class="ourcars order__layout ourcars--bgc">
	<div class="container">
		<div class="row">
			<div class="col-lg-offset-4 col-lg-4 col-md-offset-2 col-md-8 text-center">
				<h3 class="ourcars__title">Наши автомобили</h3>
			</div>
		</div>
		<div class="row categories">
			<?php foreach($categories as $category): ?>
				<?php if($category->cars): ?>
				<div class="col-lg-3 col-md-4 col-sm-6 ourcars__border">
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
                        <span><?=$statData['min_pass_count']; ?>-<?=$statData['max_pass_count']; ?> мест</span>
                        <span>от <?=$statData['min_per_hour']; ?> грн/час</span>

					</a>
				</div>
			<?php endif; ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>