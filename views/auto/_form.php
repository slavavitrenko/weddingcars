<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\select2\Select2;
use kartik\depdrop\DepDrop;
use app\models\Categories;
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
                    'options' => ['enctype' => 'multipart/form-data', 'data-type' => 'self'],
                    'enableAjaxValidation' => true, 
                    'enableClientValidation' => false,
                ]); ?>
                <div class="row">
                    <div class="col-md-6">

                        <?=$form->field($model, 'car_number'); ?>

                        <?php echo $form->field($model, 'brand')->widget(Select2::className(), [
                            'data' => ArrayHelper::map(Brands::find()->all(), 'id', 'name'),
                            'options' => [
                                'id' => 'brands-dropdown',
                                'class' => 'form-control',
                                'placeholder' => Yii::t('app', 'Choose...')
                            ],
                            'pluginOptions' => ['allowClear' => false],
                        ]) ?>

                        <?php echo $form->field($model, 'model')->widget(DepDrop::classname(), [
                            'options'=>['id'=>'models-dropdown'],
                            'data' => ArrayHelper::map(Models::find()->where(['brand_id' => $model->brand])->all(), 'id', 'name'),
                            'pluginOptions'=>[
                                'depends' => ['brands-dropdown'],
                                'placeholder' => Yii::t('app', 'Choose...'),
                                'url'=>Url::to(['/auto/models']),
                                'allowlCear' => false
                            ]
                        ]); ?>

                    </div>
                    <div class="col-md-6">

                        <?php echo$form->field($model, 'category_id')->widget(Select2::className(), [
                            'data' => ArrayHelper::map(Categories::find()->all(), 'id', 'name'),
                            'options' => ['placeholder' => Yii::t('app', 'Choose...')],
                            'pluginOptions' => ['allowClear' => true],
                        ]); ?>

                        <?php echo $form->field($model, 'color') ?>

                        <div class="row">
                            <div class="col-sm-6">
                                <?php echo $form->field($model, 'year') ?>
                            </div>
                            <div class="col-sm-6">
                                <?php echo$form->field($model, 'pass_count')->input('number', ['min' => 1]); ?>
                            </div>
                        </div>


                    </div>
                </div>

                <?php echo$form->field($model, 'description')->textArea(['rows' => 3]); ?>

                <div class="row">
                    <div class="col-md-3">

                        <?php echo $form->field($model, 'retro')->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

                        <?php echo $form->field($model, 'decor')->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

                        <?php echo $form->field($model, 'client_decor')->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

                    </div>
                    <div class="col-md-9">

                    <?php echo$form->field($model, 'hour_cost'); ?>

                    <?php echo$form->field($model, 'few_hours_cost') ?>

                    <?php echo$form->field($model, 'outside_cost'); ?>

                    </div>
                </div>

                <?php echo$form->field($model, 'images[]')->widget(FileInput::className(), [
                    'model' => $model,
                    'attribute' => 'images[]',
                    'options'=>[
                        'multiple'=>true
                    ],
                    'pluginOptions' => [
                        'maxFileCount' => 10
                    ]
                ]); ?>

                 <?=Html::submitButton(Yii::t('app', 'Submit'), ['class' => 'btn btn-lg btn-success']); ?>

                <?php ActiveForm::end(); ?>

</div>
