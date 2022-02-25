START TRANSACTION;

SET @website_title = 'AufITGebaut';
SET @configuration_name = 'AufITGebaut';
SET @dataset_root = 11;
SET @domain = 'aufitgebaut.rkw-kompetenzzentrum.de';
SET @media_path = '/media/';
SET @basic_layout_be = 'pagets__topicPages';
SET @basic_layout_fe = 10;
SET @home_layout_be = 'pagets__homePages';
SET @home_layout_fe = 40;
SET @google_api_key = '';
SET @google_api_key_js = '';

-- =================================================
-- =================================================
-- Relevant fields list: `pid`, `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `editlock`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `url_scheme`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_rkwbasics_alternative_title`, `tx_rkwbasics_proxy_caching`, `tx_realurl_exclude`
-- =================================================
-- =================================================

-- =================================================
SET @sys_template_include_static_file = CONCAT ('EXT:fluid_styled_content/Configuration/TypoScript/,EXT:fluid_styled_content/Configuration/TypoScript/Styling/,EXT:gridelements/Configuration/TypoScript/,EXT:sg_cookie_optin/Configuration/TypoScript/Frontend,EXT:rkw_template/Configuration/TypoScript,EXT:rkw_pdf2content/Configuration/TypoScript,EXT:rkw_basics/Configuration/TypoScript,EXT:rkw_authors/Configuration/TypoScript,EXT:rkw_projects/Configuration/TypoScript,EXT:rkw_registration/Configuration/TypoScript,EXT:rkw_mailer/Configuration/TypoScript,EXT:rkw_geolocation/Configuration/TypoScript,EXT:rkw_events/Configuration/TypoScript,EXT:rkw_etracker/Configuration/TypoScript,EXT:rkw_related/Configuration/TypoScript,EXT:rkw_webcheck/Configuration/TypoScript,EXT:rkw_tools/Configuration/TypoScript,EXT:rkw_survey/Configuration/TypoScript,EXT:rkw_newsletter/Configuration/TypoScript,EXT:rkw_privacy/Configuration/TypoScript,EXT:rkw_template/Themes/_Microsites/', @configuration_name, '/Configuration/TypoScript');
SET @sys_template_constants = CONCAT ('#=====================================================================\r\n# Security relevant setups!\r\nplugin.tx_rkwgeolocation {\r\n\r\n  settings {\r\n    googleApiKey = ', @google_api_key, '\r\n    googleApiKeyJs = ', @google_api_key_js, '\r\n  }\r\n}\r\n\r\n\r\n#=====================================================================\r\nplugin.tx_rkwetracker {\r\n  settings {\r\n    apiEmail = \r\n    apiPassword = \r\n    apiToken = \r\n    apiAccountId = \r\n    \r\n    secureCode = 12345\r\n    \r\n    singleSignOnAccountId = \r\n    singleSignOnPassword = \r\n   \r\n    singleSignOnAllowedIps = 127.0.0.1, 195.63.251.130\r\n\r\n  }\r\n}\r\n');
SET @sys_template_setup = '';
SET @ts_config = '';
SET @ts_config_includes = CONCAT ('EXT:rkw_template/Configuration/TsConfig/TsConfig.typoscript,EXT:rkw_template/Themes/_Microsites/', @configuration_name, '/Configuration/TsConfig/TsConfig.typoscript');

SET @file_mount_title = CONCAT ('Media ', @website_title, ' (RW)');
SET @file_mount_description = CONCAT ('Diese Freigabe ist für ', @website_title);
SET @backend_group_data_title = CONCAT ('+ Datensatzsammlung ', @website_title);
SET @backend_group_title = CONCAT ('++ Intern: Red. ', @website_title);
SET @tstamp = UNIX_TIMESTAMP();

