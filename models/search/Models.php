<?php

namespace app\models\search;

use Yii;
use yii\base\Model;
use app\models\Models as BaseModels;
use yii\data\ActiveDataProvider;


class Models extends BaseModels
{

    public function rules()
    {
        return [
            [['id', 'brand_id'], 'integer'],
            [['name'], 'safe'],
        ];
    }

    public function scenarios()
    {
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = BaseModels::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'sort' => [
                'attributes' => [
                    'brand_id' => [
                        'asc' => ['brands.id' => SORT_ASC],
                        'desc' => ['brands.id' => SORT_DESC],
                    ],
                    'name' => [
                        'asc' => ['models.name' => SORT_ASC],
                        'desc' => ['models.name' => SORT_DESC],
                    ]
                ]
            ],
        ]);

        $this->load($params);

        if (!$this->validate()) {
            return $dataProvider;
        }

        $query->joinWith('brand');

        $query->andFilterWhere([
            'id' => $this->id,
            'brand_id' => $this->brand_id,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name]);

        return $dataProvider;
    }
}
