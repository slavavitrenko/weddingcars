<?php

use yii\helpers\Url;
use yii\helpers\Html;
use app\models\Categories;
use app\models\Auto;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use app\models\Settings;
use kartik\rating\StarRating;

$categories = Yii::$app->cache->get('categories');
if(!$categories){
    $categories = Categories::find()->all();
    Yii::$app->cache->set('categories', $categories);
}

$this->title = Yii::t('app', 'Home');


$this->registerJsFile('https://maps.google.com/maps/api/js?key=AIzaSyCxyrbVB4MJCYFg8QSKgKs7zanKNmYRMTY');
$js = '

function initMap() {
    var myLatLng = {lat: ' . (Settings::get("latitude") ? Settings::get("latitude") : "49.574519") . ', lng: ' . (Settings::get("longitude") ? Settings::get("longitude") : "34.507636") . '};

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: myLatLng,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "WeddingCars Полтава"
    });
    marker.setMap(map);
}
initMap();
';

$this->registerJs($js, \yii\web\View::POS_READY);

?>

<!-- ------------------------------------
Our Cars
------------------------------------- -->
<section class="ourcars ourcars--bgc">
    <div class="container">
        <div class="row">
            <div class="col-lg-offset-4 col-lg-4 col-md-offset-2 col-md-8 text-center">
                <h3 class="ourcars__title">Наши автомобили</h3>
            </div>
        </div>
        <div class="row">
            <?php foreach($categories as $category): ?>
                <?php if ($category->cars): ?>
                <div class="col-lg-3 col-md-4 col-sm-6 ourcars__border">
                    <a href="<?=Url::to(['/category/' . $category->id]); ?>" class="ourcars__car">
                        <div class="ourcars__image" style='background: url(<?=$category->src; ?>) no-repeat; background-position: center center; background-size: contain;' alt="car"></div>
                        <h3 class="ourcars__subtitle"><?=$category->name?></h3>
                        <?php $min = Auto::find()->where(['category_id' => $category->id])->min('pass_count'); ?>
                        <?php $max = Auto::find()->where(['category_id' => $category->id])->max('pass_count'); ?>
                        <?php $min_per_hour = Auto::find()->where(['category_id' => $category->id])->max('hour_cost'); ?>
                        <span><?=$min?>-<?=$max?> мест</span>
                        <span>от <?=$min_per_hour; ?> грн/час</span>
                    </a>
                </div>
            <?php endif; ?>
            <?php endforeach; ?>
        </div>
        <div class="row">
            <div class="col-md-offset-3 col-md-6 text-center">
                <button data-href='<?=Url::to(['/category']); ?>' class="ourcars__button">Смотреть все</button>
            </div>
        </div>
    </div>
</section>
<!-- ------------------------------------
How to
------------------------------------- -->
<section class="howto">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6  howto__left howto__left--bgc">
                <div class="howto__wrapper">
                    <h3 class="howto__title text-right">Как заказать свадебный</h3>
                    <span class="howto__subtitle">автомобиль</span>
                    <button data-href='<?=Url::to(['/category']); ?>' class="header__button  header__button--howto">Подобрать Авто</button>
                </div>
            </div>
            <div class="col-md-6 howto__right--bgc">
                <div class="howto__right">
                    <p class="howto__step">
                        <span class="howto__circle">1</span> Выберите понравившийся автомобиль
                    </p>
                    <p class="howto__step">
                        <span class="howto__circle">2</span> Оформляйте заявку, заполнив необходимые данные
                    </p>
                    <p class="howto__step">
                        <span class="howto__circle">3</span> Получайте подтверждение брони авто на вашу дату
                    </p>
                    <p class="howto__step">
                        <span class="howto__circle">4</span> Вносите необходимую сумму предоплаты
                    </p>
                    <p class="howto__step">
                        <span class="howto__circle howto__circle--none">5</span> Получаете автомобиль и наслаждаетесь поездкой
                    </p>
                </div>
            </div>
        </div>
        <div class="row howto__right--bgc">
            <div class="col-md-6  col-md-push-6  howto__driver howto__driver--bgc">
                <div class="howto__wrapper howto__wrapper--driver ">
                    <h3 class="howto__title howto__title--right">Как водителю добавить</h3>
                    <span class="howto__subtitle howto__subtitle--driver ">свой автомобиль</span>
                    <button data-href='<?=Url::to(['/order/new']); ?>' class="header__button  header__button--howto">Добавить Авто</button>
                </div>
            </div>
            <div class="col-md-offset-1 col-md-pull-6  col-md-5">
                <div class="howto__right howto__right--left">
                    <p class="howto__step">
                        <span class="howto__circle">1</span> Заполните заявку, кликнув "Добавить авто"
                    </p>
                    <p class="howto__step">
                        <span class="howto__circle">2</span> Дождитесь проверки заявки администрацией
                    </p>
                    <p class="howto__step">
                        <span class="howto__circle">3</span> Предоставьте автомобиль для проверки 
                    </p>
                    <p class="howto__step">
                        <span class="howto__circle">4</span> Добавьте свой автомобиль (автомобили) на сайт
                    </p>
                    <p class="howto__step">
                        <span class="howto__circle howto__circle--none">5</span> Получайте заявки и зарабатывайте
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ------------------------------------
Popular Cars
------------------------------------- -->
<section class="popularcars">
    <div class="container">
        <div class="row">
            <div class="col-md-offset-2 col-md-8 text-center">
                <h3 class="popularcars__title">
                    Популярные автомобили
                </h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="slider">
                <?php
                $popular = Yii::$app->cache->get('popular');
                if(!$popular){
                    $popular = \app\models\Auto::getPopular();
                    Yii::$app->cache->set('popular', $popular);
                }
                ?>

                <?php foreach($popular as $car):?>
                    <?php
                        $rating = round(Yii::$app->db->createCommand('select avg(rating) from comments where auto_id = :auto_id', [':auto_id' => $car->id])->queryOne()['avg(rating)'], 0);
                    ?>

                    <div class="slider__item">
                        <div class="slider__image" style="background-image:url(<?=$car->picture->src; ?>)"></div>
                        <div class="slider__info">
                            <h3 class="slider__title"><?=$car->autoBrand->name . ' ' . $car->autoModel->name; ?></h3>
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
                            </div>
                            <a href="<?=Url::to(['/auto/' . $car->id])?>" class="slider__more">Подробнее</a>
                        </div>
                    </div>

                <?php endforeach; ?>

                </div>
            </div>
        </div>
    </section>
