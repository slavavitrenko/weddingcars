-- phpMyAdmin SQL Dump
-- version 4.6.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Июн 13 2016 г., 09:20
-- Версия сервера: 10.0.25-MariaDB-0ubuntu0.16.04.1
-- Версия PHP: 7.0.4-7ubuntu2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `auto`
--

-- --------------------------------------------------------

--
-- Структура таблицы `auth_assignment`
--

CREATE TABLE `auth_assignment` (
  `item_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `auth_assignment`
--

INSERT INTO `auth_assignment` (`item_name`, `user_id`, `created_at`) VALUES
('admin', '1', 2147483647),
('driver', '24', 2147483647);

-- --------------------------------------------------------

--
-- Структура таблицы `auth_item`
--

CREATE TABLE `auth_item` (
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
('admin', 2, 'Администратор', NULL, NULL, 1465284342, 1465646884),
('client', 2, 'Клиент', NULL, NULL, 1465575302, 1465575309),
('driver', 2, 'Водитель', NULL, NULL, 1465286768, 1465292071),
('manager', 2, 'Менеджер', NULL, NULL, 1465286804, 1465292078);

-- --------------------------------------------------------

--
-- Структура таблицы `auth_item_child`
--

CREATE TABLE `auth_item_child` (
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

CREATE TABLE `auth_rule` (
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `data` text COLLATE utf8_unicode_ci,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `auto`
--

CREATE TABLE `auto` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `year` year(4) NOT NULL,
  `color` varchar(255) NOT NULL,
  `body` varchar(255) NOT NULL,
  `retro` int(1) NOT NULL,
  `bus_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `auto`
--

INSERT INTO `auto` (`id`, `user_id`, `name`, `type`, `brand`, `model`, `year`, `color`, `body`, `retro`, `bus_type`) VALUES
(1, 1, '', 'car', '3', '60', 1992, 'black', 'car', 1, '');

-- --------------------------------------------------------

--
-- Структура таблицы `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Структура таблицы `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `images`
--

INSERT INTO `images` (`id`, `car_id`, `path`) VALUES
(1, 1, '122026_Papel-de-Pare1_2016-06-11_07:29:19.jpg'),
(2, 1, 'ubuntu_linux_debian_1_2016-06-11_07:29:19.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `migration`
--

CREATE TABLE `migration` (
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

CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(104, 7, 'cee\'d хэтчбек'),
(105, 7, 'Venga хэтчбек'),
(106, 7, 'cee\'d универсал'),
(107, 7, 'cee\'d GT хэтчбек'),
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
-- Структура таблицы `profile`
--

CREATE TABLE `profile` (
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
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `social_account`
--

CREATE TABLE `social_account` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `client_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data` text COLLATE utf8_unicode_ci,
  `code` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` int(11) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `token`
--

CREATE TABLE `token` (
  `user_id` int(11) NOT NULL,
  `code` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` int(11) NOT NULL,
  `type` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `token`
--

INSERT INTO `token` (`user_id`, `code`, `created_at`, `type`) VALUES
(1, 'dVN85LM4NEXAE7on7La5rMKdEiuxr1Mu', 1465564399, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fio` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(13) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(8) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'client',
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `username`, `fio`, `phone`, `type`, `email`, `password_hash`, `auth_key`, `confirmed_at`, `unconfirmed_email`, `blocked_at`, `registration_ip`, `created_at`, `updated_at`, `flags`) VALUES
(1, 'admin', 'Витренко Вячеслав Дмитриевич', '+380663564463', 'client', 'mxuser@ya.ru', '$2y$10$gHITDDks4iRDGHxhHRJPpOYk78gOgTtwC2E0eVYXNpnFJVUlJTbii', 'BceQwFC8bTxXNf2kOOMCjJ7QoUzAvWlm', 1465284070, NULL, NULL, '127.0.0.1', 1465284070, 1465647819, 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `auth_assignment`
--
ALTER TABLE `auth_assignment`
  ADD PRIMARY KEY (`item_name`,`user_id`);

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
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

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
-- Индексы таблицы `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT для таблицы `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=487;
--
-- AUTO_INCREMENT для таблицы `social_account`
--
ALTER TABLE `social_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `auth_assignment`
--
ALTER TABLE `auth_assignment`
  ADD CONSTRAINT `auth_assignment_ibfk_1` FOREIGN KEY (`item_name`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `auth_item`
--
ALTER TABLE `auth_item`
  ADD CONSTRAINT `auth_item_ibfk_1` FOREIGN KEY (`rule_name`) REFERENCES `auth_rule` (`name`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `auth_item_child`
--
ALTER TABLE `auth_item_child`
  ADD CONSTRAINT `auth_item_child_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `auth_item_child_ibfk_2` FOREIGN KEY (`child`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `auto`
--
ALTER TABLE `auto`
  ADD CONSTRAINT `auto_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `fk_user_profile` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `social_account`
--
ALTER TABLE `social_account`
  ADD CONSTRAINT `fk_user_account` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `fk_user_token` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
