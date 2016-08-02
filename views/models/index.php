<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
use kartik\select2\Select2;
use app\models\Brands;
use yii\helpers\ArrayHelper;


$this->title = Yii::t('app', 'Models');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="models-index">

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
                [
                    'attribute' => 'brand_id',
                    'value' => 'brand.name',
                    'filter' => Select2::widget([
                            'model' => $searchModel,
                            'attribute' => 'brand_id',
                            'data' => ArrayHelper::map(Brands::find()->all(), 'id', 'name'),
                            'options' => ['placeholder' => Yii::t('app', 'Choose...')],
                            'pluginOptions' => ['allowClear' => true]
                        ])
                ],

                ['class' => 'yii\grid\ActionColumn', 'template' => '{update} {delete}'],
            ],
        ]); ?>
    <?php Pjax::end(); ?>
</div>