<!-- ------------------------------------
About Company 
------------------------------------- -->
<section class="about about--bgc">
    <div class="container">
        <div class="row">
            <div class="col-md-offset-2 col-md-8 text-center">
                <h3 class="popularcars__title popularcars__title--about">
                    О компании WeddingCars
                </h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-offset-1 col-md-10">
                <p class="about__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit suscipit officiis velit dignissimos tempora pariatur dolorum nihil culpa nobis atque reprehenderit laboriosam officia illum necessitatibus, mollitia voluptates alias, in vel.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <div class="benefit">
                    <img src="/images/about__icon0.png" class="benefit__image">
                    <h4 class="benefit__title">
                        Большой парк авто
                    </h4>
                    <div class="benefit__info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="benefit">
                    <img src="/images/about__icon1.png" class="benefit__image">
                    <h4 class="benefit__title">
                        Опытние водители
                    </h4>
                    <div class="benefit__info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="benefit">
                    <img src="/images/about__icon2.png" class="benefit__image">
                    <h4 class="benefit__title">
                        Пунктуальность
                    </h4>
                    <div class="benefit__info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ------------------------------------
Question
------------------------------------- -->
<section class="question">
    <div class="container">
        <div class="row">
            <div class="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 text-center">
                <h3 class="popularcars__title popularcars__title--question">
                    Остались вопросы?
                </h3>
                <span class="question__subtitle">
                    задайте их нам через форму обратной связи
                </span>
                <div class="question__form">
                    <?php $form = ActiveForm::begin(['id' => 'contact-form']); ?>

                    <?= $form->field($model, 'name', ['options' => ['class' => 'form-group form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Your Name')])->label(false); ?>

                    <?= $form->field($model, 'email', ['options' => ['class' => 'form-group form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Your Email')])->label(false);  ?>

                    <?= $form->field($model, 'body', ['options' => ['class' => 'form-group form-group--textarea']])->textarea(['rows' => 6, 'placeholder' => Yii::t('app', 'Your Question')])->label(false); ?>

                    <?= Html::submitButton('Получить ответ', ['class' => 'btn btn-default pull-right question__button', 'name' => 'contact-button']) ?>

                    <?php ActiveForm::end(); ?>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ------------------------------------
Contact
------------------------------------- -->
<section class="contact">
    <div class="container-fluid">
        <div class="row">
            <div id='map' class="col-md-6 contact__map">
            </div>
            <div class="col-md-6 contact__bgc">
                <div class="contact__info">
                    <h3 class="popularcars__title popularcars__title--contact">
                        Контакты
                    </h3>
                    <span><?=SettingS::get('address'); ?></span>
                    <a href="tel:<?=Settings::get('phone1'); ?>" class="contact__phone">
                        <?=Settings::get('phone1'); ?>
                    </a>
                    <a href="tel:<?=Settings::get('phone2'); ?>" class="contact__phone">
                        <?=Settings::get('phone2'); ?>
                    </a>
                    <a href="mailto:<?=Settings::get('email'); ?>" class="contact__email">
                        <?=Settings::get('email'); ?>
                    </a>
                    <span class="contact__social">Мы в социальных сетях:</span>
                        <a target='_blank' href="<?=Settings::get('vk_link') ? Settings::get('vk_link') : '#'?>" class="header__icon header__icon--vk"></a>
                        <a target='_blank' href="<?=Settings::get('fb_link') ? Settings::get('fb_link') : '#'?>" class="header__icon header__icon--fb"></a>
                        <a target='_blank' href='<?=Settings::get('in_link') ? Settings::get('in_link') : '#'?>' class="header__icon header__icon--insta"></a>
                        <a target='_blank' href="<?=Settings::get('tw_link') ? Settings::get('tw_link') : '#'?>" class="header__icon header__icon--twitter"></a>
                </div>
            </div>
        </div>
    </div>
</section>