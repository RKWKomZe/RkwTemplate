# Upgrade from 7.6 to 8.7

## Server
* Make sure your vHost has PHP 7.2 installed
* Make sure PHP imap-ext is installed
```
apt-get install php7.2-imap
```



# 

## TYPO3

### Step 1: Login
* Go to: http://rkw-kompetenzzentrum.rkw.local/typo3/install.php 
* On your console do: 
```
touch typo3conf/ENABLE_INSTALL_TOOL
```
* Log in

### Step 2: Execute Wizards
**If you execute the upgrade for the second time on the same system, make sure to delete all .lock-files in /typo3temp/var/locks!**

**Make sure the extension gridelements is installed before you proceed!**
**Make sure the extension rkw_pdf2content is installed before you proceed!**


**Then execute the following wizards under UpgradeWizards:**
* Update database schema: Create tables and fields (if needed)
* Set default database charset to utf-8
* Move "wizard done" flags from LocalConfiguration.php to system registry
* Migrate backend shortcut urls
* Remove unneeded CLI backend users
* Set the "Files:replace" permission for all BE user/groups with "Files:write" set
* Update backend user setting "startModule"
* Migrate all file relations from fe_users.image to sys_file_references
* Execute database migrations on single rows
* Fill translation source field (l10n_source)
* Split menu types into dedicated content elements
* Migrate "css_styled_content" static template location
* Update sorting of sys_language records

**DO NOT execute the following wizards, INSTEAD choose "execute" and then "no, don't install" and then "Perfom updates!"** 
* Install extension "compatibility6" from TER
* Install extension "compatibility7" from TER
* Install extension "rtehtmlarea" from TER

**Then execute the following command on PHPMyAdmin. This is to remove the "unsigned"-definition from the field in order to allow negative values**
```
ALTER TABLE `tt_content` CHANGE `colPos` `colPos` INT(11) NOT NULL DEFAULT '0';
```

**Then execute the following wizards under UpgradeWizards (in this order!):**
* Updater for rkw_basics from TYPO3 7.6 to TYPO3 8.7.
* Updates "tx_bmpdf2content_*" fields to "tx_rkwpdf2content_" 
* Updater for rkw_template from TYPO3 7.6 to TYPO3 8.7

**Execute the following wizards AFTER ALL OTHER WIZARDS**
* Migrate the field "section_frame" for all content elements to "frame_class"
* Update sys_file_processedfile records to match new checksum calculation.
* Migrates existing fe_session_data into fe_sessions

### Step 3: Update database schema
Excecute "Update database schema: Modify tables and fields" (again). 

### Step 4: Database analyzer
Execute the database analyser.
* **Remove tables (rename with prefix)** can be executed right away
* **Remove unused fields (rename with prefix)** can be executed right away
* When executing **Drop fields (really!)** all fields that belong to RKW extensions should be kept.
* When executing **Drop tables (really!)** all tables that belong to RKW extensions should be kept, except for cache-tables with prefix "cf_"

