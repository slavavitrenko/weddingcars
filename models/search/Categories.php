<?php

namespace app\models\search;

use Yii;
use yii\base\Model;
use app\models\Categories as BaseCategories;
use yii\data\ActiveDataProvider;


class Categories extends BaseCategories
{

    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['name'/*, 'picture'*/], 'safe'],
        ];
    }

    public function scenarios()
    {
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = BaseCategories::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        // $dataProvider->sort->attributes['picture'] = [];

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
