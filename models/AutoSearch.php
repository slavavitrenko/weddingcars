<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Auto;

/**
 * AutoSearch represents the model behind the search form about `app\models\Auto`.
 */
class AutoSearch extends Auto
{

    public $fio;
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'user_id', 'retro', 'bus_type'], 'integer'],
            [['name', 'type', 'brand', 'model', 'year', 'color', 'body', 'fio'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Auto::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $dataProvider->sort->attributes['fio'] = [
            'asc' => ['user.fio' => SORT_ASC],
            'desc' => ['user.fio' => SORT_DESC],
        ];

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->joinWith('user');

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'user_id' => $this->user_id,
            'year' => $this->year,
            'retro' => $this->retro,
            'bus_type' => $this->bus_type,
            'brand' => $this->brand,
            'model' => $this->model,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'type', $this->type])
            // ->andFilterWhere(['like', 'brand', $this->brand])
            // ->andFilterWhere(['like', 'model', $this->model])
            ->andFilterWhere(['like', 'color', $this->color])
            ->andFilterWhere(['like', 'body', $this->body]);

            if(!Yii::$app->user->can('manager') && !Yii::$app->user->can('admin')){
                $query->andFilterWhere(['auto.user_id' => Yii::$app->user->identity->id]);
            }

        $query->andFilterWhere(['like', 'user.username', $this->fio])
        ->orFilterwhere(['like', 'user.fio', $this->fio]);;

        return $dataProvider;
    }
}
