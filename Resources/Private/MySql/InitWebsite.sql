START TRANSACTION;

SET @website_title = 'RKW Bayern';
SET @configuration_name = 'RkwBayern';
SET @pid_dataset = 11;
SET @domain = 'bayern.rkw-kompetenzzentrum.de';
SET @media_path = '/media_bayern/';
SET @google_api_key = '';
SET @google_api_key_js = '';

-- =================================================
-- Define default values
-- =================================================
SET @sys_template_include_static_file = CONCAT ('EXT:fluid_styled_content/Configuration/TypoScript/,EXT:fluid_styled_content/Configuration/TypoScript/Styling/,EXT:gridelements/Configuration/TypoScript/,EXT:sg_cookie_optin/Configuration/TypoScript/Frontend,EXT:rkw_template/Configuration/TypoScript,EXT:rkw_pdf2content/Configuration/TypoScript,EXT:rkw_basics/Configuration/TypoScript,EXT:rkw_authors/Configuration/TypoScript,EXT:rkw_projects/Configuration/TypoScript,EXT:rkw_registration/Configuration/TypoScript,EXT:rkw_mailer/Configuration/TypoScript,EXT:rkw_geolocation/Configuration/TypoScript,EXT:rkw_events/Configuration/TypoScript,EXT:rkw_etracker/Configuration/TypoScript,EXT:rkw_related/Configuration/TypoScript,EXT:rkw_webcheck/Configuration/TypoScript,EXT:rkw_tools/Configuration/TypoScript,EXT:rkw_survey/Configuration/TypoScript,EXT:rkw_newsletter/Configuration/TypoScript,EXT:rkw_privacy/Configuration/TypoScript,EXT:rkw_template/Themes/_Websites/', @configuration_name, '/Configuration/TypoScript');
SET @sys_template_constants = CONCAT ('#=====================================================================\r\n# Security relevant setups!\r\nplugin.tx_rkwgeolocation {\r\n\r\n  settings {\r\n    googleApiKey = ', @google_api_key, '\r\n    googleApiKeyJs = ', @google_api_key_js, '\r\n  }\r\n}\r\n\r\n\r\n#=====================================================================\r\nplugin.tx_rkwetracker {\r\n  settings {\r\n    secureCode = 12345\r\n    \r\n    singleSignOnAccountId = \r\n    singleSignOnPassword = \r\n   \r\n    singleSignOnAllowedIps = 127.0.0.1, 195.63.251.130\r\n\r\n  }\r\n}\r\n');
SET @sys_template_setup = '';
SET @ts_config_includes = CONCAT ('EXT:rkw_template/Configuration/TsConfig/TsConfig.typoscript,EXT:rkw_template/Themes/_Websites/', @configuration_name, '/Configuration/TsConfig/TsConfig.typoscript');

SET @file_mount_title = CONCAT ('Media ', @website_title, ' (RW)');
SET @file_mount_description = CONCAT ('Diese Freigabe ist für das ', @website_title);
SET @backend_group_data_title = CONCAT ('+ Datensatzsammlung ', @website_title);
SET @backend_group_title = CONCAT ('+ Extern: Red. ', @website_title);
SET @tstamp = UNIX_TIMESTAMP();

SET @layout_backend_current_default = '';
SET @layout_backend_children_default = '';
SET @layout_frontend_current_default = '0';
SET @layout_frontend_children_default = '0';
SET @layout_backend_current = @layout_backend_current_default;
SET @layout_backend_children = @layout_backend_children_default;
SET @layout_frontend_current = @layout_frontend_current_default;
SET @layout_frontend_children = @layout_frontend_children_default;

SET @perms_userid = '1';
SET @perms_groupid = '1';
SET @perms_user = '31';
SET @perms_group = '1';
SET @perms_everybody = '1';
SET @perms_user_default = '31';
SET @perms_group_default = '31';
SET @perms_everybody_default = '31';

-- =================================================
-- Folder for pages
-- =================================================
SET @perms_user = '31';
SET @perms_group = '1';
SET @perms_everybody = '1';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES('0', @tstamp, 384, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, @website_title, 254, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);
SET @pid_folder = last_insert_id();
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;

