<?php

namespace app\models\search;

use Yii;
use yii\base\Model;
use app\models\Brands as BaseBrands;
use yii\data\ActiveDataProvider;


class Brands extends BaseBrands
{

    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['name', 'picture'], 'safe'],
        ];
    }

    public function scenarios()
    {
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = BaseBrands::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {

            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'picture', $this->picture]);

        return $dataProvider;
    }
}
