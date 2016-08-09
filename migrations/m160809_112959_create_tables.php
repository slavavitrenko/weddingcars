<?php

use yii\db\Migration;

class m160809_112959_create_tables extends Migration
{
    public function up()
    {
        $tables = Yii::$app->db->schema->getTableNames();
        $dbType = $this->db->driverName;
        $tableOptions_mysql = "CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB";
        $tableOptions_mssql = "";
        $tableOptions_pgsql = "";
        $tableOptions_sqlite = "";
        /* MYSQL */
        if (!in_array('auth_assignment', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%auth_assignment}}', [
                    'item_name' => 'VARCHAR(64) NOT NULL',
                    0 => 'PRIMARY KEY (`item_name`)',
                    'user_id' => 'VARCHAR(64) NOT NULL',
                    1 => 'KEY (`user_id`)',
                    'created_at' => 'INT(11) NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('auth_item', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%auth_item}}', [
                    'name' => 'VARCHAR(64) NOT NULL',
                    0 => 'PRIMARY KEY (`name`)',
                    'type' => 'INT(11) NOT NULL',
                    'description' => 'TEXT NULL',
                    'rule_name' => 'VARCHAR(64) NULL',
                    'data' => 'TEXT NULL',
                    'created_at' => 'INT(11) NULL',
                    'updated_at' => 'INT(11) NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('auth_item_child', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%auth_item_child}}', [
                    'parent' => 'VARCHAR(64) NOT NULL',
                    'child' => 'VARCHAR(64) NOT NULL',
                    0 => 'PRIMARY KEY (`child`)',
                    1 => 'KEY (`parent`)',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('auth_rule', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%auth_rule}}', [
                    'name' => 'VARCHAR(64) NOT NULL',
                    0 => 'PRIMARY KEY (`name`)',
                    'data' => 'TEXT NULL',
                    'created_at' => 'INT(11) NULL',
                    'updated_at' => 'INT(11) NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('auto', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%auto}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'user_id' => 'INT(11) NOT NULL',
                    'name' => 'VARCHAR(255) NOT NULL',
                    'type' => 'VARCHAR(255) NULL',
                    'category_id' => 'INT(11) NOT NULL',
                    'brand' => 'VARCHAR(255) NULL',
                    'model' => 'VARCHAR(255) NULL',
                    'year' => 'YEAR(4) NOT NULL',
                    'color' => 'VARCHAR(255) NOT NULL',
                    'body' => 'VARCHAR(255) NULL',
                    'retro' => 'INT(1) NULL',
                    'bus_type' => 'VARCHAR(255) NULL',
                    'decor' => 'INT(1) NOT NULL',
                    'client_decor' => 'INT(1) NOT NULL',
                    'pass_count' => 'INT(11) NOT NULL',
                    'description' => 'TEXT NULL',
                    'hour_cost' => 'DECIMAL(7,2) NOT NULL',
                    'few_hours_cost' => 'DECIMAL(7,2) NOT NULL',
                    'outside_cost' => 'DECIMAL(7,2) NOT NULL',
                    'checked' => 'INT(1) NOT NULL',
                    'popularity' => 'INT(255) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('brands', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%brands}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'name' => 'VARCHAR(255) NOT NULL',
                    'picture' => 'VARCHAR(255) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('categories', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%categories}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'name' => 'VARCHAR(255) NOT NULL',
                    'picture' => 'VARCHAR(255) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('comments', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%comments}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'user_id' => 'INT(11) NOT NULL',
                    'auto_id' => 'INT(11) NOT NULL',
                    'rating' => 'DECIMAL(3,2) NOT NULL',
                    'text' => 'TEXT NOT NULL',
                    'created_at' => 'INT(13) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('images', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%images}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'car_id' => 'INT(11) NOT NULL',
                    'path' => 'VARCHAR(255) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('models', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%models}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'brand_id' => 'INT(11) NOT NULL',
                    'name' => 'VARCHAR(255) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('notifications', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%notifications}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'email' => 'TEXT NOT NULL',
                    'subject' => 'TEXT NOT NULL',
                    'text' => 'TEXT NOT NULL',
                    'layout' => 'TEXT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('orders', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%orders}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'cost' => 'DECIMAL(7,2) NOT NULL',
                    'partner_percent' => 'INT(3) NULL',
                    'user_id' => 'INT(11) NOT NULL',
                    'car_id' => 'INT(11) NOT NULL',
                    'city' => 'INT(11) NOT NULL',
                    'datetime' => 'TEXT NOT NULL',
                    'hours' => 'INT(13) NOT NULL',
                    'city_out' => 'INT(1) NULL',
                    'km' => 'INT(10) NOT NULL',
                    'route' => 'TEXT NOT NULL',
                    'description' => 'TEXT NULL',
                    'paid' => 'VARCHAR(25) NOT NULL',
                    'confirmed' => 'INT(1) NOT NULL',
                    'created_at' => 'INT(13) NOT NULL',
                    'order_id' => 'TEXT NULL',
                    'archive' => 'INT(1) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('pages', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%pages}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'title' => 'TEXT NOT NULL',
                    'text' => 'TEXT NOT NULL',
                    'active' => 'INT(1) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('profile', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%profile}}', [
                    'user_id' => 'INT(11) NOT NULL',
                    0 => 'PRIMARY KEY (`user_id`)',
                    'name' => 'VARCHAR(255) NULL',
                    'public_email' => 'VARCHAR(255) NULL',
                    'gravatar_email' => 'VARCHAR(255) NULL',
                    'gravatar_id' => 'VARCHAR(32) NULL',
                    'location' => 'VARCHAR(255) NULL',
                    'website' => 'VARCHAR(255) NULL',
                    'bio' => 'TEXT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('regions', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%regions}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'name' => 'VARCHAR(255) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('settings', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%settings}}', [
                    'admin_email' => 'VARCHAR(255) NOT NULL',
                    0 => 'PRIMARY KEY (`admin_email`)',
                    'liqpay_public_key' => 'TEXT NULL',
                    'liqpay_private_key' => 'TEXT NULL',
                    'vk_link' => 'TEXT NULL',
                    'fb_link' => 'TEXT NULL',
                    'in_link' => 'TEXT NULL',
                    'tw_link' => 'TEXT NULL',
                    'address' => 'TEXT NULL',
                    'phone1' => 'TEXT NULL',
                    'phone2' => 'TEXT NULL',
                    'email' => 'TEXT NULL',
                    'terms' => 'TEXT NULL',
                    'latitude' => 'TEXT NULL',
                    'longitude' => 'TEXT NULL',
                    'partner_percent' => 'INT(3) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('social_account', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%social_account}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'user_id' => 'INT(11) NULL',
                    'provider' => 'VARCHAR(255) NOT NULL',
                    'client_id' => 'VARCHAR(255) NOT NULL',
                    'data' => 'TEXT NULL',
                    'code' => 'VARCHAR(32) NULL',
                    'created_at' => 'INT(11) NULL',
                    'email' => 'VARCHAR(255) NULL',
                    'username' => 'VARCHAR(255) NULL',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('token', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%token}}', [
                    'user_id' => 'INT(11) NOT NULL',
                    0 => 'PRIMARY KEY (`user_id`)',
                    'code' => 'VARCHAR(32) NOT NULL',
                    1 => 'KEY (`code`)',
                    'created_at' => 'INT(11) NOT NULL',
                    'type' => 'SMALLINT(6) NOT NULL',
                    3 => 'KEY (`type`)',
                    ], $tableOptions_mysql);
            }
        }

        /* MYSQL */
        if (!in_array('user', $tables))  { 
            if ($dbType == "mysql") {
                $this->createTable('{{%user}}', [
                    'id' => 'INT(11) NOT NULL AUTO_INCREMENT',
                    0 => 'PRIMARY KEY (`id`)',
                    'username' => 'VARCHAR(255) NOT NULL',
                    'fio' => 'VARCHAR(255) NOT NULL',
                    'phone' => 'VARCHAR(13) NOT NULL',
                    'type' => 'VARCHAR(8) NOT NULL DEFAULT \'client\'',
                    'partner' => 'INT(1) NULL',
                    'score' => 'DECIMAL(7,2) NOT NULL DEFAULT \'0.00\'',
                    'email' => 'VARCHAR(255) NOT NULL',
                    'password_hash' => 'VARCHAR(60) NOT NULL',
                    'auth_key' => 'VARCHAR(32) NOT NULL',
                    'confirmed_at' => 'INT(11) NULL',
                    'unconfirmed_email' => 'VARCHAR(255) NULL',
                    'blocked_at' => 'INT(11) NULL',
                    'registration_ip' => 'VARCHAR(45) NULL',
                    'created_at' => 'INT(11) NOT NULL',
                    'updated_at' => 'INT(11) NOT NULL',
                    'flags' => 'INT(11) NOT NULL',
                    ], $tableOptions_mysql);
            }
        }


        $this->createIndex('idx_item_name_3495_00','auth_assignment','item_name',0);
        $this->createIndex('idx_user_id_3495_01','auth_assignment','user_id',0);
        $this->createIndex('idx_rule_name_3519_02','auth_item','rule_name',0);
        $this->createIndex('idx_type_3519_03','auth_item','type',0);
        $this->createIndex('idx_child_3538_04','auth_item_child','child',0);
        $this->createIndex('idx_user_id_359_05','auto','user_id',0);
        $this->createIndex('idx_brand_359_06','auto','brand',0);
        $this->createIndex('idx_model_359_07','auto','model',0);
        $this->createIndex('idx_category_id_359_08','auto','category_id',0);
        $this->createIndex('idx_few_hours_cost_359_09','auto','few_hours_cost',0);
        $this->createIndex('idx_hour_cost_359_10','auto','hour_cost',0);
        $this->createIndex('idx_outside_cost_359_11','auto','outside_cost',0);
        $this->createIndex('idx_popularity_359_12','auto','popularity',0);
        $this->createIndex('idx_auto_id_3652_13','comments','auto_id',0);
        $this->createIndex('idx_brand_id_369_14','models','brand_id',0);
        $this->createIndex('idx_user_id_3773_15','orders','user_id',0);
        $this->createIndex('idx_car_id_3773_16','orders','car_id',0);
        $this->createIndex('idx_created_at_3773_17','orders','created_at',0);
        $this->createIndex('idx_confirmed_3773_18','orders','confirmed',0);
        $this->createIndex('idx_UNIQUE_provider_3882_19','social_account','provider',1);
        $this->createIndex('idx_UNIQUE_code_3882_20','social_account','code',1);
        $this->createIndex('idx_user_id_3882_21','social_account','user_id',0);
        $this->createIndex('idx_UNIQUE_user_id_3901_22','token','user_id',1);
        $this->createIndex('idx_UNIQUE_email_393_23','user','email',1);
        $this->createIndex('idx_UNIQUE_username_393_24','user','username',1);
        $this->createIndex('idx_fio_393_25','user','fio',0);
        $this->createIndex('idx_phone_393_26','user','phone',0);
        $this->createIndex('idx_type_393_27','user','type',0);

        $this->execute('SET foreign_key_checks = 0');
        $this->addForeignKey('fk_auth_rule_3516_00','{{%auth_item}}', 'rule_name', '{{%auth_rule}}', 'name', 'CASCADE', 'CASCADE' );
        $this->addForeignKey('fk_user_3586_01','{{%auto}}', 'user_id', '{{%user}}', 'id', 'CASCADE', 'CASCADE' );
        $this->addForeignKey('fk_user_3811_02','{{%profile}}', 'user_id', '{{%user}}', 'id', 'CASCADE', 'CASCADE' );
        $this->addForeignKey('fk_user_3879_03','{{%social_account}}', 'user_id', '{{%user}}', 'id', 'CASCADE', 'CASCADE' );
        $this->addForeignKey('fk_user_3898_04','{{%token}}', 'user_id', '{{%user}}', 'id', 'CASCADE', 'CASCADE' );
        $this->execute('SET foreign_key_checks = 1;');

        $this->execute('SET foreign_key_checks = 0');
        $this->insert('{{%auth_assignment}}',['item_name'=>'admin','user_id'=>'1','created_at'=>null]);
        $this->insert('{{%auth_item}}',['name'=>'admin','type'=>'2','description'=>'Администратор','rule_name'=>null,'data'=>null,'created_at'=>'1465284342','updated_at'=>'1465292059']);
        $this->insert('{{%auth_item}}',['name'=>'driver','type'=>'2','description'=>'Водитель','rule_name'=>null,'data'=>null,'created_at'=>'1465286768','updated_at'=>'1465292071']);
        $this->insert('{{%auth_item}}',['name'=>'manager','type'=>'2','description'=>'Менеджер','rule_name'=>null,'data'=>null,'created_at'=>'1465286804','updated_at'=>'1465292078']);
        $this->insert('{{%auth_item_child}}',['parent'=>'admin','child'=>'client']);
        $this->insert('{{%auth_item_child}}',['parent'=>'admin','child'=>'driver']);
        $this->insert('{{%auth_item_child}}',['parent'=>'admin','child'=>'manager']);
        $this->insert('{{%brands}}',['id'=>'2','name'=>'Audi','picture'=>'https://cars.imgsmail.ru/catalogue/firms/8/2/828f7b59d6a647a02dcaf42bd1d0f3d9_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'3','name'=>'BMW','picture'=>'https://cars.imgsmail.ru/catalogue/firms/8/a/8af49cad11d8ecf3cb2e7bd392842c81_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'4','name'=>'Ford','picture'=>'https://cars.imgsmail.ru/catalogue/firms/1/5/15642f0d8c2ec5f7c40bc54596572118_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'5','name'=>'Honda','picture'=>'https://cars.imgsmail.ru/catalogue/firms/2/4/2408528b84812553563c06bc0c0807b4_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'6','name'=>'Hyundai','picture'=>'https://cars.imgsmail.ru/catalogue/firms/a/5/a54d9864759f6bd63697ac70576c4b1d_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'7','name'=>'Kia','picture'=>'https://cars.imgsmail.ru/catalogue/firms/9/3/939e45ece543b9e3e330342e9e68d318_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'8','name'=>'Lada (ВАЗ)','picture'=>'https://cars.imgsmail.ru/catalogue/firms/9/b/9bff39e7e56d7c8831166f7d0a287a84_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'9','name'=>'Mazda','picture'=>'https://cars.imgsmail.ru/catalogue/firms/7/6/76b75334ac03bc288b4d00df5336856f_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'10','name'=>'Mercedes-Benz','picture'=>'https://cars.imgsmail.ru/catalogue/firms/b/9/b902d2618136a593c4cf77b3edf25904_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'11','name'=>'Mitsubishi','picture'=>'https://cars.imgsmail.ru/catalogue/firms/5/f/5f04172fb79e9ac89af30afd9aa869e0_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'12','name'=>'Nissan','picture'=>'https://cars.imgsmail.ru/catalogue/firms/a/f/af59afe953dfa5bbd211446354ec4472_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'13','name'=>'Renault','picture'=>'https://cars.imgsmail.ru/catalogue/firms/5/4/54874d26ef50d2d0fef4639155975500_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'14','name'=>'Skoda','picture'=>'https://cars.imgsmail.ru/catalogue/firms/7/b/7b3df37fe24018dd94533f2391148d5f_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'15','name'=>'Toyota','picture'=>'https://cars.imgsmail.ru/catalogue/firms/d/8/d874c138f20af73845ec75b80e5dd388_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'16','name'=>'Volkswagen','picture'=>'https://cars.imgsmail.ru/catalogue/firms/1/c/1c07f6cde6d7c09a23a97cfd1fc1b451_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'17','name'=>'Acura','picture'=>'https://cars.imgsmail.ru/catalogue/firms/9/a/9aa9f9896dc560231d78108341063667_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'18','name'=>'Datsun','picture'=>'https://cars.imgsmail.ru/catalogue/firms/2/b/2bfd9ebf3fb2fe9a540b331339b57d82_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'19','name'=>'Infiniti','picture'=>'https://cars.imgsmail.ru/catalogue/firms/3/a/3a18ed0c187ec5f4e3ad620d20878468_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'20','name'=>'Lexus','picture'=>'https://cars.imgsmail.ru/catalogue/firms/b/8/b8d26a4f73aacd17c1aff44e4161ee1a_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'21','name'=>'Subaru','picture'=>'https://cars.imgsmail.ru/catalogue/firms/0/c/0c02a288744860ff112d2bd4a6a52147_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'22','name'=>'Suzuki','picture'=>'https://cars.imgsmail.ru/catalogue/firms/8/6/863f74a1b1083a1a10613d624b48b8a4_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'23','name'=>'Cadillac','picture'=>'https://cars.imgsmail.ru/catalogue/firms/a/2/a234a61ec2dc7c2c40332e65cdb0f1b8_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'24','name'=>'Chevrolet','picture'=>'https://cars.imgsmail.ru/catalogue/firms/1/e/1e9041948aa2577d1d27a3a580110d5e_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'25','name'=>'Chrysler','picture'=>'https://cars.imgsmail.ru/catalogue/firms/a/f/afae63f6fea0de32dc51d96bf7e91e32_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'26','name'=>'Jeep','picture'=>'https://cars.imgsmail.ru/catalogue/firms/4/d/4d7452be5eada5d55a818397256567f3_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'27','name'=>'Tesla','picture'=>'https://cars.imgsmail.ru/catalogue/firms/c/4/c424c2721cce9a18493f17ca92f86991_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'28','name'=>'ГАЗ','picture'=>'https://cars.imgsmail.ru/catalogue/firms/5/a/5a0027b072e5bc9391cc86655046c89a_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'29','name'=>'УАЗ','picture'=>'https://cars.imgsmail.ru/catalogue/firms/5/e/5e60ef9ec6e34d355a13416d5a167245_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'30','name'=>'Porsche','picture'=>'https://cars.imgsmail.ru/catalogue/firms/6/6/66bd24c44c6ad5bb98883b84d8471aea_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'31','name'=>'SsangYong','picture'=>'https://cars.imgsmail.ru/catalogue/firms/6/f/6f9120845e86c9449423dc49c2e74a38_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'32','name'=>'Alfa Romeo','picture'=>'https://cars.imgsmail.ru/catalogue/firms/4/4/44b4e2807cf193c73c7ae2bd712ba723_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'33','name'=>'Aston Martin','picture'=>'https://cars.imgsmail.ru/catalogue/firms/7/3/73b4c3d41991e5c2608374fa299f16ac_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'34','name'=>'Bentley','picture'=>'https://cars.imgsmail.ru/catalogue/firms/3/1/31ca13ecf77028f1a1c4e54d659ab725_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'35','name'=>'Citroen','picture'=>'https://cars.imgsmail.ru/catalogue/firms/7/c/7cf4b94e8a08ad92bdabed5617a7a322_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'36','name'=>'DS','picture'=>'https://cars.imgsmail.ru/catalogue/firms/d/6/d6a5588ee316aaa59de56b03a7f91503_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'37','name'=>'Ferrari','picture'=>'https://cars.imgsmail.ru/catalogue/firms/a/e/aee44c481f443730e9cd6383dbe2d7ff_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'38','name'=>'Fiat','picture'=>'https://cars.imgsmail.ru/catalogue/firms/3/c/3ce1cde7d7aab5d8cd41384320b07a81_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'39','name'=>'Jaguar','picture'=>'https://cars.imgsmail.ru/catalogue/firms/1/3/137f6eb7f74be2be89929f8b3dbe80bf_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'40','name'=>'Lamborghini','picture'=>'https://cars.imgsmail.ru/catalogue/firms/2/c/2c8cc4757ed0cffa6c381767ede2ff98_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'41','name'=>'Land Rover','picture'=>'https://cars.imgsmail.ru/catalogue/firms/4/6/461ffc26ddc9d7247a107001892f0608_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'42','name'=>'Maserati','picture'=>'https://cars.imgsmail.ru/catalogue/firms/d/1/d1adcf4a374fdda57c958dc764851bd2_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'43','name'=>'Mini','picture'=>'https://cars.imgsmail.ru/catalogue/firms/1/4/14ea4a99fd730508147898c0f36ee392_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'44','name'=>'Peugeot','picture'=>'https://cars.imgsmail.ru/catalogue/firms/2/c/2cca8a7914c547c0792bf66795e9d43a_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'45','name'=>'Ravon','picture'=>'https://cars.imgsmail.ru/catalogue/firms/c/a/cac1a1744a0ad624a6f4fc39612a5876_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'46','name'=>'Rolls-Royce','picture'=>'https://cars.imgsmail.ru/catalogue/firms/9/0/907ad2a28c5c93d4bf75e98df8579c90_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'47','name'=>'Smart','picture'=>'https://cars.imgsmail.ru/catalogue/firms/8/1/81f4967707ced1d8518736a0331d06a6_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'48','name'=>'Volvo','picture'=>'https://cars.imgsmail.ru/catalogue/firms/a/4/a4641df46b9b295b7c28a764fae7a586_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'49','name'=>'Brilliance','picture'=>'https://cars.imgsmail.ru/catalogue/firms/c/f/cf4cd0c74889f2d078bd013dbbf2f397_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'50','name'=>'Changan','picture'=>'https://cars.imgsmail.ru/catalogue/firms/c/d/cd8aaec918d1f183738ebe52d0066aeb_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'51','name'=>'Chery','picture'=>'https://cars.imgsmail.ru/catalogue/firms/4/5/4557b8777596b6842be60995e0459e74_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'52','name'=>'DongFeng','picture'=>'https://cars.imgsmail.ru/catalogue/firms/7/9/79da3e0179bc8395326d142df263aa8e_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'53','name'=>'FAW','picture'=>'https://cars.imgsmail.ru/catalogue/firms/d/a/da6c5c0c7c15ec95d536eab25f399cae_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'54','name'=>'Foton','picture'=>'https://cars.imgsmail.ru/catalogue/firms/6/c/6c4d6dafbc43ac03536724393fc183e2_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'55','name'=>'Geely','picture'=>'https://cars.imgsmail.ru/catalogue/firms/a/5/a5049305e1199e8c8db121031835f8b1_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'56','name'=>'Great Wall','picture'=>'https://cars.imgsmail.ru/catalogue/firms/d/f/df571856882fab38a3ec62fb65fd1020_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'57','name'=>'Haima','picture'=>'https://cars.imgsmail.ru/catalogue/firms/3/1/31e86da94336a8c4c84797dbf829830d_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'58','name'=>'Haval','picture'=>'https://cars.imgsmail.ru/catalogue/firms/5/1/51225ad658a15d5662a3c8fe5112d700_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'59','name'=>'Lifan','picture'=>'https://cars.imgsmail.ru/catalogue/firms/0/8/084630e31b22ac3d902e30cb392ead3c_60x60.png']);
        $this->insert('{{%brands}}',['id'=>'60','name'=>'Zotye','picture'=>'https://cars.imgsmail.ru/catalogue/firms/2/c/2caf208ee0e812ec5af82a10c797b009_60x60.png']);
        $this->insert('{{%models}}',['id'=>'1','brand_id'=>'2','name'=>'A3 седан']);
        $this->insert('{{%models}}',['id'=>'2','brand_id'=>'2','name'=>'A4 седан']);
        $this->insert('{{%models}}',['id'=>'3','brand_id'=>'2','name'=>'TT купе']);
        $this->insert('{{%models}}',['id'=>'4','brand_id'=>'2','name'=>'A5 купе']);
        $this->insert('{{%models}}',['id'=>'5','brand_id'=>'2','name'=>'A6 седан']);
        $this->insert('{{%models}}',['id'=>'6','brand_id'=>'2','name'=>'S3 седан']);
        $this->insert('{{%models}}',['id'=>'7','brand_id'=>'2','name'=>'TTS купе']);
        $this->insert('{{%models}}',['id'=>'8','brand_id'=>'2','name'=>'S5 купе']);
        $this->insert('{{%models}}',['id'=>'9','brand_id'=>'2','name'=>'S6 седан']);
        $this->insert('{{%models}}',['id'=>'10','brand_id'=>'2','name'=>'A8 седан']);
        $this->insert('{{%models}}',['id'=>'11','brand_id'=>'2','name'=>'S8 седан']);
        $this->insert('{{%models}}',['id'=>'12','brand_id'=>'2','name'=>'S4 седан']);
        $this->insert('{{%models}}',['id'=>'13','brand_id'=>'2','name'=>'A1 Sportback хэтчбек']);
        $this->insert('{{%models}}',['id'=>'14','brand_id'=>'2','name'=>'A3 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'15','brand_id'=>'2','name'=>'A5 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'16','brand_id'=>'2','name'=>'A4 универсал']);
        $this->insert('{{%models}}',['id'=>'17','brand_id'=>'2','name'=>'A6 универсал']);
        $this->insert('{{%models}}',['id'=>'18','brand_id'=>'2','name'=>'S3 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'19','brand_id'=>'2','name'=>'A7 Sportback хэтчбек']);
        $this->insert('{{%models}}',['id'=>'20','brand_id'=>'2','name'=>'A6 allroad quattro универсал']);
        $this->insert('{{%models}}',['id'=>'21','brand_id'=>'2','name'=>'S5 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'22','brand_id'=>'2','name'=>'S6 универсал']);
        $this->insert('{{%models}}',['id'=>'23','brand_id'=>'2','name'=>'S7 Sportback хэтчбек']);
        $this->insert('{{%models}}',['id'=>'24','brand_id'=>'2','name'=>'RS 6 универсал']);
        $this->insert('{{%models}}',['id'=>'25','brand_id'=>'2','name'=>'RS 7 Sportback хэтчбек']);
        $this->insert('{{%models}}',['id'=>'26','brand_id'=>'2','name'=>'A4 allroad универсал']);
        $this->insert('{{%models}}',['id'=>'27','brand_id'=>'2','name'=>'Q3 кроссовер']);
        $this->insert('{{%models}}',['id'=>'28','brand_id'=>'2','name'=>'Q5 кроссовер']);
        $this->insert('{{%models}}',['id'=>'29','brand_id'=>'2','name'=>'Q7 кроссовер']);
        $this->insert('{{%models}}',['id'=>'30','brand_id'=>'2','name'=>'RS Q3 кроссовер']);
        $this->insert('{{%models}}',['id'=>'31','brand_id'=>'2','name'=>'SQ5 кроссовер']);
        $this->insert('{{%models}}',['id'=>'32','brand_id'=>'2','name'=>'Q2 кроссовер']);
        $this->insert('{{%models}}',['id'=>'33','brand_id'=>'2','name'=>'SQ7 кроссовер']);
        $this->insert('{{%models}}',['id'=>'34','brand_id'=>'2','name'=>'A3 кабриолет']);
        $this->insert('{{%models}}',['id'=>'35','brand_id'=>'2','name'=>'A5 кабриолет']);
        $this->insert('{{%models}}',['id'=>'36','brand_id'=>'2','name'=>'S3 кабриолет']);
        $this->insert('{{%models}}',['id'=>'37','brand_id'=>'3','name'=>'3 седан']);
        $this->insert('{{%models}}',['id'=>'38','brand_id'=>'3','name'=>'2 купе']);
        $this->insert('{{%models}}',['id'=>'39','brand_id'=>'3','name'=>'4 Gran Coupe купе']);
        $this->insert('{{%models}}',['id'=>'40','brand_id'=>'3','name'=>'4 купе']);
        $this->insert('{{%models}}',['id'=>'41','brand_id'=>'3','name'=>'5 седан']);
        $this->insert('{{%models}}',['id'=>'42','brand_id'=>'3','name'=>'M2 купе']);
        $this->insert('{{%models}}',['id'=>'43','brand_id'=>'3','name'=>'M3 седан']);
        $this->insert('{{%models}}',['id'=>'44','brand_id'=>'3','name'=>'M4 купе']);
        $this->insert('{{%models}}',['id'=>'45','brand_id'=>'3','name'=>'6 купе']);
        $this->insert('{{%models}}',['id'=>'46','brand_id'=>'3','name'=>'6 Gran Coupe купе']);
        $this->insert('{{%models}}',['id'=>'47','brand_id'=>'3','name'=>'M5 седан']);
        $this->insert('{{%models}}',['id'=>'48','brand_id'=>'3','name'=>'7 седан']);
        $this->insert('{{%models}}',['id'=>'49','brand_id'=>'3','name'=>'M6 купе']);
        $this->insert('{{%models}}',['id'=>'50','brand_id'=>'3','name'=>'M6 Gran Coupe седан']);
        $this->insert('{{%models}}',['id'=>'51','brand_id'=>'3','name'=>'i8 купе']);
        $this->insert('{{%models}}',['id'=>'52','brand_id'=>'3','name'=>'1 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'53','brand_id'=>'3','name'=>'3 Gran Turismo хэтчбек']);
        $this->insert('{{%models}}',['id'=>'54','brand_id'=>'3','name'=>'5 универсал']);
        $this->insert('{{%models}}',['id'=>'55','brand_id'=>'3','name'=>'5 Gran Turismo хэтчбек']);
        $this->insert('{{%models}}',['id'=>'56','brand_id'=>'3','name'=>'X1 кроссовер']);
        $this->insert('{{%models}}',['id'=>'57','brand_id'=>'3','name'=>'X3 кроссовер']);
        $this->insert('{{%models}}',['id'=>'58','brand_id'=>'3','name'=>'X4 кроссовер']);
        $this->insert('{{%models}}',['id'=>'59','brand_id'=>'3','name'=>'X5 кроссовер']);
        $this->insert('{{%models}}',['id'=>'60','brand_id'=>'3','name'=>'X6 кроссовер']);
        $this->insert('{{%models}}',['id'=>'61','brand_id'=>'3','name'=>'X6 M кроссовер']);
        $this->insert('{{%models}}',['id'=>'62','brand_id'=>'3','name'=>'2 Active Tourer минивэн']);
        $this->insert('{{%models}}',['id'=>'63','brand_id'=>'3','name'=>'2 Gran Tourer минивэн']);
        $this->insert('{{%models}}',['id'=>'64','brand_id'=>'3','name'=>'4 кабриолет']);
        $this->insert('{{%models}}',['id'=>'65','brand_id'=>'3','name'=>'M4 кабриолет']);
        $this->insert('{{%models}}',['id'=>'66','brand_id'=>'3','name'=>'6 кабриолет']);
        $this->insert('{{%models}}',['id'=>'67','brand_id'=>'3','name'=>'M6 кабриолет']);
        $this->insert('{{%models}}',['id'=>'68','brand_id'=>'3','name'=>'2 кабриолет']);
        $this->insert('{{%models}}',['id'=>'69','brand_id'=>'4','name'=>'Fiesta седан']);
        $this->insert('{{%models}}',['id'=>'70','brand_id'=>'4','name'=>'Focus седан']);
        $this->insert('{{%models}}',['id'=>'71','brand_id'=>'4','name'=>'Mondeo седан']);
        $this->insert('{{%models}}',['id'=>'72','brand_id'=>'4','name'=>'Mustang купе']);
        $this->insert('{{%models}}',['id'=>'73','brand_id'=>'4','name'=>'Fiesta хэтчбек']);
        $this->insert('{{%models}}',['id'=>'74','brand_id'=>'4','name'=>'Focus хэтчбек']);
        $this->insert('{{%models}}',['id'=>'75','brand_id'=>'4','name'=>'Focus универсал']);
        $this->insert('{{%models}}',['id'=>'76','brand_id'=>'4','name'=>'EcoSport кроссовер']);
        $this->insert('{{%models}}',['id'=>'77','brand_id'=>'4','name'=>'Kuga кроссовер']);
        $this->insert('{{%models}}',['id'=>'78','brand_id'=>'4','name'=>'Explorer внедорожник']);
        $this->insert('{{%models}}',['id'=>'79','brand_id'=>'4','name'=>'Transit Connect фургон']);
        $this->insert('{{%models}}',['id'=>'80','brand_id'=>'4','name'=>'Transit фургон']);
        $this->insert('{{%models}}',['id'=>'81','brand_id'=>'4','name'=>'Tourneo микроавтобус']);
        $this->insert('{{%models}}',['id'=>'82','brand_id'=>'5','name'=>'CR-V кроссовер']);
        $this->insert('{{%models}}',['id'=>'83','brand_id'=>'5','name'=>'Pilot кроссовер']);
        $this->insert('{{%models}}',['id'=>'84','brand_id'=>'6','name'=>'Solaris седан']);
        $this->insert('{{%models}}',['id'=>'85','brand_id'=>'6','name'=>'i40 седан']);
        $this->insert('{{%models}}',['id'=>'86','brand_id'=>'6','name'=>'Genesis седан']);
        $this->insert('{{%models}}',['id'=>'87','brand_id'=>'6','name'=>'Equus седан']);
        $this->insert('{{%models}}',['id'=>'88','brand_id'=>'6','name'=>'Elantra седан']);
        $this->insert('{{%models}}',['id'=>'89','brand_id'=>'6','name'=>'Solaris хэтчбек']);
        $this->insert('{{%models}}',['id'=>'90','brand_id'=>'6','name'=>'i30 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'91','brand_id'=>'6','name'=>'i30 универсал']);
        $this->insert('{{%models}}',['id'=>'92','brand_id'=>'6','name'=>'Veloster хэтчбек']);
        $this->insert('{{%models}}',['id'=>'93','brand_id'=>'6','name'=>'i40 универсал']);
        $this->insert('{{%models}}',['id'=>'94','brand_id'=>'6','name'=>'Tucson кроссовер']);
        $this->insert('{{%models}}',['id'=>'95','brand_id'=>'6','name'=>'Santa Fe Premium кроссовер']);
        $this->insert('{{%models}}',['id'=>'96','brand_id'=>'6','name'=>'Grand Santa Fe кроссовер']);
        $this->insert('{{%models}}',['id'=>'97','brand_id'=>'6','name'=>'H1 минивэн']);
        $this->insert('{{%models}}',['id'=>'98','brand_id'=>'7','name'=>'Rio седан']);
        $this->insert('{{%models}}',['id'=>'99','brand_id'=>'7','name'=>'Cerato седан']);
        $this->insert('{{%models}}',['id'=>'100','brand_id'=>'7','name'=>'Optima седан']);
        $this->insert('{{%models}}',['id'=>'101','brand_id'=>'7','name'=>'Quoris седан']);
        $this->insert('{{%models}}',['id'=>'102','brand_id'=>'7','name'=>'Picanto хэтчбек']);
        $this->insert('{{%models}}',['id'=>'103','brand_id'=>'7','name'=>'Rio хэтчбек']);
        $this->insert('{{%models}}',['id'=>'104','brand_id'=>'7','name'=>'cee\'d хэтчбек']);
        $this->insert('{{%models}}',['id'=>'105','brand_id'=>'7','name'=>'Venga хэтчбек']);
        $this->insert('{{%models}}',['id'=>'106','brand_id'=>'7','name'=>'cee\'d универсал']);
        $this->insert('{{%models}}',['id'=>'107','brand_id'=>'7','name'=>'cee\'d GT хэтчбек']);
        $this->insert('{{%models}}',['id'=>'108','brand_id'=>'7','name'=>'Soul кроссовер']);
        $this->insert('{{%models}}',['id'=>'109','brand_id'=>'7','name'=>'Sportage кроссовер']);
        $this->insert('{{%models}}',['id'=>'110','brand_id'=>'7','name'=>'Sorento кроссовер']);
        $this->insert('{{%models}}',['id'=>'111','brand_id'=>'7','name'=>'Sorento Prime кроссовер']);
        $this->insert('{{%models}}',['id'=>'112','brand_id'=>'7','name'=>'Mohave внедорожник']);
        $this->insert('{{%models}}',['id'=>'113','brand_id'=>'8','name'=>'Granta седан']);
        $this->insert('{{%models}}',['id'=>'114','brand_id'=>'8','name'=>'Priora седан']);
        $this->insert('{{%models}}',['id'=>'115','brand_id'=>'8','name'=>'Vesta седан']);
        $this->insert('{{%models}}',['id'=>'116','brand_id'=>'8','name'=>'Granta Sport седан']);
        $this->insert('{{%models}}',['id'=>'117','brand_id'=>'8','name'=>'Granta хэтчбек']);
        $this->insert('{{%models}}',['id'=>'118','brand_id'=>'8','name'=>'Kalina хэтчбек']);
        $this->insert('{{%models}}',['id'=>'119','brand_id'=>'8','name'=>'Kalina универсал']);
        $this->insert('{{%models}}',['id'=>'120','brand_id'=>'8','name'=>'Kalina Cross универсал']);
        $this->insert('{{%models}}',['id'=>'121','brand_id'=>'8','name'=>'Largus универсал']);
        $this->insert('{{%models}}',['id'=>'122','brand_id'=>'8','name'=>'Kalina Sport хэтчбек']);
        $this->insert('{{%models}}',['id'=>'123','brand_id'=>'8','name'=>'Largus Cross универсал']);
        $this->insert('{{%models}}',['id'=>'124','brand_id'=>'8','name'=>'Vesta универсал']);
        $this->insert('{{%models}}',['id'=>'125','brand_id'=>'8','name'=>'2121 (4x4) внедорожник']);
        $this->insert('{{%models}}',['id'=>'126','brand_id'=>'8','name'=>'4х4 Urban внедорожник']);
        $this->insert('{{%models}}',['id'=>'127','brand_id'=>'8','name'=>'XRAY кроссовер']);
        $this->insert('{{%models}}',['id'=>'128','brand_id'=>'8','name'=>'Largus фургон']);
        $this->insert('{{%models}}',['id'=>'129','brand_id'=>'9','name'=>'6 седан']);
        $this->insert('{{%models}}',['id'=>'130','brand_id'=>'9','name'=>'3 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'131','brand_id'=>'9','name'=>'CX-5 кроссовер']);
        $this->insert('{{%models}}',['id'=>'132','brand_id'=>'10','name'=>'C седан']);
        $this->insert('{{%models}}',['id'=>'133','brand_id'=>'10','name'=>'C купе']);
        $this->insert('{{%models}}',['id'=>'134','brand_id'=>'10','name'=>'CLA седан']);
        $this->insert('{{%models}}',['id'=>'135','brand_id'=>'10','name'=>'E купе']);
        $this->insert('{{%models}}',['id'=>'136','brand_id'=>'10','name'=>'E седан']);
        $this->insert('{{%models}}',['id'=>'137','brand_id'=>'10','name'=>'CLA AMG седан']);
        $this->insert('{{%models}}',['id'=>'138','brand_id'=>'10','name'=>'CLS седан']);
        $this->insert('{{%models}}',['id'=>'139','brand_id'=>'10','name'=>'C AMG седан']);
        $this->insert('{{%models}}',['id'=>'140','brand_id'=>'10','name'=>'C AMG купе']);
        $this->insert('{{%models}}',['id'=>'141','brand_id'=>'10','name'=>'S седан']);
        $this->insert('{{%models}}',['id'=>'142','brand_id'=>'10','name'=>'E AMG седан']);
        $this->insert('{{%models}}',['id'=>'143','brand_id'=>'10','name'=>'CLS AMG седан']);
        $this->insert('{{%models}}',['id'=>'144','brand_id'=>'10','name'=>'AMG GT купе']);
        $this->insert('{{%models}}',['id'=>'145','brand_id'=>'10','name'=>'Maybach S седан']);
        $this->insert('{{%models}}',['id'=>'146','brand_id'=>'10','name'=>'S купе']);
        $this->insert('{{%models}}',['id'=>'147','brand_id'=>'10','name'=>'S AMG седан']);
        $this->insert('{{%models}}',['id'=>'148','brand_id'=>'10','name'=>'S AMG купе']);
        $this->insert('{{%models}}',['id'=>'149','brand_id'=>'10','name'=>'A хэтчбек']);
        $this->insert('{{%models}}',['id'=>'150','brand_id'=>'10','name'=>'CLA универсал']);
        $this->insert('{{%models}}',['id'=>'151','brand_id'=>'10','name'=>'C универсал']);
        $this->insert('{{%models}}',['id'=>'152','brand_id'=>'10','name'=>'A AMG хэтчбек']);
        $this->insert('{{%models}}',['id'=>'153','brand_id'=>'10','name'=>'CLA AMG универсал']);
        $this->insert('{{%models}}',['id'=>'154','brand_id'=>'10','name'=>'CLS универсал']);
        $this->insert('{{%models}}',['id'=>'155','brand_id'=>'10','name'=>'C AMG универсал']);
        $this->insert('{{%models}}',['id'=>'156','brand_id'=>'10','name'=>'GLA кроссовер']);
        $this->insert('{{%models}}',['id'=>'157','brand_id'=>'10','name'=>'GLC кроссовер']);
        $this->insert('{{%models}}',['id'=>'158','brand_id'=>'10','name'=>'GLA AMG кроссовер']);
        $this->insert('{{%models}}',['id'=>'159','brand_id'=>'10','name'=>'GLE кроссовер']);
        $this->insert('{{%models}}',['id'=>'160','brand_id'=>'10','name'=>'GLC AMG кроссовер']);
        $this->insert('{{%models}}',['id'=>'161','brand_id'=>'10','name'=>'GL внедорожник']);
        $this->insert('{{%models}}',['id'=>'162','brand_id'=>'10','name'=>'GLE Coupe кроссовер']);
        $this->insert('{{%models}}',['id'=>'163','brand_id'=>'10','name'=>'GLS внедорожник']);
        $this->insert('{{%models}}',['id'=>'164','brand_id'=>'10','name'=>'G внедорожник']);
        $this->insert('{{%models}}',['id'=>'165','brand_id'=>'10','name'=>'GLE AMG кроссовер']);
        $this->insert('{{%models}}',['id'=>'166','brand_id'=>'10','name'=>'GLE Coupe AMG кроссовер']);
        $this->insert('{{%models}}',['id'=>'167','brand_id'=>'10','name'=>'GL AMG внедорожник']);
        $this->insert('{{%models}}',['id'=>'168','brand_id'=>'10','name'=>'GLS AMG внедорожник']);
        $this->insert('{{%models}}',['id'=>'169','brand_id'=>'10','name'=>'G AMG внедорожник']);
        $this->insert('{{%models}}',['id'=>'170','brand_id'=>'10','name'=>'GLC Coupe кроссовер']);
        $this->insert('{{%models}}',['id'=>'171','brand_id'=>'10','name'=>'B минивэн']);
        $this->insert('{{%models}}',['id'=>'172','brand_id'=>'10','name'=>'Citan минивэн']);
        $this->insert('{{%models}}',['id'=>'173','brand_id'=>'10','name'=>'E кабриолет']);
        $this->insert('{{%models}}',['id'=>'174','brand_id'=>'10','name'=>'S кабриолет']);
        $this->insert('{{%models}}',['id'=>'175','brand_id'=>'10','name'=>'S AMG кабриолет']);
        $this->insert('{{%models}}',['id'=>'176','brand_id'=>'10','name'=>'Vito фургон']);
        $this->insert('{{%models}}',['id'=>'177','brand_id'=>'10','name'=>'Citan фургон']);
        $this->insert('{{%models}}',['id'=>'178','brand_id'=>'10','name'=>'Vito микроавтобус']);
        $this->insert('{{%models}}',['id'=>'179','brand_id'=>'10','name'=>'Viano микроавтобус']);
        $this->insert('{{%models}}',['id'=>'180','brand_id'=>'10','name'=>'Sprinter фургон']);
        $this->insert('{{%models}}',['id'=>'181','brand_id'=>'10','name'=>'Sprinter микроавтобус']);
        $this->insert('{{%models}}',['id'=>'182','brand_id'=>'10','name'=>'V микроавтобус']);
        $this->insert('{{%models}}',['id'=>'183','brand_id'=>'11','name'=>'i-MiEV хэтчбек']);
        $this->insert('{{%models}}',['id'=>'184','brand_id'=>'11','name'=>'Outlander кроссовер']);
        $this->insert('{{%models}}',['id'=>'185','brand_id'=>'11','name'=>'Pajero внедорожник']);
        $this->insert('{{%models}}',['id'=>'186','brand_id'=>'11','name'=>'Pajero Sport внедорожник']);
        $this->insert('{{%models}}',['id'=>'187','brand_id'=>'11','name'=>'L200 пикап']);
        $this->insert('{{%models}}',['id'=>'188','brand_id'=>'12','name'=>'Almera седан']);
        $this->insert('{{%models}}',['id'=>'189','brand_id'=>'12','name'=>'Sentra седан']);
        $this->insert('{{%models}}',['id'=>'190','brand_id'=>'12','name'=>'Teana седан']);
        $this->insert('{{%models}}',['id'=>'191','brand_id'=>'12','name'=>'GT-R купе']);
        $this->insert('{{%models}}',['id'=>'192','brand_id'=>'12','name'=>'Tiida хэтчбек']);
        $this->insert('{{%models}}',['id'=>'193','brand_id'=>'12','name'=>'Juke кроссовер']);
        $this->insert('{{%models}}',['id'=>'194','brand_id'=>'12','name'=>'Terrano кроссовер']);
        $this->insert('{{%models}}',['id'=>'195','brand_id'=>'12','name'=>'Qashqai кроссовер']);
        $this->insert('{{%models}}',['id'=>'196','brand_id'=>'12','name'=>'X-Trail кроссовер']);
        $this->insert('{{%models}}',['id'=>'197','brand_id'=>'12','name'=>'Murano кроссовер']);
        $this->insert('{{%models}}',['id'=>'198','brand_id'=>'12','name'=>'Pathfinder внедорожник']);
        $this->insert('{{%models}}',['id'=>'199','brand_id'=>'12','name'=>'Patrol внедорожник']);
        $this->insert('{{%models}}',['id'=>'200','brand_id'=>'13','name'=>'Logan седан']);
        $this->insert('{{%models}}',['id'=>'201','brand_id'=>'13','name'=>'Fluence седан']);
        $this->insert('{{%models}}',['id'=>'202','brand_id'=>'13','name'=>'Sandero хэтчбек']);
        $this->insert('{{%models}}',['id'=>'203','brand_id'=>'13','name'=>'Sandero Stepway хэтчбек']);
        $this->insert('{{%models}}',['id'=>'204','brand_id'=>'13','name'=>'Clio RS хэтчбек']);
        $this->insert('{{%models}}',['id'=>'205','brand_id'=>'13','name'=>'Megane RS хэтчбек']);
        $this->insert('{{%models}}',['id'=>'206','brand_id'=>'13','name'=>'Megane хэтчбек']);
        $this->insert('{{%models}}',['id'=>'207','brand_id'=>'13','name'=>'Duster кроссовер']);
        $this->insert('{{%models}}',['id'=>'208','brand_id'=>'13','name'=>'Kaptur кроссовер']);
        $this->insert('{{%models}}',['id'=>'209','brand_id'=>'13','name'=>'Koleos кроссовер']);
        $this->insert('{{%models}}',['id'=>'210','brand_id'=>'13','name'=>'Kangoo минивэн']);
        $this->insert('{{%models}}',['id'=>'211','brand_id'=>'13','name'=>'Kangoo фургон']);
        $this->insert('{{%models}}',['id'=>'212','brand_id'=>'13','name'=>'Master фургон']);
        $this->insert('{{%models}}',['id'=>'213','brand_id'=>'14','name'=>'Rapid хэтчбек']);
        $this->insert('{{%models}}',['id'=>'214','brand_id'=>'14','name'=>'Octavia хэтчбек']);
        $this->insert('{{%models}}',['id'=>'215','brand_id'=>'14','name'=>'Octavia универсал']);
        $this->insert('{{%models}}',['id'=>'216','brand_id'=>'14','name'=>'Superb хэтчбек']);
        $this->insert('{{%models}}',['id'=>'217','brand_id'=>'14','name'=>'Octavia Scout универсал']);
        $this->insert('{{%models}}',['id'=>'218','brand_id'=>'14','name'=>'Octavia RS хэтчбек']);
        $this->insert('{{%models}}',['id'=>'219','brand_id'=>'14','name'=>'Octavia RS универсал']);
        $this->insert('{{%models}}',['id'=>'220','brand_id'=>'14','name'=>'Superb универсал']);
        $this->insert('{{%models}}',['id'=>'221','brand_id'=>'14','name'=>'Yeti кроссовер']);
        $this->insert('{{%models}}',['id'=>'222','brand_id'=>'15','name'=>'Corolla седан']);
        $this->insert('{{%models}}',['id'=>'223','brand_id'=>'15','name'=>'Camry седан']);
        $this->insert('{{%models}}',['id'=>'224','brand_id'=>'15','name'=>'GT86 купе']);
        $this->insert('{{%models}}',['id'=>'225','brand_id'=>'15','name'=>'Prius хэтчбек']);
        $this->insert('{{%models}}',['id'=>'226','brand_id'=>'15','name'=>'RAV4 кроссовер']);
        $this->insert('{{%models}}',['id'=>'227','brand_id'=>'15','name'=>'Land Cruiser Prado внедорожник']);
        $this->insert('{{%models}}',['id'=>'228','brand_id'=>'15','name'=>'Highlander кроссовер']);
        $this->insert('{{%models}}',['id'=>'229','brand_id'=>'15','name'=>'Land Cruiser внедорожник']);
        $this->insert('{{%models}}',['id'=>'230','brand_id'=>'15','name'=>'Hilux пикап']);
        $this->insert('{{%models}}',['id'=>'231','brand_id'=>'15','name'=>'Alphard минивэн']);
        $this->insert('{{%models}}',['id'=>'232','brand_id'=>'15','name'=>'Hiace микроавтобус']);
        $this->insert('{{%models}}',['id'=>'233','brand_id'=>'16','name'=>'Polo седан']);
        $this->insert('{{%models}}',['id'=>'234','brand_id'=>'16','name'=>'Jetta седан']);
        $this->insert('{{%models}}',['id'=>'235','brand_id'=>'16','name'=>'Passat седан']);
        $this->insert('{{%models}}',['id'=>'236','brand_id'=>'16','name'=>'Passat CC седан']);
        $this->insert('{{%models}}',['id'=>'237','brand_id'=>'16','name'=>'Beetle хэтчбек']);
        $this->insert('{{%models}}',['id'=>'238','brand_id'=>'16','name'=>'Golf хэтчбек']);
        $this->insert('{{%models}}',['id'=>'239','brand_id'=>'16','name'=>'Passat универсал']);
        $this->insert('{{%models}}',['id'=>'240','brand_id'=>'16','name'=>'Golf R хэтчбек']);
        $this->insert('{{%models}}',['id'=>'241','brand_id'=>'16','name'=>'Touareg внедорожник']);
        $this->insert('{{%models}}',['id'=>'242','brand_id'=>'16','name'=>'Tiguan кроссовер']);
        $this->insert('{{%models}}',['id'=>'243','brand_id'=>'16','name'=>'Amarok пикап']);
        $this->insert('{{%models}}',['id'=>'244','brand_id'=>'16','name'=>'Transporter бортовой грузовик']);
        $this->insert('{{%models}}',['id'=>'245','brand_id'=>'16','name'=>'Transporter микроавтобус']);
        $this->insert('{{%models}}',['id'=>'246','brand_id'=>'16','name'=>'Transporter фургон']);
        $this->insert('{{%models}}',['id'=>'247','brand_id'=>'16','name'=>'Crafter фургон']);
        $this->insert('{{%models}}',['id'=>'248','brand_id'=>'16','name'=>'Caravelle микроавтобус']);
        $this->insert('{{%models}}',['id'=>'249','brand_id'=>'16','name'=>'Multivan микроавтобус']);
        $this->insert('{{%models}}',['id'=>'250','brand_id'=>'17','name'=>'TLX седан']);
        $this->insert('{{%models}}',['id'=>'251','brand_id'=>'17','name'=>'NSX купе']);
        $this->insert('{{%models}}',['id'=>'252','brand_id'=>'17','name'=>'RDX кроссовер']);
        $this->insert('{{%models}}',['id'=>'253','brand_id'=>'17','name'=>'MDX кроссовер']);
        $this->insert('{{%models}}',['id'=>'254','brand_id'=>'18','name'=>'on-DO седан']);
        $this->insert('{{%models}}',['id'=>'255','brand_id'=>'18','name'=>'mi-DO хэтчбек']);
        $this->insert('{{%models}}',['id'=>'256','brand_id'=>'19','name'=>'Q50 седан']);
        $this->insert('{{%models}}',['id'=>'257','brand_id'=>'19','name'=>'Q70 седан']);
        $this->insert('{{%models}}',['id'=>'258','brand_id'=>'19','name'=>'Q30 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'259','brand_id'=>'19','name'=>'QX70 кроссовер']);
        $this->insert('{{%models}}',['id'=>'260','brand_id'=>'19','name'=>'QX50 кроссовер']);
        $this->insert('{{%models}}',['id'=>'261','brand_id'=>'19','name'=>'QX60 кроссовер']);
        $this->insert('{{%models}}',['id'=>'262','brand_id'=>'19','name'=>'QX80 внедорожник']);
        $this->insert('{{%models}}',['id'=>'263','brand_id'=>'19','name'=>'QX30 кроссовер']);
        $this->insert('{{%models}}',['id'=>'264','brand_id'=>'20','name'=>'ES седан']);
        $this->insert('{{%models}}',['id'=>'265','brand_id'=>'20','name'=>'IS седан']);
        $this->insert('{{%models}}',['id'=>'266','brand_id'=>'20','name'=>'RC купе']);
        $this->insert('{{%models}}',['id'=>'267','brand_id'=>'20','name'=>'LS седан']);
        $this->insert('{{%models}}',['id'=>'268','brand_id'=>'20','name'=>'GS F седан']);
        $this->insert('{{%models}}',['id'=>'269','brand_id'=>'20','name'=>'RC F купе']);
        $this->insert('{{%models}}',['id'=>'270','brand_id'=>'20','name'=>'LC купе']);
        $this->insert('{{%models}}',['id'=>'271','brand_id'=>'20','name'=>'GS седан']);
        $this->insert('{{%models}}',['id'=>'272','brand_id'=>'20','name'=>'NX кроссовер']);
        $this->insert('{{%models}}',['id'=>'273','brand_id'=>'20','name'=>'RX кроссовер']);
        $this->insert('{{%models}}',['id'=>'274','brand_id'=>'20','name'=>'GX внедорожник']);
        $this->insert('{{%models}}',['id'=>'275','brand_id'=>'20','name'=>'LX внедорожник']);
        $this->insert('{{%models}}',['id'=>'276','brand_id'=>'21','name'=>'BRZ купе']);
        $this->insert('{{%models}}',['id'=>'277','brand_id'=>'21','name'=>'WRX STi седан']);
        $this->insert('{{%models}}',['id'=>'278','brand_id'=>'21','name'=>'Legacy седан']);
        $this->insert('{{%models}}',['id'=>'279','brand_id'=>'21','name'=>'Outback универсал']);
        $this->insert('{{%models}}',['id'=>'280','brand_id'=>'21','name'=>'XV кроссовер']);
        $this->insert('{{%models}}',['id'=>'281','brand_id'=>'21','name'=>'Forester кроссовер']);
        $this->insert('{{%models}}',['id'=>'282','brand_id'=>'22','name'=>'Jimny внедорожник']);
        $this->insert('{{%models}}',['id'=>'283','brand_id'=>'22','name'=>'Vitara кроссовер']);
        $this->insert('{{%models}}',['id'=>'284','brand_id'=>'22','name'=>'Grand Vitara внедорожник']);
        $this->insert('{{%models}}',['id'=>'285','brand_id'=>'23','name'=>'ATS седан']);
        $this->insert('{{%models}}',['id'=>'286','brand_id'=>'23','name'=>'CTS седан']);
        $this->insert('{{%models}}',['id'=>'287','brand_id'=>'23','name'=>'CT6 седан']);
        $this->insert('{{%models}}',['id'=>'288','brand_id'=>'23','name'=>'SRX кроссовер']);
        $this->insert('{{%models}}',['id'=>'289','brand_id'=>'23','name'=>'XT5 кроссовер']);
        $this->insert('{{%models}}',['id'=>'290','brand_id'=>'23','name'=>'Escalade внедорожник']);
        $this->insert('{{%models}}',['id'=>'291','brand_id'=>'24','name'=>'Corvette Stingray купе']);
        $this->insert('{{%models}}',['id'=>'292','brand_id'=>'24','name'=>'Camaro купе']);
        $this->insert('{{%models}}',['id'=>'293','brand_id'=>'24','name'=>'Niva внедорожник']);
        $this->insert('{{%models}}',['id'=>'294','brand_id'=>'24','name'=>'Tahoe внедорожник']);
        $this->insert('{{%models}}',['id'=>'295','brand_id'=>'25','name'=>'Grand Voyager минивэн']);
        $this->insert('{{%models}}',['id'=>'296','brand_id'=>'26','name'=>'Renegade внедорожник']);
        $this->insert('{{%models}}',['id'=>'297','brand_id'=>'26','name'=>'Compass кроссовер']);
        $this->insert('{{%models}}',['id'=>'298','brand_id'=>'26','name'=>'Cherokee внедорожник']);
        $this->insert('{{%models}}',['id'=>'299','brand_id'=>'26','name'=>'Wrangler внедорожник']);
        $this->insert('{{%models}}',['id'=>'300','brand_id'=>'26','name'=>'Grand Cherokee внедорожник']);
        $this->insert('{{%models}}',['id'=>'301','brand_id'=>'27','name'=>'Model S хэтчбек']);
        $this->insert('{{%models}}',['id'=>'302','brand_id'=>'27','name'=>'Model X кроссовер']);
        $this->insert('{{%models}}',['id'=>'303','brand_id'=>'28','name'=>'«Газель-Бизнес» 2705 фургон']);
        $this->insert('{{%models}}',['id'=>'304','brand_id'=>'28','name'=>'«Газель-Бизнес» 3221 микроавтобус']);
        $this->insert('{{%models}}',['id'=>'305','brand_id'=>'28','name'=>'«Соболь-Бизнес» 2310 бортовой грузовик']);
        $this->insert('{{%models}}',['id'=>'306','brand_id'=>'28','name'=>'«Газель-Бизнес» 3302 бортовой грузовик']);
        $this->insert('{{%models}}',['id'=>'307','brand_id'=>'29','name'=>'Hunter внедорожник']);
        $this->insert('{{%models}}',['id'=>'308','brand_id'=>'29','name'=>'Patriot внедорожник']);
        $this->insert('{{%models}}',['id'=>'309','brand_id'=>'29','name'=>'Pickup пикап']);
        $this->insert('{{%models}}',['id'=>'310','brand_id'=>'30','name'=>'Cayman купе']);
        $this->insert('{{%models}}',['id'=>'311','brand_id'=>'30','name'=>'718 Cayman купе']);
        $this->insert('{{%models}}',['id'=>'312','brand_id'=>'30','name'=>'Cayman GT4 купе']);
        $this->insert('{{%models}}',['id'=>'313','brand_id'=>'30','name'=>'911 купе']);
        $this->insert('{{%models}}',['id'=>'314','brand_id'=>'30','name'=>'Panamera хэтчбек']);
        $this->insert('{{%models}}',['id'=>'315','brand_id'=>'30','name'=>'Macan кроссовер']);
        $this->insert('{{%models}}',['id'=>'316','brand_id'=>'30','name'=>'Cayenne кроссовер']);
        $this->insert('{{%models}}',['id'=>'317','brand_id'=>'30','name'=>'911 кабриолет']);
        $this->insert('{{%models}}',['id'=>'318','brand_id'=>'30','name'=>'911 Targa кабриолет']);
        $this->insert('{{%models}}',['id'=>'319','brand_id'=>'31','name'=>'Actyon кроссовер']);
        $this->insert('{{%models}}',['id'=>'320','brand_id'=>'31','name'=>'Stavic минивэн']);
        $this->insert('{{%models}}',['id'=>'321','brand_id'=>'32','name'=>'4C купе']);
        $this->insert('{{%models}}',['id'=>'322','brand_id'=>'32','name'=>'Giulia седан']);
        $this->insert('{{%models}}',['id'=>'323','brand_id'=>'32','name'=>'MiTo хэтчбек']);
        $this->insert('{{%models}}',['id'=>'324','brand_id'=>'32','name'=>'Giulietta хэтчбек']);
        $this->insert('{{%models}}',['id'=>'325','brand_id'=>'33','name'=>'DB9 Volante купе']);
        $this->insert('{{%models}}',['id'=>'326','brand_id'=>'33','name'=>'V12 Vantage купе']);
        $this->insert('{{%models}}',['id'=>'327','brand_id'=>'33','name'=>'Rapide седан']);
        $this->insert('{{%models}}',['id'=>'328','brand_id'=>'33','name'=>'Vanquish купе']);
        $this->insert('{{%models}}',['id'=>'329','brand_id'=>'33','name'=>'DB11 купе']);
        $this->insert('{{%models}}',['id'=>'330','brand_id'=>'33','name'=>'DB9 Volante кабриолет']);
        $this->insert('{{%models}}',['id'=>'331','brand_id'=>'34','name'=>'Continental GT купе']);
        $this->insert('{{%models}}',['id'=>'332','brand_id'=>'34','name'=>'Flying Spur седан']);
        $this->insert('{{%models}}',['id'=>'333','brand_id'=>'34','name'=>'Mulsanne седан']);
        $this->insert('{{%models}}',['id'=>'334','brand_id'=>'34','name'=>'Bentayga кроссовер']);
        $this->insert('{{%models}}',['id'=>'335','brand_id'=>'34','name'=>'Continental GT кабриолет']);
        $this->insert('{{%models}}',['id'=>'336','brand_id'=>'35','name'=>'C-Elysee седан']);
        $this->insert('{{%models}}',['id'=>'337','brand_id'=>'35','name'=>'C4 седан']);
        $this->insert('{{%models}}',['id'=>'338','brand_id'=>'35','name'=>'DS3 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'339','brand_id'=>'35','name'=>'DS4 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'340','brand_id'=>'35','name'=>'C4 Aircross кроссовер']);
        $this->insert('{{%models}}',['id'=>'341','brand_id'=>'35','name'=>'C3 Picasso минивэн']);
        $this->insert('{{%models}}',['id'=>'342','brand_id'=>'35','name'=>'Berlingo Multispace минивэн']);
        $this->insert('{{%models}}',['id'=>'343','brand_id'=>'35','name'=>'C4 Picasso минивэн']);
        $this->insert('{{%models}}',['id'=>'344','brand_id'=>'35','name'=>'C4 Grand Picasso минивэн']);
        $this->insert('{{%models}}',['id'=>'345','brand_id'=>'35','name'=>'Berlingo Multispace фургон']);
        $this->insert('{{%models}}',['id'=>'346','brand_id'=>'35','name'=>'Jumpy фургон']);
        $this->insert('{{%models}}',['id'=>'347','brand_id'=>'35','name'=>'Jumper грузовик']);
        $this->insert('{{%models}}',['id'=>'348','brand_id'=>'35','name'=>'Jumper фургон']);
        $this->insert('{{%models}}',['id'=>'349','brand_id'=>'35','name'=>'Jumpy микроавтобус']);
        $this->insert('{{%models}}',['id'=>'350','brand_id'=>'36','name'=>'4 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'351','brand_id'=>'36','name'=>'4 Crossback хэтчбек']);
        $this->insert('{{%models}}',['id'=>'352','brand_id'=>'37','name'=>'458 Itаliа купе']);
        $this->insert('{{%models}}',['id'=>'353','brand_id'=>'37','name'=>'F12 Berlinetta купе']);
        $this->insert('{{%models}}',['id'=>'354','brand_id'=>'37','name'=>'Laкупе']);
        $this->insert('{{%models}}',['id'=>'355','brand_id'=>'37','name'=>'488GTB купе']);
        $this->insert('{{%models}}',['id'=>'356','brand_id'=>'37','name'=>'FF хэтчбек']);
        $this->insert('{{%models}}',['id'=>'357','brand_id'=>'37','name'=>'California T кабриолет']);
        $this->insert('{{%models}}',['id'=>'358','brand_id'=>'37','name'=>'488 Spider кабриолет']);
        $this->insert('{{%models}}',['id'=>'359','brand_id'=>'37','name'=>'488GTB кабриолет']);
        $this->insert('{{%models}}',['id'=>'360','brand_id'=>'38','name'=>'Punto хэтчбек']);
        $this->insert('{{%models}}',['id'=>'361','brand_id'=>'38','name'=>'500 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'362','brand_id'=>'38','name'=>'500X кроссовер']);
        $this->insert('{{%models}}',['id'=>'363','brand_id'=>'38','name'=>'Freemont минивэн']);
        $this->insert('{{%models}}',['id'=>'364','brand_id'=>'38','name'=>'Doblo Panorama минивэн']);
        $this->insert('{{%models}}',['id'=>'365','brand_id'=>'38','name'=>'Scudo фургон']);
        $this->insert('{{%models}}',['id'=>'366','brand_id'=>'38','name'=>'Ducato фургон']);
        $this->insert('{{%models}}',['id'=>'367','brand_id'=>'38','name'=>'Scudo микроавтобус']);
        $this->insert('{{%models}}',['id'=>'368','brand_id'=>'38','name'=>'Doblo Panorama фургон']);
        $this->insert('{{%models}}',['id'=>'369','brand_id'=>'39','name'=>'XE седан']);
        $this->insert('{{%models}}',['id'=>'370','brand_id'=>'39','name'=>'XF седан']);
        $this->insert('{{%models}}',['id'=>'371','brand_id'=>'39','name'=>'F-Type купе']);
        $this->insert('{{%models}}',['id'=>'372','brand_id'=>'39','name'=>'XJ седан']);
        $this->insert('{{%models}}',['id'=>'373','brand_id'=>'39','name'=>'XFR седан']);
        $this->insert('{{%models}}',['id'=>'374','brand_id'=>'39','name'=>'XJR седан']);
        $this->insert('{{%models}}',['id'=>'375','brand_id'=>'39','name'=>'XFR-S седан']);
        $this->insert('{{%models}}',['id'=>'376','brand_id'=>'39','name'=>'F-Type SVR купе']);
        $this->insert('{{%models}}',['id'=>'377','brand_id'=>'39','name'=>'F-Pace кроссовер']);
        $this->insert('{{%models}}',['id'=>'378','brand_id'=>'39','name'=>'F-Type кабриолет']);
        $this->insert('{{%models}}',['id'=>'379','brand_id'=>'39','name'=>'F-Type SVR кабриолет']);
        $this->insert('{{%models}}',['id'=>'380','brand_id'=>'40','name'=>'Huracan LP 610-4 купе']);
        $this->insert('{{%models}}',['id'=>'381','brand_id'=>'40','name'=>'Aventador LP 700-4 купе']);
        $this->insert('{{%models}}',['id'=>'382','brand_id'=>'40','name'=>'Centanario купе']);
        $this->insert('{{%models}}',['id'=>'383','brand_id'=>'41','name'=>'Defender внедорожник']);
        $this->insert('{{%models}}',['id'=>'384','brand_id'=>'41','name'=>'Range Rover Evoque кроссовер']);
        $this->insert('{{%models}}',['id'=>'385','brand_id'=>'41','name'=>'Discovery Sport внедорожник']);
        $this->insert('{{%models}}',['id'=>'386','brand_id'=>'41','name'=>'Discovery внедорожник']);
        $this->insert('{{%models}}',['id'=>'387','brand_id'=>'41','name'=>'Range Rover Sport внедорожник']);
        $this->insert('{{%models}}',['id'=>'388','brand_id'=>'41','name'=>'Range Rover внедорожник']);
        $this->insert('{{%models}}',['id'=>'389','brand_id'=>'41','name'=>'Range Rover Sport SVR внедорожник']);
        $this->insert('{{%models}}',['id'=>'390','brand_id'=>'41','name'=>'Defender пикап']);
        $this->insert('{{%models}}',['id'=>'391','brand_id'=>'41','name'=>'Range Rover Evoque кабриолет']);
        $this->insert('{{%models}}',['id'=>'392','brand_id'=>'42','name'=>'Ghibli седан']);
        $this->insert('{{%models}}',['id'=>'393','brand_id'=>'42','name'=>'Quattroporte седан']);
        $this->insert('{{%models}}',['id'=>'394','brand_id'=>'42','name'=>'GranTurismo купе']);
        $this->insert('{{%models}}',['id'=>'395','brand_id'=>'42','name'=>'Levante кроссовер']);
        $this->insert('{{%models}}',['id'=>'396','brand_id'=>'42','name'=>'GranCabrio кабриолет']);
        $this->insert('{{%models}}',['id'=>'397','brand_id'=>'43','name'=>'Cooper хэтчбек']);
        $this->insert('{{%models}}',['id'=>'398','brand_id'=>'43','name'=>'Clubman универсал']);
        $this->insert('{{%models}}',['id'=>'399','brand_id'=>'43','name'=>'Paceman хэтчбек']);
        $this->insert('{{%models}}',['id'=>'400','brand_id'=>'43','name'=>'John Cooper Works хэтчбек']);
        $this->insert('{{%models}}',['id'=>'401','brand_id'=>'43','name'=>'Countryman кроссовер']);
        $this->insert('{{%models}}',['id'=>'402','brand_id'=>'43','name'=>'Cabrio кабриолет']);
        $this->insert('{{%models}}',['id'=>'403','brand_id'=>'44','name'=>'301 седан']);
        $this->insert('{{%models}}',['id'=>'404','brand_id'=>'44','name'=>'408 седан']);
        $this->insert('{{%models}}',['id'=>'405','brand_id'=>'44','name'=>'508 седан']);
        $this->insert('{{%models}}',['id'=>'406','brand_id'=>'44','name'=>'308 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'407','brand_id'=>'44','name'=>'308 GT Line хэтчбек']);
        $this->insert('{{%models}}',['id'=>'408','brand_id'=>'44','name'=>'308 GTI хэтчбек']);
        $this->insert('{{%models}}',['id'=>'409','brand_id'=>'44','name'=>'208 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'410','brand_id'=>'44','name'=>'3008 кроссовер']);
        $this->insert('{{%models}}',['id'=>'411','brand_id'=>'44','name'=>'2008 кроссовер']);
        $this->insert('{{%models}}',['id'=>'412','brand_id'=>'44','name'=>'Partner минивэн']);
        $this->insert('{{%models}}',['id'=>'413','brand_id'=>'44','name'=>'Partner фургон']);
        $this->insert('{{%models}}',['id'=>'414','brand_id'=>'44','name'=>'Expert фургон']);
        $this->insert('{{%models}}',['id'=>'415','brand_id'=>'44','name'=>'Expert микроавтобус']);
        $this->insert('{{%models}}',['id'=>'416','brand_id'=>'44','name'=>'Boxer фургон']);
        $this->insert('{{%models}}',['id'=>'417','brand_id'=>'44','name'=>'Boxer микроавтобус']);
        $this->insert('{{%models}}',['id'=>'418','brand_id'=>'45','name'=>'Nexia седан']);
        $this->insert('{{%models}}',['id'=>'419','brand_id'=>'45','name'=>'Gentra седан']);
        $this->insert('{{%models}}',['id'=>'420','brand_id'=>'45','name'=>'Matiz хэтчбек']);
        $this->insert('{{%models}}',['id'=>'421','brand_id'=>'45','name'=>'R2 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'422','brand_id'=>'46','name'=>'Ghost седан']);
        $this->insert('{{%models}}',['id'=>'423','brand_id'=>'46','name'=>'Wraith седан']);
        $this->insert('{{%models}}',['id'=>'424','brand_id'=>'46','name'=>'Phantom седан']);
        $this->insert('{{%models}}',['id'=>'425','brand_id'=>'46','name'=>'Phantom купе']);
        $this->insert('{{%models}}',['id'=>'426','brand_id'=>'46','name'=>'Phantom кабриолет']);
        $this->insert('{{%models}}',['id'=>'427','brand_id'=>'46','name'=>'Dawn кабриолет']);
        $this->insert('{{%models}}',['id'=>'428','brand_id'=>'47','name'=>'fortwo хэтчбек']);
        $this->insert('{{%models}}',['id'=>'429','brand_id'=>'47','name'=>'forfour хэтчбек']);
        $this->insert('{{%models}}',['id'=>'430','brand_id'=>'47','name'=>'fortwo кабриолет']);
        $this->insert('{{%models}}',['id'=>'431','brand_id'=>'48','name'=>'S60 седан']);
        $this->insert('{{%models}}',['id'=>'432','brand_id'=>'48','name'=>'S80 седан']);
        $this->insert('{{%models}}',['id'=>'433','brand_id'=>'48','name'=>'S60 Cross Counry седан']);
        $this->insert('{{%models}}',['id'=>'434','brand_id'=>'48','name'=>'S90 седан']);
        $this->insert('{{%models}}',['id'=>'435','brand_id'=>'48','name'=>'V60 Cross Country универсал']);
        $this->insert('{{%models}}',['id'=>'436','brand_id'=>'48','name'=>'XC70 универсал']);
        $this->insert('{{%models}}',['id'=>'437','brand_id'=>'48','name'=>'V90 универсал']);
        $this->insert('{{%models}}',['id'=>'438','brand_id'=>'48','name'=>'V40 Cross Country хэтчбек']);
        $this->insert('{{%models}}',['id'=>'439','brand_id'=>'48','name'=>'XC60 кроссовер']);
        $this->insert('{{%models}}',['id'=>'440','brand_id'=>'48','name'=>'XC90 кроссовер']);
        $this->insert('{{%models}}',['id'=>'441','brand_id'=>'49','name'=>'H230 седан']);
        $this->insert('{{%models}}',['id'=>'442','brand_id'=>'49','name'=>'H530 седан']);
        $this->insert('{{%models}}',['id'=>'443','brand_id'=>'49','name'=>'H230 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'444','brand_id'=>'49','name'=>'V5 кроссовер']);
        $this->insert('{{%models}}',['id'=>'445','brand_id'=>'50','name'=>'Eado седан']);
        $this->insert('{{%models}}',['id'=>'446','brand_id'=>'50','name'=>'CS35 кроссовер']);
        $this->insert('{{%models}}',['id'=>'447','brand_id'=>'51','name'=>'Bonus седан']);
        $this->insert('{{%models}}',['id'=>'448','brand_id'=>'51','name'=>'M11 седан']);
        $this->insert('{{%models}}',['id'=>'449','brand_id'=>'51','name'=>'Bonus 3 седан']);
        $this->insert('{{%models}}',['id'=>'450','brand_id'=>'51','name'=>'Arrizo 7 седан']);
        $this->insert('{{%models}}',['id'=>'451','brand_id'=>'51','name'=>'Very хэтчбек']);
        $this->insert('{{%models}}',['id'=>'452','brand_id'=>'51','name'=>'M11 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'453','brand_id'=>'51','name'=>'IndiS хэтчбек']);
        $this->insert('{{%models}}',['id'=>'454','brand_id'=>'51','name'=>'Tiggo FL кроссовер']);
        $this->insert('{{%models}}',['id'=>'455','brand_id'=>'51','name'=>'Tiggo 5 кроссовер']);
        $this->insert('{{%models}}',['id'=>'456','brand_id'=>'52','name'=>'S30 седан']);
        $this->insert('{{%models}}',['id'=>'457','brand_id'=>'52','name'=>'H30 Cross хэтчбек']);
        $this->insert('{{%models}}',['id'=>'458','brand_id'=>'53','name'=>'V5 седан']);
        $this->insert('{{%models}}',['id'=>'459','brand_id'=>'53','name'=>'Oley седан']);
        $this->insert('{{%models}}',['id'=>'460','brand_id'=>'53','name'=>'Besturn B50 седан']);
        $this->insert('{{%models}}',['id'=>'461','brand_id'=>'54','name'=>'Tunland пикап']);
        $this->insert('{{%models}}',['id'=>'462','brand_id'=>'55','name'=>'GC6 седан']);
        $this->insert('{{%models}}',['id'=>'463','brand_id'=>'55','name'=>'Emgrand EC7 седан']);
        $this->insert('{{%models}}',['id'=>'464','brand_id'=>'55','name'=>'Emgrand 7 седан']);
        $this->insert('{{%models}}',['id'=>'465','brand_id'=>'55','name'=>'Emgrand EC7 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'466','brand_id'=>'55','name'=>'MK Cross кроссовер']);
        $this->insert('{{%models}}',['id'=>'467','brand_id'=>'55','name'=>'Emgrand X7 кроссовер']);
        $this->insert('{{%models}}',['id'=>'468','brand_id'=>'56','name'=>'M4 кроссовер']);
        $this->insert('{{%models}}',['id'=>'469','brand_id'=>'56','name'=>'H6 кроссовер']);
        $this->insert('{{%models}}',['id'=>'470','brand_id'=>'56','name'=>'H5 внедорожник']);
        $this->insert('{{%models}}',['id'=>'471','brand_id'=>'56','name'=>'H3 внедорожник']);
        $this->insert('{{%models}}',['id'=>'472','brand_id'=>'56','name'=>'Wingle 5 пикап']);
        $this->insert('{{%models}}',['id'=>'473','brand_id'=>'57','name'=>'7 кроссовер']);
        $this->insert('{{%models}}',['id'=>'474','brand_id'=>'58','name'=>'H2 кроссовер']);
        $this->insert('{{%models}}',['id'=>'475','brand_id'=>'58','name'=>'H8 внедорожник']);
        $this->insert('{{%models}}',['id'=>'476','brand_id'=>'58','name'=>'H9 внедорожник']);
        $this->insert('{{%models}}',['id'=>'477','brand_id'=>'59','name'=>'Solano седан']);
        $this->insert('{{%models}}',['id'=>'478','brand_id'=>'59','name'=>'Celliya седан']);
        $this->insert('{{%models}}',['id'=>'479','brand_id'=>'59','name'=>'Cebrium седан']);
        $this->insert('{{%models}}',['id'=>'480','brand_id'=>'59','name'=>'Smily хэтчбек']);
        $this->insert('{{%models}}',['id'=>'481','brand_id'=>'59','name'=>'X50 кроссовер']);
        $this->insert('{{%models}}',['id'=>'482','brand_id'=>'59','name'=>'X60 кроссовер']);
        $this->insert('{{%models}}',['id'=>'483','brand_id'=>'60','name'=>'Z300 седан']);
        $this->insert('{{%models}}',['id'=>'484','brand_id'=>'60','name'=>'Z100 хэтчбек']);
        $this->insert('{{%models}}',['id'=>'485','brand_id'=>'60','name'=>'T600 кроссовер']);
        $this->insert('{{%models}}',['id'=>'486','brand_id'=>'60','name'=>'Nomad кроссовер']);
        $this->insert('{{%pages}}',['id'=>'3','title'=>'Водителям','text'=>'


            ','active'=>'1']);
        $this->insert('{{%pages}}',['id'=>'4','title'=>'Как заказать','text'=>'
            Как заказать

            ','active'=>'1']);
        $this->insert('{{%pages}}',['id'=>'8','title'=>'Контакты','text'=>'
            Контакты

            ','active'=>'1']);
        $this->insert('{{%pages}}',['id'=>'9','title'=>'О компании','text'=>'
            О компанни

            ','active'=>'1']);
        $this->insert('{{%profile}}',['user_id'=>'1','name'=>null,'public_email'=>null,'gravatar_email'=>'mxuser@ya.ru','gravatar_id'=>'b828781ffb29caeabb141d3f8fb066c6','location'=>null,'website'=>null,'bio'=>null]);
        $this->insert('{{%regions}}',['id'=>'4','name'=>'г.Киев']);
        $this->insert('{{%regions}}',['id'=>'5','name'=>'Днепровская область']);
        $this->insert('{{%regions}}',['id'=>'6','name'=>'Донецкая область']);
        $this->insert('{{%regions}}',['id'=>'7','name'=>'Запорожская область']);
        $this->insert('{{%regions}}',['id'=>'8','name'=>'Полтавская область']);
        $this->insert('{{%regions}}',['id'=>'9','name'=>'Харьковская область']);
        $this->insert('{{%regions}}',['id'=>'10','name'=>'Киевская область']);
        $this->insert('{{%regions}}',['id'=>'11','name'=>'Одесская область']);
        $this->insert('{{%regions}}',['id'=>'12','name'=>'Луганская область']);
        $this->insert('{{%regions}}',['id'=>'13','name'=>'АР Крым']);
        $this->insert('{{%regions}}',['id'=>'14','name'=>'Сумская область']);
        $this->insert('{{%regions}}',['id'=>'15','name'=>'Кировоградская область']);
        $this->insert('{{%regions}}',['id'=>'16','name'=>'Черниговская область']);
        $this->insert('{{%regions}}',['id'=>'17','name'=>'Ивано-Франковская область']);
        $this->insert('{{%regions}}',['id'=>'18','name'=>'Волынская область']);
        $this->insert('{{%regions}}',['id'=>'19','name'=>'Ровненская область']);
        $this->insert('{{%regions}}',['id'=>'20','name'=>'Винницкая область']);
        $this->insert('{{%regions}}',['id'=>'21','name'=>'Херсонская область']);
        $this->insert('{{%regions}}',['id'=>'22','name'=>'Хмельницкая область']);
        $this->insert('{{%regions}}',['id'=>'23','name'=>'Житомирская область']);
        $this->insert('{{%regions}}',['id'=>'24','name'=>'Закарпатская область']);
        $this->insert('{{%regions}}',['id'=>'25','name'=>'Черновицкая область']);
        $this->insert('{{%regions}}',['id'=>'26','name'=>'Тернопольская область']);
        $this->insert('{{%regions}}',['id'=>'27','name'=>'г.Севастополь']);
        $this->insert('{{%regions}}',['id'=>'28','name'=>'Николаевская область']);
        $this->insert('{{%regions}}',['id'=>'29','name'=>'Черкасская область']);
        $this->insert('{{%regions}}',['id'=>'30','name'=>'Львовская область']);
        $this->insert('{{%settings}}',['admin_email'=>'mxuser@ya.ru','liqpay_public_key'=>'i66150647644','liqpay_private_key'=>'kQ6jca4o0yBvOYiuZpOJ03s9oHvVCZ7HDM3gUCx0','vk_link'=>'https://vk.com/','fb_link'=>'https://facebook.com','in_link'=>'https://instagram.com','tw_link'=>'https://twitter.com','address'=>'г.Полтава, ул.Полтавская, 72','phone1'=>'+380660000000','phone2'=>'+380660000001','email'=>'\"контактный email\"','terms'=>'
            Что бы вы не замышляли, - вы делаете это на свой страх и риск , ведь это всего лишь тестовая версия сайта

            ','latitude'=>'49.589632','longitude'=>'34.550993','partner_percent'=>'40']);
        $this->insert('{{%user}}',['id'=>'1','username'=>'admin','fio'=>'Витренко Вячеслав Дмитриевич','phone'=>'+380663564463','type'=>'admin','partner'=>'0','score'=>'0.00','email'=>'mxuser@ya.ru','password_hash'=>'$2y$10$OwgqdDGxvOjPdJZyV61pROkkHscVTpn3iEOTjF/tQqgkshVQigsIW','auth_key'=>'00jW-tSUj5jceZfhyYV6ArSmlMUQnP44','confirmed_at'=>'1470641008','unconfirmed_email'=>null,'blocked_at'=>null,'registration_ip'=>'93.78.238.18','created_at'=>'1465814964','updated_at'=>'1470730123','flags'=>'0']);
        $this->execute('SET foreign_key_checks = 1;');
    }

    public function down()
    {
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `auth_assignment`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `auth_item`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `auth_item_child`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `auth_rule`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `auto`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `brands`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `categories`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `comments`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `images`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `models`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `notifications`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `orders`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `pages`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `profile`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `regions`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `settings`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `social_account`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `token`');
        $this->execute('SET foreign_key_checks = 1;');
        $this->execute('SET foreign_key_checks = 0');
        $this->execute('DROP TABLE IF EXISTS `user`');
        $this->execute('SET foreign_key_checks = 1;');
    }

}
