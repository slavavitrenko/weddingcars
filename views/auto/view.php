<?php

use yii\helpers\Html;
use yii\helpers\uRl;
use yii\widgets\DetailView;
use yii\grid\GridView;
use yii\bootstrap\Modal;


$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Autos'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="auto-view">

<?php
    Modal::begin([
            'id' => 'modal-view',
            'size' => 'modal-md',
            'header' => '<h2><span id="modal-header"></span></h2>',
            'options' => [
                'tabindex' => false,
                'class' => 'modal in'
            ]
        ]); ?>
    <div id="modal-content"></div>

<?php Modal::end(); ?>

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('yii', 'Are you sure you want to delete this item?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>
    <div class="row">
        <div class="col-sm-6">
            <?= DetailView::widget([
                'model' => $model,
                'attributes' => [
                    // 'id',
                    // 'user_id',
                    // 'name',
                    [
                        'attribute' => 'type',
                        'value' => Yii::t('app', ucfirst($model->type)),
                        'visible' => $model->type != 'bus'
                    ],
                    [
                        'attribute' => 'bus_type',
                        'value' => Yii::t('app', ucfirst($model->bus_type)),
                        'visible' => $model->type == 'bus'
                    ],
                    [
                        'attribute' => 'body',
                        'value' => Yii::t('app', ucfirst($model->body)),
                        'visible' => $model->type != 'bus'
                    ],
                    [
                        'attribute' => 'brand',
                        'value' => $model->autoBrand->name,
                    ],
                    [
                        'attribute' => 'model',
                        'value' => $model->autoModel->name,
                    ],
                    'year',
                    'color',
                    [
                        'attribute' => 'retro',
                        'value' => Yii::t('app', $model->retro ? 'Yes' : 'No'),
                    ],
                ],
            ]) ?>
        </div>
        <div class="col-sm-6">
        <?php if($model->pictures) : ?>
            <div class="row">
            <?php foreach($model->pictures as $picture) :?>
                <div class="col-sm-4 well"><?=Html::img($picture->src, ['class' => 'img-responsive']); ?></div>
            <?php endforeach; ?>
            </div>
        <?php endif; ?>
        </div>
        <div class="col-xs-12">
        <p>
            <h3>
                <?=Html::a('<i class="glyphicon glyphicon-plus"></i>', false, ['class' => 'btn btn-success modal-btn', 'value' => Url::to(['create-rate', 'auto_id' => $model->id]), 'data-modal-header' => Yii::t('app', 'Create Rate')]); ?>
                <?=Yii::t('app', 'Rates'); ?>
            </h3>
        </p>
            <?= GridView::widget([
                'dataProvider' => $rates,
                'columns' => [
                    ['attribute' => 'name', 'headerOptions' => ['class' => 'hidden']],
                    ['attribute' => 'price', 'headerOptions' => ['class' => 'hidden']],
                    [
                        'class' => 'yii\grid\ActionColumn',
                        'template' => '<div class="btn-group">{update} {delete}</div>',
                        'buttons' => [
                            'update' => function($url, $model, $key){
                                return Html::a('<i class="glyphicon glyphicon-pencil"></i>', false, ['class' => 'btn btn-sm btn-primary modal-btn', 'value' => Url::to(['update-rate', 'auto_id' => $model->auto_id, 'id' => $key])]);
                            },
                            'delete' => function($url, $model, $key){
                                return Html::a('<i class="glyphicon glyphicon-trash"></i>', ['delete-rate', 'id' => $key], ['class' => 'btn btn-sm btn-danger', 'data-confirm' => Yii::t('yii', 'Are you sure you want to delete this item?'), 'data-method' => 'post']);
                            }
                        ]
                    ]
                ]
            ]) ?>
        </div>
    </div>
</div>