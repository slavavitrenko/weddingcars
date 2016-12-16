<?php

return [
		'class' => 'yii\swiftmailer\Mailer',
		'viewPath' => '@app/mail',
		'useFileTransport' => false,
		'transport' => [
			'class' => 'Swift_SmtpTransport',
			'host' => 'smtp.yandex.ru',
			'username' => 'info@weddingcars.pl.ua',
			'password' => '',
			'port' => '587',
			'encryption' => 'TLS',
		]
	];
