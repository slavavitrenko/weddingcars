<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\checkbox\CheckboxX;
use kartik\datetime\DateTimePicker;
$this->title = Yii::t('app', 'New Order & Register');
?>
<section class="order">
    <div class="container">
        <div class="row order__layout order__layout--checkout">
            <?php $form = ActiveForm::begin([
                // 'id' => 'order-form',
                'enableAjaxValidation' => true,
                'enableClientValidation' => false,
            ]); ?>
                <div class="col-md-offset-1 col-md-11 col-sm-offset-1">
                    <a class="order__crums order__crums--checkout" href="#">Главная / Регистрация</a>
                    <h3 class="order__title order__title--checkout">
                        Регистрация нового пользователя
                    </h3>
                    <div class="row">
                        <div class="col-md-5">
                            <h3 class="checkout__title checkout__title--regist">
                                Даные для регистрации:
                            </h3>
                            <?=$form->field($user, 'fio', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Fio')])->label(false); ?>
                            <?=$form->field($user, 'phone', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Phone')])->label(false); ?>
                            <?=$form->field($user, 'email', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Email')])->label(false); ?>
                            <?=$form->field($user, 'password', ['options' => ['class' => 'form-group--noicon']])->passwordInput(['placeholder' => Yii::t('app', 'Password')])->label(false); ?>
                        </div>
                        <div class="col-md-6 end">
                            <h3 class="checkout__title checkout__title--regist">
                                Информация для добавления:
                            </h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <?=$form->field($order, 'city', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'City')])->label(false); ?>
                                    <?=$form->field($order, 'hours', ['options' => ['class' => 'form-group--noicon']])->input('number', ['min' => '1', 'placeholder' => Yii::t('app', 'Hours')])->label(false); ?>
                                </div>
                                <div class="col-md-6">
                                    <?=$form->field($order, 'datetime', ['options' => ['class' => 'form-group--noicon']])->widget(DateTimePicker::className(), [
                                        'options' => ['placeholder' => Yii::t('app', 'Datetime')]
                                        ])->label(false); ?>
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="form-group form-group--noicon">
                                                    <?=$form->field($order, 'city_out', ['template' => '{label}{input}', 'options' => ['class' => 'form-group--noicon'], 'inputOptions' => ['class' => '']])->input('checkbox'); ?>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <?=$form->field($order, 'km', ['options' => ['class' => 'form-group--noicon']])->input('number', ['min' => '1', 'placeholder' => Yii::t('app', 'Km')])->label(false); ?>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <?=$form->field($order, 'route', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Route')])->label(false); ?>
                                        <?=$form->field($order, 'description', ['options' => ['class' => 'form-group form-group--textarea']])->textArea(['rows' => '5', 'placeholder' => Yii::t('app', 'Description')])->label(false); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-11 end checkout__border text-right">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="termsofuse">
                                    Ознакомлен с
                                    <a href="#" class="termsofuse__info">
                                        Пользовательским соглашениям 
                                    </a>
                                    <?=$form->field($order, 'terms', ['template' => '{input}{error}', 'options' => ['class' => 'form-group--noicon'], 'inputOptions' => ['class' => '']])->input('checkbox')->label(false); ?>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <?=Html::submitButton('Зарегистрироваться', ['class' => 'header__button header__button--termsofuse btn-block']); ?>
                            </div>
                        </div>
                    </div>
                <?php ActiveForm::end();?>
                </div>
            </div>
        </div>
    </section>
