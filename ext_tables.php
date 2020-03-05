<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
    {

        //=================================================================
        // Add TypoScript
        //=================================================================
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/_Core/TypoScript', 'RKW Template: Core only');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript', 'RKW Template: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Microsites/Aprodi', 'RKW Template/Microsite KomZe: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Microsites/BauMitBim', 'RKW Template/Microsite KomZe: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Microsites/DigiScouts', 'RKW Template/Microsite KomZe: DigiScouts');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Microsites/EcoStep', 'RKW Template/Microsite KomZe: EcoStep');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Microsites/FrauenAmBau', 'RKW Template/Microsite KomZe: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Microsites/Gem', 'RKW Template/Microsite KomZe: GEM');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Microsites/MeinRkw', 'RKW Template/Microsite KomZe: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Microsites/RessinnoBau', 'RKW Template/Microsite KomZe: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Microsites/WebsiteCheck', 'RKW Template/Microsite KomZe: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Websites/Eanpc', 'RKW Template/Website KomZe: Eanpc');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Websites/RkwBadenWuerttemberg', 'RKW Template/Website KomZe: RkwBadenWürttemberg');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Websites/RkwBremen', 'RKW Template/Website KomZe: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Websites/RkwBundesverein', 'RKW Template/Website KomZe: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Websites/RkwNord', 'RKW Template/Website KomZe: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Websites/RkwSachsenAnhalt', 'RKW Template/Website KomZe: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TypoScript/_Websites/RkwThueringen', 'RKW Template/Website KomZe: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/Themes/WePstra/TypoScript', 'RKW Template: WePstra');

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/_Core/TsConfig/TsConfig.typoscript', 'RKW Template: Core only');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/TsConfig.typoscript', 'RKW Template: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Microsites/Aprodi/TsConfig.typoscript', 'RKW Template/Microsite KomZe: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Microsites/BauMitBim/TsConfig.typoscript', 'RKW Template/Microsite KomZe: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Microsites/DigiScouts/TsConfig.typoscript', 'RKW Template/Microsite KomZe: DigiScouts');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Microsites/EcoStep/TsConfig.typoscript', 'RKW Template/Microsite KomZe: EcoStep');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Microsites/FrauenAmBau/TsConfig.typoscript', 'RKW Template/Microsite KomZe: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Microsites/Gem/TsConfig.typoscript', 'RKW Template/Microsite KomZe: GEM');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Microsites/MeinRkw/TsConfig.typoscript', 'RKW Template/Microsite KomZe: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Microsites/RessinnoBau/TsConfig.typoscript', 'RKW Template/Microsite KomZe: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Microsites/WebsiteCheck/TsConfig.typoscript', 'RKW Template/Microsite KomZe: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Websites/Eanpc/TsConfig.typoscript', 'RKW Template/Microsite KomZe: Eanpc');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Websites/RkwBadenWuerttemberg/TsConfig.typoscript', 'RKW Template/Website KomZe: RkwBadenWürttemberg');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Websites/RkwBremen/TsConfig.typoscript', 'RKW Template/Website KomZe: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Websites/RkwBundesverein/TsConfig.typoscript', 'RKW Template/Website KomZe: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Websites/RkwNord/TsConfig.typoscript', 'RKW Template/Website KomZe: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Websites/RkwSachsen/TsConfig.typoscript', 'RKW Template/Website KomZe: RkwSachsen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Websites/RkwSachsenAnhalt/TsConfig.typoscript', 'RKW Template/Website KomZe: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/Kompetenzzentrum/TsConfig/_Websites/RkwThueringen/TsConfig.typoscript', 'RKW Template/Website KomZe: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/Themes/WePstra/TsConfig/TsConfig.typoscript', 'RKW Template: WePstra');

    },
    $_EXTKEY
);
