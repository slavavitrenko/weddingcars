<?php

namespace app\commands;


use Yii;
use app\models\Settings;
use \yii\console\Controller;
use app\models\Notifications;


class NotifyController extends Controller
{
	public function actionIndex(){
		if(($entries = Notifications::find()->all()) != false){
			foreach($entries as $entry){
				$sended = Yii::$app->mailer->compose()
		            ->setTo($entry->email)
		            ->setSubject($entry->subject)
		            ->setFrom([Settings::get('admin_email') => 'Bot'])
		            ->setTextBody($entry->text)
		            ->send();
				if($sended){
					$entry->delete();
				}
			}
		}
	}
}