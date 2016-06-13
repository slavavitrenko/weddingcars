<?php

/*
 * This file is part of the Dektrium project.
 *
 * (c) Dektrium project <http://github.com/dektrium>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\widgets\MaskedInput;
use kartik\switchinput\SwitchInput;

/**
 * @var yii\web\View              $this
 * @var dektrium\user\models\User $user
 * @var dektrium\user\Module      $module
 */

$this->title = Yii::t('user', 'Sign up');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="row">
    <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title"><?= Html::encode($this->title) ?></h3>
            </div>
            <div class="panel-body">
                <?php $form = ActiveForm::begin([
                    'id'                     => 'registration-form',
                    'enableAjaxValidation'   => true,
                    'enableClientValidation' => false,
                ]); ?>
                
                <?= $form->field($model, 'type')->radioList([
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

                <?=$form->field($model, 'fio') ?>

                <?= $form->field($model, 'phone')->widget(MaskedInput::className(), [
                    'model' => $model,
                    'attribute' => 'phone',
                    'mask' => '+380999999999',
                    ]) ?>

                <?= $form->field($model, 'email') ?>

                <?= $form->field($model, 'username') ?>

                <?php if ($module->enableGeneratingPassword == false): ?>
                    <?= $form->field($model, 'password')->passwordInput() ?>
                <?php endif ?>

                <?= Html::submitButton(Yii::t('user', 'Sign up'), ['class' => 'btn btn-success btn-block']) ?>

                <?php ActiveForm::end(); ?>
            </div>
        </div>
        <p class="text-center">
            <?= Html::a(Yii::t('user', 'Already registered? Sign in!'), ['/user/security/login']) ?>
        </p>
    </div>
</div>
