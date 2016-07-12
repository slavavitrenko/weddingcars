<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use app\models\Rate;
use yii\helpers\ArrayHelper;
use kartik\select2\Select2;

?>

<div class="auto-rate-form">

    <?php $form = ActiveForm::begin([
        'enableAjaxValidation'   => true,
        // 'enableClientValidation' => false,
        // 'options' => ['data-type' => 'self']
    ]); ?>

    <?= $form->field($model, 'auto_id')->hiddenInput()->label(false) ?>

    <?= $form->field($model, 'rate_id')->widget(Select2::className(), [
    	'data' => ArrayHelper::map(Rate::find()->all(), 'id', 'name'),
    	'options' => ['placeholder' => Yii::t('app', 'Choose...')],
    	'pluginOptions' => ['allowClear' => false]
    ]) ?>

    <?= $form->field($model, 'price') ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success btn-block' : 'btn btn-primary btn-block']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
