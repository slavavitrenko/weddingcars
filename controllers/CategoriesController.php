<?php

namespace app\controllers;

use Yii;
use app\models\Categories;
use app\models\CategoriesSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
// Image manipulation
use yii\imagine\Image;
use Imagine\Image\Box;
use yii\web\UploadedFile;
use yii\helpers\Url;
use yii\filters\AccessControl;


class CategoriesController extends Controller
{
    use \app\traits\AjaxTrait;

    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                        'matchCallback' => function () {
                            return (Yii::$app->user->can('admin') or Yii::$app->user->can('manager'));
                        },
                    ],
                ],
            ],
        ];
    }

    public function actionIndex()
    {
        $searchModel = new CategoriesSearch();
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
        $model = new Categories();

        if ($model->load(Yii::$app->request->post())) {
                
                $model->picture = $this->saveFile(UploadedFile::getInstance($model, 'picture'), $model->id);
                $model->save();

            return $this->redirect(['index'], 302, false);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    protected function findModel($id)
    {
        if (($model = Categories::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

    protected function saveFile($image, $model_id){
            
        $date = date('Y-m-d_h:i:s');
        $filename = mb_substr(str_replace(["]", "[", "(", ")", " ", "\t", "\n"], '', $image->baseName), 0, 20);

        if($image->saveAs('uploads/categories/' . $filename . $model_id . '_' . $date . '.' . $image->extension)) {

            // Обрезка картинки
            $fullname = Yii::getAlias('@webroot') . '/uploads/categories/' . $filename . $model_id . '_' . $date . '.' . $image->extension;
            $imagine = Image::getImagine()
            ->open($fullname)
            ->thumbnail(new Box(350, 350))
            ->save($fullname, ['quality' => 95]);

            return 'uploads/categories/' . $filename . $model_id . '_' . $date . '.' . $image->extension;
        }

        return false;
    }

}
