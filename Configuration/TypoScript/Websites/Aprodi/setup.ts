<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/setup.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Config/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Extensions/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Layout/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Marker/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Websites/Aprodi/Menus/Setup.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_CORE_/Pages/Setup/50-Print.ts">

# Environments
[applicationContext = Development*]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_DEV_/Websites/Aprodi/Setup.ts">
[global]

[applicationContext = Production/Staging]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_STAGE_/Websites/Aprodi/Setup.ts">
[global]