<?php

$this->title = Yii::t('app', 'Checkout');

?>

<?=\pistol88\liqpay\widgets\PaymentForm::widget([
    'autoSend' => true,
    'orderModel' => $model,
    'description' => 'Оплата заказа'
]);?>