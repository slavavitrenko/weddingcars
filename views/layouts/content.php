<?php
use yii\widgets\Breadcrumbs;
use dmstr\widgets\Alert;

?>
<div class="content-wrapper">
    <section class="content" id='main-layout'>
    <?= Alert::widget() ?>
    <?= $content ?>
	<div class="pull-right">
    	<?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
	</div>
    </section>
</div>

<footer class="main-footer">
    <div class="pull-right hidden-xs">
        <b></b>
    </div>
    <strong><?=YII_DEBUG ? Yii::t('app', 'Development mode') : ''?></strong>
</footer>