**SO DO !!!NOT!!! EXECUTE THE FOLLOWING COMANDS:**
```
ALTER TABLE `pages` DROP `zzz_deleted_tx_rkwsearch_index_timestamp`
ALTER TABLE `pages` DROP `zzz_deleted_tx_rkwsearch_index_status`
ALTER TABLE `pages` DROP `zzz_deleted_tx_rkwsearch_index_result`
ALTER TABLE `pages` DROP `zzz_deleted_tx_rkwsearch_no_search`
ALTER TABLE `pages` DROP `zzz_deleted_tx_rkwsearch_pubdate`
ALTER TABLE `fe_users` DROP `zzz_deleted_tx_rkwsocialcomments_receive_comment_infomails`
ALTER TABLE `pages_language_overlay` DROP `zzz_deleted_tx_rkwsearch_index_timestamp`
ALTER TABLE `pages_language_overlay` DROP `zzz_deleted_tx_rkwsearch_index_status`
ALTER TABLE `pages_language_overlay` DROP `zzz_deleted_tx_rkwsearch_index_result`
ALTER TABLE `pages_language_overlay` DROP `zzz_deleted_tx_rkwsearch_no_search`
ALTER TABLE `tx_rkwbasics_domain_model_department` DROP `zzz_deleted_search`
ALTER TABLE `tx_rkwbasics_domain_model_documenttype` DROP `zzz_deleted_search`
ALTER TABLE `tx_rkwshop_domain_model_orderitem` DROP `zzz_deleted_ext_order_old`
ALTER TABLE `tx_rkwshop_domain_model_orderitem` DROP `zzz_deleted_product_old`
ALTER TABLE `tx_rkwfeecalculator_domain_model_program` DROP `zzz_deleted_company_age`
ALTER TABLE `tx_rkwfeecalculator_domain_model_program` DROP `zzz_deleted_conditions`
ALTER TABLE `tx_rkwfeecalculator_domain_model_program` DROP `zzz_deleted_miscellaneous`
ALTER TABLE `tx_rkwfeecalculator_domain_model_program` DROP `zzz_deleted_institution`
ALTER TABLE `tx_rkwfeecalculator_domain_model_program` DROP `zzz_deleted_categories`
ALTER TABLE `tx_rkwfeecalculator_domain_model_program` DROP `zzz_deleted_can_start_prematurely`
ALTER TABLE `tx_rkwfeecalculator_domain_model_supportrequest` DROP `zzz_deleted_terms`
ALTER TABLE `tx_rkwetracker_domain_model_reportfilter` DROP `zzz_deleted_domain_required` 

DROP TABLE `zzz_deleted_tx_rkwconsultant_domain_model_basicservice`
DROP TABLE `zzz_deleted_tx_rkwconsultant_domain_model_consultant`
DROP TABLE `zzz_deleted_tx_rkwconsultant_domain_model_consultantservice`
DROP TABLE `zzz_deleted_tx_rkwconsultant_domain_model_contactperson`
DROP TABLE `zzz_deleted_tx_rkwconsultant_domain_model_qualification`
DROP TABLE `zzz_deleted_tx_rkwconsultant_domain_model_subservice`
DROP TABLE `zzz_deleted_tx_rkwfeecalculator_domain_model_institution`
DROP TABLE `zzz_deleted_tx_rkwmailer_domain_model_statisticmail`
DROP TABLE `zzz_deleted_tx_rkworder_domain_model_order`
DROP TABLE `zzz_deleted_tx_rkwsearch_domain_model_queueanalysedkeywords`
DROP TABLE `zzz_deleted_tx_rkwsearch_domain_model_queuetaggedcontent`
DROP TABLE `zzz_deleted_tx_rkwsearch_domain_model_ridmapping`
DROP TABLE `zzz_deleted_tx_rkwsocialcomments_domain_model_comment`
DROP TABLE `zzz_deleted_tx_rkwsocialcomments_domain_model_report`
DROP TABLE `zzz_deleted_tx_rkwwatchlist_domain_model_item`
DROP TABLE `zzz_deleted_tx_rkwwatchlist_domain_model_watchlist`
```
### Step 5: Do "Clear all cache"
### Step 6: Do "Check for broken extensions"
### Step 6: Check image rendering



