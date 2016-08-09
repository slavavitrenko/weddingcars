<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
use kartik\select2\Select2;
use yii\helpers\ArrayHelper;
use app\models\Auto;
use app\models\Regions;


$this->title = Yii::t('app', 'Orders');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="orders-index">

    <?php Pjax::begin(); ?>
    
    <h1>
        <?= Html::a('<i class="glyphicon glyphicon-plus"></i>', ['/category'], ['class' => 'btn btn-success', 'data-type' => 'self']); ?>
        <?= Html::encode($this->title) ?>
    </h1>

        <?= GridView::widget([
            'layout'=>"{items}\n{pager}\n{summary}",
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                // ['class' => 'yii\grid\SerialColumn'],

                // 'id',
                [
                    'attribute' => 'user_id',
                    'value' => 'user.fio',
                    'visible' => Yii::$app->user->can('manager')
                ],
                [
                    'attribute' => 'car_id',
                    'value' => function($model){ return $model->car->autoBrand->name . ' ' . $model->car->autoModel->name; },
                    'filter' => Select2::widget([
                            'model' => $searchModel,
                            'attribute' => 'car_id',
                            'data' => ArrayHelper::map(Auto::find()->where(['user_id' => Yii::$app->user->id])->all(), 'id', 'fullName'),
                            'pluginOptions' => ['allowClear' => true],
                            'options' => ['placeholder' => yii::t('app', 'Choose...')]
                        ]),
                ],
                [
                    'attribute' => 'city',
                    'value' => function($model){ return $model->region->name; },
                    'filter' => Select2::widget([
                            'model' => $searchModel,
                            'attribute' => 'city',
                            'data' => ArrayHelper::map(Regions::find()->all(), 'id', 'name'),
                            'options' => ['placeholder' => Yii::t('app', 'Choose...')],
                            'pluginOptions' => ['allowClear' => true],
                        ])
                ],
                'datetime',
                // 'hours',
                // 'city_out',
                // 'out_km',
                // 'route:ntext',
                // 'description:ntext',
                [
                    'attribute' => 'paid',
                    'format' => 'raw',
                    'header' => Yii::t('app', 'Pay Status'),
                    'value' => function($model){

                        if($model->user_id == Yii::$app->user->identity->id && $model->paid == 'not'){
                            return $model->confirmed ? Html::a(Yii::t('app', 'Pay'), ['/site/pay', 'id' => $model->id]) : Yii::t('app', 'Wait Confirmation');
                        }
                        if($model->paid == 'failure'){ return $model->getPaidStatus() . ' ' . Html::a(Yii::t('app', 'Retry Pay'), ['/site/pay', 'id' => $model->id]); }
                        return $model->confirmed ? $model->getPaidStatus() : Yii::t('app', 'Wait Confirmation');
                    },
                    'filter' => ['success' => Yii::t('app', 'Paid'), 'not' => Yii::t('app', 'Not Paid')],
                ],
                [
                    'attribute' => 'cost',
                    'value' => function($model){ return $model->cost / 100 * $model->partner_percent; },
                    'visible' => Yii::$app->user->identity->partner == 1,
                ],
                [
                    'attribute' => 'confirmed',
                    'value' => function($model){ return Yii::t('app', $model->confirmed == '1' ? 'Yeap': 'Nope'); },
                    'filter' => ['1' => Yii::t('app', 'Confirmed'), '0' => Yii::t('app', 'Not Confirmed')],
                ],
                [
                    'attribute' => 'archive',
                    'format' => 'raw',
                    'value' => function($model){ return Html::a(Yii::t('app', ($model->archive == '1' ? 'Unarchive' : 'Archive')), ['archive', 'id' => $model->id], ['class' => 'btn btn-sm ' . ($model->archive ? 'btn-primary' : 'btn-success'), 'data-method' => 'post', 'data-pjax' => '0']); },
                    'filter' => ['1' => Yii::t('app', 'Archived')],
                    // 'visible' => Yii::$app->user->identity->type == 'driver' && Yii::$app->user->identity->pertner == '1'
                ],
                // 'created_at',

                [   'class' => 'yii\grid\ActionColumn',
                    'template' => '{view} {delete}',
                    'buttons' => [
                        'view' => function($url, $model, $key){
                            return Html::a('<i class="glyphicon glyphicon-eye-open"></i>', $url, ['class' => 'btn btn-sm btn-success', 'data-pjax' => 0]);
                        },
                        'delete' => function($url, $model, $key){
                            if($model->confirmed == '1'){return '';}
                            return Html::a('<i class="glyphicon glyphicon-remove"></i>', $url, ['class' => 'btn btn-sm btn-danger', 'data-method' => 'post', 'data-pjax' => 0, 'data-confirm' => Yii::t('yii', 'Are you sure you want to delete this item?')]);
                        }
                    ]
                ],
            ],
        ]); ?>
    <?php Pjax::end(); ?>
</div>
