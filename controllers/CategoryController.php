<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\Auto;
use yii\data\ActiveDataProvider;
use app\models\Categories;
use yii\web\NotFoundHttpException;
use app\models\Comments;


class CategoryController extends Controller
{

	public function init(){
        $this->layout = '@app/views/layouts/frontend/frontend';
        return parent::init();
    }

	public function actionIndex(){

        // $searchModel = new CategoriesSearch();
        $dataProvider = new ActiveDataProvider([
        		'query' => Categories::find(),
        		'pagination' => [
        			'pageSize' => 999
        		]
        	]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
	}

	public function actionList($id){
        $categoryData = Yii::$app->cache->get('category_' . $id);
        if(!$categoryData){
            $categoryData['models'] = Auto::find()->where(['category_id' => $id, 'checked' => '1'])->joinWith(['autoModel', 'autoBrand', 'pictures'])->all();
            $categoryData['category'] = Categories::find()->joinWith('cars')->where(['categories.id' => $id])->one();
            Yii::$app->cache->set('category_' . $id, $categoryData);
        }

		return $this->render('list', ['autos' => $categoryData['models'], 'category' => $categoryData['category']]);
	}

	public function actionView($id){
        $commentModel = new Comments;
        if($commentModel->load(Yii::$app->request->post()) && $commentModel->save()){
            return $this->refresh();
        }
        $model = Yii::$app->cache->get('auto_' . $id);
        if(!$model){
            $model = Auto::find()->where(['auto.id' => $id])->joinWith(['autoBrand', 'autoModel', 'category', 'pictures', 'comments'])->one();
            Yii::$app->cache->set('auto_' . $id, $model);
        }
		if ($model !== null) {
			return $this->render('view', ['model' => $model, 'commentModel' => $commentModel]);
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
	}

}
