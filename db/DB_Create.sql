-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- 主機: localhost
-- 產生時間： 2018 年 06 月 21 日 05:55
-- 伺服器版本: 5.7.18
-- PHP 版本： 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `cAuth`
--
CREATE DATABASE IF NOT EXISTS `cAuth` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cAuth`;

-- --------------------------------------------------------

--
-- 資料表結構 `apii_Billing`
--

DROP TABLE IF EXISTS `apii_Billing`;
CREATE TABLE `apii_Billing` (
  `bill_id` int(11) NOT NULL,
  `bill_custid` int(11) NOT NULL,
  `bill_tableid` int(11) NOT NULL,
  `bill_ordreid` int(11) NOT NULL,
  `bill_itemsprice` text NOT NULL,
  `bill_ispaid` tinyint(1) NOT NULL DEFAULT '0',
  `bill_totalprice` decimal(10,0) NOT NULL,
  `bill_type` varchar(80) NOT NULL,
  `bill_lastupdatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bill_createtime` datetime NOT NULL,
  `bill_attr1` varchar(80) NOT NULL,
  `bill_attr2` varchar(80) NOT NULL,
  `bill_attr3` varchar(80) NOT NULL,
  `bill_attr4` varchar(80) NOT NULL,
  `bill_attr5` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `apii_BillType`
--

DROP TABLE IF EXISTS `apii_BillType`;
CREATE TABLE `apii_BillType` (
  `billtype_id` int(11) NOT NULL,
  `billtype_desc` varchar(80) NOT NULL,
  `bill_lastupdatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bill_createtime` datetime NOT NULL,
  `bill_attr1` varchar(80) NOT NULL,
  `bill_attr2` varchar(80) NOT NULL,
  `bill_attr3` varchar(80) NOT NULL,
  `bill_attr4` varchar(80) NOT NULL,
  `bill_attr5` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `apii_CustomerIn`
--

DROP TABLE IF EXISTS `apii_CustomerIn`;
CREATE TABLE `apii_CustomerIn` (
  `cin_id` int(11) NOT NULL,
  `cin_custid` int(11) NOT NULL,
  `cin_tableid` int(11) NOT NULL,
  `cin_reservetime` datetime NOT NULL,
  `cin_tabled` tinyint(1) NOT NULL,
  `item_lastupdatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `item_createtime` datetime NOT NULL,
  `cin_attr1` varchar(80) NOT NULL,
  `cin_attr2` varchar(80) NOT NULL,
  `cin_attr3` varchar(80) NOT NULL,
  `cin_attr4` varchar(80) NOT NULL,
  `cin_attr5` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `apii_ItemMenu`
--

DROP TABLE IF EXISTS `apii_ItemMenu`;
CREATE TABLE `apii_ItemMenu` (
  `item_id` int(11) NOT NULL,
  `item_main_cata` varchar(80) NOT NULL,
  `item_pic_url` varchar(80) NOT NULL,
  `item_sub_cata` varchar(80) NOT NULL,
  `item_short_desc` text NOT NULL,
  `item_long_desc` text NOT NULL,
  `item_price` decimal(10,0) NOT NULL,
  `item_active` tinyint(1) NOT NULL DEFAULT '1',
  `item_lastupdatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `item_createtime` datetime NOT NULL,
  `item_attr1` varchar(80) NOT NULL,
  `item_attr2` varchar(80) NOT NULL,
  `item_attr3` varchar(80) NOT NULL,
  `item_attr4` varchar(80) NOT NULL,
  `item_attr5` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `apii_Order`
--

DROP TABLE IF EXISTS `apii_Order`;
CREATE TABLE `apii_Order` (
  `order_id` int(11) NOT NULL,
  `order_custid` int(11) NOT NULL,
  `order_tableid` int(11) NOT NULL,
  `order_items` text NOT NULL,
  `order_takerid` int(11) NOT NULL,
  `order_lastupdatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `order_createtime` datetime NOT NULL,
  `order_attr1` varchar(80) NOT NULL,
  `order_attr2` varchar(80) NOT NULL,
  `order_attr3` varchar(80) NOT NULL,
  `order_attr4` varchar(80) NOT NULL,
  `order_attr5` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `apii_ItemMenu`
--
ALTER TABLE `apii_ItemMenu`
  ADD PRIMARY KEY (`item_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
