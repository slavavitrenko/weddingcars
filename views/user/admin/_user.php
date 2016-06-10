<?php

use yii\widgets\MaskedInput;
use kartik\switchinput\SwitchInput;

?>
<?=$form->field($user, 'fio')->textInput(['maxlength' => 255]) ?>
<?= $form->field($user, 'phone')->widget(MaskedInput::className(), [
    'mask' => '+380999999999',
   ]) ?>
<?=$form->field($user, 'type')->widget(SwitchInput::classname(), [
    'type' => SwitchInput::RADIO,
    'items' => [
        ['label' => Yii::t('app', 'Client'), 'value' => 'client'],
        ['label' => Yii::t('app', 'Driver'), 'value' => 'driver'],
    ],
]); ?>
<?= $form->field($user, 'email')->textInput(['maxlength' => 255]) ?>
<?= $form->field($user, 'username')->textInput(['maxlength' => 255]) ?>
<?= $form->field($user, 'password')->passwordInput() ?>
