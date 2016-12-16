<?php

use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\DetailView;
use yii\grid\GridView;
use yii\bootstrap\Modal;
use yii\widgets\Pjax;


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
        <?php Pjax::begin(['id' => 'auto-container']); ?>
    <?php
        $canChange = Yii::$app->user->can('manager');
        echo Html::a((Yii::t('app', $model->checked ? 'Checked' : 'Not checked')), false, ['class' => ('pjax-btn btn ' . ($canChange ? ' ' : ' disabled ')) . ($model->checked ? 'btn-success' : 'btn-danger'), 'value' => Url::to([($model->checked ? 'uncheck' : 'check'), 'id' => $model->id]), 'data-container' => 'auto-container', 'data-pjax' => 0]);
    ?>
        <?=Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']); ?>
        <?= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('yii', 'Are you sure you want to delete this item?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>
    <div class="row">
        <div class="col-sm-12">
            <?= DetailView::widget([
                'model' => $model,
                'attributes' => [
                    // 'id',
                    // 'user_id',
                    // 'name',
                    // [
                    //     'attribute' => 'type',
                    //     'value' => Yii::t('app', ucfirst($model->type)),
                    //     'visible' => $model->type != 'bus'
                    // ],
                    // [
                    //     'attribute' => 'bus_type',
                    //     'value' => Yii::t('app', ucfirst($model->bus_type)),
                    //     'visible' => $model->type == 'bus'
                    // ],
                    // [
                    //     'attribute' => 'body',
                    //     'value' => Yii::t('app', ucfirst($model->body)),
                    //     'visible' => $model->type != 'bus'
                    // ],
                    [
                        'attribute' => Yii::t('app', 'Check Status'),
                        'value' => Html::tag('span', Yii::t('app', $model->checked ? 'Checked' : 'Not checked'), ['class' => 'label' . ($model->checked ? ' label-success ' : ' label-danger')]),
                        'format' => 'raw',
                    ],
                    [
                        'attribute' => Yii::t('app', 'Category'),
                        'value' => $model->category->name,
                        'header' => Yii::t('app', 'Category')
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
                <div class="col-sm-4 well">
                    <?=Html::a('<i class="glyphicon glyphicon-remove"></i>', ['delete-image', 'id' => $picture->id], ['class' => 'btn btn-xs btn-danger delete-button', 'data-method' => 'post', 'data-confirm' => Yii::t('yii', 'Are you sure you want to delete this item?')]); ?>
                    <?=Html::img($picture->src, ['class' => 'img-responsive']); ?>
                </div>
            <?php endforeach; ?>
            </div>
        <?php endif; ?>
        </div>
    </div>
    <?php Pjax::end();?>
</div>