<?php

namespace app\models\user;

use yii;
use dektrium\user\Finder;
use yii\data\ActiveDataProvider;

class UserSearch extends \dektrium\user\models\UserSearch
{

    public $role;
    public $score;

    public function __construct(Finder $finder, $config = [])
    {
        $this->finder = $finder;
        parent::__construct($finder, $config);
    }

    public function rules()
    {
        return [
            'fieldsSafe' => [['username', 'email', 'registration_ip', 'created_at', 'role'], 'safe'],
            'createdDefault' => ['created_at', 'default', 'value' => null],
        ];
    }

    public function attributeLabels()
    {
        return [
            'username'        => Yii::t('user', 'Username'),
            'email'           => Yii::t('user', 'Email'),
            'created_at'      => Yii::t('user', 'Registration time'),
            'registration_ip' => Yii::t('user', 'Registration ip'),
            'score'           => Yii::t('app', 'Score'),
        ];
    }

    public function search($params)
    {
        $query = $this->finder->getUserQuery();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'sort' => ['defaultOrder' => ['id' => SORT_DESC]]
        ]);

        $query->joinWith('assignment');

        $dataProvider->sort->attributes['role'] = [
            'asc' => ['auth_assignment.item_name' => SORT_ASC],
            'desc' => ['auth_assignment.item_name' => SORT_DESC],
        ];

        $this->load($params);

        if (!$this->validate()) {
            return $dataProvider;
        }

        $query->andFilterWhere(['like', 'username', $this->username])
        ->orFilterWhere(['like', 'fio', $this->username]);

        switch($this->role){
            case 'driver':
            $query->andFilterWhere(['user.type' => 'driver', 'user.partner' => ['0', 'null']]);
            break;

            case 'client':
            $query->andFilterWhere(['user.type' => 'client']);
            break;

            case 'partner':
            $query->andFilterWhere(['user.partner' => '1']);
            break;

            case 'manager':
            $query->andFilterWhere(['auth_assignment.item_name' => 'manager']);
            break;

            case 'admin':
            $query->andFilterWhere(['auth_assignment.item_name' => 'admin']);
            break;
        }

        if ($this->created_at) {
            $date = strtotime($this->created_at);
            $query->andFilterWhere(['between', 'user.created_at', $date, $date + 3600 * 24]);
        }

        $query->andFilterwhere(['NOT IN', 'id', [Yii::$app->user->identity->id]]);

        $query->andFilterWhere(['like', 'username', $this->username])
            ->andFilterWhere(['like', 'email', $this->email])
            ->andFilterWhere(['registration_ip' => $this->registration_ip]);

        return $dataProvider;
    }
}