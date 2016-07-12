<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel app\models\RateSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Rates');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="rate-index">

    <h1>
        <?= Html::encode($this->title) ?>
        <?= Html::a('<i class="glyphicon glyphicon-plus"></i>', ['create'], ['class' => 'btn btn-success']) ?>
    </h1>
<?php Pjax::begin(); ?>    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        // 'filterModel' => $searchModel,
        'columns' => [
            // ['class' => 'yii\grid\SerialColumn'],

            // 'id',
            'name',

            [
                'class' => 'yii\grid\ActionColumn',
                'template' => '<div class="btn-group">{update} {delete}</div>',
                'buttons' => [
                    'update' => function($url, $model, $key){
                        return Html::a('<i class="glyphicon glyphicon-pencil"></i>', ['update', 'id' => $key], ['class' => 'btn btn-sm btn-primary', 'data-pjax' => 0]);
                    },
                    'delete' => function($url, $model, $key){
                        return Html::a('<i class="glyphicon glyphicon-trash"></i>', ['delete', 'id' => $key], ['class' => 'btn btn-sm btn-danger', 'data-confirm' => Yii::t('yii', 'Are you sure you want to delete this item?'), 'data-method' => 'post']);
                    }
                ]
            ],
        ],
    ]); ?>
<?php Pjax::end(); ?></div>
