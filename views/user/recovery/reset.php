<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;


$this->title = Yii::t('user', 'Reset your password');
$this->params['breadcrumbs'][] = $this->title;

?>

<section class="order__layout">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <h3 class="order__header"><?= Html::encode($this->title) ?></h3>
            <?php $form = ActiveForm::begin([
                'id'                     => 'password-recovery-form',
                'enableAjaxValidation'   => true,
                'enableClientValidation' => false,
            ]); ?>

            <?= $form->field($model, 'password', ['options' => ['class' => 'form-group--noicon']])->passwordInput(['placeholder' => Yii::t('app', 'Password')])->label(false) ?>

            <?= Html::submitButton(Yii::t('user', 'Finish'), ['class' => 'btn big_button btn-block']) ?><br>

            <?php ActiveForm::end(); ?>
        </div>
    </div>
</section>