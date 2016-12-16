<?php

$js = '

// $.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

function getContent(url, addEntry, link) {

    $("#main-layout").css("opacity", "0.4");

    $.get(url)
    .done(function( data ) {
        // window.scrollTo(0,1);
        $("#main-layout").css("opacity", 1);
        $("#main-layout").html(data);
        $("title").html($(".main-title").html());

        // console.clear();
        if(addEntry == true) {
            history.pushState(null, null, url); 
        }
    })
    .error(function(data){
        $("#main-layout").css("opacity", 1);
        ' . ((YII_ENV_DEV) ? ('$("#main-layout").html(data.responseText);') : ('window.location = url;')) . '
    });
}

window.addEventListener("popstate", function(e) {
    getContent(location.href, false);
});

$(document).on("click", "a", function(e){
    var link = $(this);
    if(link.attr("target")){
        return; 
    }
    if(link.attr("data-type") == "self"){
        return;
    }
    var href = $(this).attr("href");
    if(link.attr("data-page")){
        return;
    }
    if(link.attr("data-confirm")){
        e.preventDefault();
        if(confirm(link.attr("data-confirm")) == false){
            return false;
        }
    }
    
    // if(link.attr("data-pjax") == false){
    //     return;
    // }

    if(link.attr("data-method") == "post"){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: href,
            data: {},
            success: function(data){
                getContent(data, true);
                // link.parent().parent().remove();
            },
            error: function(e){
                console.log(e);
            }
        });
        return false;
    }

    if( 
        href
    && href !== "/"
        && !~href.indexOf("?sort")
        && !~href.indexOf("#")
        && !~href.indexOf("mailto:")
        && !~href.indexOf("tel:")
        && !~href.indexOf("://")
        && !~href.indexOf("delete")
        && !~href.indexOf("uploads")
        && !~href.indexOf("debug")
        && !~href.indexOf("security/auth")
        ){
        e.preventDefault();
        getContent(location.protocol + "//" + location.host + $(this).attr("href"), true);
        $("#main-navbar .active").removeClass("active");
        $(this).parent().addClass("active");
        $("body").removeClass("sidebar-open");
        return;
    }
    else{
        return true;
    }
});

$(document).on("beforeSubmit", "form", function(){
    var form = $(this);
    if(form.attr("data-type") == "self"){
        return true;
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
    // $items[] = ['label' => Yii::t('app', 'Dashboard'), 'url' => '#', 'icon' => 'fa fa-tachometer', 'items' => [
        $items[] = ['label' => Yii::t('app', 'Orders'), 'url' => ['/orders'], 'icon' => 'fa fa-usd'];
        $items[] = ['label' => Yii::t('app', 'Autos'), 'url' => ['/auto'], 'icon' => 'fa fa-car'];
    // ]];

}
if(Yii::$app->user->can('manager')){
    $items[] = ['label' => Yii::t('user', 'Users'), 'url' => ['/user/admin'], 'icon' => 'fa fa-group'];
}
// if(Yii::$app->user->can('admin')){
//     $items[] = ['label' => Yii::t('user', 'Users'), 'url' => '#', 'icon' => 'fa fa-group', 'items' => [
//         ['label' => Yii::t('user', 'Users'), 'url' => ['/user/admin'], 'icon' => 'fa fa-group'],
//         // ['label' => Yii::t('app', 'Access Log'), 'url' => ['/access-log'], 'icon' => 'fa fa-history'],
//     ]];
// }
if(Yii::$app->user->can('manager')){
    $items[] = ['icon' => 'fa fa-tachometer', 'label' => Yii::t('app', 'Settings'), 'url' => '#', 'items' => [
        ['label' => Yii::t('app', 'Pages'), 'url' => ['/pages'], 'icon' => 'fa fa-file-image-o'],
        ['label' => Yii::t('app', 'Categories'), 'url' => ['/categories'], 'icon' => 'fa fa-folder-open'],
        ['label' => YiI::t('app', 'Regions'), 'url' => ['/regions'], 'icon' => 'fa fa-folder-open'],
        ['label' => Yii::t('app', 'Brands'), 'icon' => 'fa fa-car', 'url' => ['/brands']],
        ['label' => Yii::t('app', 'Models'), 'icon' => 'fa fa-bars', 'url' => ['/models']],
        ['label' => Yii::t('app', 'Site Settings'), 'icon' => 'fa fa-cogs', 'url' => ['/settings']],
        ['label' => Yii::t('app', 'Images'), 'icon' => 'fa fa-image', 'url' => ['/image']],
    ]];
}

if(Yii::$app->user->identity->type == 'driver'){
    $items[] = ['label' => yii::t('app', 'Dashboard'), 'icon' => 'fa fa-tachometer', 'url' => '#', 'items' => [
        ['label' => Yii::t('app', 'Orders'), 'icon' => 'fa fa-usd', 'url' => ['/orders']],
        ['label' => Yii::t('app', 'My autos'), 'icon' => 'fa fa-car', 'url' => ['/auto']],
    ]];
}
if(Yii::$app->user->identity->type == 'client' && !Yii::$app->user->can('manager')){
    $items[] = ['label' => Yii::t('app', 'My Orders'), 'icon' => 'fa fa-tachometer', 'url' => ['/orders']];
}

$items[] = ['label' => Yii::t('app', 'My settings'), 'icon' => 'fa fa-user', 'url' => '#', 'items' => [
    ['label' => Yii::t('user', 'Account'), 'url' => ['/user/settings/account'], 'icon' => 'fa fa-user-secret'],
    // ['label' => Yii::t('user', 'Profile'), 'url' => ['/user/settings/profile']],
    ['label' => Yii::t('user', 'Networks'), 'url' => ['/user/settings/networks'], 'icon' => 'fa fa-share-square'],
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
