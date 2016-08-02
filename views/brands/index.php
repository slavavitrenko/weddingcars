<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel app\models\BrandsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Brands');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="brands-index">

    <?php Pjax::begin(); ?>
    
    <h1>
        <?= Html::a('<i class="glyphicon glyphicon-plus"></i>', ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::encode($this->title) ?>
    </h1>

        <?= GridView::widget([
            'layout'=>"{items}\n{pager}\n{summary}",
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                'name',
                ['class' => 'yii\grid\ActionColumn', 'template' => '{update} {delete}'],
            ],
        ]); ?>
    <?php Pjax::end(); ?>
</div>
