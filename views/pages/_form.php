<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;


?>

<div class="pages-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'title')->textInput() ?>

    <?= $form->field($model, 'text')->widget(\yii\redactor\widgets\Redactor::className()) ?>

     <?= $form->field($model, 'active')->radioList([
            '1' => Yii::t('app', 'Yeap'),
            '0' => Yii::t('app', 'Nope'),
		    ], [
		        'id' => 'page-status',
		        'class' => 'btn-group form-group',
		        'data-toggle' => 'buttons',
		        'unselect' => null,
		        'item' => function ($index, $label, $name, $checked, $value) {
		            return '<label class="btn btn-primary' . ($checked ? ' active' : '') . '">' .
		                Html::radio($name, $checked, ['value' => $value, 'class' => 'project-status-btn']) . $label . '</label>';
		        },
		]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
