<?php
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\ActiveForm;
use kartik\checkbox\CheckboxX;
use kartik\datetime\DateTimePicker;
use kartik\select2\Select2;
use yii\helpers\ArrayHelper;
use app\models\Regions;


$this->title = Yii::t('app', 'New Order & Register');
$this->params['breadcrumbs'][] = $this->title;
?>
<section class="order">
    <div class="container">
        <div class="row order__layout order__layout--checkout">
            <?php $form = ActiveForm::begin([
                'enableAjaxValidation' => true,
                'enableClientValidation' => false,
                ]); ?>
                <div class="col-md-offset-1 col-md-11 col-sm-offset-1">
                    <?=\yii\widgets\Breadcrumbs::widget([
                        'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
                    ])?>
                    <h3 class="order__title order__title--checkout">
                        Заказ автомобиля
                    </h3>
                    <div class="row">
                        <div class="col-md-11 end">
                            <h3 class="checkout__title checkout__title--regist">
                                Информация для зазказа автомобиля:
                            </h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <?=$form->field($order, 'city', ['options' => ['class' => 'form-group--noicon']])->widget(Select2::className(), [
                                        'data' => ArrayHelper::map(Regions::find()->all(), 'id', 'name'),
                                        'options' => ['placeholder' => Yii::t('app', 'Region')],
                                    ])->label(false); ?>
                                    
                                    <?=$form->field($order, 'hours', ['options' => ['class' => 'form-group form-group--noicon']])->input('number', ['min' => '1', 'placeholder' => Yii::t('app', 'Hours')])->label(false); ?>
                                </div>
                                <div class="col-md-6">
                                    <?=$form->field($order, 'datetime', ['options' => ['class' => 'form-group form-group--noicon']])->widget(DateTimePicker::className(), [
                                        'options' => ['placeholder' => Yii::t('app', 'Datetime')],
                                        'pluginOptions' => ['autoclose' => true],
                                        ])->label(false); ?>
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="form-group form-group--noicon">
                                                    <?php echo $form->field($order, 'city_out', ['template' => '{label}{input}', 'options' => ['class' => 'form-group form-group--noicon']])->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]]) ?>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <?=$form->field($order, 'km', ['options' => ['class' => 'form-group--noicon']])->input('number', ['min' => '1', 'placeholder' => Yii::t('app', 'Km')])->label(false); ?>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <?=$form->field($order, 'route', ['options' => ['class' => 'form-group--noicon']])->textInput(['placeholder' => Yii::t('app', 'Route')])->label(false); ?>
                                        <?=$form->field($order, 'description', ['options' => ['class' => 'form-group form-group--textarea']])->textArea(['rows' => '5', 'placeholder' => Yii::t('app', 'Description')])->label(false); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-11 end checkout__border text-right">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="termsofuse">
                                    Ознакомлен с
                                    <a href="<?=Url::to(['/site/terms']); ?>" target='_blank' class="termsofuse__info">
                                        Пользовательским соглашением 
                                    </a>
                                    <?php echo $form->field($order, 'terms', ['options' => ['class' => 'form-group--noicon']])->widget(CheckboxX::className(), ['pluginOptions'=>['threeState'=>false]])->label(false) ?>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <?=Html::submitButton('Заказать', ['class' => 'header__button header__button--termsofuse btn-block']); ?>
                            </div>
                        </div>
                    </div>
                    <?php ActiveForm::end();?>
                </div>
            </div>
        </div>
    </section>