-- =================================================
-- Rootpage
SET @layout_backend_current = 'pagets__homePages';
SET @layout_backend_children = 'pagets__topicPages';
SET @layout_frontend_current = '40';
SET @layout_frontend_children = '10';
SET @perms_user = '31';
SET @perms_group = '27';
SET @perms_everybody = '27';

INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_folder, @tstamp, 256, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Startseite', 1, 1, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, @ts_config_includes);
SET @pid_website = last_insert_id();
SET @layout_backend_current = @layout_backend_current_default;
SET @layout_backend_children = @layout_backend_children_default;
SET @layout_frontend_current = @layout_frontend_current_default;
SET @layout_frontend_children = @layout_frontend_children_default;
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;

-- =================================================
-- Subpages of rootpage
-- =================================================
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_website, @tstamp, 512, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Projekte', 4, 0, 0, 1, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_website, @tstamp, 768, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Beratung', 4, 0, 0, 1, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);


SET @layout_backend_current = 'pagets__pluginOnlyPages';
SET @layout_backend_children = 'pagets__pluginOnlyPages';
SET @layout_frontend_current = '11';
SET @layout_frontend_children = '11';
SET @perms_user = '31';
SET @perms_group = '19';
SET @perms_everybody = '19';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_website, @tstamp, 1024, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Veranstaltungen', 1, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);
SET @pid_events = last_insert_id();
SET @layout_backend_current = @layout_backend_current_default;
SET @layout_backend_children = @layout_backend_children_default;
SET @layout_frontend_current = @layout_frontend_current_default;
SET @layout_frontend_children = @layout_frontend_children_default;
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_website, @tstamp, 640, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Das RKW', 4, 0, 0, 1, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);


SET @perms_user = '31';
SET @perms_group = '27';
SET @perms_everybody = '27';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_website, @tstamp, 1280, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Kontakt', 4, 0, 0, 1, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);
SET @pid_contact = last_insert_id();
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;


SET @perms_user = '31';
SET @perms_group = '19';
SET @perms_everybody = '1';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_website, @tstamp, 1536, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Login', 1, 0, 609, 0, 0, 'Mit uns finden Sie immer die passende Lösung', 0, 0, 1, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 0, 0, 2, NULL);
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;


SET @layout_backend_current = 'pagets__topicPages';
SET @layout_backend_children = 'pagets__topicPages';
SET @layout_frontend_current = '10';
SET @layout_frontend_children = '10';
SET @perms_user = '31';
SET @perms_group = '27';
SET @perms_everybody = '27';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_website, @tstamp, 1792, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Rechtliches', 254, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 1, 0, NULL);
SET @pid_law = last_insert_id();
SET @layout_backend_current = @layout_backend_current_default;
SET @layout_backend_children = @layout_backend_children_default;
SET @layout_frontend_current = @layout_frontend_current_default;
SET @layout_frontend_children = @layout_frontend_children_default;


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_website, @tstamp, 2048, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Sonstiges', 254, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 1, 0, NULL);
SET @pid_other = last_insert_id();
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;

-- =================================================
-- Subpages of events
-- =================================================
SET @layout_backend_current = 'pagets__eventsDetail';
SET @layout_backend_children = 'pagets__eventsDetail';
SET @layout_frontend_current = '20000';
SET @layout_frontend_children = '0';
SET @perms_user = '31';
SET @perms_group = '19';
SET @perms_everybody = '1';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_events, @tstamp, 256, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Details', 1, 0, 0, 0, 0, '', 1, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);
SET @pid_event_details = last_insert_id();
SET @layout_backend_current = @layout_backend_current_default;
SET @layout_backend_children = @layout_backend_children_default;
SET @layout_frontend_current = @layout_frontend_current_default;
SET @layout_frontend_children = @layout_frontend_children_default;


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_events, @tstamp, 128, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Archiv', 1, 0, 0, 0, 0, '', 1, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);
SET @pid_event_archive = last_insert_id();


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_event_details, @tstamp, 256, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Anmeldung', 1, 0, 0, 0, 0, '', 1, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);
SET @pid_event_reservation = last_insert_id();


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_event_archive, @tstamp, 256, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Details', 1, 0, 0, 0, 0, '', 1, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;



