<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/constants.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Config/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Extensions/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Layout/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Marker/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Menus/Constants.ts">

# Environments
[applicationContext = Development*]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_DEV_/Websites/Aprodi/Constants.ts">
[global]

[applicationContext = Production/Staging]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_STAGE_/Websites/Aprodi/Constants.ts">
[global]