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

/*
 * @var yii\web\View $this
 * @var yii\widgets\ActiveForm $form
 * @var dektrium\user\models\RecoveryForm $model
 */

$this->title = Yii::t('user', 'Recover your password');
$this->params['breadcrumbs'][] = $this->title;
?>

<section class="order__layout">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <h3 class="order__header"><?= Html::encode($this->title) ?></h3>

            <?php $form = ActiveForm::begin([
                'id'                     => 'password-recovery-form',
                'enableAjaxValidation'   => true,
                'enableClientValidation' => false,
            ]); ?>

            <?=$form->field($model, 'email', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Email')])->label(false); ?>

            <?= Html::submitButton(Yii::t('user', 'Continue'), ['class' => 'big_button btn-block']) ?><br>

            <?php ActiveForm::end(); ?>

        </div>
    </div>
</section>
