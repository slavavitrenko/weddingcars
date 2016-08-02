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


$this->title = Yii::t('app', 'Create Auto');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Autos'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;

?>
<section class="order">
	<div class="container">
		<div class="row order__layout order__layout--checkout">

		<div class="col-md-10 col-md-offset-1">

			<h1><?= Html::encode($this->title) ?></h1>
			
			    <?php $form = ActiveForm::begin([
			        'options' => ['enctype' => 'multipart/form-data', 'data-type' => 'self'],
			        'enableAjaxValidation' => true,
			        'enableClientValidation' => false,
			    ]); ?>
			    <div class="row">
			    	<div class="col-md-6">

				        <?php echo $form->field($model, 'brand', ['options' => ['class' => 'form-group--noicon']])->widget(Select2::className(), [
				            'data' => ArrayHelper::map(Brands::find()->all(), 'id', 'name'),
				            'options' => [
				                'id' => 'brands-dropdown',
				                'class' => 'form-control',
				                'placeholder' => Yii::t('app', 'Brand')
				            ],
				            'pluginOptions' => ['allowClear' => false],
				        ])->label(false) ?>

				        <?php echo $form->field($model, 'model', ['options' => ['class' => 'form-group--noicon']])->widget(DepDrop::classname(), [
				            'options'=>['id'=>'models-dropdown'],
				            'pluginOptions'=>[
				                'depends' => ['brands-dropdown'],
				                'placeholder' => Yii::t('app', 'Model'),
				                'url'=>Url::to(['/auto/models']),
				                'allowlCear' => false
				            ]
				        ])->label(false); ?>

				        <?php echo $form->field($model, 'year', ['options' => ['class' => 'form-group--noicon']])->textInput(['maxlength' => true, 'placeholder' => Yii::t('app', 'Year')])->label(false) ?>

			    	</div>
			    	<div class="col-md-6">

				        <?php echo$form->field($model, 'category_id', ['options' => ['class' => 'form-group--noicon']])->widget(Select2::className(), [
				            'data' => ArrayHelper::map(Categories::find()->all(), 'id', 'name'),
				            'options' => ['placeholder' => Yii::t('app', 'Category')],
				            'pluginOptions' => ['allowClear' => true],
				        ])->label(false); ?>

				        <?php echo $form->field($model, 'color', ['options' => ['class' => 'form-group--noicon']])->textInput(['maxlength' => true, 'placeholder' => Yii::t('app', 'Color')])->label(false) ?>

		                <?php echo$form->field($model, 'pass_count', ['options' => ['class' => 'form-group--noicon']])->input('number', ['min' => 1, 'placeholder' => Yii::t('app', 'Pass Count')])->label(false); ?>

			    	</div>
			    </div>

		        <?php echo$form->field($model, 'description', ['options' => ['class' => 'form-group form-group--textarea']])->textArea(['rows' => 3, 'placeholder' => Yii::t('app', 'Description')])->label(false); ?>

		        <div class="row">
		        	<div class="col-md-6">

				        <?php echo $form->field($model, 'retro', [/*'template' => "<div class='form-group--noicon'>{input}{label}\n{hint}</div>", */'options' => ['class' => 'form-group--noicon']])->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

				        <?php echo $form->field($model, 'decor', [/*'template' => "<div class='form-group--noicon'>{input}{label}\n{hint}</div>", */'options' => ['class' => 'form-group--noicon']])->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

				        <?php echo $form->field($model, 'client_decor', [/*'template' => "<div class='form-group--noicon'>{input}{label}\n{hint}</div>", */'options' => ['class' => 'form-group--noicon']])->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

		        	</div>
		        	<div class="col-md-6">

			        <?php echo$form->field($model, 'hour_cost', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Cost Per Hour')])->label(false); ?>

			        <?php echo$form->field($model, 'few_hours_cost', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Cost Per Few Hours')])->label(false); ?>

			        <?php echo$form->field($model, 'outside_cost', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Outside Cost')])->label(false); ?>

		        	</div>
		        </div>

                <?php echo$form->field($model, 'images[]', ['options' => ['class' => 'form-group--noicon']])->widget(FileInput::className(), [
                    'model' => $model,
                    'attribute' => 'images[]',
                    'options'=>[
                        'multiple'=>true
                    ],
                    'pluginOptions' => [
                        'maxFileCount' => 10
                    ]
                ])->label(false); ?>

                 <?=Html::submitButton(Yii::t('app', 'Submit'), ['class' => 'header__button']); ?>

		    	<?php ActiveForm::end(); ?>

		    </div>
		</div>
	</div>
</section>