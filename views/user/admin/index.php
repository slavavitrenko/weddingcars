<?php

use dektrium\user\models\UserSearch;
use yii\data\ActiveDataProvider;
use yii\grid\GridView;
use yii\helpers\Html;
use yii\jui\DatePicker;
use yii\web\View;
use yii\widgets\Pjax;
use yii\helpers\Url;

$this->title = Yii::t('user', 'Users');
$this->params['breadcrumbs'][] = $this->title;

$js = '
$(document).on("click", ".ajax-btn", function(e){
    e.preventDefault();
    var button = $(this);
    $.get(
        button.attr("value"),
        function(data){
            if(data == 1){
                $.pjax.reload({container: "#users-container"});
            }
        });
});
';

$this->registerJs($js, \yii\web\View::POS_READY);

?>
    <h1>
        <?= Html::a('<i class="glyphicon glyphicon-plus"></i>', ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::encode($this->title) ?>
    </h1>

<?php // Pjax::begin(['id' => 'users-container']) ?>

<?= GridView::widget([
    'dataProvider' 	=> $dataProvider,
    'filterModel'  	=> $searchModel,
    'layout'  		=> "{items}\n{pager}\n{summary}",
    'columns' => [
        'username',
        'email:email',
        [
            'attribute' => 'role',
            'format' => 'raw',
            'filter' => Html::activeDropdownList($searchModel, 'role', [
                        'admin' => Yii::t('app', 'Admin'),
                        // 'manager' => Yii::t('app', 'Manager'),
                        'driver' => Yii::t('app', 'Driver'),
                        'client' => Yii::t('app', 'Client'),
                        'partner' => Yii::t('app', 'Partner')
                    ],
                    [
                        'class' => 'form-control',
                        'prompt' => Yii::t('app', 'Choose...')
            ]),
            'value' => function($model){
                if($model->type == 'driver'){return $model->partner == '1' ? Yii::t('app', 'Partner') : Yii::t('app', 'Driver');}
                return '<div class="btn-group">' .
                Html::button('а', ['class' => $model->role == 'admin' ? 'btn btn-info btn-sm' : 'btn btn-success btn-sm ajax-btn', 'value' => Url::to(['/user/admin/change-role', 'id' => $model->id, 'role' => 'admin'])])
                .
                // Html::button('м', ['class' => $model->role == 'manager' ? 'btn btn-info btn-sm' : 'btn btn-success btn-sm ajax-btn', 'value' => Url::to(['/user/admin/change-role', 'id' => $model->id, 'role' => 'manager'])])
                // .
                Html::button('к', ['class' => $model->role == 'client' ? 'btn btn-info btn-sm' : 'btn btn-success btn-sm ajax-btn', 'value' => Url::to(['/user/admin/change-role', 'id' => $model->id, 'role' => 'client'])])
                .
                '</div>';
            }
        ],
        // [
        //     'attribute' => 'registration_ip',
        //     'value' => function ($model) {
        //         return $model->registration_ip == null
        //             ? '<span class="not-set">' . Yii::t('user', '(not set)') . '</span>'
        //             : $model->registration_ip;
        //     },
        //     'format' => 'html',
        // ],
        // [
        //     'attribute' => 'created_at',
        //     'value' => function ($model) {
        //         if (extension_loaded('intl')) {
        //             return Yii::t('user', '{0, date, MMMM dd, YYYY HH:mm}', [$model->created_at]);
        //         } else {
        //             return date('Y-m-d G:i:s', $model->created_at);
        //         }
        //     },
        //     'filter' => DatePicker::widget([
        //         'model'      => $searchModel,
        //         'attribute'  => 'created_at',
        //         'dateFormat' => 'php:Y-m-d',
        //         'options' => [
        //             'class' => 'form-control',
        //         ],
        //     ]),
        // ],
        // [
        //     'header' => Yii::t('user', 'Confirmation'),
        //     'value' => function ($model) {
        //         if ($model->isConfirmed) {
        //             return '<div class="text-center"><span class="text-success">' . Yii::t('user', 'Confirmed') . '</span></div>';
        //         } else {
        //             return Html::a(Yii::t('user', 'Confirm'), ['confirm', 'id' => $model->id], [
        //                 'class' => 'btn btn-sm btn-success btn-block',
        //                 'data-method' => 'post',
        //                 'data-pjax' => 0,
        //                 'data-confirm' => Yii::t('user', 'Are you sure you want to confirm this user?'),
        //             ]);
        //         }
        //     },
        //     'format' => 'raw',
        //     'visible' => Yii::$app->getModule('user')->enableConfirmation,
        // ],
        [
            'attribute' => 'score',
            'format' => 'raw',
            'value' => function($model){
                if($model->partner == '1'){
                    return $model->score > '0' ? $model->score . ' ' . Html::a('<i class="glyphicon glyphicon-ok"></i>', ['pay', 'id' => $model->id], ['class' => 'btn btn-sm btn-primary', 'data-method' => 'post']) : ''; 
                }else{
                    return '';
                }
            }
        ],
        [
            'header' => Yii::t('user', 'Block status'),
            'value' => function ($model) {
                if ($model->isBlocked) {
                    return Html::a(Yii::t('user', 'Unblock'), ['block', 'id' => $model->id], [
                        'class' => 'btn btn-sm btn-success btn-block',
                        'data-method' => 'post',
                        'data-pjax' => 0,
                        'data-confirm' => Yii::t('user', 'Are you sure you want to unblock this user?'),
                    ]);
                } else {
                    return Html::a(Yii::t('user', 'Block'), ['block', 'id' => $model->id], [
                        'class' => 'btn btn-sm btn-danger btn-block',
                        'data-method' => 'post',
                        'data-pjax' => 0,
                        'data-confirm' => Yii::t('user', 'Are you sure you want to block this user?'),
                    ]);
                }
            },
            'format' => 'raw',
        ],
        [
            'class' => 'yii\grid\ActionColumn',
            'template' => '<div class="btn-group">{update} {delete}</div>',
            'buttons' => [
                'update' => function($url, $model, $key){return Html::a('<i class="glyphicon glyphicon-pencil"></i>', ['update', 'id' => $key], ['class' => 'btn btn-sm btn-success', 'data-pjax' => 0]);},
                'delete' => function($url, $model, $key){return Html::a('<i class="glyphicon glyphicon-trash"></i>', ['delete', 'id' => $key], ['class' => 'btn btn-sm btn-danger', 'data-pjax' => 0, 'data-method' => 'post', 'data-confirm' => Yii::t('yii', 'Are you sure you want to delete this item?')]);},
            ]
        ],
    ],
]); ?>

<?php // Pjax::end() ?>
