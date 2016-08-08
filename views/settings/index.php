<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

$this->title = Yii::t('app', 'Site Settings');
$this->params['breadcrumbs'][] = ['label' => $this->title, 'url' => ['index']];

?>
<div class="settings-index">

    <h1><?= Html::encode($this->title) ?></h1>

	<?php $form = ActiveForm::begin(); ?>

	<div class="row">
		<div class="col-sm-6">
		    <?= $form->field($model, 'admin_email')->textInput(['maxlength' => true]) ?>
		    <?= $form->field($model, 'partner_percent'); ?>
		    <?= $form->field($model, 'liqpay_public_key')->textInput(['maxlength' => true]) ?>
		    <?= $form->field($model, 'liqpay_private_key')->textInput(['maxlength' => true]) ?>
		    <?=$form->field($model, 'address'); ?>
		    <?=$form->field($model, 'phone1'); ?>
		    <?=$form->field($model, 'phone2'); ?>
		    <?=$form->field($model, 'email'); ?>
		    <?=$form->field($model, 'latitude'); ?>
		    <?=$form->field($model, 'longitude'); ?>
		</div>
		<div class="col-sm-6">
			<?=$form->field($model, 'vk_link'); ?>
			<?=$form->field($model, 'fb_link'); ?>
			<?=$form->field($model, 'tw_link'); ?>
			<?=$form->field($model, 'in_link'); ?>
    		<?= $form->field($model, 'terms')->widget(\yii\redactor\widgets\Redactor::className()) ?>	
		</div>
	</div>


    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
