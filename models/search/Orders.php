<?php

namespace app\models\search;

use Yii;
use yii\base\Model;
use yii\helpers\ArrayHelper;
use yii\data\ActiveDataProvider;
use app\models\Orders as BaseOrders;


class Orders extends BaseOrders
{

    public function rules()
    {
        return [
            [['car_id', 'hours', 'city_out', 'km', 'confirmed', 'created_at'], 'integer'],
            [['city', 'route', 'description', 'paid', 'user_id'], 'safe'],
        ];
    }

    public function scenarios()
    {
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = BaseOrders::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->joinWith('car');
        $query->joinWith('user');
        $query->joinWith('autoModel');
        $query->joinWith('autoBrand');

        $query->andFilterWhere([
            'id' => $this->id,
            // 'user_id' => $this->user_id,
            'car_id' => $this->car_id,
            // 'datetime' => $this->datetime,
            // 'hours' => $this->hours,
            // 'city_out' => $this->city_out,
            // 'km' => $this->km,
            'paid' => $this->paid,
            'confirmed' => $this->confirmed,
            'created_at' => $this->created_at,
        ]);

        $query->andFilterWhere(['like', 'user.fio', $this->user_id]);

        $query->andFilterWhere(['like', 'city', $this->city])
            ->andFilterWhere(['like', 'route', $this->route])
            ->andFilterWhere(['like', 'description', $this->description]);

        if(!Yii::$app->user->can('manager')){
            if(Yii::$app->user->identity->type == 'client'){
                $query->andFilterWhere(['orders.user_id' => Yii::$app->user->id]);
            }
            else{
                $cars = array_merge(array_values(ArrayHelper::map(Yii::$app->user->identity->cars, 'id', 'id')), ['0']);
                $query->andFilterWhere(['IN', 'auto.id', $cars]);
            }
        }

        return $dataProvider;
    }
}
