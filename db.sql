-- phpMyAdmin SQL Dump
-- version 4.4.15.4
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Авг 09 2016 г., 10:47
-- Версия сервера: 5.5.44-MariaDB
-- Версия PHP: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `c1weddingcars`
--

-- --------------------------------------------------------

--
-- Структура таблицы `auth_assignment`
--

CREATE TABLE IF NOT EXISTS `auth_assignment` (
  `item_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `auth_assignment`
--

INSERT INTO `auth_assignment` (`item_name`, `user_id`, `created_at`) VALUES
('admin', '1', NULL),
('client', '13', 2147483647),
('client', '16', 2147483647),
('client', '19', 2147483647),
('client', '21', 2147483647),
('client', '7', 2147483647),
('client', '8', 2147483647),
('driver', '11', 2147483647);

-- --------------------------------------------------------

--
-- Структура таблицы `auth_item`
--

CREATE TABLE IF NOT EXISTS `auth_item` (
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `type` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `rule_name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data` text COLLATE utf8_unicode_ci,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `auth_item`
--

INSERT INTO `auth_item` (`name`, `type`, `description`, `rule_name`, `data`, `created_at`, `updated_at`) VALUES
('admin', 2, 'Администратор', NULL, NULL, 1465284342, 1465292059),
('driver', 2, 'Водитель', NULL, NULL, 1465286768, 1465292071),
('manager', 2, 'Менеджер', NULL, NULL, 1465286804, 1465292078);

-- --------------------------------------------------------

--
-- Структура таблицы `auth_item_child`
--

CREATE TABLE IF NOT EXISTS `auth_item_child` (
  `parent` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `child` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `auth_item_child`
--

INSERT INTO `auth_item_child` (`parent`, `child`) VALUES
('admin', 'client'),
('admin', 'driver'),
('admin', 'manager');

-- --------------------------------------------------------

--
-- Структура таблицы `auth_rule`
--

CREATE TABLE IF NOT EXISTS `auth_rule` (
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `data` text COLLATE utf8_unicode_ci,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `auto`
--

CREATE TABLE IF NOT EXISTS `auto` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `category_id` int(11) NOT NULL DEFAULT '0',
  `brand` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `year` year(4) NOT NULL,
  `color` varchar(255) NOT NULL,
  `body` varchar(255) DEFAULT NULL,
  `retro` int(1) DEFAULT NULL,
  `bus_type` varchar(255) DEFAULT NULL,
  `decor` int(1) NOT NULL,
  `client_decor` int(1) NOT NULL,
  `pass_count` int(11) NOT NULL,
  `description` text,
  `hour_cost` decimal(7,2) NOT NULL,
  `few_hours_cost` decimal(7,2) NOT NULL,
  `outside_cost` decimal(7,2) NOT NULL,
  `checked` int(1) NOT NULL,
  `popularity` int(255) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `auto`
--

INSERT INTO `auto` (`id`, `user_id`, `name`, `type`, `category_id`, `brand`, `model`, `year`, `color`, `body`, `retro`, `bus_type`, `decor`, `client_decor`, `pass_count`, `description`, `hour_cost`, `few_hours_cost`, `outside_cost`, `checked`, `popularity`) VALUES
(6, 11, '', NULL, 35, '4', '73', 1996, 'Черный', NULL, 1, NULL, 0, 1, 6, '', 500.00, 2300.00, 650.00, 1, 0),
(7, 12, '', NULL, 37, '7', '112', 2012, 'black', NULL, 1, NULL, 1, 0, 6, '', 550.00, 2600.00, 660.00, 1, 0),
(8, 1, '', NULL, 35, '42', '392', 2013, 'white', NULL, 0, NULL, 1, 1, 5, 'efwefewfewf', 500.00, 700.00, 500.00, 1, 0),
(9, 1, '', NULL, 35, '57', '473', 1992, 'black', NULL, 1, NULL, 0, 1, 5, '', 500.00, 2300.00, 650.00, 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `brands`
--

CREATE TABLE IF NOT EXISTS `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `brands`
--

INSERT INTO `brands` (`id`, `name`, `picture`) VALUES
(2, 'Audi', 'https://cars.imgsmail.ru/catalogue/firms/8/2/828f7b59d6a647a02dcaf42bd1d0f3d9_60x60.png'),
(3, 'BMW', 'https://cars.imgsmail.ru/catalogue/firms/8/a/8af49cad11d8ecf3cb2e7bd392842c81_60x60.png'),
(4, 'Ford', 'https://cars.imgsmail.ru/catalogue/firms/1/5/15642f0d8c2ec5f7c40bc54596572118_60x60.png'),
(5, 'Honda', 'https://cars.imgsmail.ru/catalogue/firms/2/4/2408528b84812553563c06bc0c0807b4_60x60.png'),
(6, 'Hyundai', 'https://cars.imgsmail.ru/catalogue/firms/a/5/a54d9864759f6bd63697ac70576c4b1d_60x60.png'),
(7, 'Kia', 'https://cars.imgsmail.ru/catalogue/firms/9/3/939e45ece543b9e3e330342e9e68d318_60x60.png'),
(8, 'Lada (ВАЗ)', 'https://cars.imgsmail.ru/catalogue/firms/9/b/9bff39e7e56d7c8831166f7d0a287a84_60x60.png'),
(9, 'Mazda', 'https://cars.imgsmail.ru/catalogue/firms/7/6/76b75334ac03bc288b4d00df5336856f_60x60.png'),
(10, 'Mercedes-Benz', 'https://cars.imgsmail.ru/catalogue/firms/b/9/b902d2618136a593c4cf77b3edf25904_60x60.png'),
(11, 'Mitsubishi', 'https://cars.imgsmail.ru/catalogue/firms/5/f/5f04172fb79e9ac89af30afd9aa869e0_60x60.png'),
(12, 'Nissan', 'https://cars.imgsmail.ru/catalogue/firms/a/f/af59afe953dfa5bbd211446354ec4472_60x60.png'),
(13, 'Renault', 'https://cars.imgsmail.ru/catalogue/firms/5/4/54874d26ef50d2d0fef4639155975500_60x60.png'),
(14, 'Skoda', 'https://cars.imgsmail.ru/catalogue/firms/7/b/7b3df37fe24018dd94533f2391148d5f_60x60.png'),
(15, 'Toyota', 'https://cars.imgsmail.ru/catalogue/firms/d/8/d874c138f20af73845ec75b80e5dd388_60x60.png'),
(16, 'Volkswagen', 'https://cars.imgsmail.ru/catalogue/firms/1/c/1c07f6cde6d7c09a23a97cfd1fc1b451_60x60.png'),
(17, 'Acura', 'https://cars.imgsmail.ru/catalogue/firms/9/a/9aa9f9896dc560231d78108341063667_60x60.png'),
(18, 'Datsun', 'https://cars.imgsmail.ru/catalogue/firms/2/b/2bfd9ebf3fb2fe9a540b331339b57d82_60x60.png'),
(19, 'Infiniti', 'https://cars.imgsmail.ru/catalogue/firms/3/a/3a18ed0c187ec5f4e3ad620d20878468_60x60.png'),
(20, 'Lexus', 'https://cars.imgsmail.ru/catalogue/firms/b/8/b8d26a4f73aacd17c1aff44e4161ee1a_60x60.png'),
(21, 'Subaru', 'https://cars.imgsmail.ru/catalogue/firms/0/c/0c02a288744860ff112d2bd4a6a52147_60x60.png'),
(22, 'Suzuki', 'https://cars.imgsmail.ru/catalogue/firms/8/6/863f74a1b1083a1a10613d624b48b8a4_60x60.png'),
(23, 'Cadillac', 'https://cars.imgsmail.ru/catalogue/firms/a/2/a234a61ec2dc7c2c40332e65cdb0f1b8_60x60.png'),
(24, 'Chevrolet', 'https://cars.imgsmail.ru/catalogue/firms/1/e/1e9041948aa2577d1d27a3a580110d5e_60x60.png'),
(25, 'Chrysler', 'https://cars.imgsmail.ru/catalogue/firms/a/f/afae63f6fea0de32dc51d96bf7e91e32_60x60.png'),
(26, 'Jeep', 'https://cars.imgsmail.ru/catalogue/firms/4/d/4d7452be5eada5d55a818397256567f3_60x60.png'),
(27, 'Tesla', 'https://cars.imgsmail.ru/catalogue/firms/c/4/c424c2721cce9a18493f17ca92f86991_60x60.png'),
(28, 'ГАЗ', 'https://cars.imgsmail.ru/catalogue/firms/5/a/5a0027b072e5bc9391cc86655046c89a_60x60.png'),
(29, 'УАЗ', 'https://cars.imgsmail.ru/catalogue/firms/5/e/5e60ef9ec6e34d355a13416d5a167245_60x60.png'),
(30, 'Porsche', 'https://cars.imgsmail.ru/catalogue/firms/6/6/66bd24c44c6ad5bb98883b84d8471aea_60x60.png'),
(31, 'SsangYong', 'https://cars.imgsmail.ru/catalogue/firms/6/f/6f9120845e86c9449423dc49c2e74a38_60x60.png'),
(32, 'Alfa Romeo', 'https://cars.imgsmail.ru/catalogue/firms/4/4/44b4e2807cf193c73c7ae2bd712ba723_60x60.png'),
(33, 'Aston Martin', 'https://cars.imgsmail.ru/catalogue/firms/7/3/73b4c3d41991e5c2608374fa299f16ac_60x60.png'),
(34, 'Bentley', 'https://cars.imgsmail.ru/catalogue/firms/3/1/31ca13ecf77028f1a1c4e54d659ab725_60x60.png'),
(35, 'Citroen', 'https://cars.imgsmail.ru/catalogue/firms/7/c/7cf4b94e8a08ad92bdabed5617a7a322_60x60.png'),
(36, 'DS', 'https://cars.imgsmail.ru/catalogue/firms/d/6/d6a5588ee316aaa59de56b03a7f91503_60x60.png'),
(37, 'Ferrari', 'https://cars.imgsmail.ru/catalogue/firms/a/e/aee44c481f443730e9cd6383dbe2d7ff_60x60.png'),
(38, 'Fiat', 'https://cars.imgsmail.ru/catalogue/firms/3/c/3ce1cde7d7aab5d8cd41384320b07a81_60x60.png'),
(39, 'Jaguar', 'https://cars.imgsmail.ru/catalogue/firms/1/3/137f6eb7f74be2be89929f8b3dbe80bf_60x60.png'),
(40, 'Lamborghini', 'https://cars.imgsmail.ru/catalogue/firms/2/c/2c8cc4757ed0cffa6c381767ede2ff98_60x60.png'),
(41, 'Land Rover', 'https://cars.imgsmail.ru/catalogue/firms/4/6/461ffc26ddc9d7247a107001892f0608_60x60.png'),
(42, 'Maserati', 'https://cars.imgsmail.ru/catalogue/firms/d/1/d1adcf4a374fdda57c958dc764851bd2_60x60.png'),
(43, 'Mini', 'https://cars.imgsmail.ru/catalogue/firms/1/4/14ea4a99fd730508147898c0f36ee392_60x60.png'),
(44, 'Peugeot', 'https://cars.imgsmail.ru/catalogue/firms/2/c/2cca8a7914c547c0792bf66795e9d43a_60x60.png'),
(45, 'Ravon', 'https://cars.imgsmail.ru/catalogue/firms/c/a/cac1a1744a0ad624a6f4fc39612a5876_60x60.png'),
(46, 'Rolls-Royce', 'https://cars.imgsmail.ru/catalogue/firms/9/0/907ad2a28c5c93d4bf75e98df8579c90_60x60.png'),
(47, 'Smart', 'https://cars.imgsmail.ru/catalogue/firms/8/1/81f4967707ced1d8518736a0331d06a6_60x60.png'),
(48, 'Volvo', 'https://cars.imgsmail.ru/catalogue/firms/a/4/a4641df46b9b295b7c28a764fae7a586_60x60.png'),
(49, 'Brilliance', 'https://cars.imgsmail.ru/catalogue/firms/c/f/cf4cd0c74889f2d078bd013dbbf2f397_60x60.png'),
(50, 'Changan', 'https://cars.imgsmail.ru/catalogue/firms/c/d/cd8aaec918d1f183738ebe52d0066aeb_60x60.png'),
(51, 'Chery', 'https://cars.imgsmail.ru/catalogue/firms/4/5/4557b8777596b6842be60995e0459e74_60x60.png'),
(52, 'DongFeng', 'https://cars.imgsmail.ru/catalogue/firms/7/9/79da3e0179bc8395326d142df263aa8e_60x60.png'),
(53, 'FAW', 'https://cars.imgsmail.ru/catalogue/firms/d/a/da6c5c0c7c15ec95d536eab25f399cae_60x60.png'),
(54, 'Foton', 'https://cars.imgsmail.ru/catalogue/firms/6/c/6c4d6dafbc43ac03536724393fc183e2_60x60.png'),
(55, 'Geely', 'https://cars.imgsmail.ru/catalogue/firms/a/5/a5049305e1199e8c8db121031835f8b1_60x60.png'),
(56, 'Great Wall', 'https://cars.imgsmail.ru/catalogue/firms/d/f/df571856882fab38a3ec62fb65fd1020_60x60.png'),
(57, 'Haima', 'https://cars.imgsmail.ru/catalogue/firms/3/1/31e86da94336a8c4c84797dbf829830d_60x60.png'),
(58, 'Haval', 'https://cars.imgsmail.ru/catalogue/firms/5/1/51225ad658a15d5662a3c8fe5112d700_60x60.png'),
(59, 'Lifan', 'https://cars.imgsmail.ru/catalogue/firms/0/8/084630e31b22ac3d902e30cb392ead3c_60x60.png'),
(60, 'Zotye', 'https://cars.imgsmail.ru/catalogue/firms/2/c/2caf208ee0e812ec5af82a10c797b009_60x60.png');

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `picture` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`, `picture`) VALUES
(35, 'Лимузины', 'uploads/categories/limousine_2016-07-27_02:56:34.jpg'),
(37, 'Внедорожники', 'uploads/categories/jeep_2016-08-01_04:59:53.png');

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `auto_id` int(11) NOT NULL,
  `rating` decimal(3,2) NOT NULL,
  `text` text NOT NULL,
  `created_at` int(13) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `auto_id`, `rating`, `text`, `created_at`) VALUES
(8, 1, 25, 1.50, '78998', 1469783158),
(9, 1, 25, 3.55, '98', 1469783166),
(10, 1, 25, 4.00, 'rty', 1469783701),
(11, 1, 25, 3.00, 'r5nya5cb', 1469784907),
(12, 1, 24, 3.00, 'ymgtu', 1469803001),
(13, 1, 24, 5.00, 'hshH ', 1469890041),
(14, 1, 26, 5.00, 'yi', 1470051509),
(15, 1, 26, 0.00, 'оччень хороший водитель, даже не плюется из окна', 1470067110),
(16, 1, 26, 5.00, 'ну, как-то так...', 1470067731),
(17, 1, 26, 5.00, 'Или так...', 1470067748),
(18, 1, 26, 3.00, 'sdfdsaf', 1470130957),
(19, 1, 1, 5.00, 'Ну, как-то так', 1470297048),
(20, 1, 2, 5.00, 'Ооочень крутой водила (Джейсон Стетхем)', 1470657343);

-- --------------------------------------------------------

--
-- Структура таблицы `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `images`
--

INSERT INTO `images` (`id`, `car_id`, `path`) VALUES
(36, 31, 'jeep31_2016-08-01_05:02:05.png'),
(37, 26, 'limo26_2016-08-01_05:02:41.jpg'),
(38, 26, 'limo26_2016-08-02_11:13:16.jpg'),
(39, 26, 'limo26_2016-08-02_11:13:25.jpg'),
(40, 31, '1920x1080-kubuntu_li31_2016-08-02_12:33:49.png'),
(41, 31, '1920x1080-kubuntu_li31_2016-08-02_12:33:49.png'),
(42, 31, '122026_Papel-de-Pare31_2016-08-02_12:33:49.jpg'),
(43, 31, 'IMG_056131_2016-08-02_12:33:49.jpg'),
(44, 31, 'ubuntu_linux_debian_31_2016-08-02_12:33:49.jpg'),
(45, 31, 'WallpapersxlKubuntuU31_2016-08-02_12:33:49.jpg'),
(76, 12, '1920x1080-kubuntu_li12_2016-08-03_06:08:32.png'),
(77, 12, '1920x1080-kubuntu_li12_2016-08-03_06:08:32.png'),
(78, 12, '122026_Papel-de-Pare12_2016-08-03_06:08:32.jpg'),
(79, 12, 'IMG_056112_2016-08-03_06:08:32.jpg'),
(80, 12, 'ubuntu_linux_debian_12_2016-08-03_06:08:32.jpg'),
(81, 12, 'WallpapersxlKubuntuU12_2016-08-03_06:08:32.jpg'),
(82, 14, '1920x1080-kubuntu_li14_2016-08-03_06:11:29.png'),
(83, 14, '1920x1080-kubuntu_li14_2016-08-03_06:11:29.png'),
(84, 14, '122026_Papel-de-Pare14_2016-08-03_06:11:29.jpg'),
(85, 14, 'IMG_056114_2016-08-03_06:11:29.jpg'),
(86, 14, 'ubuntu_linux_debian_14_2016-08-03_06:11:29.jpg'),
(87, 14, 'WallpapersxlKubuntuU14_2016-08-03_06:11:29.jpg'),
(124, 4, '1920x1080-kubuntu_li4_2016-08-08_04:11:24.png'),
(125, 4, '1920x1080-kubuntu_li4_2016-08-08_04:11:24.png'),
(126, 4, '122026_Papel-de-Pare4_2016-08-08_04:11:24.jpg'),
(127, 4, 'IMG_05614_2016-08-08_04:11:24.jpg'),
(128, 4, 'ubuntu_linux_debian_4_2016-08-08_04:11:24.jpg'),
(129, 4, 'WallpapersxlKubuntuU4_2016-08-08_04:11:24.jpg'),
(136, 7, '1920x1080-kubuntu_li7_2016-08-08_05:29:29.png'),
(137, 7, '1920x1080-kubuntu_li7_2016-08-08_05:29:29.png'),
(138, 7, '122026_Papel-de-Pare7_2016-08-08_05:29:29.jpg'),
(139, 7, 'IMG_05617_2016-08-08_05:29:29.jpg'),
(140, 7, 'ubuntu_linux_debian_7_2016-08-08_05:29:29.jpg'),
(141, 7, 'WallpapersxlKubuntuU7_2016-08-08_05:29:29.jpg'),
(142, 6, '1920x1080-kubuntu_li6_2016-08-08_05:35:16.png'),
(143, 6, '1920x1080-kubuntu_li6_2016-08-08_05:35:16.png'),
(144, 6, '122026_Papel-de-Pare6_2016-08-08_05:35:16.jpg'),
(145, 6, 'IMG_05616_2016-08-08_05:35:16.jpg'),
(146, 6, 'ubuntu_linux_debian_6_2016-08-08_05:35:16.jpg'),
(147, 6, 'WallpapersxlKubuntuU6_2016-08-08_05:35:16.jpg'),
(148, 8, 'logo-facebook8_2016-08-08_06:11:54.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `migration`
--

CREATE TABLE IF NOT EXISTS `migration` (
  `version` varchar(180) NOT NULL,
  `apply_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `migration`
--

INSERT INTO `migration` (`version`, `apply_time`) VALUES
('m000000_000000_base', 1465283582),
('m140209_132017_init', 1465283584),
('m140403_174025_create_account_table', 1465283584),
('m140504_113157_update_tables', 1465283585),
('m140504_130429_create_token_table', 1465283585),
('m140506_102106_rbac_init', 1465284291),
('m140830_171933_fix_ip_field', 1465283585),
('m140830_172703_change_account_table_name', 1465283585),
('m141222_110026_update_ip_field', 1465283585),
('m141222_135246_alter_username_length', 1465283585),
('m150614_103145_update_social_account_table', 1465283585),
('m150623_212711_fix_username_notnull', 1465283585);

-- --------------------------------------------------------

--
-- Структура таблицы `models`
--

CREATE TABLE IF NOT EXISTS `models` (
  `id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=489 DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `models`
--

INSERT INTO `models` (`id`, `brand_id`, `name`) VALUES
(1, 2, 'A3 седан'),
(2, 2, 'A4 седан'),
(3, 2, 'TT купе'),
(4, 2, 'A5 купе'),
(5, 2, 'A6 седан'),
(6, 2, 'S3 седан'),
(7, 2, 'TTS купе'),
(8, 2, 'S5 купе'),
(9, 2, 'S6 седан'),
(10, 2, 'A8 седан'),
(11, 2, 'S8 седан'),
(12, 2, 'S4 седан'),
(13, 2, 'A1 Sportback хэтчбек'),
(14, 2, 'A3 хэтчбек'),
(15, 2, 'A5 хэтчбек'),
(16, 2, 'A4 универсал'),
(17, 2, 'A6 универсал'),
(18, 2, 'S3 хэтчбек'),
(19, 2, 'A7 Sportback хэтчбек'),
(20, 2, 'A6 allroad quattro универсал'),
(21, 2, 'S5 хэтчбек'),
(22, 2, 'S6 универсал'),
(23, 2, 'S7 Sportback хэтчбек'),
(24, 2, 'RS 6 универсал'),
(25, 2, 'RS 7 Sportback хэтчбек'),
(26, 2, 'A4 allroad универсал'),
(27, 2, 'Q3 кроссовер'),
(28, 2, 'Q5 кроссовер'),
(29, 2, 'Q7 кроссовер'),
(30, 2, 'RS Q3 кроссовер'),
(31, 2, 'SQ5 кроссовер'),
(32, 2, 'Q2 кроссовер'),
(33, 2, 'SQ7 кроссовер'),
(34, 2, 'A3 кабриолет'),
(35, 2, 'A5 кабриолет'),
(36, 2, 'S3 кабриолет'),
(37, 3, '3 седан'),
(38, 3, '2 купе'),
(39, 3, '4 Gran Coupe купе'),
(40, 3, '4 купе'),
(41, 3, '5 седан'),
(42, 3, 'M2 купе'),
(43, 3, 'M3 седан'),
(44, 3, 'M4 купе'),
(45, 3, '6 купе'),
(46, 3, '6 Gran Coupe купе'),
(47, 3, 'M5 седан'),
(48, 3, '7 седан'),
(49, 3, 'M6 купе'),
(50, 3, 'M6 Gran Coupe седан'),
(51, 3, 'i8 купе'),
(52, 3, '1 хэтчбек'),
(53, 3, '3 Gran Turismo хэтчбек'),
(54, 3, '5 универсал'),
(55, 3, '5 Gran Turismo хэтчбек'),
(56, 3, 'X1 кроссовер'),
(57, 3, 'X3 кроссовер'),
(58, 3, 'X4 кроссовер'),
(59, 3, 'X5 кроссовер'),
(60, 3, 'X6 кроссовер'),
(61, 3, 'X6 M кроссовер'),
(62, 3, '2 Active Tourer минивэн'),
(63, 3, '2 Gran Tourer минивэн'),
(64, 3, '4 кабриолет'),
(65, 3, 'M4 кабриолет'),
(66, 3, '6 кабриолет'),
(67, 3, 'M6 кабриолет'),
(68, 3, '2 кабриолет'),
(69, 4, 'Fiesta седан'),
(70, 4, 'Focus седан'),
(71, 4, 'Mondeo седан'),
(72, 4, 'Mustang купе'),
(73, 4, 'Fiesta хэтчбек'),
(74, 4, 'Focus хэтчбек'),
(75, 4, 'Focus универсал'),
(76, 4, 'EcoSport кроссовер'),
(77, 4, 'Kuga кроссовер'),
(78, 4, 'Explorer внедорожник'),
(79, 4, 'Transit Connect фургон'),
(80, 4, 'Transit фургон'),
(81, 4, 'Tourneo микроавтобус'),
(82, 5, 'CR-V кроссовер'),
(83, 5, 'Pilot кроссовер'),
(84, 6, 'Solaris седан'),
(85, 6, 'i40 седан'),
(86, 6, 'Genesis седан'),
(87, 6, 'Equus седан'),
(88, 6, 'Elantra седан'),
(89, 6, 'Solaris хэтчбек'),
(90, 6, 'i30 хэтчбек'),
(91, 6, 'i30 универсал'),
(92, 6, 'Veloster хэтчбек'),
(93, 6, 'i40 универсал'),
(94, 6, 'Tucson кроссовер'),
(95, 6, 'Santa Fe Premium кроссовер'),
(96, 6, 'Grand Santa Fe кроссовер'),
(97, 6, 'H1 минивэн'),
(98, 7, 'Rio седан'),
(99, 7, 'Cerato седан'),
(100, 7, 'Optima седан'),
(101, 7, 'Quoris седан'),
(102, 7, 'Picanto хэтчбек'),
(103, 7, 'Rio хэтчбек'),
(104, 7, 'cee''d хэтчбек'),
(105, 7, 'Venga хэтчбек'),
(106, 7, 'cee''d универсал'),
(107, 7, 'cee''d GT хэтчбек'),
(108, 7, 'Soul кроссовер'),
(109, 7, 'Sportage кроссовер'),
(110, 7, 'Sorento кроссовер'),
(111, 7, 'Sorento Prime кроссовер'),
(112, 7, 'Mohave внедорожник'),
(113, 8, 'Granta седан'),
(114, 8, 'Priora седан'),
(115, 8, 'Vesta седан'),
(116, 8, 'Granta Sport седан'),
(117, 8, 'Granta хэтчбек'),
(118, 8, 'Kalina хэтчбек'),
(119, 8, 'Kalina универсал'),
(120, 8, 'Kalina Cross универсал'),
(121, 8, 'Largus универсал'),
(122, 8, 'Kalina Sport хэтчбек'),
(123, 8, 'Largus Cross универсал'),
(124, 8, 'Vesta универсал'),
(125, 8, '2121 (4x4) внедорожник'),
(126, 8, '4х4 Urban внедорожник'),
(127, 8, 'XRAY кроссовер'),
(128, 8, 'Largus фургон'),
(129, 9, '6 седан'),
(130, 9, '3 хэтчбек'),
(131, 9, 'CX-5 кроссовер'),
(132, 10, 'C седан'),
(133, 10, 'C купе'),
(134, 10, 'CLA седан'),
(135, 10, 'E купе'),
(136, 10, 'E седан'),
(137, 10, 'CLA AMG седан'),
(138, 10, 'CLS седан'),
(139, 10, 'C AMG седан'),
(140, 10, 'C AMG купе'),
(141, 10, 'S седан'),
(142, 10, 'E AMG седан'),
(143, 10, 'CLS AMG седан'),
(144, 10, 'AMG GT купе'),
(145, 10, 'Maybach S седан'),
(146, 10, 'S купе'),
(147, 10, 'S AMG седан'),
(148, 10, 'S AMG купе'),
(149, 10, 'A хэтчбек'),
(150, 10, 'CLA универсал'),
(151, 10, 'C универсал'),
(152, 10, 'A AMG хэтчбек'),
(153, 10, 'CLA AMG универсал'),
(154, 10, 'CLS универсал'),
(155, 10, 'C AMG универсал'),
(156, 10, 'GLA кроссовер'),
(157, 10, 'GLC кроссовер'),
(158, 10, 'GLA AMG кроссовер'),
(159, 10, 'GLE кроссовер'),
(160, 10, 'GLC AMG кроссовер'),
(161, 10, 'GL внедорожник'),
(162, 10, 'GLE Coupe кроссовер'),
(163, 10, 'GLS внедорожник'),
(164, 10, 'G внедорожник'),
(165, 10, 'GLE AMG кроссовер'),
(166, 10, 'GLE Coupe AMG кроссовер'),
(167, 10, 'GL AMG внедорожник'),
(168, 10, 'GLS AMG внедорожник'),
(169, 10, 'G AMG внедорожник'),
(170, 10, 'GLC Coupe кроссовер'),
(171, 10, 'B минивэн'),
(172, 10, 'Citan минивэн'),
(173, 10, 'E кабриолет'),
(174, 10, 'S кабриолет'),
(175, 10, 'S AMG кабриолет'),
(176, 10, 'Vito фургон'),
(177, 10, 'Citan фургон'),
(178, 10, 'Vito микроавтобус'),
(179, 10, 'Viano микроавтобус'),
(180, 10, 'Sprinter фургон'),
(181, 10, 'Sprinter микроавтобус'),
(182, 10, 'V микроавтобус'),
(183, 11, 'i-MiEV хэтчбек'),
(184, 11, 'Outlander кроссовер'),
(185, 11, 'Pajero внедорожник'),
(186, 11, 'Pajero Sport внедорожник'),
(187, 11, 'L200 пикап'),
(188, 12, 'Almera седан'),
(189, 12, 'Sentra седан'),
(190, 12, 'Teana седан'),
(191, 12, 'GT-R купе'),
(192, 12, 'Tiida хэтчбек'),
(193, 12, 'Juke кроссовер'),
(194, 12, 'Terrano кроссовер'),
(195, 12, 'Qashqai кроссовер'),
(196, 12, 'X-Trail кроссовер'),
(197, 12, 'Murano кроссовер'),
(198, 12, 'Pathfinder внедорожник'),
(199, 12, 'Patrol внедорожник'),
(200, 13, 'Logan седан'),
(201, 13, 'Fluence седан'),
(202, 13, 'Sandero хэтчбек'),
(203, 13, 'Sandero Stepway хэтчбек'),
(204, 13, 'Clio RS хэтчбек'),
(205, 13, 'Megane RS хэтчбек'),
(206, 13, 'Megane хэтчбек'),
(207, 13, 'Duster кроссовер'),
(208, 13, 'Kaptur кроссовер'),
(209, 13, 'Koleos кроссовер'),
(210, 13, 'Kangoo минивэн'),
(211, 13, 'Kangoo фургон'),
(212, 13, 'Master фургон'),
(213, 14, 'Rapid хэтчбек'),
(214, 14, 'Octavia хэтчбек'),
(215, 14, 'Octavia универсал'),
(216, 14, 'Superb хэтчбек'),
(217, 14, 'Octavia Scout универсал'),
(218, 14, 'Octavia RS хэтчбек'),
(219, 14, 'Octavia RS универсал'),
(220, 14, 'Superb универсал'),
(221, 14, 'Yeti кроссовер'),
(222, 15, 'Corolla седан'),
(223, 15, 'Camry седан'),
(224, 15, 'GT86 купе'),
(225, 15, 'Prius хэтчбек'),
(226, 15, 'RAV4 кроссовер'),
(227, 15, 'Land Cruiser Prado внедорожник'),
(228, 15, 'Highlander кроссовер'),
(229, 15, 'Land Cruiser внедорожник'),
(230, 15, 'Hilux пикап'),
(231, 15, 'Alphard минивэн'),
(232, 15, 'Hiace микроавтобус'),
(233, 16, 'Polo седан'),
(234, 16, 'Jetta седан'),
(235, 16, 'Passat седан'),
(236, 16, 'Passat CC седан'),
(237, 16, 'Beetle хэтчбек'),
(238, 16, 'Golf хэтчбек'),
(239, 16, 'Passat универсал'),
(240, 16, 'Golf R хэтчбек'),
(241, 16, 'Touareg внедорожник'),
(242, 16, 'Tiguan кроссовер'),
(243, 16, 'Amarok пикап'),
(244, 16, 'Transporter бортовой грузовик'),
(245, 16, 'Transporter микроавтобус'),
(246, 16, 'Transporter фургон'),
(247, 16, 'Crafter фургон'),
(248, 16, 'Caravelle микроавтобус'),
(249, 16, 'Multivan микроавтобус'),
(250, 17, 'TLX седан'),
(251, 17, 'NSX купе'),
(252, 17, 'RDX кроссовер'),
(253, 17, 'MDX кроссовер'),
(254, 18, 'on-DO седан'),
(255, 18, 'mi-DO хэтчбек'),
(256, 19, 'Q50 седан'),
(257, 19, 'Q70 седан'),
(258, 19, 'Q30 хэтчбек'),
(259, 19, 'QX70 кроссовер'),
(260, 19, 'QX50 кроссовер'),
(261, 19, 'QX60 кроссовер'),
(262, 19, 'QX80 внедорожник'),
(263, 19, 'QX30 кроссовер'),
(264, 20, 'ES седан'),
(265, 20, 'IS седан'),
(266, 20, 'RC купе'),
(267, 20, 'LS седан'),
(268, 20, 'GS F седан'),
(269, 20, 'RC F купе'),
(270, 20, 'LC купе'),
(271, 20, 'GS седан'),
(272, 20, 'NX кроссовер'),
(273, 20, 'RX кроссовер'),
(274, 20, 'GX внедорожник'),
(275, 20, 'LX внедорожник'),
(276, 21, 'BRZ купе'),
(277, 21, 'WRX STi седан'),
(278, 21, 'Legacy седан'),
(279, 21, 'Outback универсал'),
(280, 21, 'XV кроссовер'),
(281, 21, 'Forester кроссовер'),
(282, 22, 'Jimny внедорожник'),
(283, 22, 'Vitara кроссовер'),
(284, 22, 'Grand Vitara внедорожник'),
(285, 23, 'ATS седан'),
(286, 23, 'CTS седан'),
(287, 23, 'CT6 седан'),
(288, 23, 'SRX кроссовер'),
(289, 23, 'XT5 кроссовер'),
(290, 23, 'Escalade внедорожник'),
(291, 24, 'Corvette Stingray купе'),
(292, 24, 'Camaro купе'),
(293, 24, 'Niva внедорожник'),
(294, 24, 'Tahoe внедорожник'),
(295, 25, 'Grand Voyager минивэн'),
(296, 26, 'Renegade внедорожник'),
(297, 26, 'Compass кроссовер'),
(298, 26, 'Cherokee внедорожник'),
(299, 26, 'Wrangler внедорожник'),
(300, 26, 'Grand Cherokee внедорожник'),
(301, 27, 'Model S хэтчбек'),
(302, 27, 'Model X кроссовер'),
(303, 28, '«Газель-Бизнес» 2705 фургон'),
(304, 28, '«Газель-Бизнес» 3221 микроавтобус'),
(305, 28, '«Соболь-Бизнес» 2310 бортовой грузовик'),
(306, 28, '«Газель-Бизнес» 3302 бортовой грузовик'),
(307, 29, 'Hunter внедорожник'),
(308, 29, 'Patriot внедорожник'),
(309, 29, 'Pickup пикап'),
(310, 30, 'Cayman купе'),
(311, 30, '718 Cayman купе'),
(312, 30, 'Cayman GT4 купе'),
(313, 30, '911 купе'),
(314, 30, 'Panamera хэтчбек'),
(315, 30, 'Macan кроссовер'),
(316, 30, 'Cayenne кроссовер'),
(317, 30, '911 кабриолет'),
(318, 30, '911 Targa кабриолет'),
(319, 31, 'Actyon кроссовер'),
(320, 31, 'Stavic минивэн'),
(321, 32, '4C купе'),
(322, 32, 'Giulia седан'),
(323, 32, 'MiTo хэтчбек'),
(324, 32, 'Giulietta хэтчбек'),
(325, 33, 'DB9 Volante купе'),
(326, 33, 'V12 Vantage купе'),
(327, 33, 'Rapide седан'),
(328, 33, 'Vanquish купе'),
(329, 33, 'DB11 купе'),
(330, 33, 'DB9 Volante кабриолет'),
(331, 34, 'Continental GT купе'),
(332, 34, 'Flying Spur седан'),
(333, 34, 'Mulsanne седан'),
(334, 34, 'Bentayga кроссовер'),
(335, 34, 'Continental GT кабриолет'),
(336, 35, 'C-Elysee седан'),
(337, 35, 'C4 седан'),
(338, 35, 'DS3 хэтчбек'),
(339, 35, 'DS4 хэтчбек'),
(340, 35, 'C4 Aircross кроссовер'),
(341, 35, 'C3 Picasso минивэн'),
(342, 35, 'Berlingo Multispace минивэн'),
(343, 35, 'C4 Picasso минивэн'),
(344, 35, 'C4 Grand Picasso минивэн'),
(345, 35, 'Berlingo Multispace фургон'),
(346, 35, 'Jumpy фургон'),
(347, 35, 'Jumper грузовик'),
(348, 35, 'Jumper фургон'),
(349, 35, 'Jumpy микроавтобус'),
(350, 36, '4 хэтчбек'),
(351, 36, '4 Crossback хэтчбек'),
(352, 37, '458 Itаliа купе'),
(353, 37, 'F12 Berlinetta купе'),
(354, 37, 'Laкупе'),
(355, 37, '488GTB купе'),
(356, 37, 'FF хэтчбек'),
(357, 37, 'California T кабриолет'),
(358, 37, '488 Spider кабриолет'),
(359, 37, '488GTB кабриолет'),
(360, 38, 'Punto хэтчбек'),
(361, 38, '500 хэтчбек'),
(362, 38, '500X кроссовер'),
(363, 38, 'Freemont минивэн'),
(364, 38, 'Doblo Panorama минивэн'),
(365, 38, 'Scudo фургон'),
(366, 38, 'Ducato фургон'),
(367, 38, 'Scudo микроавтобус'),
(368, 38, 'Doblo Panorama фургон'),
(369, 39, 'XE седан'),
(370, 39, 'XF седан'),
(371, 39, 'F-Type купе'),
(372, 39, 'XJ седан'),
(373, 39, 'XFR седан'),
(374, 39, 'XJR седан'),
(375, 39, 'XFR-S седан'),
(376, 39, 'F-Type SVR купе'),
(377, 39, 'F-Pace кроссовер'),
(378, 39, 'F-Type кабриолет'),
(379, 39, 'F-Type SVR кабриолет'),
(380, 40, 'Huracan LP 610-4 купе'),
(381, 40, 'Aventador LP 700-4 купе'),
(382, 40, 'Centanario купе'),
(383, 41, 'Defender внедорожник'),
(384, 41, 'Range Rover Evoque кроссовер'),
(385, 41, 'Discovery Sport внедорожник'),
(386, 41, 'Discovery внедорожник'),
(387, 41, 'Range Rover Sport внедорожник'),
(388, 41, 'Range Rover внедорожник'),
(389, 41, 'Range Rover Sport SVR внедорожник'),
(390, 41, 'Defender пикап'),
(391, 41, 'Range Rover Evoque кабриолет'),
(392, 42, 'Ghibli седан'),
(393, 42, 'Quattroporte седан'),
(394, 42, 'GranTurismo купе'),
(395, 42, 'Levante кроссовер'),
(396, 42, 'GranCabrio кабриолет'),
(397, 43, 'Cooper хэтчбек'),
(398, 43, 'Clubman универсал'),
(399, 43, 'Paceman хэтчбек'),
(400, 43, 'John Cooper Works хэтчбек'),
(401, 43, 'Countryman кроссовер'),
(402, 43, 'Cabrio кабриолет'),
(403, 44, '301 седан'),
(404, 44, '408 седан'),
(405, 44, '508 седан'),
(406, 44, '308 хэтчбек'),
(407, 44, '308 GT Line хэтчбек'),
(408, 44, '308 GTI хэтчбек'),
(409, 44, '208 хэтчбек'),
(410, 44, '3008 кроссовер'),
(411, 44, '2008 кроссовер'),
(412, 44, 'Partner минивэн'),
(413, 44, 'Partner фургон'),
(414, 44, 'Expert фургон'),
(415, 44, 'Expert микроавтобус'),
(416, 44, 'Boxer фургон'),
(417, 44, 'Boxer микроавтобус'),
(418, 45, 'Nexia седан'),
(419, 45, 'Gentra седан'),
(420, 45, 'Matiz хэтчбек'),
(421, 45, 'R2 хэтчбек'),
(422, 46, 'Ghost седан'),
(423, 46, 'Wraith седан'),
(424, 46, 'Phantom седан'),
(425, 46, 'Phantom купе'),
(426, 46, 'Phantom кабриолет'),
(427, 46, 'Dawn кабриолет'),
(428, 47, 'fortwo хэтчбек'),
(429, 47, 'forfour хэтчбек'),
(430, 47, 'fortwo кабриолет'),
(431, 48, 'S60 седан'),
(432, 48, 'S80 седан'),
(433, 48, 'S60 Cross Counry седан'),
(434, 48, 'S90 седан'),
(435, 48, 'V60 Cross Country универсал'),
(436, 48, 'XC70 универсал'),
(437, 48, 'V90 универсал'),
(438, 48, 'V40 Cross Country хэтчбек'),
(439, 48, 'XC60 кроссовер'),
(440, 48, 'XC90 кроссовер'),
(441, 49, 'H230 седан'),
(442, 49, 'H530 седан'),
(443, 49, 'H230 хэтчбек'),
(444, 49, 'V5 кроссовер'),
(445, 50, 'Eado седан'),
(446, 50, 'CS35 кроссовер'),
(447, 51, 'Bonus седан'),
(448, 51, 'M11 седан'),
(449, 51, 'Bonus 3 седан'),
(450, 51, 'Arrizo 7 седан'),
(451, 51, 'Very хэтчбек'),
(452, 51, 'M11 хэтчбек'),
(453, 51, 'IndiS хэтчбек'),
(454, 51, 'Tiggo FL кроссовер'),
(455, 51, 'Tiggo 5 кроссовер'),
(456, 52, 'S30 седан'),
(457, 52, 'H30 Cross хэтчбек'),
(458, 53, 'V5 седан'),
(459, 53, 'Oley седан'),
(460, 53, 'Besturn B50 седан'),
(461, 54, 'Tunland пикап'),
(462, 55, 'GC6 седан'),
(463, 55, 'Emgrand EC7 седан'),
(464, 55, 'Emgrand 7 седан'),
(465, 55, 'Emgrand EC7 хэтчбек'),
(466, 55, 'MK Cross кроссовер'),
(467, 55, 'Emgrand X7 кроссовер'),
(468, 56, 'M4 кроссовер'),
(469, 56, 'H6 кроссовер'),
(470, 56, 'H5 внедорожник'),
(471, 56, 'H3 внедорожник'),
(472, 56, 'Wingle 5 пикап'),
(473, 57, '7 кроссовер'),
(474, 58, 'H2 кроссовер'),
(475, 58, 'H8 внедорожник'),
(476, 58, 'H9 внедорожник'),
(477, 59, 'Solano седан'),
(478, 59, 'Celliya седан'),
(479, 59, 'Cebrium седан'),
(480, 59, 'Smily хэтчбек'),
(481, 59, 'X50 кроссовер'),
(482, 59, 'X60 кроссовер'),
(483, 60, 'Z300 седан'),
(484, 60, 'Z100 хэтчбек'),
(485, 60, 'T600 кроссовер'),
(486, 60, 'Nomad кроссовер');

-- --------------------------------------------------------

--
-- Структура таблицы `notifications`
--

CREATE TABLE IF NOT EXISTS `notifications` (
  `id` int(11) NOT NULL,
  `email` text CHARACTER SET utf8 NOT NULL,
  `subject` text CHARACTER SET utf8 NOT NULL,
  `text` text CHARACTER SET utf8 NOT NULL,
  `layout` text CHARACTER SET utf8
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL,
  `cost` decimal(7,2) NOT NULL,
  `partner_percent` int(3) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `city` int(11) NOT NULL,
  `datetime` text NOT NULL,
  `hours` int(13) NOT NULL,
  `city_out` int(1) DEFAULT NULL,
  `km` int(10) NOT NULL,
  `route` text NOT NULL,
  `description` text,
  `paid` varchar(25) NOT NULL,
  `confirmed` int(1) NOT NULL,
  `created_at` int(13) NOT NULL,
  `order_id` text,
  `archive` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `cost`, `partner_percent`, `user_id`, `car_id`, `city`, `datetime`, `hours`, `city_out`, `km`, `route`, `description`, `paid`, `confirmed`, `created_at`, `order_id`, `archive`) VALUES
(8, 550.00, NULL, 13, 7, 27, '2016-08-09 17:30', 5, 1, 67, '5ry75', '', 'not', 0, 1470666623, 'kbZdXfNZKAgsPrIqDpOok63JqZ95oust48az2oxHJ466s2YTrs25YO8aJRw3q7Pt0cPlQh2SampRcPIVjzZn1H1U-1vh_5ZCnS2M', 0),
(9, 500.00, NULL, 13, 6, 5, '2016-08-10 09:00', 3, 1, 67, 'По селу покататься', '', 'not', 0, 1470666756, 'cmVrZzRqT1snIR_w_i3kmrC-AFe38B3aBWkdxlNQ8XwD7Th_V-BhdmcZsECkQLO6AEJ5Z5dbobdupBWnnnjbX4srrriQEj6WEZ1H', 0),
(11, 500.00, NULL, 16, 6, 6, '2016-08-16 18:05', 5, 1, 60, 'мамамавмавмавмавм', 'кпкереглгекпкепекпкепекпек', 'sandbox', 1, 1470668534, 'DBOp3FX3asze4O3oOY8Gvs0sYX1ZlH9Swi1fts9e0RFKIjcnezcypLIGkz74TreyVW2oPt1Tv6XnWDrjoE9UdmTWGtix6kifMEG-', 0),
(12, 500.00, NULL, 17, 6, 21, '2016-08-09 01:00', 4, 1, 12, 'по городу', '', 'not', 0, 1470676945, 'kOGKNAHUaENQgl8lEUJYYXTK6GjaJuRb2ERVdzXbpZwlsfKWxMyZiY8OvNppaTSUkI47YvKi3lhiVrAyQYeR5zxo26xaji6AVbDi', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL,
  `active` int(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `title`, `text`, `active`) VALUES
(3, 'Водителям', '<p><img src="/uploads/1/e585cfcfdb-ubuntulinuxdebianos624941920x1080.jpg" width="336" height="188" style="line-height: 1.6em; width: 336px; height: 188px;"></p>', 1),
(4, 'Как заказать', '<p>Как заказать</p>', 1),
(8, 'Контакты', '<p>Контакты</p>', 1),
(9, 'О компании', '<p>О компанни</p>', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `profile`
--

CREATE TABLE IF NOT EXISTS `profile` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `public_email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gravatar_email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gravatar_id` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio` text COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `profile`
--

INSERT INTO `profile` (`user_id`, `name`, `public_email`, `gravatar_email`, `gravatar_id`, `location`, `website`, `bio`) VALUES
(1, NULL, '', 'mxuser@ya.ru', 'b828781ffb29caeabb141d3f8fb066c6', '', '', ''),
(11, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `regions`
--

CREATE TABLE IF NOT EXISTS `regions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `regions`
--

INSERT INTO `regions` (`id`, `name`) VALUES
(4, 'г.Киев'),
(5, 'Днепровская область'),
(6, 'Донецкая область'),
(7, 'Запорожская область'),
(8, 'Полтавская область'),
(9, 'Харьковская область'),
(10, 'Киевская область'),
(11, 'Одесская область'),
(12, 'Луганская область'),
(13, 'АР Крым'),
(14, 'Сумская область'),
(15, 'Кировоградская область'),
(16, 'Черниговская область'),
(17, 'Ивано-Франковская область'),
(18, 'Волынская область'),
(19, 'Ровненская область'),
(20, 'Винницкая область'),
(21, 'Херсонская область'),
(22, 'Хмельницкая область'),
(23, 'Житомирская область'),
(24, 'Закарпатская область'),
(25, 'Черновицкая область'),
(26, 'Тернопольская область'),
(27, 'г.Севастополь'),
(28, 'Николаевская область'),
(29, 'Черкасская область'),
(30, 'Львовская область');

-- --------------------------------------------------------

--
-- Структура таблицы `settings`
--

CREATE TABLE IF NOT EXISTS `settings` (
  `admin_email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `liqpay_public_key` text CHARACTER SET utf8,
  `liqpay_private_key` text CHARACTER SET utf8,
  `vk_link` text CHARACTER SET utf8,
  `fb_link` text CHARACTER SET utf8,
  `in_link` text CHARACTER SET utf8,
  `tw_link` text CHARACTER SET utf8,
  `address` text CHARACTER SET utf8,
  `phone1` text CHARACTER SET utf8,
  `phone2` text CHARACTER SET utf8,
  `email` text CHARACTER SET utf8,
  `terms` text CHARACTER SET utf8,
  `latitude` text CHARACTER SET utf8,
  `longitude` text CHARACTER SET utf8,
  `partner_percent` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `settings`
--

INSERT INTO `settings` (`admin_email`, `liqpay_public_key`, `liqpay_private_key`, `vk_link`, `fb_link`, `in_link`, `tw_link`, `address`, `phone1`, `phone2`, `email`, `terms`, `latitude`, `longitude`, `partner_percent`) VALUES
('mxuser@ya.ru', 'i66150647644', 'kQ6jca4o0yBvOYiuZpOJ03s9oHvVCZ7HDM3gUCx0', 'https://vk.com/', 'https://facebook.com', 'https://instagram.com', 'https://twitter.com', 'г.Полтава, ул.Полтавская, 72', '+380660000000', '+380660000001', '"контактный email"', '<p>Что бы вы не замышляли, - вы делаете это на свой страх и риск , ведь это всего лишь тестовая версия сайта</p>', '49.589632', '34.550993', 40);

-- --------------------------------------------------------

--
-- Структура таблицы `social_account`
--

CREATE TABLE IF NOT EXISTS `social_account` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `client_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data` text COLLATE utf8_unicode_ci,
  `code` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` int(11) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=212 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `social_account`
--

INSERT INTO `social_account` (`id`, `user_id`, `provider`, `client_id`, `data`, `code`, `created_at`, `email`, `username`) VALUES
(205, 21, 'google', '100389874983486745651', '{"kind":"plus#person","etag":"\\"xw0en60W6-NurXn4VBU-CMjSPEw/t2bRNJqjCQvAHwcUfln1q1AHGwY\\"","gender":"male","emails":[{"value":"aminov.v.o@gmail.com","type":"account"}],"objectType":"person","id":"100389874983486745651","displayName":"Вадим Аминов","name":{"familyName":"Аминов","givenName":"Вадим"},"url":"https://plus.google.com/100389874983486745651","image":{"url":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50","isDefault":true},"isPlusUser":true,"language":"ru","circledByCount":0,"verified":false}', NULL, NULL, NULL, NULL),
(206, NULL, 'vkontakte', '39086449', '{"user_id":39086449,"email":"prosto.pots@mail.ru","uid":39086449,"first_name":"Вадим","last_name":"Аминов","sex":2,"nickname":"","screen_name":"id39086449","bdate":"24.5.1991","city":1581,"country":2,"timezone":3,"photo":"http://cs633431.vk.me/v633431449/30cf8/gKtikM8QXHA.jpg","id":39086449}', '618d6c6a625505e0c32132e7d045dfe8', NULL, 'prosto.pots@mail.ru', 'id39086449'),
(207, NULL, 'facebook', '122165044894554', '{"name":"Витренко Слава","id":"122165044894554"}', '33dd731762d775fa5f9fafc5c7e4a167', NULL, NULL, NULL),
(208, NULL, 'facebook', '542759475910665', '{"name":"Вадим Аминов","email":"aminov.vadim@mail.ru","id":"542759475910665"}', 'e305fb7398596249f18b0fcdcf8be32e', NULL, 'aminov.vadim@mail.ru', NULL),
(210, NULL, 'google', '117109351426877543323', '{"kind":"plus#person","etag":"\\"xw0en60W6-NurXn4VBU-CMjSPEw/_hMoX42dbUukh56-_wAuQ7lxw1w\\"","gender":"male","emails":[{"value":"slavavitrenko@gmail.com","type":"account"}],"objectType":"person","id":"117109351426877543323","displayName":"Слава Витренко","name":{"familyName":"Витренко","givenName":"Слава"},"url":"https://plus.google.com/117109351426877543323","image":{"url":"https://lh3.googleusercontent.com/-XzTWXd6mLFQ/AAAAAAAAAAI/AAAAAAAAHEA/ZVPFRn4fkqE/photo.jpg?sz=50","isDefault":true},"isPlusUser":true,"language":"ru","circledByCount":6,"verified":false}', '055fc44102c849a671ac8e1d7e5a1144', NULL, 'slavavitrenko@gmail.com', NULL),
(211, NULL, 'google', '115784994304343791141', '{"kind":"plus#person","etag":"\\"xw0en60W6-NurXn4VBU-CMjSPEw/r37fzKTSlwJfPtX7R69zNXOsvc0\\"","emails":[{"value":"rootbagirof@gmail.com","type":"account"}],"objectType":"person","id":"115784994304343791141","displayName":"Вася Пупкин","name":{"familyName":"Пупкин","givenName":"Вася"},"image":{"url":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50","isDefault":true},"isPlusUser":false,"language":"ru","verified":false}', '5e7f99a9aed76a7afbdc4f1a6344bb38', NULL, 'rootbagirof@gmail.com', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `token`
--

CREATE TABLE IF NOT EXISTS `token` (
  `user_id` int(11) NOT NULL,
  `code` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` int(11) NOT NULL,
  `type` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `token`
--

INSERT INTO `token` (`user_id`, `code`, `created_at`, `type`) VALUES
(11, 'Xp_WZcm0wMoXWo2ACga0KudH35spxOpU', 1470666414, 0),
(12, 'pNvETCt1HhkXtONZKnF2HhHQyBNOhhWS', 1470666494, 0),
(13, 'D-3W3o46GQzEBS8PutkP8dTJ4J0zQd1H', 1470666624, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fio` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(13) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(8) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'client',
  `partner` int(1) DEFAULT '0',
  `score` decimal(7,2) NOT NULL DEFAULT '0.00',
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password_hash` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `auth_key` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `confirmed_at` int(11) DEFAULT NULL,
  `unconfirmed_email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `blocked_at` int(11) DEFAULT NULL,
  `registration_ip` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  `flags` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `username`, `fio`, `phone`, `type`, `partner`, `score`, `email`, `password_hash`, `auth_key`, `confirmed_at`, `unconfirmed_email`, `blocked_at`, `registration_ip`, `created_at`, `updated_at`, `flags`) VALUES
(1, 'admin', 'Витренко Вячеслав Дмитриевич', '+380663564463', 'admin', 0, 0.00, 'slavavitrenko1@gmail.com', '$2y$10$qeNbpdab0XoPi5subAZRM.ckVzVTVqxodmgF5MhZGLhsN2GFBfjy2', '00jW-tSUj5jceZfhyYV6ArSmlMUQnP44', 1470641008, NULL, NULL, '93.78.238.18', 1465814964, 1470662212, 0),
(11, 'driver', 'Водитель Водила Водилович', '+380000000000', 'driver', NULL, 0.00, 'driver@gmail.com', '$2y$10$PnHdcpunOCSQwt7Spj7TvOFZ50W/dZ2yyEvSj0FhhYcMuzzE.Cvmy', 'nOhrLHvR1e1KLvryJ_jfDE51fh2x_9zp', 1470666508, NULL, NULL, '93.78.238.18', 1470666414, 1470666414, 0),
(12, 'partner', 'Партнер Партнер Партнер', '+380000000000', 'driver', 1, 0.00, 'partner@gmail.com', '$2y$10$ZjLlsfGyXd5zFIaaB.wCyObdywMNcFLC4CaKp7HBecSTS1IGrRrnG', 'rLT5jWp3R-t3lrZyPGp-KGtuwarhoT1j', 1470666502, NULL, NULL, '93.78.238.18', 1470666494, 1470666494, 0),
(13, 'client', 'Клиентко Клиент Батькович', '+380000000000', 'client', 0, 0.00, 'client@gmail.com', '$2y$10$qZB.S0jJifbBEYzAFnWQA.QJ4LO9U1A4rXzuhE.HDbzVQrtPAKjTu', 'kV4YvgTo8UD6uf3FEDUrTqkPqr3VzoSY', NULL, NULL, NULL, '93.78.238.18', 1470666624, 1470666624, 0),
(16, 'neros3', 'Левченко Владимир Игоревич', '+380095250555', 'client', 0, 0.00, 'neros3@yandex.ru', '$2y$10$Hthibqltnw8039n4lUcVPujG.wwjauHbSHONgc.Mf8M745yK08ZXO', 'EmJTckcbiZebjBlgSpv27DlZQdGkQ491', 1470668309, NULL, NULL, '93.78.206.14', 1470668272, 1470668272, 0),
(21, 'aminov.v.o', 'Аминов Вадим Александрович', '+380665791742', 'client', 0, 0.00, 'aminov.v.o@gmail.com', '$2y$10$l7ybQqAAk2egLtWirLLoOOhp1lXv7W.EHcD7ULlMfXZjrKzZq/WVC', '5tqeWT2_1vAmOQ9iTP_uOL0rKfb9jppH', 1470725608, NULL, NULL, '93.78.238.18', 1470725609, 1470725609, 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `auth_assignment`
--
ALTER TABLE `auth_assignment`
  ADD PRIMARY KEY (`item_name`,`user_id`),
  ADD KEY `item_name` (`item_name`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `auth_item`
--
ALTER TABLE `auth_item`
  ADD PRIMARY KEY (`name`),
  ADD KEY `rule_name` (`rule_name`),
  ADD KEY `idx-auth_item-type` (`type`);

--
-- Индексы таблицы `auth_item_child`
--
ALTER TABLE `auth_item_child`
  ADD PRIMARY KEY (`parent`,`child`),
  ADD KEY `child` (`child`);

--
-- Индексы таблицы `auth_rule`
--
ALTER TABLE `auth_rule`
  ADD PRIMARY KEY (`name`);

--
-- Индексы таблицы `auto`
--
ALTER TABLE `auto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `brand` (`brand`(191)),
  ADD KEY `model` (`model`(191)),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `few_hours_cost` (`few_hours_cost`),
  ADD KEY `hour_cost` (`hour_cost`),
  ADD KEY `outside_cost` (`outside_cost`),
  ADD KEY `popularity` (`popularity`);

--
-- Индексы таблицы `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `auto_id` (`auto_id`);

--
-- Индексы таблицы `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migration`
--
ALTER TABLE `migration`
  ADD PRIMARY KEY (`version`);

--
-- Индексы таблицы `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Индексы таблицы `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `car_id` (`car_id`),
  ADD KEY `created_at` (`created_at`),
  ADD KEY `accept` (`confirmed`);

--
-- Индексы таблицы `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`user_id`);

--
-- Индексы таблицы `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`admin_email`);

--
-- Индексы таблицы `social_account`
--
ALTER TABLE `social_account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `account_unique` (`provider`,`client_id`),
  ADD UNIQUE KEY `account_unique_code` (`code`),
  ADD KEY `fk_user_account` (`user_id`);

--
-- Индексы таблицы `token`
--
ALTER TABLE `token`
  ADD UNIQUE KEY `token_unique` (`user_id`,`code`,`type`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_unique_email` (`email`),
  ADD UNIQUE KEY `user_unique_username` (`username`),
  ADD KEY `fio` (`fio`),
  ADD KEY `phone` (`phone`),
  ADD KEY `type` (`type`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `auto`
--
ALTER TABLE `auto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=104;
--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT для таблицы `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=149;
--
-- AUTO_INCREMENT для таблицы `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=489;
--
-- AUTO_INCREMENT для таблицы `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT для таблицы `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `regions`
--
ALTER TABLE `regions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT для таблицы `social_account`
--
ALTER TABLE `social_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=212;
--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `auth_item`
--
ALTER TABLE `auth_item`
  ADD CONSTRAINT `auth_item_ibfk_1` FOREIGN KEY (`rule_name`) REFERENCES `auth_rule` (`name`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `auto`
--
ALTER TABLE `auto`
  ADD CONSTRAINT `auto_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `fk_user_profile` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `social_account`
--
ALTER TABLE `social_account`
  ADD CONSTRAINT `fk_user_account` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `fk_user_token` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
