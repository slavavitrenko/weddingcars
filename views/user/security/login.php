<?php

/*
 * This file is part of the Dektrium project.
 *
 * (c) Dektrium project <http://github.com/dektrium>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use dektrium\user\widgets\Connect;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\checkbox\CheckboxX;


$this->title = Yii::t('user', 'Sign in');
$this->params['breadcrumbs'][] = $this->title;
?>

<section class="order__layout">
<div class="container">

    <div class="row">
        <div class="col-md-4 col-md-offset-4">
                    <h3 class="order__header"><?= Html::encode($this->title) ?></h3>
                    <?php $form = ActiveForm::begin([
                        'id'                     => 'login-form',
                        'enableAjaxValidation'   => true,
                        'enableClientValidation' => false,
                        'validateOnBlur'         => false,
                        'validateOnType'         => false,
                        'validateOnChange'       => false,
                    ]) ?>

                    <p class="text-center"><?=Yii::t('app', 'Via Social Networks'); ?></p>

                    <?= Connect::widget([
                        'baseAuthUrl' => ['/user/security/auth'],
                    ]) ?>
                    <hr>
                    <p class="text-center"><?=Yii::t('app', 'Or Manually'); ?></p>
                    <?=$form->field($model, 'login', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Login or Email')])->label(false); ?>

                    <?= $form->field($model, 'password', ['options' => ['class' => 'form-group--noicon']])->passwordInput(['placeholder' => Yii::t('user', 'Password')])->label(($module->enablePasswordRecovery ? ' ' . Html::a(Yii::t('user', 'Forgot password?'), ['/user/recovery/request'], ['tabindex' => '5']) . '' : '')) ?>

                    <?= $form->field($model, 'rememberMe', ['options' => ['class' => 'form-group--noicon']])->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

                    <?= Html::submitButton(Yii::t('user', 'Sign in'), ['class' => 'btn big_button btn-block', 'tabindex' => '3']) ?>

                    <?php ActiveForm::end(); ?>
            <?php if ($module->enableConfirmation): ?>
                <p class="text-center">
                    <?= Html::a(Yii::t('user', 'Didn\'t receive confirmation message?'), ['/user/registration/resend']) ?>
                </p>
            <?php endif ?>
            <?php if ($module->enableRegistration): ?>
                <p class="text-center">
                    <?= Html::a(Yii::t('user', 'Don\'t have an account? Sign up!'), ['/user/registration/register']) ?>
                </p>
            <?php endif ?>
        </div>
    </div>
    </div>
</section>
