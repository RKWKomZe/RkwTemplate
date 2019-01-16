<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
    {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/_CORE', 'RKW Template: Core only');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum', 'RKW Template: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/Aprodi', 'RKW Template/Microsite KomZe: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/BauMitBim', 'RKW Template/Microsite KomZe: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/FrauenAmBau', 'RKW Template/Microsite KomZe: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/MeinRkw', 'RKW Template/Microsite KomZe: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/RessinnoBau', 'RKW Template/Microsite KomZe: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/WebsiteCheck', 'RKW Template/Microsite KomZe: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/Eanpc', 'RKW Template/Website KomZe: Eanpc');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwBremen', 'RKW Template/Website KomZe: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwBundesverein', 'RKW Template/Website KomZe: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwNord', 'RKW Template/Website KomZe: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwSachsenAnhalt', 'RKW Template/Website KomZe: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwThueringen', 'RKW Template/Website KomZe: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/WePstra', 'RKW Template: WePstra');

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/_CORE/TsConfig.ts', 'RKW Template: Core only');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/TsConfig.ts', 'RKW Template: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/Aprodi/TsConfig.ts', 'RKW Template/Microsite KomZe: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/BauMitBim/TsConfig.ts', 'RKW Template/Microsite KomZe: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/FrauenAmBau/TsConfig.ts', 'RKW Template/Microsite KomZe: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/MeinRkw/TsConfig.ts', 'RKW Template/Microsite KomZe: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/RessinnoBau/TsConfig.ts', 'RKW Template/Microsite KomZe: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/WebsiteCheck/TsConfig.ts', 'RKW Template/Microsite KomZe: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/Eanpc/TsConfig.ts', 'RKW Template/Microsite KomZe: Eanpc');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwBremen/TsConfig.ts', 'RKW Template/Website KomZe: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwBundesverein/TsConfig.ts', 'RKW Template/Website KomZe: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwNord/TsConfig.ts', 'RKW Template/Website KomZe: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwSachsen/TsConfig.ts', 'RKW Template/Website KomZe: RkwSachsen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwSachsenAnhalt/TsConfig.ts', 'RKW Template/Website KomZe: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwThueringen/TsConfig.ts', 'RKW Template/Website KomZe: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/WePstra/TsConfig.ts', 'RKW Template: WePstra');

    },
    $_EXTKEY
);
