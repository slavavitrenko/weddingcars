<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel app\models\search\AccessLog */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Access Logs');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="access-log-index">

    <h1><?= Html::encode($this->title) ?></h1>

<?php Pjax::begin(); ?>    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'action',
            'user_id',
            'item_id',
            [
                'attribute' => 'changed',
                'value' => function($model){
                    return mb_substr($model->changed, 0, 300, 'utf-8');
                }
            ],
            // 'attributes:ntext',
            // 'model_class',
            // 'created_at',

            ['class' => 'yii\grid\ActionColumn', 'template' => '{view}'],
        ],
    ]); ?>
<?php Pjax::end(); ?></div>
