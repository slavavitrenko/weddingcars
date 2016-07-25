<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\checkbox\CheckboxX;
use kartik\datetime\DateTimePicker;

$this->title = Yii::t('app', 'New Order & Register');

?>

<div class="orders-register-form">
    <div class="col-xs-12">

    <?php $form = ActiveForm::begin([
                    'enableAjaxValidation'   => true,
                    // 'enableClientValidation' => false,
                    'fieldConfig' => [
                        'template'     => "{input}\n{error}{hint}",
                    ],
                    ]); ?>

    <div class="row">
        <div class="col-md-6">
            <?=$form->field($user, 'fio')->textInput(['placeholder' => $user->label('fio')]); ?>
            <?=$form->field($user, 'phone')->textInput(['placeholder' => $user->label('phone')]); ?>
            <?=$form->field($user, 'email')->textInput(['placeholder' => $user->label('email')])?>
            <?=$form->field($user, 'password')->textInput(['placeholder' => $user->label('password')])?>
        </div>
        <div class="col-md-6">
            <div class="col-md-6">
                <?=$form->field($order, 'city')->textInput(['placeholder' => $order->label('city')]); ?>
                <?=$form->field($order, 'hours')->textInput(['placeholder' => $order->label('hours')]); ?>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-xs-12">
                        <?=$form->field($order, 'datetime')->widget(DateTimePicker::className(), [
                            'model' => $order,
                            'attribute' => 'datetime',
                            'pluginOptions' => ['placeholder' => Yii::t('app', 'Choose...')]
                        ]); ?>
                    </div>
                    <div class="col-xs-6">
                        <div class="row">
                            <div class="col-xs-4">
                                <?=$form->field($order, 'city_out')->widget(CheckboxX::className(), [
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
                        <?=$form->field($order, 'km')->textInput(['placeholder' => $order->label('km')]); ?>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <?=$form->field($order, 'route')->textInput(['placeholder' => $order->label('route')]); ?>
                    <?=$form->field($order, 'description')->textArea(['placeholder' => $order->label('description')]); ?>                    
                </div>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="form-group">
                <?= Html::submitButton(Yii::t('app', 'Send'), ['class' => 'btn btn-primary pull-right']) ?>
                <div class="pull-right">
                        <label class="cbx-label" for="Orders[terms]" class="text-muted"><?=Yii::t('app', 'Agree Terms'); ?></label>
                        <?=$form->field($order, 'terms')->widget(CheckboxX::className(), [
                            'pluginOptions'=>['threeState'=>false],
                        ]); ?>
                </div>
            </div>
        </div>
    </div>


    <?php ActiveForm::end(); ?>

    </div>
</div>
