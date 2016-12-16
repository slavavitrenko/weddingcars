<?php

namespace app\actions;

use yii\base\Action;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\web\Response;
use app\models\Categories;
use app\models\Auto;
use Yii;


class Yml extends Action
{
	public function run(){
        $data = Yii::$app->cache->get('yml_data');
        if(!$data){
            $data = $this->renderData();
            Yii::$app->cache->set('yml_data', $data);
        }
		header('Content-type: application/xml');
		echo $data;
	}

	private function renderData(){
		
		$response = Html::tag('name', 'WeddingCars');
		$response .= Html::tag('company', 'WeddingCars Полтава');
		$response .= Html::tag('url', 'http://weddingcars.pl.ua');
		$currencies = Html::tag('currency', false, ['id' => 'UAH', 'rate' => '1']);
		$response .= Html::tag('currencies', $currencies);

		foreach(Categories::find()->all() as $category){
			$categories .= Html::tag('category', $category->name, ['id' => $category->id]);
		}
		$response .= Html::tag('categories', $categories);

		$response .= '<offers>';
		foreach(Auto::find()->where(['checked' => '1'])->all() as $auto){
			$offer = '';
			$offer .= Html::tag('url', Url::to(['/category/view', 'id' => $auto->id], true));
			$offer .= Html::tag('price', $auto->hour_cost);
			$offer .= Html::tag('currencyId', 'UAH');
			$offer .= Html::tag('categoryId', $auto->category_id);
			foreach($auto->pictures as $picture){
				$offer .= Html::tag('picture', Url::to($picture->src, true));
			}
			$offer .= Html::tag('vendor', $auto->autoBrand->name);
			$offer .= Html::tag('model', $auto->autoModel->name);
			$response .= Html::tag('offer', $offer, ['id' => $auto->id, 'available' => 'true']);
		}
		$response .= '</offers>';


		$data = "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
		$data .= Html::tag('yml_catalog', Html::tag('shop', $response), ['date' => date('Y-m-d H:i')]);
		return $data;
	}
}