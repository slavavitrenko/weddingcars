<?php

use yii\widgets\MaskedInput;
use yii\helpers\Html;
// use kartik\switchinput\SwitchInput;

?>
<?= $form->field($user, 'type')->radioList([
        'client' => Yii::t('app', 'Client'),
        'driver' => Yii::t('app', 'Driver'),
    ], [
        'id' => 'user-type',
        'class' => 'btn-group form-group',
        'data-toggle' => 'buttons',
        'unselect' => null, // remove hidden field
        'item' => function ($index, $label, $name, $checked, $value) {
            return '<label class="btn btn-primary' . ($checked ? ' active' : '') . '">' .
                Html::radio($name, $checked, ['value' => $value, 'class' => 'project-status-btn']) . $label . '</label>';
        },
]) ?>
<?=$form->field($user, 'fio')->textInput(['maxlength' => 255]) ?>
<?= $form->field($user, 'phone')->widget(MaskedInput::className(), [
    'mask' => '+380999999999',
   ]) ?>
<?= $form->field($user, 'email')->textInput(['maxlength' => 255]) ?>
<?= $form->field($user, 'username')->textInput(['maxlength' => 255]) ?>
<?= $form->field($user, 'password')->passwordInput() ?>
