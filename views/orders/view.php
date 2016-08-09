<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use yii\widgets\Pjax;


$this->title = Yii::t('app', 'Order') . ' №' . $model->id;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Orders'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="orders-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <?php if(($model->confirmed == '0') && (Yii::$app->user->can('manager') or $model->user_id == Yii::$app->user->identity->id)): ?>
        <p>
            <?= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id], [
                'class' => 'btn btn-danger',
                'data' => [
                    'pjax' => 0,
                    'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
                    'method' => 'post',
                ],
            ]) ?>
        </p>
    <?php endif; ?>
    <?php if($model->car->user_id == Yii::$app->user->identity->id && $model->confirmed == '0'): ?>
        <p>
            <?=Html::a(Yii::t('app', 'Confirm'), ['confirm', 'id' => $model->id], [
                'class' => 'btn btn-primary',
                'data' => [
                    'pjax' => 0,
                    'method' => 'post'
                ]
            ]); ?>
        </p>
    <?php endif; ?>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            // 'id',
            [
                'attribute' => 'user_id',
                'format' => 'raw',
                'value' => $model->user->fio . '<br>' . Html::a($model->user->phone, 'tel:' . $model->user->phone, ['class' => 'lead']) . ' (' . $model->user->email . ')',
                'visible' =>
                Yii::$app->user->can('manager')
                or
                ($model->car->user_id == Yii::$app->user->identity->id && $model->confirmed == '1')
            ],
            [
                'attribute' => 'car_id',
                'format' => 'raw',
                'value' => Html::a($model->car->autoBrand->name . ' ' . $model->car->autoModel->name, ['/category/view', 'id' => $model->car_id], ['target' => '_blank', 'data-pjax' => 0]),
                // 'visible' => $model->user_id == Yii::$app->user->identity->id,
            ],
            'region.name',
            [
                'attribute' => 'datetime',
                'format' => 'datetime'
                // 'value' => Yii::t('app', '{0, date, MMMM dd, YYYY HH:mm}', [$model->datetime])
            ],
            'hours',
            [
                'attribute' => 'city_out',
                'value' => Yii::t('app', $model->city_out == '1' ? 'Yeap' : 'Nope')
            ],
            'km',
            'route:ntext',
            'description:ntext',
            [
                'attribute' => 'paid',
                'value' => Yii::t('app', in_array($model->paid, ['success', 'sandbox']) ? 'Yeap' : 'Nope')
            ],
            [
                'attribute' => 'confirmed',
                'value' => Yii::t('app', $model->confirmed == '1' ? 'Yeap' : 'Nope')
            ],
            [
                'attribute' => 'created_at',
                'value' => Yii::t('app', '{0, date, MMMM dd, YYYY HH:mm}', [$model->created_at])
            ],
        ],
    ]) ?>

</div>
