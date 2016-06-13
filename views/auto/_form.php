<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\select2\Select2;
use kartik\depdrop\DepDrop;
use app\models\Brands;
use app\models\Models;
use yii\helpers\ArrayHelper;
use yii\helpers\Url;
use kartik\checkbox\CheckboxX;
use kartik\file\FileInput;

$js = '
    if(' . ($model->type == "bus" ? "true" : "false") . '){
       $(".field-bus-type").slideDown(0);
    }
    if(' . ($model->type == "car" ? "true" : "false") . '){
        $(".field-body-type").slideDown();
    }
    $("input[name=\'Auto[type]\']").on("change", function(){
        var val = $("input[name=\'Auto[type]\']:checked").val();
        if(val != "bus"){ $(".field-bus-type").slideUp(0); }
        else{ $(".field-bus-type").slideDown(0); }
        if(val != "car"){ $(".field-body-type").slideUp(0); }
        else{ $(".field-body-type").slideDown(0); }
    });
';

$this->registerJs($js, \yii\web\View::POS_READY);


?>

<div class="auto-form">

    <?php $form = ActiveForm::begin([
        'options' => ['enctype' => 'multipart/form-data'],
        // 'enableAjaxValidation'=>true,
        'fieldConfig' => [
            'template'     => "{label}\n<div class=\"col-lg-9\">{input}</div>\n<div class=\"col-sm-offset-3 col-lg-9\">{error}\n{hint}</div>",
            'labelOptions' => ['class' => 'col-lg-3 control-label'],
        ],
    ]); ?>


        <?= $form->field($model, 'type')->radioList([
            'car' => Yii::t('app', 'Car'),
            'limousine' => Yii::t('app', 'Limousine'),
            'bus' => Yii::t('app', 'Bus'),
        ], [
            'id' => 'auto-type',
            'class' => 'btn-group form-group',
            'data-toggle' => 'buttons',
            'unselect' => null, // remove hidden field
            'item' => function ($index, $label, $name, $checked, $value) {
                    $active = $checked ? ' active ' : '';
                    $check = $checked ? ' checked="checked"' : '';
                    return '<label class="btn btn-primary' . $active . '"><input type="radio" name="' . $name . '" value="' . $value . '"' . $check . '>' . $label . '</label>';
            },
        ]) ?>

        <?= $form->field($model, 'body')->radioList([
            'car' => Yii::t('app', 'Car'),
            'suv' => Yii::t('app', 'SUV'),
        ], [
            'id' => 'body-type',
            'class' => 'btn-group form-group',
            'data-toggle' => 'buttons',
            'unselect' => null, // remove hidden field
            'item' => function ($index, $label, $name, $checked, $value) {
                    $active = $checked ? ' active ' : '';
                    $check = $checked ? ' checked="checked"' : '';
                    return '<label class="btn btn-primary' . $active . '"><input type="radio" name="' . $name . '" value="' . $value . '"' . $check . '>' . $label . '</label>';
            },
        ]) ?>

        <?= $form->field($model, 'bus_type')->radioList([
            'usual' => Yii::t('app', 'Usual'),
            'micro' => Yii::t('app', 'Micro'),
        ], [
            'id' => 'bus-type',
            'class' => 'btn-group form-group',
            'data-toggle' => 'buttons',
            'unselect' => null, // remove hidden field
            'item' => function ($index, $label, $name, $checked, $value) {
                    $active = $checked ? ' active ' : '';
                    $check = $checked ? ' checked="checked"' : '';
                    return '<label class="btn btn-primary' . $active . '"><input type="radio" name="' . $name . '" value="' . $value . '"' . $check . '>' . $label . '</label>';
            },
        ]) ?>

        <?= $form->field($model, 'brand')->widget(Select2::className(), [
            'data' => ArrayHelper::map(Brands::find()->all(), 'id', 'name'),
            'options' => [
                'id' => 'brands-dropdown',
                'class' => 'form-control',
                'placeholder' => Yii::t('app', 'Choose...')
            ],
            'pluginOptions' => ['allowClear' => false],
        ]) ?>
        <?= $form->field($model, 'model')->widget(DepDrop::classname(), [
            'options'=>['id'=>'models-dropdown'],
            'pluginOptions'=>[
                'depends' => ['brands-dropdown'],
                'placeholder' => Yii::t('app', 'Choose...'),
                'url'=>Url::to(['/auto/models']),
                'allowlCear' => false
            ]
        ]); ?>
        <?= $form->field($model, 'year')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'color')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'retro')->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

        <?=$form->field($model, 'images[]')->widget(FileInput::className(), [
            'options'=>[
                'multiple'=>true
            ],
            'pluginOptions' => [
                'maxFileCount' => 10
            ]
        ])?>

<div class="row">
    <div class="col-xs-12">
        <div class="form-group">
            <?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
        </div>
    </div>
</div>

    <?php ActiveForm::end(); ?>

</div>
