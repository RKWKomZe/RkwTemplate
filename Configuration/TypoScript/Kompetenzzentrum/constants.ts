<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_CORE_/constants.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Config/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Extensions/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Marker/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Menus/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Specials/Constants.ts">

# Environments
[applicationContext = Development*]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_DEV_/Kompetenzzentrum/Constants.ts">
[global]

[applicationContext = Production/Staging]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_STAGE_/Kompetenzzentrum/Constants.ts">
[global]