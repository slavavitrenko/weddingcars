<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use app\models\Brands;
use yii\helpers\ArrayHelper;
use kartik\select2\Select2;

/* @var $this yii\web\View */
/* @var $model app\models\Models */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="models-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'brand_id')->widget(Select2::className(), [
    	'data' => ArrayHelper::map(Brands::find()->all(), 'id', 'name'),
    	'options' => ['placeholder' => Yii::t('app', 'Choose...')],
    	'pluginOptions' => ['allowClear' => false],
    ]) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
