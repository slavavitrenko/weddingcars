<?php

namespace app\models;

use Yii;
use yii\base\Model;
use app\models\Orders;
use yii\helpers\ArrayHelper;
use yii\data\ActiveDataProvider;

/**
 * OrdersSearch represents the model behind the search form about `app\models\Orders`.
 */
class OrdersSearch extends Orders
{

    public function rules()
    {
        return [
            [['id', 'user_id', 'car_id', 'datetime', 'hours', 'city_out', 'km', 'paid', 'confirmed', 'created_at'], 'integer'],
            [['city', 'route', 'description'], 'safe'],
        ];
    }

    public function scenarios()
    {
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = Orders::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            $query->where('0=1');
            return $dataProvider;
        }

        $query->joinWith('car');

        $query->andFilterWhere([
            'id' => $this->id,
            'user_id' => $this->user_id,
            'car_id' => $this->car_id,
            'datetime' => $this->datetime,
            'hours' => $this->hours,
            'city_out' => $this->city_out,
            'km' => $this->km,
            'paid' => $this->paid,
            'confirmed' => $this->confirmed,
            'created_at' => $this->created_at,
        ]);

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
