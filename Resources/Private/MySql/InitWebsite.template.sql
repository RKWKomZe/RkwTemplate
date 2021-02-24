-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 16. Feb 2021 um 13:34
-- Server-Version: 5.7.32-0ubuntu0.16.04.1
-- PHP-Version: 7.2.27-6+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `pages`
--

CREATE TABLE `pages` (
  `uid` int(255) NOT NULL,
  `pid` varchar(255) NOT NULL DEFAULT '0',
  `tstamp` varchar(255) NOT NULL DEFAULT '0',
  `sorting` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `cruser_id` int(11) NOT NULL DEFAULT '0',
  `perms_userid` varchar(255) NOT NULL DEFAULT '0',
  `perms_groupid` varchar(255) NOT NULL DEFAULT '0',
  `perms_user` varchar(255) NOT NULL DEFAULT '0',
  `perms_group` varchar(255) NOT NULL DEFAULT '0',
  `perms_everybody` varchar(255) NOT NULL DEFAULT '0',
  `crdate` varchar(255) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `doktype` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `is_siteroot` smallint(6) NOT NULL DEFAULT '0',
  `shortcut` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `shortcut_mode` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `no_cache` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `subtitle` varchar(255) NOT NULL DEFAULT '',
  `nav_hide` smallint(6) NOT NULL DEFAULT '0',
  `mount_pid` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mount_pid_ol` smallint(6) NOT NULL DEFAULT '0',
  `backend_layout` varchar(255) NOT NULL DEFAULT '',
  `backend_layout_next_level` varchar(255) NOT NULL DEFAULT '',
  `layout` varchar(255) NOT NULL DEFAULT '0',
  `tx_rkwbasics_fe_layout_next_level` varchar(255) NOT NULL DEFAULT '0',
  `tx_rkwbasics_department` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `tx_rkwbasics_document_type` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `tx_realurl_exclude` int(1) NOT NULL DEFAULT '0',
  `tx_rkwbasics_proxy_caching` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `tsconfig_includes` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `pages`
--

INSERT INTO `pages` (`uid`, `pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`) VALUES
(2, '0', '#@tstamp#', 384, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', '#@website_title#', 254, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL),
(3, '#@pid_folder#', '#@tstamp#', 256, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Startseite', 1, 1, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, '#@ts_config_includes#'),
(5, '#@pid_website#', '#@tstamp#', 512, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Projekte', 4, 0, 0, 1, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL),
(6, '#@pid_website#', '#@tstamp#', 768, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Beratung', 4, 0, 0, 1, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL),
(7, '#@pid_website#', '#@tstamp#', 1024, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Veranstaltungen', 1, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(8, '#@pid_website#', '#@tstamp#', 1536, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Login', 1, 0, 609, 0, 0, 'Mit uns finden Sie immer die passende Lösung', 0, 0, 1, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 0, 0, 2, NULL),
(9, '#@pid_website#', '#@tstamp#', 640, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Das RKW', 4, 0, 0, 1, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL),
(10, '#@pid_website#', '#@tstamp#', 1280, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Kontakt', 4, 0, 0, 1, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL),
(11, '#@pid_website#', '#@tstamp#', 1792, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Rechtliches', 254, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 1, 0, NULL),
(12, '#@pid_website#', '#@tstamp#', 2048, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Sonstiges', 254, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 1, 0, NULL),
(13, '#@pid_events#', '#@tstamp#', 256, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Details', 1, 0, 0, 0, 0, '', 1, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(14, '#@pid_events#', '#@tstamp#', 128, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Archiv', 1, 0, 0, 0, 0, '', 1, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(15, '#@pid_event_details#', '#@tstamp#', 256, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Anmeldung', 1, 0, 0, 0, 0, '', 1, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(16, '#@pid_event_archive#', '#@tstamp#', 256, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Details', 1, 0, 0, 0, 0, '', 1, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(17, '#@pid_contact#', '#@tstamp#', 446, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Unsere Expertinnen und Experten', 1, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(18, '#@pid_contact_list#', '#@tstamp#', 256, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Details', 1, 0, 0, 0, 0, '', 1, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(19, '#@pid_law#', '#@tstamp#', 256, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Impressum', 1, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(20, '#@pid_law#', '#@tstamp#', 512, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Datenschutz', 1, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(21, '#@pid_law#', '#@tstamp#', 448, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Allgemeine Geschäftsbedingungen', 1, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(22, '#@pid_law#', '#@tstamp#', 352, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Allgemeine Nutzungsbedingungen', 7, 0, 0, 0, 0, '', 0, 1381, 1, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL),
(23, '#@pid_law#', '#@tstamp#', 768, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Disclaimer', 1, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(24, '#@pid_other#', '#@tstamp#', 128, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Upps :-(', 1, 0, 0, 0, 0, 'Da ist wohl etwas schief gelaufen. Die gewünschte Seite konnte leider nicht gefunden werden.', 1, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 10, 0, 0, NULL),
(25, '#@pid_other#', '#@tstamp#', 256, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Weiterleitung', 1, 0, 0, 0, 0, '', 1, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 6, 8, 0, 0, NULL),
(26, '#@pid_dataset#', '#@tstamp#', 640, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', '#@website_title#', 254, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL),
(27, '#@pid_dataset_folder#', '#@tstamp#', 256, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Autoren', 254, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL),
(28, '#@pid_dataset_folder#', '#@tstamp#', 512, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Projekte', 254, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL),
(29, '#@pid_dataset_folder#', '#@tstamp#', 768, 1, '#@perms_userid#', '#@perms_groupid#', '#@perms_user#', '#@perms_group#', '#@perms_everybody#', '#@tstamp#', 'Veranstaltungen', 254, 0, 0, 0, 0, '', 0, 0, 0, '#@layout_backend_current#', '#@layout_backend_children#', '#@layout_frontend_current#', '#@layout_frontend_children#', 0, 0, 0, 0, NULL);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `parent` (`pid`,`sorting`),
  ADD KEY `determineSiteRoot` (`is_siteroot`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `pages`
--
ALTER TABLE `pages`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
  
--
-- Tabellenstruktur für Tabelle `tt_content`
--

CREATE TABLE `tt_content` (
  `uid` int(11) NOT NULL,
  `pid` varchar(255) NOT NULL DEFAULT '0',
  `tstamp` varchar(255) NOT NULL DEFAULT '0',
  `crdate` varchar(255) NOT NULL DEFAULT '0',
  `cruser_id` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `sorting` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `CType` varchar(255) NOT NULL DEFAULT '',
  `colPos` int(11) NOT NULL DEFAULT '0',
  `header` varchar(255) NOT NULL DEFAULT '',
  `bodytext` mediumtext,
  `list_type` varchar(255) NOT NULL DEFAULT '',
  `sys_language_uid` int(11) NOT NULL DEFAULT '0',
  `pi_flexform` mediumtext,
  `backupColPos` smallint(6) NOT NULL DEFAULT '-2',
  `tx_gridelements_backend_layout` varchar(255) NOT NULL DEFAULT '',
  `tx_gridelements_children` int(11) NOT NULL DEFAULT '0',
  `tx_gridelements_container` varchar(255) NOT NULL DEFAULT '0',
  `tx_gridelements_columns` int(11) NOT NULL DEFAULT '0',
  `gridelements_shortcut_page_order_by` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `tt_content`
--

INSERT INTO `tt_content` (`uid`, `pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`) VALUES
(1, '#@pid_events#', '#@tstamp#', '#@tstamp#', 1, 256, 'list', 500, 'Veranstaltungen', NULL, 'rkwevents_pi1', 0, '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n<T3FlexForms>\n    <data>\n        <sheet index="general">\n            <language index="lDEF">\n                <field index="switchableControllerActions">\n                    <value index="vDEF">Event-&gt;list;Event-&gt;myEvents;Event-&gt;show;Event-&gt;showSheet;EventReservation-&gt;show;EventReservation-&gt;new;EventReservation-&gt;optIn;EventReservation-&gt;create;EventReservation-&gt;edit;EventReservation-&gt;update;EventReservation-&gt;delete;EventPoll-&gt;new;EventPoll-&gt;create;EventPoll-&gt;show</value>\n                </field>\n            </language>\n        </sheet>\n    </data>\n</T3FlexForms>', -2, '', 0, '0', 0, 0),
(2, '#@pid_event_details#', '#@tstamp#', '#@tstamp#', 1, 256, 'list', 0, '', NULL, 'rkwevents_pi1', 0, '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n<T3FlexForms>\n    <data>\n        <sheet index="general">\n            <language index="lDEF">\n                <field index="switchableControllerActions">\n                    <value index="vDEF">Event-&gt;show;Event-&gt;showSheet</value>\n                </field>\n            </language>\n        </sheet>\n    </data>\n</T3FlexForms>', -2, '', 0, '0', 0, 0),
(3, '#@pid_event_reservation#', '#@tstamp#', '#@tstamp#', 1, 256, 'list', 0, '', NULL, 'rkwevents_pi1', 0, '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n<T3FlexForms>\n    <data>\n        <sheet index="general">\n            <language index="lDEF">\n                <field index="switchableControllerActions">\n                    <value index="vDEF">EventReservation-&gt;new;EventReservation-&gt;create;EventReservation-&gt;optIn</value>\n                </field>\n            </language>\n        </sheet>\n    </data>\n</T3FlexForms>', -2, '', 0, '0', 0, 0),
(4, '#@pid_contact_list#', '#@tstamp#', '#@tstamp#', 1, 256, 'list', 500, 'Unsere Expertinnen und Experten', NULL, 'rkwauthors_rkwauthors', 0, NULL, -2, '', 0, '0', 0, 0),
(5, '#@pid_contact_details#', '#@tstamp#', '#@tstamp#', 1, 256, 'list', 610, '', NULL, 'rkwauthors_rkwauthorsheadline', 0, NULL, -2, '', 0, '0', 0, 0),
(6, '#@pid_contact_details#', '#@tstamp#', '#@tstamp#', 1, 128, 'list', 600, '', NULL, 'rkwauthors_rkwauthorsdetail', 0, NULL, -2, '', 0, '0', 0, 0),
(7, '#@pid_404#', '#@tstamp#', '#@tstamp#', 1, 256, 'gridelements_pi1', 0, 'Container', NULL, '', 0, NULL, -2, 'contentContainerOneCol', 1, '0', 0, 0),
(8, '#@pid_404#', '#@tstamp#', '#@tstamp#', 1, 256, 'text', -1, '', '<h3>Und was nun?</h3>\r\n<ul><li>Überprüfen Sie die Schreibweise in der Adresszeile Ihres Browsers ODER</li><li>Nutzen Sie unsere <link 1368 - internal-link "Öffnet Link in gleichem Fenster">Suche</link> ODER</li><li>Kontaktieren Sie unseren Support unter <link service@rkw.de - - "E-Mail Schreiben">service@rkw.de</link></li></ul>', '', 0, NULL, -2, '', 0, '#@gridcontainer_id#', 50, 0),
(9, '#@pid_redirect#', '#@tstamp#', '#@tstamp#', 1, 256, 'list', -500, '', NULL, 'rkwmailer_rkwmailer', 0, NULL, -2, '', 0, '0', 0, 0);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `tt_content`
--
ALTER TABLE `tt_content`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `parent` (`pid`,`sorting`),
  ADD KEY `language` (`sys_language_uid`),
  ADD KEY `gridelements` (`tx_gridelements_container`,`tx_gridelements_columns`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `tt_content`
--
ALTER TABLE `tt_content`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14452;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;