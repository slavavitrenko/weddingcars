<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\checkbox\CheckboxX;
use kartik\datetime\DateTimePicker;

$this->title = Yii::t('app', 'New Order & Register');

?>

<div class="orders-register-form">

    <?php $form = ActiveForm::begin([
                    'enableAjaxValidation'   => true,
                    // 'enableClientValidation' => false,
                    'fieldConfig' => [
                        'template'     => "{input}\n{error}{hint}",
                    ],
                    ]); ?>

    <div class="row">
        <div class="col-md-6">
            <?=$form->field($model, 'city')->textInput(['placeholder' => $model->label('city')]); ?>
            <?=$form->field($model, 'hours')->textInput(['placeholder' => $model->label('hours')]); ?>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-xs-12">
                    <?=$form->field($model, 'datetime')->widget(DateTimePicker::className(), [
                        'model' => $model,
                        'attribute' => 'datetime',
                        'pluginOptions' => ['placeholder' => Yii::t('app', 'Choose...')]
                    ]); ?>
                </div>
                <div class="col-xs-6">
                    <div class="row">
                        <div class="col-xs-4">
                            <?=$form->field($model, 'city_out')->widget(CheckboxX::className(), [
                                'pluginOptions'=>['threeState'=>false],
                                'options' => ['class' => 'form-control'],
                            ]); ?>
                        </div>
                        <div class="col-xs-8">
                            <label class="cbx-label" for="Orders[city_out]" class="text-muted"><?=Yii::t('app', 'City Out'); ?></label>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6">
                    <?=$form->field($model, 'km')->textInput(['placeholder' => $model->label('km')]); ?>
                </div>
            </div>
        </div>
        <div class="col-xs-12">
            <?=$form->field($model, 'route')->textInput(['placeholder' => $model->label('route')]); ?>
            <?=$form->field($model, 'description')->textArea(['placeholder' => $model->label('description')]); ?>                    
        </div>
        <div class="col-xs-12 col-sm-6 col-sm-offset-2">
            <div class="col-xs-10">
                <label class="cbx-label" for="Orders[terms]" class="text-muted"><?=Yii::t('app', 'Agree Terms'); ?></label>
            </div>
            <div class="col-xs-2">
                <?=$form->field($model, 'terms')->widget(CheckboxX::className(), [
                    'pluginOptions'=>['threeState'=>false],
                ]); ?>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4">
            <div class="form-group">
                <?= Html::submitButton(Yii::t('app', 'Send'), ['class' => 'btn btn-primary btn-block']) ?>
            </div>
        </div>
    </div>


    <?php ActiveForm::end(); ?>

</div>