-- =================================================
-- Folder for page
INSERT INTO `pages` (`pid`,  `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`) VALUES
(0, @tstamp, 384, 0, 1, 1, 31, 27, 1, @tstamp, 1, 0, @website_title , 254, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '0', '', 0, '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 0, 0);
SET @website_folder = last_insert_id();

-- =================================================
-- Rootpage
INSERT INTO `pages` ( `pid`, `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `editlock`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `tsconfig_includes`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`) VALUES
(@website_folder, @tstamp, 256, 0, 1, 1, 31, 27, 27, 0, @tstamp, 1, 0, 'Startseite', 1, @ts_config, @ts_config_includes, 1, 0, 0, '', 0, 0, 1, 0, 0, 0, '', '', @home_layout_fe, '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, @home_layout_be , @basic_layout_be, 0, @basic_layout_fe, 0, 6, 10);
SET @rootpage = last_insert_id();

-- =================================================
-- Subpages of rootpage
INSERT INTO `pages` ( `pid`, `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `editlock`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`,  `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`) VALUES
(@rootpage, @tstamp, 1792, 0, 1, 1, 31, 11, 11, 0, @tstamp, 1, 0, 'Rechtliches', 254, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '', '', 3, '', 0, 0, NULL, 0, '', 0, NULL, 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, @basic_layout_be, @basic_layout_be, 0, @basic_layout_fe, 0, 0, 0, 1);
SET @law_rootpage = last_insert_id();

INSERT INTO `pages` ( `pid`, `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `editlock`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`) VALUES
(@rootpage, @tstamp, 2048, 0, 1, 1, 31, 3, 3, 0, @tstamp, 1, 0, 'Sonstiges', 254, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '0', '', 0, '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 0, 0, 1);
SET @other_rootpage = last_insert_id();

-- =================================================
-- Subpages of law
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `editlock`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`) VALUES
(@law_rootpage, @tstamp, 256, 0, 1, 1, 31, 19, 19, 0, @tstamp, 1, 0, 'Impressum', 1, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '', '', 0, '', 0, 0, '', 0, '', 0, '', 0, 0, NULL, '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0,  0, 0, 6, 10),
(@law_rootpage, @tstamp, 315, 0, 1, 1, 31, 19, 19, 0, @tstamp, 1, 0, 'Bildnachweise', 1, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '', '', 0,  '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0,  0, 0, 6, 10),
(@law_rootpage, @tstamp, 512, 0, 1, 1, 31, 19, 19, 0, @tstamp, 1, 0, 'Datenschutz', 1, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '', '', 0,  '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0,  0, 0, 6, 10),
(@law_rootpage, @tstamp, 448, 0, 1, 1, 31, 19, 19, 0, @tstamp, 1, 0, 'Allgemeine Geschäftsbedingungen', 1, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '', '', 0, '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 6, 10),
(@law_rootpage, @tstamp, 352, 0, 1, 1, 31, 1, 1, 0, @tstamp, 1, 0, 'Allgemeine Nutzungsbedingungen', 7, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '', '', 0, '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 1381, 1, '', 0, 0, '', '', 0, 0, 0, 0, 0),
(@law_rootpage, @tstamp, 768, 0, 1, 1, 31, 19, 19, 0, @tstamp, 1, 0, 'Disclaimer', 1, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '', '', 0, '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 6, 10);


-- =================================================
-- Subpages of other

INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `editlock`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`) VALUES
(@other_rootpage, @tstamp, 128, 0, 1, 1, 31, 27, 17, 0, @tstamp, 1, 0, 'Upps :-(', 1, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '', 'Da ist wohl etwas schief gelaufen. Die gewünschte Seite konnte leider nicht gefunden werden.', 10, '', 0, 0, NULL, 0, '', 0, NULL, 0, 0, '', '', 0, '', '', '', 1, 0, 0, 0, '', 0, 0, 'pagets__contentPages', '', 0, 10, 0, 6, 10);
SET @page_not_found = last_insert_id();

INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `hidden`, `sorting`, `CType`, `header`, `header_position`, `bodytext`, `deleted`, `colPos`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`) VALUES
(@page_not_found, @tstamp, @tstamp, 1, 0, 256, 'gridelements_pi1', 'Container', '', '',  0, 0, -2, 'contentContainerOneCol', 1, 0, 0);
SET @container = last_insert_id();

SET @content ='<h3>Und was nun?</h3>\r\n<ul><li>Überprüfen Sie die Schreibweise in der Adresszeile Ihres Browsers ODER</li>ODER</li><li>Kontaktieren Sie unseren Support unter <a href="mailto:service@rkw.de" title="E-Mail Schreiben">service@rkw.de</a></li></ul>';
INSERT INTO `tt_content` ( `pid`, `tstamp`, `crdate`, `cruser_id`, `hidden`, `sorting`, `CType`, `header`, `header_position`, `bodytext`, `deleted`, `colPos`, `subheader`,  `header_link`, `list_type`, `tx_gridelements_container`, `tx_gridelements_columns`) VALUES
(@page_not_found, @tstamp, @tstamp, 1, 0, 256, 'text', '', '', @content , 0, -1, '', '', '', @container, 50);



INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `editlock`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`,  `tx_rkwbasics_department`, `tx_rkwbasics_document_type`) VALUES
(@other_rootpage, @tstamp, 256, 0, 1, 1, 31, 1, 1, 0, @tstamp, 1, 0, 'Weiterleitung', 1, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '', '', 0, '', 0, 0, '', 0, '', 0, '', 0, 0, NULL, '', 0, '', '', '', 1, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 6, 8);
SET @redirect_page = last_insert_id();

INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `hidden`, `sorting`, `CType`, `header`, `header_position`, `bodytext`, `deleted`, `colPos`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`) VALUES
(@redirect_page, @tstamp, @tstamp, 1, 0, 256, 'gridelements_pi1', 'Container', '', '',  0, 0, -2, 'contentContainerOneCol', 1, 0, 0);
SET @container = last_insert_id();

SET @content ='';
INSERT INTO `tt_content` ( `pid`, `tstamp`, `crdate`, `cruser_id`, `hidden`, `sorting`, `CType`, `header`, `header_position`, `bodytext`, `deleted`, `colPos`, `subheader`,  `header_link`, `list_type`, `tx_gridelements_container`, `tx_gridelements_columns`) VALUES
(@redirect_page, @tstamp, @tstamp, 1, 0, 256, 'list', '', '', @content, 0, -1, '', '', 'rkwmailer_rkwmailer', @container, 50);

-- =================================================
-- Datasets
-- INSERT INTO `pages` ( `pid`, `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `editlock`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`) VALUES
-- (@dataset_root,  @tstamp, 640, 0, 1, 1, 31, 31, 31, 0, @tstamp, 1, 0, @website_title, 254, @ts_config, 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '0', '', 0, '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 0, 0);
-- SET @dataset_folder = last_insert_id();

-- INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `deleted`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `editlock`, `crdate`, `cruser_id`, `hidden`, `title`, `doktype`, `TSconfig`, `is_siteroot`, `php_tree_stop`, `tx_impexp_origuid`, `url`, `starttime`, `endtime`, `urltype`, `shortcut`, `shortcut_mode`, `no_cache`, `fe_group`, `subtitle`, `layout`, `target`, `media`, `lastUpdated`, `keywords`, `cache_timeout`, `cache_tags`, `newUntil`, `description`, `no_search`, `SYS_LASTCHANGED`, `abstract`, `module`, `extendToSubpages`, `author`, `author_email`, `nav_title`, `nav_hide`, `content_from_pid`, `mount_pid`, `mount_pid_ol`, `alias`, `l18n_cfg`, `fe_login_mode`, `backend_layout`, `backend_layout_next_level`, `categories`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_css_class`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`) VALUES
-- (@dataset_folder, @tstamp, 256, 0, 1, 1, 31, 31, 31, 0, @tstamp, 1, 0, 'Autoren', 254, NULL, 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '0', '', 0, '', 0, 0, NULL, 0, '', 0, NULL, 0, 0, NULL, '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 0, 0),
-- (@dataset_folder, @tstamp, 512, 0, 1, 1, 31, 31, 31, 0, @tstamp, 1, 0, 'Projekte', 254, NULL, 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '0', '', 0, '', 0, 0, NULL, 0, '', 0, NULL, 0, 0, NULL, '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 0, 0),
-- (@dataset_folder, @tstamp, 768, 0, 1, 1, 31, 31, 31, 0, @tstamp, 1, 0, 'Veranstaltungen', 254, NULL, 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '0', '', 0, '', 0, 0, NULL, 0, '', 0, NULL, 0, 0, NULL, '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 0, 0),
-- (@dataset_folder, @tstamp, 384, 0, 1, 1, 31, 31, 31, 0, @tstamp, 1, 0, 'Info-Layer Inhalte', 254, '', 0, 0, 0, '', 0, 0, 1, 0, 0, 0, '0', '', 0, '', 0, 0, '', 0, '', 0, '', 0, 0, '', '', 0, '', '', '', 0, 0, 0, 0, '', 0, 0, '', '', 0, 0, 0, 0, 0);

-- =================================================
-- Sys-Template
INSERT INTO `sys_template` ( `pid`, `t3ver_oid`, `t3ver_id`, `t3ver_wsid`, `t3ver_label`, `t3ver_state`, `t3ver_stage`, `t3ver_count`, `t3ver_tstamp`, `t3_origuid`, `tstamp`, `sorting`, `crdate`, `cruser_id`, `title`, `sitetitle`, `hidden`, `starttime`, `endtime`, `root`, `clear`, `include_static_file`, `constants`, `config`, `nextLevel`, `description`, `basedOn`, `deleted`, `includeStaticAfterBasedOn`, `static_file_mode`) VALUES
(@rootpage, 0, 0, 0, '', 0, 0, 0, 0, 0, @tstamp, 256, @tstamp, 1, @website_title, '', 0, 0, 0, 1, 3, @sys_template_include_static_file, @sys_template_constants, @sys_template_setup, '', NULL, '', 0, 0, 0);

-- =================================================
-- Sys-Domain
INSERT INTO `sys_domain` ( `pid`, `tstamp`, `crdate`, `cruser_id`, `hidden`, `domainName`, `redirectTo`, `redirectHttpStatusCode`, `sorting`, `prepend_params`, `forced`) VALUES
(@rootpage, @tstamp, @tstamp, 1, 0, @domain, '', 301, 256, 0, 0);

-- =================================================
-- File mount
-- INSERT INTO `sys_filemounts` (`pid`, `tstamp`, `title`, `path`, `base`, `hidden`, `deleted`, `sorting`, `description`, `read_only`) VALUES
-- (0, @tstamp, @file_mount_title, @media_path, 1, 0, 0, 32, @file_mount_description, 0);
-- SET @file_mount  = last_insert_id();

SET @file_mount  = '';
-- =================================================
-- BE groups
-- INSERT INTO `be_groups` (`pid`, `tstamp`, `title`, `non_exclude_fields`, `explicit_allowdeny`, `allowed_languages`, `custom_options`, `db_mountpoints`, `pagetypes_select`, `tables_select`, `tables_modify`, `crdate`, `cruser_id`, `groupMods`, `file_mountpoints`, `hidden`, `description`, `lockToDomain`, `deleted`, `TSconfig`, `subgroup`, `hide_in_lists`, `workspace_perms`, `file_permissions`, `category_perms`) VALUES
-- (0, @tstamp, @backend_group_data_title, '', '', '', '',@dataset_folder, '', '', '', @tstamp, 1, '', '', 0, 'Enthält die Ordnerfreigaben für die zentrale Datensatzsammlung', '', 0, '', '', 0, 0, 'readFolder,writeFolder,addFolder,renameFolder,moveFolder,deleteFolder,readFile,writeFile,addFile,renameFile,replaceFile,moveFile,copyFile,deleteFile', '');

INSERT INTO `be_groups` (`pid`, `tstamp`, `title`, `non_exclude_fields`, `explicit_allowdeny`, `allowed_languages`, `custom_options`, `db_mountpoints`, `pagetypes_select`, `tables_select`, `tables_modify`, `crdate`, `cruser_id`, `groupMods`, `file_mountpoints`, `hidden`, `description`, `lockToDomain`, `deleted`, `TSconfig`, `subgroup`, `hide_in_lists`, `workspace_perms`, `file_permissions`, `category_perms`) VALUES
(0, @tstamp, @backend_group_title, '', '', '', '', @website_folder, '', '', '', @tstamp, 1, '', @file_mount, 0, 'Freigaben für alle Gruppen\r\nGesetzt werden hier NUR:\r\n- Datenbankfreigaben\r\n- Verzeichnisfreigaben', '', 0, '', '', 0, 0, 'readFolder,writeFolder,addFolder,renameFolder,moveFolder,deleteFolder,recursivedeleteFolder,readFile,writeFile,addFile,renameFile,replaceFile,moveFile,copyFile,deleteFile', '');

COMMIT;

