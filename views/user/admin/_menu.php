<?php

/*
 * This file is part of the Dektrium project
 *
 * (c) Dektrium project <http://github.com/dektrium>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use yii\bootstrap\Nav;
use yii\helpers\Html;

?>

<?php Nav::widget([
    'options' => [
        'class' => 'nav-tabs',
        'style' => 'margin-bottom: 15px',
    ],
    'encodeLabels' => false,
    'items' => [
        [
            'label'   => Yii::t('user', 'Users'),
            'url'     => ['/user/admin/index'],
        ],
        // [
        //     'label'   => Yii::t('user', 'Roles'),
        //     'url'     => ['/rbac/role/index'],
        //     'visible' => isset(Yii::$app->extensions['dektrium/yii2-rbac']),
        // ],
        // [
        //     'label' => Yii::t('user', 'Permissions'),
        //     'url'   => ['/rbac/permission/index'],
        //     'visible' => isset(Yii::$app->extensions['dektrium/yii2-rbac']),
        // ],
        [
            'label' => '<i class="glyphicon glyphicon-plus"></i>',
            'url'     => ['/user/admin/create'],
        ],
    ],
]) ?>