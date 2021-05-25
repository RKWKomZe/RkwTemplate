#
# Table structure for table 'pages'
#
CREATE TABLE pages (
  	tx_rkwtemplate_landingpage_cta_link varchar(1024) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_cta_linktext VARCHAR(255) DEFAULT '',
    tx_rkwtemplate_landingpage_primarycolor varchar(10) DEFAULT '' NOT NULL,
    tx_rkwtemplate_landingpage_secondarycolor varchar(10) DEFAULT '' NOT NULL,
);

#
# Table structure for table 'tt_content'
#
CREATE TABLE tt_content (
    tx_rkwtemplate_styles VARCHAR(255) DEFAULT '',
    tx_rkwtemplate_linktext VARCHAR(255) DEFAULT '',
	tx_rkwtemplate_longitude varchar(255) DEFAULT '' NOT NULL,
	tx_rkwtemplate_latitude varchar(255) DEFAULT '' NOT NULL,
	tx_rkwtemplate_icon varchar(45) DEFAULT '' NOT NULL,
);

