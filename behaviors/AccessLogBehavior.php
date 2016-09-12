<?php

namespace app\behaviors;

use Yii;
use yii\base\Behavior;
use yii\db\ActiveRecord;
use app\models\ChangeLog;
use app\models\AccessLog;


class AccessLogBehavior extends Behavior
{

	private $entry;
	private $changed = [];
	private $attributes = [];

	public function events(){
		return [
			ActiveRecord::EVENT_AFTER_INSERT => 'createAction',
			ActiveRecord::EVENT_AFTER_UPDATE => 'updateAction',
			ActiveRecord::EVENT_AFTER_DELETE => 'deleteAction',
		];
	}

	public function createAction($event){
		$this->loadData('create');
		$this->entry->save(false);
	}

	public function updateAction($event){
		$this->loadData('update');
		$this->calculateChanges($event->changedAttributes, $this->owner->getAttributes());
		$this->entry->changed = json_encode($this->changed, true);
		$this->entry->attributes = json_encode($this->attributes, true);
		if($this->changed && $this->attributes){
			$this->entry->save(false);
		}
	}

	public function deleteAction($event){
		$this->loadData('delete');
		$this->entry->attributes = json_encode($this->owner->getAttributes(), true);
		$this->entry->save(false);
	}

	private function loadData($action){
		$model = new AccessLog;
		$model->action = $action;
		$model->user_id = !Yii::$app->user->isGuest ? Yii::$app->user->id : '0';
		$model->item_id = $this->owner->id;
		$model->model_class = $this->owner->className();
		$model->created_at = time();
		$this->entry = $model;
	}

	private function calculateChanges($changed, $attributes){
		$data = [];
		foreach($attributes as $index => $key){
			if(isset($changed[$index])){
				if($changed[$index] != $key){
					$this->changed[] = [$index => $changed[$index]];
					$this->attributes[] = [$index => $key];
				}
			}
		}
	}

}
