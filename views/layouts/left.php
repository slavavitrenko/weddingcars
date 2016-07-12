<?php

$js = '

function getContent(url, addEntry, link) {
    $.ajax(url)
    .done(function( data ) {
        window.scrollTo(0,1);
        $("#main-layout").html(data);
        $("title").html($(".main-title").html());
        if(addEntry == true) {
            history.pushState(null, null, url); 
        }
    })
    .error(function(data){
        ' . ((YII_ENV_DEV) ? ('$("#main-layout").html(data.responseText);') : ('window.location = url;')) . '
    });
}

window.addEventListener("popstate", function(e) {
    getContent(location.href, false);
});

$(document).on("click", "a", function(e){
    var link = $(this);
    var href = $(this).attr("href");
    if(link.attr("data-page")){
        return;
    }
    if(link.attr("data-confirm")){
        if(confirm(link.attr("data-confirm")) == false){
            return false;
        }
    }

    if(link.attr("data-method") == "post"){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: href,
            data: {},
            success: function(data){
                getContent(data, true);
            },
            error: function(e){
                console.log(e);
            }
        });
        return false;
    }

    if( 
        href
        && !~href.indexOf("sort")
        && !~href.indexOf("#")
        && !~href.indexOf("mailto")
        && !~href.indexOf("://")
        && !~href.indexOf("delete")
        && !~href.indexOf("uploads")
        && !~href.indexOf("debug")
        ){
        e.preventDefault();
        getContent(location.protocol + "//" + location.host + $(this).attr("href"), true);
        $("#main-navbar .active").removeClass("active");
        $(this).parent().addClass("active");
        $("body").removeClass("sidebar-open");
        return;
    }
    else{
        return;
    }
});

$(document).on("beforeSubmit", "form", function(){
    var form = $(this);
    if(form.attr("data-type") == "self"){
        return false;
    }
    $.ajax({
        url: form.attr("action"),
        data: form.serialize(),
        method: form.attr("method"),
        complete: function(data){
            if($.parseJSON(data.responseText).length > 2){
                getContent($.parseJSON(data.responseText), true);
                $(".modal-backdrop").remove();
            }
        }
    });
    return false;
});

';

$this->registerJs($js, \yii\web\View::POS_READY);

$items = [];

// $items[] = ['label' => Yii::t('app', 'Home'), 'icon' => 'fa fa-home', 'url' => ['/']];

if(Yii::$app->user->can('manager')){
    $items[] = ['label' => Yii::t('app', 'Autos'), 'url'=> ['/auto/index'], 'icon' => 'fa fa-car'];
    $items[] = ['label' => Yii::t('user', 'Users'), 'url' => ['/user/admin'], 'icon' => 'fa fa-group'];
    $items[] = ['icon' => 'fa fa-tachometer', 'label' => Yii::t('app', 'Settings'), 'url' => '#', 'items' => [
        ['label' => Yii::t('app', 'Brands'), 'icon' => 'fa fa-car', 'url' => ['/brands/index']],
        ['label' => Yii::t('app', 'Models'), 'icon' => 'fa fa-bars', 'url' => ['/models/index']],
        ['label' => Yii::t('app', 'Rates'), 'icon' => 'fa fa-money', 'url' => ['/rate/index']],
        ['label' => Yii::t('app', 'Site Settings'), 'icon' => 'fa fa-cogs', 'url' => ['/settings']]
    ]];
}
if(Yii::$app->user->identity->type == 'driver'){
    $items[] = ['label' => yii::t('app', 'My autos'), 'icon' => 'fa fa-car', 'url' => ['/auto/index']];
}

$items[] = ['label' => Yii::t('app', 'My settings'), 'icon' => 'fa fa-user', 'url' => '#', 'items' => [
    ['label' => Yii::t('user', 'Account'), 'url' => ['/user/settings/account']],
    ['label' => Yii::t('user', 'Profile'), 'url' => ['/user/settings/profile']],
    ['label' => Yii::t('user', 'Networks'), 'url' => ['/user/settings/networks']],
]];

?>

<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="<?=Yii::$app->user->identity->profile->getAvatarUrl(50); ?>" class="img-circle" alt="User Image"/>
            </div>
            <div class="pull-left info">
                <p><?=Yii::$app->user->identity->username; ?></p>
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
