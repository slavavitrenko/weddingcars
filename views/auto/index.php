<?php

use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\GridView;
use yii\widgets\Pjax;
use kartik\select2\Select2;
use app\models\Models;
use app\models\Brands;
use yii\helpers\ArrayHelper;
use yii\bootstrap\Modal;
/* @var $this yii\web\View */
/* @var $searchModel app\models\AutoSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::$app->user->can('manager') ? Yii::t('app', 'Autos') : Yii::t('app', 'My Autos');
$this->params['breadcrumbs'][] = $this->title;
?>

<?php

// if (!($models = Yii::$app->cache->get('all-models'))){
//     $models = Models::find()->all();
//     Yii::$app->cache->set('all-models', $models);
// }
// if (!($brands = Yii::$app->cache->get('all-brands'))){
//     $brands = Brands::find()->all();
//     Yii::$app->cache->set('all-brands', $brands);
// }

?>

<div class="auto-index">
    

    <h1>
        <?= Html::a('<i class="glyphicon glyphicon-plus"></i>', ['/auto/create'], ['class' => 'btn btn-success']) ?>
        <?= Html::encode($this->title) ?>
    </h1>

    <?php Pjax::begin(['id' => 'autos-container', 'linkSelector' => false]); ?>
        <?= GridView::widget([
            'layout'=>"{items}\n{pager}\n{summary}",
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                [
                    'attribute' => 'fio',
                    'visible' => Yii::$app->user->can('manager'),
                    'value' => 'fio'
                ],
                // 'name',
                // 'type',
                [
                    'attribute' => 'brand',
                    'value' => 'autoBrand.name',
                    // 'filter' => Select2::widget([
                    //         'model' => $searchModel,
                    //         'attribute' => 'brand',
                    //         'data' => ArrayHelper::map($brands, 'id', 'name'),
                    //         'options' => ['placeholder' => Yii::t('app', 'Choose...')],
                    //         'pluginOptions' => ['allowClear' => true],
                    //     ])
                ],
                [
                    'attribute' => 'model',
                    'value' => 'autoModel.name',
                    // 'filter' => Select2::widget([
                    //         'model' => $searchModel,
                    //         'attribute' => 'model',
                    //         'data' => ArrayHelper::map($models, 'id', 'name'),
                    //         'options' => ['placeholder' => Yii::t('app', 'Choose...')],
                    //         'pluginOptions' => ['allowClear' => true]
                    //     ])
                ],
                // 'year',
                // 'color',
                // [
                //     'attribute' => 'body',
                //     'value' => function($model){return Yii::t('app', ucfirst($model->body));},
                //     'filter' => Html::activeDropDownList($searchModel, 'body', ['car' => Yii::t('app', 'Car'), 'suv' => Yii::t('app', 'SUV')],['class'=>'form-control','prompt' => Yii::t('app', 'Choose...')])
                // ],
                // 'retro',
                // 'bus',
                // 'bus_type',

                [
                    'class' => 'yii\grid\ActionColumn',
                    'template' => '<div class="btn-group">{checked} {view} {update} {delete}</div>',
                    'buttons' => [
                        'view' => function($url, $model, $key){
                            return Html::a('<i class="glyphicon glyphicon-eye-open"></i>', ['view', 'id' => $key], ['class' => 'btn btn-sm btn-primary', 'data-pjax' => 0]);
                        },

                        'update' => function($url, $model, $key){
                            if($model->checked == '1'){
                                return '';
                            }
                            return Html::a('<i class="glyphicon glyphicon-pencil"></i>', ['update', 'id' => $key], ['class' => 'btn btn-sm btn-primary']);
                        },
                        'delete' => function($url, $model, $key){
                            return Html::a('<i class="glyphicon glyphicon-trash"></i>', ['delete', 'id' => $key], ['class' => 'btn btn-sm btn-danger', 'data-confirm' => Yii::t('yii', 'Are you sure you want to delete this item?'), 'data-method' => 'post']);
                        },
                        'checked' => function($url, $model, $key){
                            return Html::a((Yii::t('app', $model->checked ? 'Checked' : 'Not checked')), false, ['class' => 'pjax-btn btn btn-sm ' . ($model->checked ? 'btn-success' : 'btn-danger'), 'value' => Url::to([($model->checked ? 'uncheck' : 'check'), 'id' => $key]), 'data-container' => 'autos-container', 'data-pjax' => 0]);
                        }
                    ]
                ],
            ],
        ]); ?>
    <?php Pjax::end(); ?>
</div>