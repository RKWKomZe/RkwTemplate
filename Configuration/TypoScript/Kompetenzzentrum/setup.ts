<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_CORE_/setup.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Config/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Extensions/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Layouts/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Marker/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Menus/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Specials/Setup.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_CORE_/Pages/Setup/50-Print.ts">

# Environments
[applicationContext = Development*]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_DEV_/Kompetenzzentrum/Setup.ts">
[global]

[applicationContext = Production/Staging]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_STAGE_/Kompetenzzentrum/Setup.ts">
[global]