## Cookie Opt-In
* Insert Cookie-Opt-In datasets into database
```

--
-- Daten für Tabelle `tx_sgcookieoptin_domain_model_cookie`
--

INSERT INTO `tx_sgcookieoptin_domain_model_cookie` (`uid`, `pid`, `name`, `provider`, `purpose`, `lifetime`, `parent_group`, `parent_optin`, `sorting`, `tstamp`, `crdate`, `cruser_id`, `deleted`, `hidden`, `sys_language_uid`, `l10n_parent`, `l10n_diffsource`, `l10n_state`) VALUES
(1, 1, 'PHPSESSID', 'RKW', 'Dieses Cookie ist spezifisch für PHP-Anwendungen. Es wird gesetzt, um Ihre aktuelle Sitzung aufrechtzuerhalten und gewährleistet so dass Sie alle Funktionen der Website uneingeschränkt nutzen können.', 'Dauer der Sitzung', 0, 1, 1, 1594373177, 1580469160, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(2, 1, 'fe_typo_user', 'RKW', 'Dieses Cookie wird vom durch uns eingesetzten Content Management System TYPO3 für die Identifizierung eines Anwenders gesetzt. Es ist Voraussetzung für z. B.  nutzerspezifische Rückmeldungen bei Formularen, ermöglicht aber auch den Login auf unserer Seite.', 'Dauer der Sitzung', 0, 1, 2, 1594373177, 1580469160, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(3, 1, 'hibext_instdsigdipv2', 'RKW', 'Das Cookie stellt die Funktionsfähigkeit und Bedienbarkeit der Seite sicher und dient zur Nachverfolgung von Fehlern.', '3 Tage', 0, 1, 3, 1594373177, 1580469160, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(4, 1, '_et_coid', 'eTracker', 'Dieses Cookie wird zur Wiedererkennung der Sitzung eines Nutzenden verwendet', '2 Jahre', 1, 0, 1, 1594373177, 1580470649, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(5, 1, 'isSdEnabled', 'eTracker', 'Dieses Cookie speichert, ob bei die Scrolltiefe bei den Nutzenden gemessen wird.', '1 Tag', 1, 0, 3, 1594373177, 1580470649, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(6, 1, 'BT_ctst', 'eTracker', 'Dieses Cookie wird dazu verwendet, um zu erkennen, ob im Browser der Besuchenden Cookies aktiviert sind oder nicht.', 'Dauer der Sitzung', 1, 0, 4, 1594373177, 1580470649, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(7, 1, 'BT_sdc', 'eTracker', 'Dieses Cookie enthält base64-codierte Daten der aktuellen Sitzung des Nutzenden (Referrer, Anzahl der Seiten, Anzahl der Sekunden seit Beginn der Sitzung), die für Personalisierungszwecke verwendet werden.', 'Dauer der Sitzung', 1, 0, 5, 1594373177, 1580470649, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(8, 1, 'BT_pdc', 'eTracker', 'Dieses Cookie enthält base64-kodierte Daten der Historie des Besuchenden (ist Kunde, Newsletter-Empfänger etc.) zur Personalisierung.', '1 Jahr', 1, 0, 6, 1594373177, 1580470649, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(9, 1, 'cntcookie', 'eTracker', 'Dieses Cookie enthält eine Liste von Account IDs für die durch die Nutzenden ein expliziter Ausschluss von der Zählung gewählt wurde.', '4 Jahre', 1, 0, 7, 1594373177, 1580470649, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(10, 1, 'cookie_optin', 'RKW', 'Dieses Cookie speichert die getroffene Auswahl der durch die Nutzenden zugelassenen Cookies.', '1 Jahr', 0, 1, 4, 1594373177, 1580471976, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL),
(11, 1, 'et_allow_cookies', 'eTracker', 'Dieser Cookie speichert die erfolgte Zustimmung zum Setzen von Cookies.', '16 Monate', 1, 0, 2, 1594373177, 1580728515, 1, 0, 0, 0, 0, 0x613a313a7b733a363a2268696464656e223b4e3b7d, NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tx_sgcookieoptin_domain_model_group`
--

--
-- Daten für Tabelle `tx_sgcookieoptin_domain_model_group`
--

INSERT INTO `tx_sgcookieoptin_domain_model_group` (`uid`, `pid`, `title`, `group_name`, `description`, `parent_optin`, `scripts`, `cookies`, `sorting`, `tstamp`, `crdate`, `cruser_id`, `deleted`, `hidden`, `sys_language_uid`, `l10n_parent`, `l10n_diffsource`, `l10n_state`) VALUES
(1, 1, 'Statistiken', 'statistiken', 'Um unser Webangebot kontinuierlich weiterentwickeln und verbessern zu können, erfassen wir die Besuche und Download auf unserer Website. Hierfür setzen wir etracker Analytics  (Anbieter: etracker GmbH, Erste Brunnenstraße 1, 20459 Hamburg, Germany). Die erfassten Daten werden nicht an Dritte weitergegeben und erlauben keinen Rückschluss auf Ihre Person. Auch dient die Datenerfassung nicht dem Zweck der Verarbeitung für die Bereitstellung personalisierter Inhalte und Werbung, d.h. zur direkten Kommunikation mit einer bestimmten Person, sondern der aggregierten statistischen Auswertung der Website-Nutzung.  Die mit etracker erzeugten Daten werden im Auftrag des Anbieters dieser Website von etracker ausschließlich in Deutschland verarbeitet und gespeichert und unterliegen damit den strengen deutschen und europäischen Datenschutzgesetzen und -standards. etracker wurde diesbezüglich unabhängig geprüft, zertifiziert und mit dem Datenschutz-Gütesiegel ePrivacyseal ausgezeichnet. Wenn Sie zustimmen, erlauben Sie es uns, Ihr Nutzungsverhalten auf dieser Website u. a. durch Cookies zu erfassen. Stimmen Sie dem Setzen von Cookies nicht zu, erfolgt die Erfassung des Nutzungsverhaltens auf dieser Website ausschließlich ohne Cookies (Cookie-less). Nähere Informationen zum Cookie-less-Tracking finden Sie in unserer Datenschutzerklärung.', 1, 1, 7, 1, 1594373177, 1580470649, 1, 0, 0, 0, 0, 0x613a363a7b733a363a2268696464656e223b4e3b733a353a227469746c65223b4e3b733a31303a2267726f75705f6e616d65223b4e3b733a31313a226465736372697074696f6e223b4e3b733a373a2273637269707473223b4e3b733a373a22636f6f6b696573223b4e3b7d, NULL);

-- --------------------------------------------------------

