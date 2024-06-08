-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-05-2024 a las 05:16:37
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `greenlocate`
--
CREATE DATABASE IF NOT EXISTS `greenlocate` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `greenlocate`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `area_verde`
--

CREATE TABLE `area_verde` (
  `Id_area` varchar(10) NOT NULL,
  `Tipo` varchar(6) NOT NULL,
  `Tamano` int(6) NOT NULL,
  `Estado` varchar(6) NOT NULL,
  `Longitud` varchar(10) NOT NULL,
  `Latitud` varchar(10) NOT NULL,
  `Id_unidad_vecinal` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `area_verde`
--

INSERT INTO `area_verde` (`Id_area`, `Tipo`, `Tamano`, `Estado`, `Longitud`, `Latitud`, `Id_unidad_vecinal`) VALUES
('AQ-01', '', 0, '', '-70,712123', '-33,357805', 'AQ'),
('AQ-02', '', 0, '', '-70.711187', '-33.358921', 'AQ'),
('AQ-03', '', 0, '', '-70.711893', '-33.360058', 'AQ'),
('AQ-04', '', 0, '', '-70.714725', '-33.360508', 'AQ'),
('AQ-05', '', 0, '', '-70.713154', '-33.360617', 'AQ'),
('AQ-06', '', 0, '', '-70.70995', '-33.360337', 'AQ'),
('AQ-07', '', 0, '', '-70.714207', '-33.363065', 'AQ'),
('AQ-08', '', 0, '', '-70.711985', '-33.363151', 'AQ'),
('AQ-09', '', 0, '', '-70.710459', '-33.36339', 'AQ'),
('BMUN-01', '', 0, '', '-70.730716', '-33.366299', 'BMUN'),
('BPH-01', '', 0, '', '-70.755986', '-33.360465', 'BPH'),
('BPH-02', '', 0, '', '-70.75938', '-33.361391', 'BPH'),
('BPH-03', '', 0, '', '-70.758121', '-33.362904', 'BPH'),
('BSAQ-01', '', 0, '', '-70.708008', '-33.362123', 'BSAQ'),
('BSL-01', '', 0, '', '-70.755474', '-33.355879', 'BSL'),
('CDS-01', '', 0, '', '-70.724063', '-33.358242', 'CDS'),
('CDS-02', '', 0, '', '-70.722753', '-33.358127', 'CDS'),
('CDS-03', '', 0, '', '-70.723117', '-33.358944', 'CDS'),
('CDS-04', '', 0, '', '-70.721748', '-33.359237', 'CDS'),
('CDS-05', '', 0, '', '-70.722839', '-33.359562', 'CDS'),
('CDS-06', '', 0, '', '-70.721808', '-33.360165', 'CDS'),
('CDS-07', '', 0, '', '-70.724313', '-33.359666', 'CDS'),
('CDT-01', '', 0, '', '-70.744292', '-33.349809', 'CDT'),
('CHQ-01', '', 0, '', '-70.737512', '-33.366114', 'CHQ'),
('CLV-01', '', 0, '', '-70.732047', '-33.358457', 'CLV'),
('CN-01', '', 0, '', '-70.751674', '-33.352805', 'CN'),
('CN-02', '', 0, '', '-70.752831', '-33.354361', 'CN'),
('CRSH-01', '', 0, '', '-70.755794', '-33.364833', 'CRSH'),
('CRSH-02', '', 0, '', '-70.753651', '-33.363586', 'CRSH'),
('CSL-01', '', 0, '', '-70.753804', '-33.357475', 'CSL'),
('CSL-02', '', 0, '', '-70.754777', '-33.358264', 'CSL'),
('CSLUI-01', '', 0, '', '-70.743337', '-33.35268', 'CSLUI'),
('DSO-01', '', 0, '', '-70.726023', '-33.352818', 'DSO'),
('DSO-02', '', 0, '', '-70.723979', '-33.353233', 'DSO'),
('DSO-03', '', 0, '', '-70.721554', '-33.353737', 'DSO'),
('DSO-04', '', 0, '', '-70.72804', '-33.353762', 'DSO'),
('DSO-05', '', 0, '', '-70.726792', '-33.354057', 'DSO'),
('DSO-06', '', 0, '', '-70.724689', '-33.354498', 'DSO'),
('DSO-07', '', 0, '', '-70.723489', '-33.354631', 'DSO'),
('DSO-08', '', 0, '', '-70.721491', '-33.355183', 'DSO'),
('EAM-01', '', 0, '', '-70.720328', '-33.351401', 'EAM'),
('EAM-02', '', 0, '', '-70.717776', '-33.351291', 'EAM'),
('ECHE-01', '', 0, '', '-70.741752', '-33.347529', 'ECHE'),
('EDES-01', '', 0, '', '-70.717456', '-33.37206', 'EDES'),
('EDES-02', '', 0, '', '-70.717273', '-33.373175', 'EDES'),
('EDES-03', '', 0, '', '-70.716351', '-33.373468', 'EDES'),
('EM-01', '', 0, '', '-70.744302', '-33.370559', 'EM'),
('EM-02', '', 0, '', '-70.741614', '-33.37113', 'EM'),
('EQ-01', '', 0, '', '-70.74485', '-33.34845', 'EQ'),
('EQ-02', '', 0, '', '-70.745967', '-33.349077', 'EQ'),
('EQ-03', '', 0, '', '-70.744654', '-33.349155', 'EQ'),
('ES-01', '', 0, '', '-70.740422', '-33.366443', 'ES'),
('ES-02', '', 0, '', '-70.742176', '-33.367058', 'ES'),
('ES-03', '', 0, '', '-70.74292', '-33.368525', 'ES'),
('ESM-01', '', 0, '', '-70.727249', '-33.368604', 'ESM'),
('EST-01', '', 0, '', '-70.748995', '-33.366218', 'EST'),
('ESTCOL-01', '', 0, '', '-70.712464', '-33.369364', 'ESTCOL'),
('EUG-01', '', 0, '', '-70.71994', '-33.367556', 'EUG'),
('FAS-01', '', 0, '', '-70.714288', '-33.364655', 'FAS'),
('GIL-01', '', 0, '', '-70.712031', '-33.366888', 'GIL'),
('GIL-02', '', 0, '', '-70.711442', '-33.367603', 'GIL'),
('GUA-01', '', 0, '', '-70.731779', '-33.370636', 'GUA'),
('HUE-01', '', 0, '', '-70.717977', '-33.367059', 'HUE'),
('JDN-01', '', 0, '', '-70.740595', '-33.355799', 'JDN'),
('JDN-02', '', 0, '', '-70.744816', '-33.357429', 'JDN'),
('JDN-03', '', 0, '', '-70.743009', '-33.358434', 'JDN'),
('JDN2-01', '', 0, '', '-70.748518', '-33.3503', 'JDN2'),
('JDS-01', '', 0, '', '-70.728779', '-33.359424', 'JDS'),
('JDS-02', '', 0, '', '-70.725912', '-33.359518', 'JDS'),
('JDS-03', '', 0, '', '-70.725825', '-33.360243', 'JDS'),
('JDS-04', '', 0, '', '-70.727273', '-33.360291', 'JDS'),
('JDS-05', '', 0, '', '-70.725701', '-33.360891', 'JDS'),
('JFG-01', '', 0, '', '-70.720042', '-33.359638', 'JFG'),
('JFG-02', '', 0, '', '-70.720666', '-33.360113', 'JFG'),
('JFG-03', '', 0, '', '-70.71632', '-33.36039', 'JFG'),
('JFG-04', '', 0, '', '-70.717995', '-33.360383', 'JFG'),
('JFG-05', '', 0, '', '-70.716873', '-33.36103', 'JFG'),
('JFG-06', '', 0, '', '-70.716611', '-33.362134', 'JFG'),
('JOR-01', '', 0, '', '-70.741858', '-33.34968', 'JOR'),
('JOR2-01', '', 0, '', '-70.741616', '-33.350578', 'JOR2'),
('JOR2-02', '', 0, '', '-70.741594', '-33.351513', 'JOR2'),
('L-01', '', 0, '', '-70.730354', '-33.364357', 'L'),
('LAD-01', '', 0, '', '-70.737499', '-33.348532', 'LAD'),
('LAD-02', '', 0, '', '-70.739023', '-33.350627', 'LAD'),
('LAD-03', '', 0, '', '-70.737613', '-33.350992', 'LAD'),
('LAD-04', '', 0, '', '-70.736978', '-33.351027', 'LAD'),
('LAD-05', '', 0, '', '-70.736356', '-33.350998', 'LAD'),
('LAD-06', '', 0, '', '-70.735651', '-33.350977', 'LAD'),
('LAD-07', '', 0, '', '-70.734908', '-33.351029', 'LAD'),
('LAR-01', '', 0, '', '-70.719577', '-33.372172', 'LAR'),
('LC-01', '', 0, '', '-70.735261', '-33.359873', 'LC'),
('LC-02', '', 0, '', '-70.734742', '-33.360994', 'LC'),
('LCAM-01', '', 0, '', '-70.713777', '-33.369794', 'LCAM'),
('LCAMPI-01', '', 0, '', '-70.735293', '-33.356139', 'LCAMPI'),
('LCAMPI-02', '', 0, '', '-70.734562', '-33.356226', 'LCAMPI'),
('LCAN-01', '', 0, '', '-70.724508', '-33.360521', 'LCAN'),
('LCAN-02', '', 0, '', '-70.723581', '-33.361076', 'LCAN'),
('LCAN-03', '', 0, '', '-70.721916', '-33.361783', 'LCAN'),
('LCAN-04', '', 0, '', '-70.727207', '-33.361107', 'LCAN'),
('LCAN-05', '', 0, '', '-70.727711', '-33.361664', 'LCAN'),
('LCAN-06', '', 0, '', '-70.724535', '-33.362328', 'LCAN'),
('LCAN-07', '', 0, '', '-70.724851', '-33.363396', 'LCAN'),
('LCAN-08', '', 0, '', '-70.721954', '-33.363918', 'LCAN'),
('LCAN-09', '', 0, '', '-70.72364', '-33.364044', 'LCAN'),
('LCAN-10', '', 0, '', '-70.721883', '-33.364807', 'LCAN'),
('LCAN-11', '', 0, '', '-70.726532', '-33.363231', 'LCAN'),
('LCAS-01', '', 0, '', '-70.733317', '-33.355279', 'LCAS'),
('LCAS-02', '', 0, '', '-70.733198', '-33.355962', 'LCAS'),
('LCAS-03', '', 0, '', '-70.731376', '-33.356431', 'LCAS'),
('LCAS-04', '', 0, '', '-70.733036', '-33.35647', 'LCAS'),
('LCDQ-01', '', 0, '', '-70.738106', '-33.356264', 'LCDQ'),
('LCDQ-02', '', 0, '', '-70.73885', '-33.356813', 'LCDQ'),
('LCIP-01', '', 0, '', '-70.751155', '-33.369557', 'LCIP'),
('LCRU-01', '', 0, '', '-70.719416', '-33.358131', 'LCRU'),
('LE-01', '', 0, '', '-70.737135', '-33.362763', 'LE'),
('LE-02', '', 0, '', '-70.743533', '-33.36224', 'LE'),
('LF-01', '', 0, '', '-70.749661', '-33.369115', 'LF'),
('LF-02', '', 0, '', '-70.748107', '-33.368377', 'LF'),
('LF-03', '', 0, '', '-70.747857', '-33.369247', 'LF'),
('LFOR-01', '', 0, '', '-70.750326', '-33.359075', 'LFOR'),
('LFOR-02', '', 0, '', '-70.748585', '-33.359558', 'LFOR'),
('LFOR2-01', '', 0, '', '-70.75049', '-33.356119', 'LFOR2'),
('LFOR2-02', '', 0, '', '-70.749972', '-33.357165', 'LFOR2'),
('LGOL-01', '', 0, '', '-70.720372', '-33.369061', 'LGOL'),
('LJAR-01', '', 0, '', '-70.718931', '-33.354518', 'LJAR'),
('LJAR-02', '', 0, '', '-70.716347', '-33.35481', 'LJAR'),
('LJAR-03', '', 0, '', '-70.716293', '-33.356395', 'LJAR'),
('LJAR-04', '', 0, '', '-70.720534', '-33.356381', 'LJAR'),
('LJAR-05', '', 0, '', '-70.715411', '-33.356601', 'LJAR'),
('LJAR-06', '', 0, '', '-70.718391', '-33.356891', 'LJAR'),
('LJAR-07', '', 0, '', '-70.716579', '-33.358004', 'LJAR'),
('LJAR-08', '', 0, '', '-70.71732', '-33.358719', 'LJAR'),
('LM-01', '', 0, '', '-70.756263', '-33.367519', 'LM'),
('LMAR-01', '', 0, '', '-70.752221', '-33.358138', 'LMAR'),
('LMAR-02', '', 0, '', '-70.753816', '-33.358633', 'LMAR'),
('LMAR-03', '', 0, '', '-70.754411', '-33.359462', 'LMAR'),
('LMAR-04', '', 0, '', '-70.753384', '-33.360174', 'LMAR'),
('LMAR-05', '', 0, '', '-70.751469', '-33.359704', 'LMAR'),
('LMAT-01', '', 0, '', '-70.727201', '-33.364374', 'LMAT'),
('LMAT-02', '', 0, '', '-70.725207', '-33.364873', 'LMAT'),
('LMAT-03', '', 0, '', '-70,728906', '-33,364483', 'LMAT'),
('LMIN-01', '', 0, '', '-70,756722', '-33,354844', 'LMIN'),
('LMIN-02', '', 0, '', '-70,756281', '-33,355748', 'LMIN'),
('LMOL-01', '', 0, '', '-70,746492', '-33,351281', 'LMOL'),
('LMOL-02', '', 0, '', '-70,74928', '-33,352661', 'LMOL'),
('LMOL-03', '', 0, '', '-70,74821', '-33,352323', 'LMOL'),
('LMOL-04', '', 0, '', '-70,748214', '-33,353912', 'LMOL'),
('LMOL-05', '', 0, '', '-70,746718', '-33,354265', 'LMOL'),
('LMOL-06', '', 0, '', '-70,747379', '-33,35519', 'LMOL'),
('LMOL-07', '', 0, '', '-70,750136', '-33,353575', 'LMOL'),
('LOV-01', '', 0, '', '-70,729977', '-33,358436', 'LOV'),
('LOV-02', '', 0, '', '-70,730126', '-33,360203', 'LOV'),
('LP-01', '', 0, '', '-70,752626', '-33,368677', 'LP'),
('LP-02', '', 0, '', '-70,7537', '-33,369542', 'LP'),
('LPOR-01', '', 0, '', '-70,734642', '-33,357188', 'LPOR'),
('LPOR2-01', '', 0, '', '-70,735843', '-33,357166', 'LPOR2'),
('LPRA-01', '', 0, '', '-70,723482', '-33,370788', 'LPRA'),
('LPRA-02', '', 0, '', '-70,745996', '-33,352639', 'LPRA'),
('LPRA-03', '', 0, '', '-70,745987', '-33,353634', 'LPRA'),
('LPRA-04', '', 0, '', '-70,744786', '-33,35351', 'LPRA'),
('LPRA-05', '', 0, '', '-70,745728', '-33,354056', 'LPRA'),
('LPRA-06', '', 0, '', '-70,744539', '-33,354768', 'LPRA'),
('LPRA-07', '', 0, '', '-70,74566', '-33,352023', 'LPRA'),
('LROL-01', '', 0, '', '-70,719936', '-33,36368', 'LROL'),
('LTIL-01', '', 0, '', '-70,71649', '-33,369713', 'LTIL'),
('LTRAN-01', '', 0, '', '-70,737602', '-33,355676', 'LTRAN'),
('LU-01', '', 0, '', '-70,722385', '-33,365494', 'LU'),
('LU-02', '', 0, '', '-70,722929', '-33,365829', 'LU'),
('LV-01', '', 0, '', '-70,733016', '-33,362306', 'LV'),
('LV-02', '', 0, '', '-70,733052', '-33,363439', 'LV'),
('MUN-01', '', 0, '', '-70,731987', '-33,368364', 'MUN'),
('P-01', '', 0, '', '-70,753617', '-33,365333', 'P'),
('P-02', '', 0, '', '-70,752595', '-33,365536', 'P'),
('P-03', '', 0, '', '-70,749895', '-33,36568', 'P'),
('PALE-01', '', 0, '', '-70,712893', '-33,365965', 'PALE'),
('PARM-01', '', 0, '', '-70,7316', '-33,367772', 'PARM'),
('PC-01', '', 0, '', '-70,742259', '-33,359984', 'PC'),
('PC-02', '', 0, '', '-70,739998', '-33,359678', 'PC'),
('PC-03', '', 0, '', '-70,743188', '-33,360947', 'PC'),
('PC-04', '', 0, '', '-70,737503', '-33,360501', 'PC'),
('PC-05', '', 0, '', '-70,740295', '-33,361029', 'PC'),
('PC-06', '', 0, '', '-70,739327', '-33,361101', 'PC'),
('PC-07', '', 0, '', '-70,738259', '-33,360901', 'PC'),
('PC-08', '', 0, '', '-70,737082', '-33,36126', 'PC'),
('PCEN-01', '', 0, '', '-70,724119', '-33,349668', 'PCEN'),
('PCEN-02', '', 0, '', '-70,726838', '-33,350347', 'PCEN'),
('PDER-01', '', 0, '', '-70,714285', '-33,35541', 'PDER'),
('PFG-01', '', 0, '', '-70,725237', '-33,370307', 'PFG'),
('PG-01', '', 0, '', '-70,75153', '-33,362519', 'PG'),
('PLCRU-01', '', 0, '', '-70,723145', '-33,349921', 'PLCRU'),
('PLCRU-02', '', 0, '', '-70,721397', '-33,350255', 'PLCRU'),
('PLCRU-03', '', 0, '', '-70,723244', '-33,350495', 'PLCRU'),
('PLCRU-04', '', 0, '', '-70,721432', '-33,350901', 'PLCRU'),
('PLCRU-05', '', 0, '', '-70,723254', '-33,351062', 'PLCRU'),
('PLCRU-06', '', 0, '', '-70,722349', '-33,35126', 'PLCRU'),
('PLCRU-07', '', 0, '', '-70,722054', '-33,351555', 'PLCRU'),
('PLCRU-08', '', 0, '', '-70,723339', '-33,351616', 'PLCRU'),
('PLO-01', '', 0, '', '-70,734196', '-33,359379', 'PLO'),
('PLO-02', '', 0, '', '-70,733507', '-33,359351', 'PLO'),
('PLO-03', '', 0, '', '-70,733498', '-33,359856', 'PLO'),
('PMAY-01', '', 0, '', '-70,735671', '-33,352336', 'PMAY'),
('PMAY-02', '', 0, '', '-70,736861', '-33,352552', 'PMAY'),
('PR-01', '', 0, '', '-70,737457', '-33,353486', 'PR'),
('PR-02', '', 0, '', '-70,736056', '-33,354147', 'PR'),
('PROJ-01', '', 0, '', '-70,717355', '-33,361475', 'PROJ'),
('PROJ-02', '', 0, '', '-70,718669', '-33,362694', 'PROJ'),
('PROJ-03', '', 0, '', '-70,717227', '-33,364156', 'PROJ'),
('REC-01', '', 0, '', '-70,72391', '-33,368413', 'REC'),
('SE-01', '', 0, '', '-70,747318', '-33,364462', 'SE'),
('SE-02', '', 0, '', '-70,743345', '-33,363525', 'SE'),
('SE-03', '', 0, '', '-70,743997', '-33,362574', 'SE'),
('SE-04', '', 0, '', '-70,744424', '-33,361994', 'SE'),
('SE-05', '', 0, '', '-70,748549', '-33,361228', 'SE'),
('SEST-01', '', 0, '', '-70,745308', '-33,364383', 'SEST'),
('SEST-02', '', 0, '', '-70,743764', '-33,364685', 'SEST'),
('SEST-03', '', 0, '', '-70,742538', '-33,363995', 'SEST'),
('SEST-04', '', 0, '', '-70,74185', '-33,364407', 'SEST'),
('SEST-05', '', 0, '', '-70,740519', '-33,364464', 'SEST'),
('SFIL-01', '', 0, '', '-70,721694', '-33,371018', 'SFIL'),
('SI-01', '', 0, '', '-70,731457', '-33,365568', 'SI'),
('SIL-01', '', 0, '', '-70,755162', '-33,360389', 'SIL'),
('SIL-02', '', 0, '', '-70,757149', '-33,363867', 'SIL'),
('SIL2-01', '', 0, '', '-70,763485', '-33,360528', 'SIL2'),
('SLAU-01', '', 0, '', '-70,752237', '-33,355705', 'SLAU'),
('SLUC-01', '', 0, '', '-70,738643', '-33,365643', 'SLUC'),
('SLUI-01', '', 0, '', '-70,735741', '-33,363303', 'SLUI'),
('SLUI-02', '', 0, '', '-70,734923', '-33,365074', 'SLUI'),
('SMARI-01', '', 0, '', '-70,732971', '-33,349478', 'SMARI'),
('SMARI-02', '', 0, '', '-70,729877', '-33,349739', 'SMARI'),
('SMARI-03', '', 0, '', '-70,73139', '-33,350343', 'SMARI'),
('SMARI-04', '', 0, '', '-70,730595', '-33,350958', 'SMARI'),
('SMARI-05', '', 0, '', '-70,729883', '-33,351632', 'SMARI'),
('SMARI-06', '', 0, '', '-70,729361', '-33,352828', 'SMARI'),
('SMARI-07', '', 0, '', '-70,731541', '-33,352981', 'SMARI'),
('SMARI-08', '', 0, '', '-70,730036', '-33,354114', 'SMARI'),
('SMARI-09', '', 0, '', '-70,731521', '-33,354029', 'SMARI'),
('SMARI-10', '', 0, '', '-70,729988', '-33,35492', 'SMARI'),
('SMARI-11', '', 0, '', '-70,731415', '-33,35564', 'SMARI'),
('SP-01', '', 0, '', '-70,72841', '-33,35729', 'SP'),
('STER-01', '', 0, '', '-70,718577', '-33,352899', 'STER'),
('STER-02', '', 0, '', '-70,715539', '-33,353225', 'STER'),
('TF-01', '', 0, '', '-70,744222', '-33,355642', 'TF'),
('TF-02', '', 0, '', '-70,743265', '-33,356022', 'TF'),
('TM-01', '', 0, '', '-70,748279', '-33,355858', 'TM'),
('TM-02', '', 0, '', '-70,745229', '-33,356184', 'TM'),
('TM-03', '', 0, '', '-70,747348', '-33,356555', 'TM'),
('VL-01', '', 0, '', '-70,744425', '-33,367963', 'VL'),
('VL-02', '', 0, '', '-70,746683', '-33,367517', 'VL'),
('VL-03', '', 0, '', '-70,747792', '-33,366975', 'VL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asiento`
--

CREATE TABLE `asiento` (
  `Id_asiento` varchar(6) NOT NULL,
  `Estado` varchar(6) NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `balancin`
--

CREATE TABLE `balancin` (
  `Id_balancin` varchar(6) NOT NULL,
  `Estado` varchar(6) NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cancha`
--

CREATE TABLE `cancha` (
  `Id_cancha` varchar(6) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Tipo` varchar(10) NOT NULL,
  `Metros_Cuadrados` int(6) NOT NULL,
  `Estado` varchar(6) NOT NULL,
  `Id_area` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `columpio`
--

CREATE TABLE `columpio` (
  `Id_columpio` varchar(6) NOT NULL,
  `Estado` varchar(6) NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `Id_comentario` varchar(12) NOT NULL,
  `Fecha` date NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comuna`
--

CREATE TABLE `comuna` (
  `Id_comuna` varchar(10) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Id_provincia` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `comuna`
--

INSERT INTO `comuna` (`Id_comuna`, `Nombre`, `Id_provincia`) VALUES
('13101', 'Santiago', '131'),
('13102', 'Cerrillos', '131'),
('13103', 'Cerro Navia', '131'),
('13104', 'Conchali', '131'),
('13105', 'El Bosque', '131'),
('13106', 'Estacion Central', '131'),
('13107', 'Huechuraba', '131'),
('13108', 'Independecia', '131'),
('13109', 'La Cisterna', '131'),
('13110', 'La Florida', '131'),
('13111', 'La Granja', '131'),
('13112', 'La Pintana', '131'),
('13113', 'La Reina', '131'),
('13114', 'Las Condes', '131'),
('13115', 'Lo Barnechea', '131'),
('13116', 'Lo Espejo', '131'),
('13117', 'Lo Prado', '131'),
('13118', 'Macul', '131'),
('13119', 'Maipu', '131'),
('13120', 'Nunoa', '131'),
('13121', 'Pedro Aguirre Cerda', '131'),
('13122', 'Penalolen', '131'),
('13123', 'Providencia', '131'),
('13124', 'Pudahuel', '131'),
('13125', 'Quilicura', '131'),
('13126', 'Quinta Normal', '131'),
('13127', 'Recoleta', '131'),
('13128', 'Renca', '131'),
('13129', 'San Joaquin', '131'),
('13130', 'San Miguel', '131'),
('13131', 'San Ramon', '131'),
('13132', 'Vitacura', '131'),
('13201', 'Puente Alto', '132'),
('13202', 'Pirque', '132'),
('13203', 'San Jose De Maipo', '132'),
('13301', 'Colina', '133'),
('13302', 'Lampa', '133'),
('13303', 'Tiltil', '133'),
('13401', 'San Bernardo', '134'),
('13402', 'Buin', '134'),
('13403', 'Calera De Tango', '134'),
('13404', 'Paine', '134'),
('13501', 'Melipilla', '135'),
('13502', 'Alhue', '135'),
('13503', 'Curacavi', '135'),
('13504', 'Maria Pinto', '135'),
('13505', 'San Pedro', '135'),
('13601', 'Talagante', '136'),
('13602', 'El Monte', '136'),
('13603', 'Isla De Maipo', '136'),
('13604', 'Padre Hurtado', '136'),
('13605', 'Penaflor', '136');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquina_ejercicio`
--

CREATE TABLE `maquina_ejercicio` (
  `Id_maquina` varchar(6) NOT NULL,
  `Estado` varchar(6) NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesa_ping_pong`
--

CREATE TABLE `mesa_ping_pong` (
  `Id_mesa` varchar(6) NOT NULL,
  `Estado` varchar(10) NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pileta`
--

CREATE TABLE `pileta` (
  `Id_pileta` varchar(6) NOT NULL,
  `Estado` varchar(6) NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `Id_provincia` varchar(10) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Id_region` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`Id_provincia`, `Nombre`, `Id_region`) VALUES
('131', 'Santiago', '13'),
('132', 'Cordillera', '13'),
('133', 'Chababuco', '13'),
('134', 'Maipo', '13'),
('135', 'Melipilla', '13'),
('136', 'Talagante', '13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `region`
--

CREATE TABLE `region` (
  `Id_region` varchar(10) NOT NULL,
  `Nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `region`
--

INSERT INTO `region` (`Id_region`, `Nombre`) VALUES
('01', 'Tarapaca'),
('02', 'Antofagasta'),
('03', 'Atacama'),
('04', 'Coquimbo'),
('05', 'Valparaiso'),
('06', 'Ohiggins'),
('07', 'Maule'),
('08', 'Biobio'),
('09', 'Araucania'),
('10', 'Los Lagos'),
('11', 'Aysen'),
('12', 'Magallanes'),
('13', 'Metropolitana'),
('14', 'Los Rios'),
('15', 'Arica y Parinacota'),
('16', 'Nuble');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resbalin`
--

CREATE TABLE `resbalin` (
  `Id_resbalin` varchar(6) NOT NULL,
  `Estado` varchar(6) NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenia`
--

CREATE TABLE `resenia` (
  `Id_resenia` varchar(12) NOT NULL,
  `Fecha` date NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad_vecinal`
--

CREATE TABLE `unidad_vecinal` (
  `Id_unidad_vecinal` varchar(10) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Id_Comuna` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `unidad_vecinal`
--

INSERT INTO `unidad_vecinal` (`Id_unidad_vecinal`, `Nombre`, `Id_Comuna`) VALUES
('AQ', 'Altos De Quilicura', '13125'),
('BMUN', 'Biblioteca Municipal', '13125'),
('BPH', 'Beato Padre Hurtado', '13125'),
('BSAQ', 'Barrio Sur Altos De ', '13125'),
('BSL', 'Bosques De San Luis', '13125'),
('CDS', 'Casas Del Sendero', '13125'),
('CDT', 'Ciudad Del Trabajado', '13125'),
('CHQ', 'Conjunto Habitaciona', '13125'),
('CLV', 'Conjunto Los Vinedos', '13125'),
('CN', 'Ciudad Nueva', '13125'),
('CRSH', 'Cardenal Raul Silva ', '13125'),
('CSL', 'Conjunto San Luis', '13125'),
('CSLUI', 'Complejo Santa Luisa', '13125'),
('DSO', 'Dona Sofia', '13125'),
('EAM', 'El Amanecer', '13125'),
('ECHE', 'Echeverria', '13125'),
('EDES', 'El Descanso', '13125'),
('EM', 'El Manio', '13125'),
('EQ', 'Encomenderos De Quil', '13125'),
('ES', 'El Sauce', '13125'),
('ESM', 'Esmeralda', '13125'),
('EST', 'Estadio Quilicura', '13125'),
('ESTCOL', 'Estadio Colonia', '13125'),
('EUG', 'Eugenia', '13125'),
('FAS', 'Fidel Arrau Sodimac', '13125'),
('GIL', 'Gildemeister', '13125'),
('GUA', 'Guardiamarina', '13125'),
('HUE', 'Huelen', '13125'),
('JDN', 'Jardin Del Norte', '13125'),
('JDN2', 'Jardin Del Norte II', '13125'),
('JDS', 'Jardin Del Sol', '13125'),
('JFG', 'Juan Francisco Gonza', '13125'),
('JOR', 'Jardin Oriente', '13125'),
('JOR2', 'Jardin Oriente II', '13125'),
('L', 'Loreto', '13125'),
('LAD', 'Los Adobes', '13125'),
('LAR', 'La Arboleda', '13125'),
('LC', 'Los Compositores', '13125'),
('LCAM', 'Lo Campino', '13125'),
('LCAMPI', 'La Campina', '13125'),
('LCAN', 'Los Cantaros', '13125'),
('LCAS', 'Las Casas', '13125'),
('LCDQ', 'Las Casas De Quilicu', '13125'),
('LCIP', 'Los Cipreces', '13125'),
('LCRU', 'Lo Cruzat', '13125'),
('LE', 'Los Esteros', '13125'),
('LF', 'Los Flamencos', '13125'),
('LFOR', 'La Foresta', '13125'),
('LFOR2', 'La Foresta II', '13125'),
('LGOL', 'Las Golondrinas', '13125'),
('LJAR', 'Los Jardines', '13125'),
('LM', 'Los Manantiales', '13125'),
('LMAR', 'Lo Marcoleta', '13125'),
('LMAT', 'Lo Matta', '13125'),
('LMIN', 'Los Minerales', '13125'),
('LMOL', 'Los Molinos', '13125'),
('LOV', 'Lo Ovalle', '13125'),
('LP', 'Los Pehuenes', '13125'),
('LPOR', 'Los Portones', '13125'),
('LPOR2', 'Los Portones II', '13125'),
('LPRA', 'Los Prados', '13125'),
('LROL', 'Los Rosales', '13125'),
('LTIL', 'Los Tijerales', '13125'),
('LTRAN', 'Las Tranqueras', '13125'),
('LU', 'Los Ulmos', '13125'),
('LV', 'Los Vinedos', '13125'),
('MUN', 'Municipalidad', '13125'),
('P', 'Parinacota', '13125'),
('PALE', 'Porto Alegre', '13125'),
('PARM', 'Plaza De Armas', '13125'),
('PC', 'Paseo Central', '13125'),
('PDER', 'Polideportivo De Qui', '13125'),
('PFG', 'Paje Filomena Garate', '13125'),
('PG', 'Pascual Gambino', '13125'),
('PLCRU', 'Plaza Lo Cruzat', '13125'),
('PLO', 'Plaza Lo Ovalle', '13125'),
('PMAY', 'Plaza Mayor', '13125'),
('PR', 'Parque Real', '13125'),
('PROJ', 'Piedra Roja', '13125'),
('REC', 'Recsa', '13125'),
('SE', 'San Enrique', '13125'),
('SEST', 'San Esteban', '13125'),
('SFIL', 'Santa Filomena', '13125'),
('SI', 'San Isidro', '13125'),
('SIL', 'San Ignacio De Loyol', '13125'),
('SIL2', 'San Ignacio De Loyol', '13125'),
('SLAU', 'San Laura', '13125'),
('SLUC', 'San Lucas', '13125'),
('SLUI', 'Santa Luisa', '13125'),
('SMARI', 'San Maria', '13125'),
('SP', 'Skate Park', '13125'),
('STER', 'Santa Teresita', '13125'),
('TF', 'Tierra Del Fuego', '13125'),
('TM', 'Tres Montes', '13125'),
('VL', 'Valle De La Luna', '13125');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Rut` varchar(13) NOT NULL,
  `Nombre` varchar(80) NOT NULL,
  `Apellido` varchar(80) NOT NULL,
  `Tipo` varchar(10) NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `Contrasena` varchar(20) NOT NULL,
  `Id_area` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `area_verde`
--
ALTER TABLE `area_verde`
  ADD PRIMARY KEY (`Id_area`);

--
-- Indices de la tabla `asiento`
--
ALTER TABLE `asiento`
  ADD PRIMARY KEY (`Id_asiento`);

--
-- Indices de la tabla `balancin`
--
ALTER TABLE `balancin`
  ADD PRIMARY KEY (`Id_balancin`);

--
-- Indices de la tabla `cancha`
--
ALTER TABLE `cancha`
  ADD PRIMARY KEY (`Id_cancha`);

--
-- Indices de la tabla `columpio`
--
ALTER TABLE `columpio`
  ADD PRIMARY KEY (`Id_columpio`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`Id_comentario`);

--
-- Indices de la tabla `comuna`
--
ALTER TABLE `comuna`
  ADD PRIMARY KEY (`Id_comuna`);

--
-- Indices de la tabla `maquina_ejercicio`
--
ALTER TABLE `maquina_ejercicio`
  ADD PRIMARY KEY (`Id_maquina`);

--
-- Indices de la tabla `mesa_ping_pong`
--
ALTER TABLE `mesa_ping_pong`
  ADD PRIMARY KEY (`Id_mesa`);

--
-- Indices de la tabla `pileta`
--
ALTER TABLE `pileta`
  ADD PRIMARY KEY (`Id_pileta`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`Id_provincia`);

--
-- Indices de la tabla `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`Id_region`);

--
-- Indices de la tabla `resbalin`
--
ALTER TABLE `resbalin`
  ADD PRIMARY KEY (`Id_resbalin`);

--
-- Indices de la tabla `resenia`
--
ALTER TABLE `resenia`
  ADD PRIMARY KEY (`Id_resenia`);

--
-- Indices de la tabla `unidad_vecinal`
--
ALTER TABLE `unidad_vecinal`
  ADD PRIMARY KEY (`Id_unidad_vecinal`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Rut`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
