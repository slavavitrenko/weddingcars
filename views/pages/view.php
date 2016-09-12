<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Pages */

$this->title = $model->title;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Pages'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>

<section class="order">
    <div class="container">
        <div class="row order__layout order__layout--checkout">

            <div class="pages-view col-md-10 col-md-offset-1">

            <div class="col-lg-offset-4 col-lg-4 col-md-offset-2 col-md-8 text-center">
                <h3 class='ourcars__title ourcars__title--page'>
                    <?php if(Yii::$app->user->can('manager')): ?>
                        <?= Html::a('<i class="glyphicon glyphicon-new-window"></i> ' . Yii::t('app', 'In New Window'), ['view', 'id' => $model->id], ['class' => 'btn btn-warning', 'target' => '_blank']); ?>
                        <?= Html::a('<i class="glyphicon glyphicon-pencil"></i>', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
                        <?= Html::a('<i class="glyphicon glyphicon-remove"></i>', ['delete', 'id' => $model->id], [
                            'class' => 'btn btn-danger',
                            'data' => [
                            'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
                            'method' => 'post',
                            ],
                            ]) ?>
                        "<?= Html::encode($this->title) ?>"
                        <?php else: ?>
                            <?=Html::encode($this->title); ?>
                        <?php endif; ?>
                    </h3>
                </div>
                <div class="col-md-12">
                    <?=$model->text; ?>
                </div>

                </div>
            </div>
        </div>
    </section>