--
-- Daten für Tabelle `tx_sgcookieoptin_domain_model_optin`
--

INSERT INTO `tx_sgcookieoptin_domain_model_optin` (`uid`, `pid`, `header`, `description`, `cookie_lifetime`, `navigation`, `groups`, `accept_all_text`, `accept_specific_text`, `accept_essential_text`, `extend_box_link_text`, `extend_box_link_text_close`, `extend_table_link_text`, `extend_table_link_text_close`, `cookie_name_text`, `cookie_provider_text`, `cookie_purpose_text`, `cookie_lifetime_text`, `color_box`, `color_headline`, `color_text`, `color_checkbox`, `color_checkbox_required`, `color_button_all`, `color_button_all_hover`, `color_button_all_text`, `color_button_specific`, `color_button_specific_hover`, `color_button_specific_text`, `color_button_essential`, `color_button_essential_hover`, `color_button_essential_text`, `color_list`, `color_list_text`, `color_table`, `color_table_header_text`, `color_Table_data_text`, `color_button_close`, `color_button_close_hover`, `color_button_close_text`, `essential_title`, `essential_description`, `essential_scripts`, `essential_cookies`, `iframe_enabled`, `iframe_title`, `iframe_description`, `iframe_button_allow_all_text`, `iframe_button_allow_one_text`, `iframe_button_load_one_text`, `iframe_open_settings_text`, `iframe_color_consent_box_background`, `iframe_color_button_load_one`, `iframe_color_button_load_one_hover`, `iframe_color_button_load_one_text`, `iframe_color_open_settings`, `tstamp`, `crdate`, `cruser_id`, `deleted`, `sys_language_uid`, `l10n_parent`, `l10n_diffsource`, `l10n_state`) VALUES
(1, 1, 'Datenschutzeinstellungen', 'Auf unserer Webseite werden Cookies verwendet. Einige davon werden zwingend benötigt, während es uns andere ermöglichen, Ihre Nutzererfahrung auf unserer Webseite zu verbessern.', 365, '409,1921', 1, 'Alle akzeptieren', 'Auswahl speichern & schließen', 'Nur notwendige Cookies akzeptieren', 'Weitere Informationen anzeigen', 'Weitere Informationen ausblenden', 'Cookie-Informationen anzeigen', 'Cookie-Informationen ausblenden', 'Name', 'Anbieter', 'Zweck', 'Laufzeit', '#FFFFFF', '#333', '#333', '#e64415', '#A5A5A5', '#e64415', '#333', '#FFF', '#7B7C7E', '#333', '#FFF', '#7B7C7E', '#333', '#FFF', '#333', '#FFF', '#FFFFFF', '#333', '#333', '#7B7C7E', '#333', '#FFF', 'Notwendige Cookies', 'Notwendige Cookies werden für grundlegende Funktionen der Webseite benötigt. Dadurch ist gewährleistet, dass die Webseite einwandfrei funktioniert.', 0, 4, 1, 'Externe Inhalte', 'Wir verwenden auf unserer Website externe Inhalte, um Ihnen zusätzliche Informationen anzubieten.', 'Alle erlauben', 'Einmalig erlauben', 'Externen Inhalt laden', 'Einstellungen anzeigen', '#D6D6D6', '#e64415', '#333', '#FFF', '#e64415', 1580971620, 1580469160, 1, 0, 0, 0, 0x613a35343a7b733a363a22686561646572223b4e3b733a31313a226465736372697074696f6e223b4e3b733a31353a226163636570745f616c6c5f74657874223b4e3b733a32303a226163636570745f73706563696669635f74657874223b4e3b733a32313a226163636570745f657373656e7469616c5f74657874223b4e3b733a32303a22657874656e645f626f785f6c696e6b5f74657874223b4e3b733a32363a22657874656e645f626f785f6c696e6b5f746578745f636c6f7365223b4e3b733a32323a22657874656e645f7461626c655f6c696e6b5f74657874223b4e3b733a32383a22657874656e645f7461626c655f6c696e6b5f746578745f636c6f7365223b4e3b733a31363a22636f6f6b69655f6e616d655f74657874223b4e3b733a32303a22636f6f6b69655f70726f76696465725f74657874223b4e3b733a31393a22636f6f6b69655f707572706f73655f74657874223b4e3b733a32303a22636f6f6b69655f6c69666574696d655f74657874223b4e3b733a31303a226e617669676174696f6e223b4e3b733a31343a22696672616d655f656e61626c6564223b4e3b733a31323a22696672616d655f7469746c65223b4e3b733a31383a22696672616d655f6465736372697074696f6e223b4e3b733a32383a22696672616d655f627574746f6e5f616c6c6f775f616c6c5f74657874223b4e3b733a32383a22696672616d655f627574746f6e5f616c6c6f775f6f6e655f74657874223b4e3b733a32373a22696672616d655f627574746f6e5f6c6f61645f6f6e655f74657874223b4e3b733a32353a22696672616d655f6f70656e5f73657474696e67735f74657874223b4e3b733a33353a22696672616d655f636f6c6f725f636f6e73656e745f626f785f6261636b67726f756e64223b4e3b733a32383a22696672616d655f636f6c6f725f627574746f6e5f6c6f61645f6f6e65223b4e3b733a33343a22696672616d655f636f6c6f725f627574746f6e5f6c6f61645f6f6e655f686f766572223b4e3b733a33333a22696672616d655f636f6c6f725f627574746f6e5f6c6f61645f6f6e655f74657874223b4e3b733a32363a22696672616d655f636f6c6f725f6f70656e5f73657474696e6773223b4e3b733a31353a22657373656e7469616c5f7469746c65223b4e3b733a32313a22657373656e7469616c5f6465736372697074696f6e223b4e3b733a31373a22657373656e7469616c5f73637269707473223b4e3b733a31373a22657373656e7469616c5f636f6f6b696573223b4e3b733a363a2267726f757073223b4e3b733a393a22636f6c6f725f626f78223b4e3b733a31343a22636f6c6f725f686561646c696e65223b4e3b733a31303a22636f6c6f725f74657874223b4e3b733a32333a22636f6c6f725f636865636b626f785f7265717569726564223b4e3b733a31343a22636f6c6f725f636865636b626f78223b4e3b733a31383a22636f6c6f725f627574746f6e5f636c6f7365223b4e3b733a32343a22636f6c6f725f627574746f6e5f636c6f73655f686f766572223b4e3b733a32333a22636f6c6f725f627574746f6e5f636c6f73655f74657874223b4e3b733a31363a22636f6c6f725f627574746f6e5f616c6c223b4e3b733a32323a22636f6c6f725f627574746f6e5f616c6c5f686f766572223b4e3b733a32313a22636f6c6f725f627574746f6e5f616c6c5f74657874223b4e3b733a32313a22636f6c6f725f627574746f6e5f7370656369666963223b4e3b733a32373a22636f6c6f725f627574746f6e5f73706563696669635f686f766572223b4e3b733a32363a22636f6c6f725f627574746f6e5f73706563696669635f74657874223b4e3b733a32323a22636f6c6f725f627574746f6e5f657373656e7469616c223b4e3b733a32383a22636f6c6f725f627574746f6e5f657373656e7469616c5f686f766572223b4e3b733a32373a22636f6c6f725f627574746f6e5f657373656e7469616c5f74657874223b4e3b733a31303a22636f6c6f725f6c697374223b4e3b733a31353a22636f6c6f725f6c6973745f74657874223b4e3b733a31313a22636f6c6f725f7461626c65223b4e3b733a32333a22636f6c6f725f7461626c655f6865616465725f74657874223b4e3b733a32313a22636f6c6f725f5461626c655f646174615f74657874223b4e3b733a31353a22636f6f6b69655f6c69666574696d65223b4e3b7d, NULL);

