<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;


$this->title = Yii::t('user', 'Request new confirmation message');
$this->params['breadcrumbs'][] = $this->title;

?>

<section class="order__layout">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <h3 class="order__header"><?= Html::encode($this->title) ?></h3>

            <?php $form = ActiveForm::begin([
                'id'                     => 'resend-form',
                'enableAjaxValidation'   => true,
                'enableClientValidation' => false,
            ]); ?>

            <?=$form->field($model, 'email', ['options' => ['class' => 'form-group--noicon']])->textInput(['autofocus' => true, 'placeholder' => Yii::t('app', 'Email')])->label(false); ?>

            <?= Html::submitButton(Yii::t('user', 'Continue'), ['class' => 'btn btn-primary btn-block']) ?><br>
            <?php ActiveForm::end(); ?>
        </div>
    </div>
</section>
