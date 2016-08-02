<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel app\models\search\Pages */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Pages');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="pages-index">

    <h1>
        <?= Html::a('<i class="glyphicon glyphicon-plus"></i>', ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::encode($this->title) ?>
    </h1>

    <p>
    </p>
    <?php Pjax::begin(); ?>
        <?= GridView::widget([
            'layout'=>"{items}\n{pager}\n{summary}",
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                // ['class' => 'yii\grid\SerialColumn'],

                // 'id',
                'title:ntext',
                // 'text:ntext',
                [
                    'attribute' => 'active',
                    'value' => function($model){ return Yii::t('app', $model->active ? 'Yeap' : 'Nope'); },
                    'filter' => ['1' => Yii::t('app', 'Yeap'), '0' => Yii::t('app', 'Nope')]
                ],

                ['class' => 'yii\grid\ActionColumn'],
            ],
        ]); ?>
    <?php Pjax::end(); ?>
</div>