-- --------------------------------------------------------

--
-- Daten für Tabelle `tx_sgcookieoptin_domain_model_script`
--

INSERT INTO `tx_sgcookieoptin_domain_model_script` (`uid`, `pid`, `title`, `script`, `html`, `parent_group`, `parent_optin`, `sorting`, `tstamp`, `crdate`, `cruser_id`, `deleted`, `hidden`, `sys_language_uid`, `l10n_parent`, `l10n_diffsource`, `l10n_state`) VALUES
(1, 1, 'eTracker', '_etracker.enableCookies(rkwEtrackerDomain);', '', 1, 0, 1, 1594373177, 1580470649, 1, 0, 0, 0, 0, 0x613a343a7b733a363a2268696464656e223b4e3b733a353a227469746c65223b4e3b733a363a22736372697074223b4e3b733a343a2268746d6c223b4e3b7d, NULL),
(2, 1, 'Disable eTracker', '_etracker.disableCookies();', '', 0, 1, 1, 1580970536, 1580827579, 1, 1, 0, 0, 0, 0x613a343a7b733a363a2268696464656e223b4e3b733a353a227469746c65223b4e3b733a363a22736372697074223b4e3b733a343a2268746d6c223b4e3b7d, NULL);

```
* Click on Cookie modules in the backend, open settings there and save them again
* Delete all cookies of the domain in the browser
* Now the cookie hint should appear in the frontend.