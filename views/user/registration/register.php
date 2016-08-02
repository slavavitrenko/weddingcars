<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\widgets\MaskedInput;
use dektrium\user\widgets\Connect;
use kartik\switchinput\SwitchInput;


$this->title = Yii::t('user', 'Sign up');
$this->params['breadcrumbs'][] = $this->title;
?>
<section class="order__layout">
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
                    <h3 class="order__header"><?= Html::encode($this->title) ?></h3>

                    <?php $form = ActiveForm::begin([
                        'id'                     => 'registration-form',
                        'enableAjaxValidation'   => true,
                        'enableClientValidation' => false,
                    ]); ?>
                    <p class="text-center"><?=Yii::t('app', 'Via Social Networks')?></p>
                    <?= Connect::widget([
                        'baseAuthUrl' => ['/user/security/auth'],
                    ]) ?>

                    <hr>
                    
                    <p class='text-center'><?=Yii::t('app', 'Or Manually')?></p>
                    
                    <?= $form->field($model, 'type', ['options' => ['class' => 'form-group--noicon']])->radioList([
                            'client' => Yii::t('app', 'Client'),
                            'driver' => Yii::t('app', 'Driver'),
                        ], [
                            'id' => 'user-type',
                            'class' => 'btn-group form-group--noicon',
                            'data-toggle' => 'buttons',
                            'unselect' => null, // remove hidden field
                            'item' => function ($index, $label, $name, $checked, $value) {
                                return '<label class="btn big_type_button btn-primary' . ($checked ? ' active' : '') . '">' .
                                    Html::radio($name, $checked, ['value' => $value, 'class' => 'project-status-btn']) . $label . '</label>';
                            },
                    ])->label(false); ?>

                    <?=$form->field($model, 'fio', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Fio')])->label(false);?>

                    <?= $form->field($model, 'phone', ['options' => ['class' => 'form-group--noicon']])->widget(MaskedInput::className(), [
                        'model' => $model,
                        'attribute' => 'phone',
                        'mask' => '+380999999999',
                        'options' => ['placeholder' => Yii::t('app', 'Phone'), 'class' => 'form-control']
                        ])->label(false) ?>

                    <?=$form->field($model, 'email', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Email')])->label(false); ?>

                    <?php if ($module->enableGeneratingPassword == false): ?>
                        <?=$form->field($model, 'password', ['options' => ['class' => 'form-group--noicon']])->passwordInput(['placeholder' => Yii::t('app', 'Password')])->label(false); ?>
                    <?php endif ?>


                    <?= Html::submitButton(Yii::t('user', 'Sign up'), ['class' => 'big_button btn-block']) ?>

                    <?php ActiveForm::end(); ?>

            <p class="text-center">
                <?= Html::a(Yii::t('user', 'Already registered? Sign in!'), ['/user/security/login']) ?>
            </p>
        </div>
    </div>
    </div>
</section>
