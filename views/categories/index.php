<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel app\models\CategoriesSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Categories');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="categories-index">

<?php Pjax::begin(); ?>

<div class="actions">
    <h1>
        <?= Html::a('<i class="glyphicon glyphicon-plus"></i>', ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::encode($this->title) ?>
    </h1>
</div>
    <?= GridView::widget([
            'layout'=>"{items}\n{pager}\n{summary}",
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                'name',
                [
                    'attribute' => 'picture',
                    'format' => 'raw',
                    'value' => function($model){
                        return Html::img('/' . $model->picture, ['class' => 'img-responsive']);
                    }
                ],

                ['class' => 'yii\grid\ActionColumn', 'template' => '{delete}'],
            ],
        ]); ?>
    <?php Pjax::end(); ?>
</div>
