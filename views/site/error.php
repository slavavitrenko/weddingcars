<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

$this->title = $name;
?>
<section class="order content">
    <div class="container">
      <div class="row order__layout order__layout--checkout">

      <div class="error-page col-sm-10 col-md-offset-1">
            <h2 class="headline text-info"><i class="fa fa-warning text-yellow"></i></h2>

            <div class="error-content">
                <h3><?= $name ?></h3>

                <p>
                    <?= nl2br(Html::encode($message)) ?>
                </p>

                <p>
                    The above error occurred while the Web server was processing your request.
                    Please contact us if you think this is a server error. Thank you.
                    Meanwhile, you may <a href='<?= Yii::$app->homeUrl ?>'>return to dashboard</a> or try using the search
                    form.
                </p>

            </div>
        </div>
    </div>
</div>

</section>