-- =================================================
-- Subpages of contact
-- =================================================
SET @layout_backend_current = 'pagets__pluginOnlyPages';
SET @layout_backend_children = '';
SET @layout_frontend_current = '11';
SET @layout_frontend_children = '0';
SET @perms_user = '31';
SET @perms_group = '19';
SET @perms_everybody = '19';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_contact, @tstamp, 446, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Unsere Expertinnen und Experten', 1, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);
SET @pid_contact_list = last_insert_id();
SET @layout_backend_current = @layout_backend_current_default;
SET @layout_backend_children = @layout_backend_children_default;
SET @layout_frontend_current = @layout_frontend_current_default;
SET @layout_frontend_children = @layout_frontend_children_default;
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;


SET @layout_backend_current = 'pagets__expertPagesDetail';
SET @layout_backend_children = '';
SET @layout_frontend_current = '10000';
SET @layout_frontend_children = '0';
SET @perms_user = '31';
SET @perms_group = '19';
SET @perms_everybody = '1';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_contact_list, @tstamp, 256, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Details', 1, 0, 0, 0, 0, '', 1, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);
SET @pid_contact_details = last_insert_id();
SET @layout_backend_current = @layout_backend_current_default;
SET @layout_backend_children = @layout_backend_children_default;
SET @layout_frontend_current = @layout_frontend_current_default;
SET @layout_frontend_children = @layout_frontend_children_default;
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;

-- =================================================
-- Subpages of law
-- =================================================
SET @perms_user = '31';
SET @perms_group = '19';
SET @perms_everybody = '19';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_law, @tstamp, 256, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Impressum', 1, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_law, @tstamp, 512, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Datenschutz', 1, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_law, @tstamp, 448, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Allgemeine Geschäftsbedingungen', 1, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_law, @tstamp, 352, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Allgemeine Nutzungsbedingungen', 7, 0, 0, 0, 0, '', 0, 1381, 1, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_law, @tstamp, 768, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Disclaimer', 1, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;


