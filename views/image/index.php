<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;


$this->title = Yii::t('app', 'Images');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="images-index">

    <h1>
        <?= Html::a('<i class="glyphicon glyphicon-plus"></i>', ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::encode($this->title) ?>
    </h1>


    <?php Pjax::begin(); ?>
        <?= GridView::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                // ['class' => 'yii\grid\SerialColumn'],
                // 'id',
                [
                    'attribute' => 'car_id',
                    'value' => function($model){
                        return $model->car->fullName;
                    }
                ],
                [
                    'attribute' => 'image',
                    'value' => 'path',
                ],

                ['class' => 'yii\grid\ActionColumn', 'template' => '{delete}'],
            ],
        ]); ?>
    <?php Pjax::end(); ?>
</div>
