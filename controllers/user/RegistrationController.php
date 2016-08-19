<?php

namespace app\controllers\user;

use Yii;
use dektrium\user\Finder;
use app\models\user\User;
use app\models\user\RegistrationForm;
use yii\web\Response;
use yii\widgets\ActiveForm;
use yii\base\Model;
use yii\web\NotFoundHttpException;


class RegistrationController extends \dektrium\user\controllers\RegistrationController
{

    use \app\traits\AjaxTrait;

	public function init(){
		$this->layout = '@app/views/layouts/frontend/frontend';
		return parent::init();
	}

    public function actionRegister()
    {
        $model = Yii::createObject(RegistrationForm::className());

        $this->performAjaxValidation($model);

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
        	$userId = $model->register(false);
        	Yii::$app->user->login(User::findOne($userId), 0);
        	return $this->redirect(['/orders']);
        }

        return $this->render('register', [
            'model'  => $model,
            'module' => $this->module,
        ]);
    }

    public function actionConnect($code)
    {
        $account = $this->finder->findAccount()->byCode($code)->one();

        if ($account === null || $account->getIsConnected()) {
            throw new NotFoundHttpException();
        }

        /** @var User $user */
        $user = Yii::createObject([
            'class'    => User::className(),
            'scenario' => 'connect',
            'username' => $account->username,
            'email'    => $account->email,
        ]);

        $this->performAjaxValidation($user);

        if ($user->load(Yii::$app->request->post()) && $user->create()) {
            $account->connect($user);
            $this->trigger(self::EVENT_AFTER_CONNECT, $event);
            Yii::$app->user->login($user, $this->module->rememberFor);
            return $this->goBack();
        }

        return $this->render('connect', [
            'model'   => $user,
            'account' => $account,
        ]);
    }


    protected function performAjaxValidation(Model $model, $stop=true, $errors=[])
    {
        if (Yii::$app->request->post('ajax') && $model->load(Yii::$app->request->post())) {
            Yii::$app->response->format = Response::FORMAT_JSON;
            if($stop){
                echo json_encode(array_merge(ActiveForm::validate($model), $errors));
            }
            else{
                return ActiveForm::validate($model);
            }
            if($stop){Yii::$app->end();}
        }
    }

}
