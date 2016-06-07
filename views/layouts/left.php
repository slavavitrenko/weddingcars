<?php

$js = '

window.addEventListener("popstate", function(e) {
    getContent(location.pathname, false);
});

$("a").on("click", function(e){
    var href = $(this).attr("href");
    if(href && !~href.indexOf("#") && !~href.indexOf("mailto")){
        e.preventDefault();
        getContent($(this).attr("href"), true);
        $("#main-navbar .active").removeClass("active");
        $(this).parent().addClass("active");
        $("body").removeClass("sidebar-open");
        return;
    }
});

function getContent(url, addEntry) {
    $.ajax(url)
    .done(function( data ) {
        $("#main-layout").html(data);
        $("title").html($(".main-title").html());
        if(addEntry == true) {
            history.pushState(null, null, url); 
        }
    })
    .error(function(data){
        ' . ((YII_ENV_DEV) ? ('$("#main-layout").html(data.responseText);') : ('console.log(data.responseText); window.location = url;')) . '
    });
}
';

$this->registerJs($js, \yii\web\View::POS_READY);

$items = [];

$items[] = ['label' => Yii::t('app', 'Home'), 'icon' => 'fa fa-home', 'url' => ['/']];
$items[] = ['label' => Yii::t('app', 'Profile'), 'icon' => 'fa fa-user', 'url' => ['/user/settings/account']];

if(Yii::$app->user->can('manager')){
    $items[] = ['label' => Yii::t('user', 'Users'), 'url' => ['/user/admin'], 'icon' => 'fa fa-group'];
}

?>

<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="<?= $directoryAsset ?>/img/user2-160x160.jpg" class="img-circle" alt="User Image"/>
            </div>
            <div class="pull-left info">
                <p><?=Yii::$app->user->identity->username; ?></p>

                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>

        <?= dmstr\widgets\Menu::widget(
            [
                'options' => ['class' => 'sidebar-menu', 'id' => 'main-navbar'],
                'items' => $items,
            ]
        ) ?>
    </section>
</aside>
