<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel app\models\OrdersSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Orders');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="orders-index">

    <?php Pjax::begin(); ?>
    
    <h1>
        <?= Html::a('<i class="glyphicon glyphicon-plus"></i>', ['create'], ['class' => 'btn btn-success']); ?>
        <?= Html::encode($this->title) ?>
    </h1>

        <?= GridView::widget([
            'layout'=>"{items}\n{pager}\n{summary}",
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                // ['class' => 'yii\grid\SerialColumn'],

                // 'id',
                'user_id',
                'car_id',
                'city',
                'datetime:datetime',
                // 'hours',
                // 'city_out',
                // 'out_km',
                // 'route:ntext',
                // 'description:ntext',
                // 'paid',
                // 'confirmed',
                // 'created_at',

                ['class' => 'yii\grid\ActionColumn', 'template' => '{view} {delete}'],
            ],
        ]); ?>
    <?php Pjax::end(); ?>
</div>
