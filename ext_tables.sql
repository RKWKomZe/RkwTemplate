#
# Table structure for table 'pages'
#
CREATE TABLE pages (
    tx_rkwtemplate_landingpage_primary_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_primary_effect_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_primary_effect_text_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_primary_top_text_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_primary_top_effect_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_primary_top_effect_text_color varchar(10) DEFAULT '' NOT NULL,

    tx_rkwtemplate_landingpage_secondary_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_secondary_effect_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_secondary_effect_text_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_secondary_top_text_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_secondary_top_effect_color varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_secondary_top_effect_text_color varchar(10) DEFAULT '' NOT NULL,

    tx_rkwtemplate_disable_flyout_menu int(1) unsigned DEFAULT '0' NOT NULL,
);

#
# Table structure for table 'pages' - deprecated fields!
#
CREATE TABLE pages (
    tx_rkwtemplate_landingpage_primarycolor varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_primarycolor_text varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_primarycolor_effect varchar(10) DEFAULT '' NOT NULL,

    tx_rkwtemplate_landingpage_secondarycolor varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_secondarycolor_text varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_secondarycolor_effect varchar(10) DEFAULT '' NOT NULL,
);

