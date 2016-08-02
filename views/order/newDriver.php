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

		    <?php $form = ActiveForm::begin([
		        'options' => ['enctype' => 'multipart/form-data', 'data-type' => 'self'],
		        'enableAjaxValidation' => true,
		        'enableClientValidation' => false,
		    ]); ?>

			<div class="col-md-4 col-md-offset-1">
                <h3 class="checkout__title checkout__title--regist">
                    Даные для регистрации:
                </h3>
                <?=$form->field($user, 'fio', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Fio')])->label(false); ?>
                <?=$form->field($user, 'phone', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Phone')])->label(false); ?>
                <?=$form->field($user, 'email', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Email')])->label(false); ?>
                <?=$form->field($user, 'password', ['options' => ['class' => 'form-group--noicon']])->passwordInput(['placeholder' => Yii::t('app', 'Password')])->label(false); ?>
			</div>

		<div class="col-md-6">

                <h3 class="checkout__title checkout__title--regist">
                    Даные автомобиля:
                </h3>
			    <div class="row">
			    	<div class="col-md-6">

				        <?php echo $form->field($auto, 'brand', ['options' => ['class' => 'form-group--noicon']])->widget(Select2::className(), [
				            'data' => ArrayHelper::map(Brands::find()->all(), 'id', 'name'),
				            'options' => [
				                'id' => 'brands-dropdown',
				                'class' => 'form-control',
				                'placeholder' => Yii::t('app', 'Brand')
				            ],
				            'pluginOptions' => ['allowClear' => false],
				        ])->label(false) ?>

				        <?php echo $form->field($auto, 'model', ['options' => ['class' => 'form-group--noicon']])->widget(DepDrop::classname(), [
				            'options'=>['id'=>'models-dropdown'],
				            'pluginOptions'=>[
				                'depends' => ['brands-dropdown'],
				                'placeholder' => Yii::t('app', 'Model'),
				                'url'=>Url::to(['/auto/models']),
				                'allowlCear' => false
				            ]
				        ])->label(false); ?>

				        <?php echo $form->field($auto, 'year', ['options' => ['class' => 'form-group--noicon']])->textInput(['maxlength' => true, 'placeholder' => Yii::t('app', 'Year')])->label(false) ?>

			    	</div>
			    	<div class="col-md-6">

				        <?php echo$form->field($auto, 'category_id', ['options' => ['class' => 'form-group--noicon']])->widget(Select2::className(), [
				            'data' => ArrayHelper::map(Categories::find()->all(), 'id', 'name'),
				            'options' => ['placeholder' => Yii::t('app', 'Category')],
				            'pluginOptions' => ['allowClear' => true],
				        ])->label(false); ?>

				        <?php echo $form->field($auto, 'color', ['options' => ['class' => 'form-group--noicon']])->textInput(['maxlength' => true, 'placeholder' => Yii::t('app', 'Color')])->label(false) ?>

		                <?php echo$form->field($auto, 'pass_count', ['options' => ['class' => 'form-group--noicon']])->input('number', ['min' => 1, 'placeholder' => Yii::t('app', 'Pass Count')])->label(false); ?>

			    	</div>
			    </div>

		        <?php echo$form->field($auto, 'description', ['options' => ['class' => 'form-group form-group--textarea']])->textArea(['rows' => 3, 'placeholder' => Yii::t('app', 'Description')])->label(false); ?>

		        <div class="row">
		        	<div class="col-md-6">

				        <?php echo $form->field($auto, 'retro', [/*'template' => "<div class='form-group--noicon'>{input}{label}\n{hint}</div>", */'options' => ['class' => 'form-group--noicon']])->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

				        <?php echo $form->field($auto, 'decor', [/*'template' => "<div class='form-group--noicon'>{input}{label}\n{hint}</div>", */'options' => ['class' => 'form-group--noicon']])->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

				        <?php echo $form->field($auto, 'client_decor', [/*'template' => "<div class='form-group--noicon'>{input}{label}\n{hint}</div>", */'options' => ['class' => 'form-group--noicon']])->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>

		        	</div>
		        	<div class="col-md-6">

			        <?php echo$form->field($auto, 'hour_cost', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Cost Per Hour')])->label(false); ?>

			        <?php echo$form->field($auto, 'few_hours_cost', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Cost Per Few Hours')])->label(false); ?>

			        <?php echo$form->field($auto, 'outside_cost', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Outside Cost')])->label(false); ?>

		        	</div>
		        </div>

                <?php echo$form->field($auto, 'images[]', ['options' => ['class' => 'form-group--noicon']])->widget(FileInput::className(), [
                    'model' => $auto,
                    'attribute' => 'images[]',
                    'options'=>[
                        'multiple'=>true
                    ],
                    'pluginOptions' => [
                        'maxFileCount' => 10
                    ]
                ])->label(false); ?>

                 <?=Html::submitButton(Yii::t('app', 'Submit'), ['class' => 'header__button']); ?>


		    </div>

		    	<?php ActiveForm::end(); ?>
		</div>
	</div>
</section>