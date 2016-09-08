<?php

use yii\bootstrap\ActiveForm;
use yii\helpers\Html;
use app\models\Settings;


$this->title = Yii::t('app', 'Contact');

?>
<section class="order">
	<div class="container">
		<div class="row order__layout order__layout--checkout">

<!-- ------------------------------------
Question
------------------------------------- -->
<section class="question">
	<div class="container">
		<div class="row">
			<div class="col-md-5 col-md-offset-1 text-center">
				<h3 class="popularcars__title popularcars__title--question">
					Связаться с нами
				</h3>
				<div class="without-icons">
					<?php $form = ActiveForm::begin(['id' => 'contact-form']); ?>

					<?= $form->field($model, 'name', ['options' => ['class' => 'form-group form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Your Name')])->label(false); ?>

					<?= $form->field($model, 'email', ['options' => ['class' => 'form-group form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Your Email')])->label(false);  ?>

					<?= $form->field($model, 'body', ['options' => ['class' => 'form-group form-group--textarea']])->textarea(['rows' => 6, 'placeholder' => Yii::t('app', 'Your Question')])->label(false); ?>

					<?= Html::submitButton('Получить ответ', ['class' => 'btn btn-default pull-right question__button', 'name' => 'contact-button']) ?>

					<?php ActiveForm::end(); ?>
				</div>
			</div>
            <div class="col-md-5">
                <div class="contact__info">
                    <h3 class="popularcars__title popularcars__title--contact">
                        Контакты
                    </h3>
                    <span><?=SettingS::get('address'); ?></span>
                    <p class='text-center'>
                        <a href="tel:<?=Settings::get('phone1'); ?>" class="contact__phone">
                            <?=Settings::get('phone1'); ?>
                        </a>
                    </p>
                    <p class='text-center'>
                        <a href="tel:<?=Settings::get('phone2'); ?>" class="contact__phone">
                            <?=Settings::get('phone2'); ?>
                        </a>
                    </p>
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
</div>
</div>
</section>