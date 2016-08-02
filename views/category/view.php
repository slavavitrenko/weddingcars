<?php

use evgeniyrru\yii2slick\Slick;
use yii\web\JsExpression;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\ActiveForm;
use kartik\rating\StarRating;
use app\models\Comments;


$rating = Yii::$app->db->createCommand('select avg(rating) from comments where auto_id = :auto_id', [':auto_id' => $model->id])->queryOne();
$rating = round($rating['avg(rating)'], 0);

$this->title = $model->autoBrand->name . ' ' . $model->autoModel->name;

$this->params['breadcrumbs'][] = ['label' => $model->category->name, 'url' => ['/category/' . $model->category_id]];
$this->params['breadcrumbs'][] = $this->title;

$this->registerCssFile('http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css');
$this->registerJsFile('http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js', ['depends' => 'yii\web\JqueryAsset']);

$images = [];
foreach($model->pictures as $picture){
    $images[] = Html::img($picture->src, ['class' => 'img-responsive']);
}

$commentModel->rating = 5;

?>

<script src='http://vk.com/js/api/share.js?93' charset='windows-1251'></script>


  <!-- ------------------------------------
    Gallery Cars
------------------------------------- -->

  <section class="order">
    <div class="container">
      <div class="row order__layout">
        <div class="col-md-offset-1 col-md-6 col-sm-offset-1">
          <?=\yii\widgets\Breadcrumbs::widget([
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
            ])?>
          <div class="fotorama" data-nav="thumbs" data-thumbwidth="128" data-thumbheight="96" data-thumbmargin="22" data-keyboard='{"space": true, "home": true, "end": true, "up": true, "down": true}'>
          <?php foreach($model->pictures as $picture): ?>
            <a href="<?=$picture->src; ?>"><img src="<?=$picture->src; ?>"></a>
        <?php endforeach; ?>
          </div>
        </div>
        <div class="col-md-5">
          <h3 class="order__title">
            <?=$model->autoBrand->name; ?> <?=$model->autoModel->name; ?>
          </h3>
          <div class="slider__rating">
            Рейтинг:
            <?=StarRating::widget([
                'name' => 'rating_21',
                'value' => $rating,
                'pluginOptions' => [
                    'readonly' => true,
                    'showClear' => false,
                    'showCaption' => false,
                ],
            ]);?>
            <a href="#comments" class="order__comment">Отзывов (<?=count($model->comments); ?>)</a>
          </div>
          <ul class="order__list">
            <li>
              <span>Цвет:</span> <strong><?=$model->color; ?></strong>
            </li>
            <li>
              <span>Количество мест:</span> <strong><?=$model->pass_count; ?></strong>
            </li>
            <li>
              <span>Год выпуска: </span><strong><?=$model->year; ?></strong></li>
            <li>
              <span>Cвой декор:</span> <strong><?=Yii::t('app', $model->decor ? 'Yeap' : 'Nope'); ?></strong>
            </li>
            <li>
              <span>Согласие на декор:</span> <strong><?=Yii::t('app', $model->client_decor ? 'Yeap' : 'Nope'); ?></strong>
            </li>
          </ul>
          <div class="rent">
            <h4 class="rent__title">Стоимость аренды:</h4>
            <div class="rent__price">
              <span>1 час</span>
              <b><?=round($model->hour_cost, 0); ?> грн</b>
            </div>
            <div class="rent__price rent__price--mid">
              <span>от 5 часов</span>
              <b><?=round($model->few_hours_cost, 0); ?> грн</b>
            </div>
            <div class="rent__price">
              <span>за городом</span>
              <b><?=round($model->outside_cost, 0); ?> грн\км</b>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <button data-href='<?=Url::to(['/order/' . $model->id]); ?>' class="header__button header__button--order">Заказать Авто</button>
            </div>
<!--             <div class="col-md-6 ">
              <div class="order__calendar">
                Свободные даты:
                <a href="#">Посмотреть календарь</a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-offset-1 col-md-6">
          <h3 class="order__header">Описание</h3>
            <p>
                <?=$model->description; ?>
            </p>
          <span class="contact__social">Понравился автомобиль? Поделись!</span>

          <a class="header__icon header__icon--vk" target="_blank" onclick="return !window.open(this.href, 'Вконтакте', 'width=640,height=300')" href="https://vk.com/share.php?url=<?=Url::to(['/auto/' . $model->id], true);?>"></a>

          <a class="header__icon header__icon--fb" target="_blank" onclick="return !window.open(this.href, 'Facebook', 'width=640,height=300')" href="http://www.facebook.com/sharer/sharer.php?u=<?=Url::to(['/auto/' . $model->id], true);?>"></a>

          <a class="header__icon header__icon--twitter" target="_blank" onclick="return !window.open(this.href, 'Facebook', 'width=640,height=300')" href="https://twitter.com/intent/tweet?url=<?=Url::to(['/auto/' . $model->id], true);?>"></a>

        </div>
        <div class="col-md-5">
          <h3 class="order__header">Отзывы</h3>
          <?php if($model->comments): ?>
            <a name="comments"></a>
            <?php foreach($model->comments as $comment): ?>
          <div class="comment">
            <span class="comment__name"><?=$comment->user->fio; ?></span>
            <?=StarRating::widget([
                'name' => 'rating_21',
                'value' => round($comment->rating, 0),
                'pluginOptions' => [
                    'readonly' => true,
                    'showClear' => false,
                    'showCaption' => false,
                ],
            ]);?>
            <span class="comment__date"><?=date('d-m-Y', $comment->created_at); ?></span>
            <p class="comment__detail">
              <?=$comment->text; ?>
            </p>
          </div>
      <?php endforeach; ?>
      <?php else: ?>
        <p><?=Yii::t('app', 'No Comments'); ?></p>
      <?php endif; ?>
      <?php if(!Yii::$app->user->isGuest): ?>
          <div class="order__form">
            <h3 class="order__header">Добавить комментарий</h3>
            <?php $form = ActiveForm::begin(); ?>
            <?=$form->field($commentModel, 'text', ['options' => ['class' => 'form-group form-group--textarea']])->textArea(['rows' => '5', 'placeholder' => 'Текст Отзыва'])->label(false); ?>
            <?=$form->field($commentModel, 'auto_id', ['template' => '{input}', 'options' => ['class' => 'form-group--noicon']])->hiddenInput(['value' => $model->id])->label(false); ?>
            <div class="row">
                <div class="col-xs-5">
                    <strong>Рейтинг:</strong>
                    <?=$form->field($commentModel, 'rating', ['template' => '{input}', 'options' => ['class' => 'form-group--noicon']])->widget(StarRating::className(), [
                        'pluginOptions' => [
                            'stars' => 5, 
                            'min' => 1,
                            'max' => 5,
                            'step' => 1,
                            'defaultCaption' => '',
                            'starCaptions' => '',
                            'showClear' => false,
                            'showCaption' => false,
                        ]
                    ]); ?>
                </div>
                <div class="col-xs-7">
                    <?=Html::submitButton('Оставить Отзыв', ['class' => 'header__button header__button--order header__button--right']); ?>
                </div>
            </div>
            

            <?php ActiveForm::end(); ?>
          </div>
      <?php endif; ?>
        </div>
      </div>
    </div>
    </div>
  </section>