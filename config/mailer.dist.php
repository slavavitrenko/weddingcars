<?php

return [
		'class' => 'yii\swiftmailer\Mailer',
		'viewPath' => '@app/mail',
		'useFileTransport' => false,
		'transport' => [
			'class' => 'Swift_SmtpTransport',
		]
	];