-- =================================================
-- Subpages of other
-- =================================================
SET @layout_backend_current = 'pagets__contentPages';
SET @layout_backend_children = '';
SET @layout_frontend_current = '9000';
SET @layout_frontend_children = '0';
SET @perms_user = '31';
SET @perms_group = '19';
SET @perms_everybody = '19';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES( @pid_other, @tstamp, 128, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Upps :-(', 1, 0, 0, 0, 0, 'Da ist wohl etwas schief gelaufen. Die gewünschte Seite konnte leider nicht gefunden werden.', 1, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 10, 0, 0, NULL);
SET @pid_404 = last_insert_id();
SET @layout_backend_current = @layout_backend_current_default;
SET @layout_backend_children = @layout_backend_children_default;
SET @layout_frontend_current = @layout_frontend_current_default;
SET @layout_frontend_children = @layout_frontend_children_default;
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;


SET @layout_backend_current = 'pagets__pluginOnlyPages';
SET @layout_backend_children = '';
SET @layout_frontend_current = '11';
SET @layout_frontend_children = '0';
SET @perms_user = '31';
SET @perms_group = '1';
SET @perms_everybody = '1';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_other, @tstamp, 256, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Weiterleitung', 1, 0, 0, 0, 0, '', 1, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 6, 8, 0, 0, NULL);
SET @pid_redirect = last_insert_id();
SET @layout_backend_current = @layout_backend_current_default;
SET @layout_backend_children = @layout_backend_children_default;
SET @layout_frontend_current = @layout_frontend_current_default;
SET @layout_frontend_children = @layout_frontend_children_default;
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;


-- =================================================
-- Datasets
-- =================================================
SET @perms_user = '31';
SET @perms_group = '17';
SET @perms_everybody = '17';
INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_dataset, @tstamp, 640, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, @website_title, 254, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);
SET @pid_dataset_folder = last_insert_id();


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES( @pid_dataset_folder, @tstamp, 256, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Autoren', 254, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_dataset_folder, @tstamp, 512, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Projekte', 254, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);


INSERT INTO `pages` (`pid`, `tstamp`, `sorting`, `cruser_id`, `perms_userid`, `perms_groupid`, `perms_user`, `perms_group`, `perms_everybody`, `crdate`, `title`, `doktype`, `is_siteroot`, `shortcut`, `shortcut_mode`, `no_cache`, `subtitle`, `nav_hide`, `mount_pid`, `mount_pid_ol`, `backend_layout`, `backend_layout_next_level`, `layout`, `tx_rkwbasics_fe_layout_next_level`, `tx_rkwbasics_department`, `tx_rkwbasics_document_type`, `tx_realurl_exclude`, `tx_rkwbasics_proxy_caching`, `tsconfig_includes`)
VALUES(@pid_dataset_folder, @tstamp, 768, 1, @perms_userid, @perms_groupid, @perms_user, @perms_group, @perms_everybody, @tstamp, 'Veranstaltungen', 254, 0, 0, 0, 0, '', 0, 0, 0, @layout_backend_current, @layout_backend_children, @layout_frontend_current, @layout_frontend_children, 0, 0, 0, 0, NULL);
SET @perms_user = @perms_user_default;
SET @perms_group = @perms_group_default;
SET @perms_everybody = @perms_everybody_default;


-- =================================================
-- Contents for event-pages
-- =================================================
INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`)
VALUES(@pid_events, @tstamp, @tstamp, 1, 256, 'list', 500, 'Veranstaltungen', NULL, 'rkwevents_pi1', 0, '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n<T3FlexForms>\n    <data>\n        <sheet index="general">\n            <language index="lDEF">\n                <field index="switchableControllerActions">\n                    <value index="vDEF">Event-&gt;list;Event-&gt;myEvents;Event-&gt;show;Event-&gt;showSheet;EventReservation-&gt;show;EventReservation-&gt;new;EventReservation-&gt;optIn;EventReservation-&gt;create;EventReservation-&gt;edit;EventReservation-&gt;update;EventReservation-&gt;delete;EventPoll-&gt;new;EventPoll-&gt;create;EventPoll-&gt;show</value>\n                </field>\n            </language>\n        </sheet>\n    </data>\n</T3FlexForms>', -2, '', 0, '0', 0, 0);


INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`)
VALUES(@pid_event_details, @tstamp, @tstamp, 1, 256, 'list', 0, '', NULL, 'rkwevents_pi1', 0, '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n<T3FlexForms>\n    <data>\n        <sheet index="general">\n            <language index="lDEF">\n                <field index="switchableControllerActions">\n                    <value index="vDEF">Event-&gt;show;Event-&gt;showSheet</value>\n                </field>\n            </language>\n        </sheet>\n    </data>\n</T3FlexForms>', -2, '', 0, '0', 0, 0);


INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`)
VALUES(@pid_event_reservation, @tstamp, @tstamp, 1, 256, 'list', 0, '', NULL, 'rkwevents_pi1', 0, '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>\n<T3FlexForms>\n    <data>\n        <sheet index="general">\n            <language index="lDEF">\n                <field index="switchableControllerActions">\n                    <value index="vDEF">EventReservation-&gt;new;EventReservation-&gt;create;EventReservation-&gt;optIn</value>\n                </field>\n            </language>\n        </sheet>\n    </data>\n</T3FlexForms>', -2, '', 0, '0', 0, 0);


-- =================================================
-- Contents for contact-pages
-- =================================================
INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`)
VALUES(@pid_contact_list, @tstamp, @tstamp, 1, 256, 'list', 500, 'Unsere Expertinnen und Experten', NULL, 'rkwauthors_rkwauthors', 0, NULL, -2, '', 0, '0', 0, 0);


INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`)
VALUES(@pid_contact_details, @tstamp, @tstamp, 1, 256, 'list', 610, '', NULL, 'rkwauthors_rkwauthorsheadline', 0, NULL, -2, '', 0, '0', 0, 0);


INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`)
VALUES(@pid_contact_details, @tstamp, @tstamp, 1, 128, 'list', 600, '', NULL, 'rkwauthors_rkwauthorsdetail', 0, NULL, -2, '', 0, '0', 0, 0);


