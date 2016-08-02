<?php

namespace app\models\search;

use Yii;
use yii\base\Model;
use app\models\Auto as BaseAuto;
use yii\data\ActiveDataProvider;


class Auto extends BaseAuto
{

    public $fio;

    public function rules()
    {
        return [
            [['id', 'user_id', 'retro', 'bus_type'], 'integer'],
            [['name', 'type', 'year', 'color', 'body', 'fio', 'brand', 'model'], 'safe'],
        ];
    }

    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = BaseAuto::find()->joinWith('user')->joinWith('autoModel')->joinWith('autoBrand');

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $dataProvider->sort->attributes['fio'] = [
            'asc' => ['user.fio' => SORT_ASC],
            'desc' => ['user.fio' => SORT_DESC],
        ];

        $this->load($params);

        if (!$this->validate()) {
            return $dataProvider;
        }

        $query->joinWith('user');

        $query->andFilterWhere([
            'id' => $this->id,
        ]);

        $query->andFilterWhere(['like', 'models.name', $this->model]);
        $query->andFilterWhere(['like', 'brands.name', $this->brand]);
        
        $query->andFilterWhere(['like', 'user.username', $this->fio])
        ->orFilterwhere(['like', 'user.fio', $this->fio]);


            if(!Yii::$app->user->can('manager') && !Yii::$app->user->can('admin')){
                $query->andFilterWhere(['auto.user_id' => Yii::$app->user->identity->id]);
            }

        return $dataProvider;
    }
}
