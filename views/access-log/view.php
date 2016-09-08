<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\AccessLog */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Access Logs'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="access-log-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <?php print_r(json_decode($model->changed)); die();?>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'action',
            'user_id',
            'item_id',
            [
                'attribute' => 'changed',
                'value' => function($model){
                    return json_decode($model->changed);
                }
            ],
            'attributes:ntext',
            'model_class',
            'created_at',
        ],
    ]) ?>

</div>