-- =================================================
-- Contents for other-pages
-- =================================================
INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`)
VALUES(@pid_404, @tstamp, @tstamp, 1, 256, 'gridelements_pi1', 0, 'Container', NULL, '', 0, NULL, -2, 'contentContainerOneCol', 1, '0', 0, 0);
SET @gridcontainer_id = last_insert_id();


INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`)
VALUES(@pid_404, @tstamp, @tstamp, 1, 256, 'text', -1, '', '<h3>Und was nun?</h3>\r\n<ul><li>Überprüfen Sie die Schreibweise in der Adresszeile Ihres Browsers ODER</li><li>Nutzen Sie unsere <link 1368 - internal-link "Öffnet Link in gleichem Fenster">Suche</link> ODER</li><li>Kontaktieren Sie unseren Support unter <link service@rkw.de - - "E-Mail Schreiben">service@rkw.de</link></li></ul>', '', 0, NULL, -2, '', 0, @gridcontainer_id, 50, 0);


INSERT INTO `tt_content` (`pid`, `tstamp`, `crdate`, `cruser_id`, `sorting`, `CType`, `colPos`, `header`, `bodytext`, `list_type`, `sys_language_uid`, `pi_flexform`, `backupColPos`, `tx_gridelements_backend_layout`, `tx_gridelements_children`, `tx_gridelements_container`, `tx_gridelements_columns`, `gridelements_shortcut_page_order_by`)
VALUES(@pid_redirect, @tstamp, @tstamp, 1, 256, 'list', 500, '', NULL, 'rkwmailer_rkwmailer', 0, NULL, -2, '', 0, '0', 0, 0);


-- =================================================
-- Sys-Template
-- =================================================
INSERT INTO `sys_template` (`pid`, `tstamp`, `sorting`, `crdate`, `cruser_id`, `title`, `root`, `clear`, `include_static_file`, `constants`, `config`) VALUES
(@pid_website, @tstamp, 256, @tstamp, 1, @website_title, 1, 3, @sys_template_include_static_file, @sys_template_constants, @sys_template_setup);


-- =================================================
-- Sys-Domain
-- =================================================
INSERT INTO `sys_domain` ( `pid`, `tstamp`, `crdate`, `cruser_id`, `hidden`, `domainName`, `redirectTo`, `redirectHttpStatusCode`, `sorting`, `prepend_params`, `forced`) VALUES
(@pid_website, @tstamp, @tstamp, 1, 0, @domain, '', 301, 256, 0, 0);


-- =================================================
-- File mount
-- =================================================
INSERT INTO `sys_filemounts` (`pid`, `tstamp`, `title`, `path`, `base`, `hidden`, `deleted`, `sorting`, `description`, `read_only`) VALUES
(0, @tstamp, @file_mount_title, @media_path, 1, 0, 0, 32, @file_mount_description, 0);
SET @file_mount  = last_insert_id();


-- =================================================
-- BE groups
-- =================================================
INSERT INTO `be_groups` (`pid`, `tstamp`, `title`,  `db_mountpoints`, `crdate`, `cruser_id`, `groupMods`, `file_mountpoints`, `description`, `file_permissions`) VALUES
(0, @tstamp, @backend_group_data_title, @dataset_folder, @tstamp, 1, '', '', 'Enthält die Ordnerfreigaben für die zentrale Datensatzsammlung', 'readFolder,writeFolder,addFolder,renameFolder,moveFolder,deleteFolder,readFile,writeFile,addFile,renameFile,replaceFile,moveFile,copyFile,deleteFile');

INSERT INTO `be_groups` (`pid`, `tstamp`, `title`,  `db_mountpoints`, `crdate`, `cruser_id`, `groupMods`, `file_mountpoints`, `description`, `file_permissions`) VALUES
(0, @tstamp, @backend_group_title, @website_folder, @tstamp, 1, '', @file_mount, 'Freigaben für alle Gruppen\r\nGesetzt werden hier NUR:\r\n- Datenbankfreigaben\r\n- Verzeichnisfreigaben', 'readFolder,writeFolder,addFolder,renameFolder,moveFolder,deleteFolder,recursivedeleteFolder,readFile,writeFile,addFile,renameFile,replaceFile,moveFile,copyFile,deleteFile');

-- =================================================
-- No index,No Follow
-- =================================================
UPDATE `pages` SET `tx_rkwbasics_no_follow` = 1, `tx_rkwbasics_no_index` = 1 WHERE `uid` = @pid_website;

COMMIT;



