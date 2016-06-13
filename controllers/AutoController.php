<?php

namespace app\controllers;

use Yii;
use app\models\Auto;
use app\models\AutoSearch;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;
use app\models\Images;

use yii\helpers\Json;

class AutoController extends \app\base\Controller
{

    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    public function actionIndex()
    {
        $searchModel = new AutoSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    public function actionCreate()
    {
        $model = new Auto();
        $model->type = 'car';
        $model->body = 'car';

        if ($model->load(Yii::$app->request->post()) && $model->save()) {

            $this->saveImages(UploadedFile::getInstances($model, 'images'), $model->id);

            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    protected function findModel($id)
    {
        if (($model = Auto::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    public function actionModels() {
        $out = [];
        if (isset($_POST['depdrop_parents'])) {
            $id = end($_POST['depdrop_parents']);
            $list = \app\models\Models::find()->andWhere(['brand_id'=>$id])->asArray()->all();
            $selected  = null;
            if ($id != null && count($list) > 0) {
                $selected = '';
                foreach ($list as $i => $model) {
                    $out[] = ['id' => $model['id'], 'name' => $model['name']];
                    if ($i == 0) {
                        $selected = $model['id'];
                    }
                }
            // Shows how you can preselect a value
                echo Json::encode(['output' => $out, 'selected'=>$selected]);
                return;
            }
        }
        echo Json::encode(['output' => '', 'selected'=>'']);
    }

    protected function saveImages($images, $car_id){
        foreach($images as $image){
            $date = date('Y-m-d_h:i:s');
            $filename = mb_substr(str_replace(["]", "[", "(", ")", " ", "\t", "\n"], '', $image->baseName), 0, 20);
            if($image->saveAs('uploads/cars/' . $filename . $car_id . '_' . $date . '.' . $image->extension)){
                $imageModel = new Images;
                $imageModel->car_id = $car_id;
                $imageModel->path = $filename . $car_id . '_' . $date . '.' . $image->extension;
                $imageModel->save();
            }
        }
    }
}
