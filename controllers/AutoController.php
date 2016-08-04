<?php

namespace app\controllers;

use Yii;
use app\models\Auto;
use yii\web\Response;
use app\models\Images;
use app\models\AutoRate;
use yii\web\UploadedFile;
use yii\widgets\ActiveForm;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\data\ActiveDataProvider;
use yii\web\NotFoundHttpException;
use yii\web\ForbiddenHttpException;
use app\models\search\Auto as AutoSearch;
use yii\helpers\Json;


class AutoController extends \yii\web\Controller
{

    use \app\traits\AjaxTrait;

    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                    'delete-image' => ['POST'],
                ],
            ],
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                    ['actions' => ['models'], 'allow' => true],
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
        $model->retro = '0';
        $model->client_decor = '0';
        $model->decor = '0';
        // $model->type = 'car';
        // $model->body = 'car';

        $this->performAjaxValidation($model);

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

        if(!Yii::$app->user->can('manager') && $model->user_id != Yii::$app->user->identity->id){ 
            throw new NotFoundHttpException('The requested page does not exist.');
        }

        $this->performAjaxValidation($model);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {

            $this->saveImages(UploadedFile::getInstances($model, 'images'), $model->id);

            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    public function actionDelete($id)
    {
        $model = $this->findModel($id);
        
        if(!Yii::$app->user->can('manager') && $model->user_id != Yii::$app->user->identity->id){ 
            throw new NotFoundHttpException('The requested page does not exist.');
        }

        $model->delete();

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

    public function actionCheck($id){
        Yii::$app->response->format = 'json';
        if(!Yii::$app->user->can('admin')){return false;}
        $model = $this->findModel($id);
        $model->checked = 1;
        return $model->save(false);
    }

    public function actionUncheck($id){
        Yii::$app->response->format = 'json';
        if(!Yii::$app->user->can('admin')){return false;}
        $model = $this->findModel($id);
        $model->checked = 0;
        return $model->save(false);
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

    public function actionDeleteImage($id){
        $image = Images::findOne($id);
        if(!Yii::$app->user->can('manager') && $model->car->user_id != Yii::$app->user->id){
            throw new ForbiddenHttpException(Yii::t('app', 'Forbidden'));
        }
        $auto_id = $image->car_id;
        $image->delete();
        return $this->redirect(['view', 'id' => $auto_id]);
    }

    // protected function performAjaxValidation($model)
    // {
    //     if (Yii::$app->request->isAjax && !Yii::$app->request->isPjax) {
    //         if ($model->load(Yii::$app->request->post())) {
    //             Yii::$app->response->format = Response::FORMAT_JSON;
    //             echo json_encode(ActiveForm::validate($model));
    //             Yii::$app->end();
    //         }
    //     }
    // }
}
