<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel app\models\AutoSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Autos');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="auto-index">

    <h1>
        <?= Html::encode($this->title) ?>
        <?= Html::a('<i class="fa fa-plus"></i>', ['/auto/create'], ['class' => 'btn btn-success']) ?>
    </h1>

<?php Pjax::begin(); ?>    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            // ['class' => 'yii\grid\SerialColumn'],
            'user_id',
            'name',
            'type',
            'brand',
            // 'model',
            // 'year',
            // 'color',
            // 'body',
            // 'retro',
            // 'bus',
            // 'bus_type',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
<?php Pjax::end(); ?></div>