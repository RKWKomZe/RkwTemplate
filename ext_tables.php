<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
    {

        //=================================================================
        // Add TypoScript
        //=================================================================
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript', 'RKW Template');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript', 'RKW Template - Theme: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Microsites/Aprodi', 'RKW Template - Theme: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Microsites/BauMitBim', 'RKW Template - Theme: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Microsites/DigiScouts', 'RKW Template - Theme: DigiScouts');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Microsites/EcoStep', 'RKW Template - Theme: EcoStep');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Microsites/FrauenAmBau', 'RKW Template KomZe - Theme: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Microsites/Gem', 'RKW Template - Theme: GEM');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Microsites/MeinRkw', 'RKW Template - Theme: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Microsites/RessinnoBau', 'RKW Template - Theme: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Microsites/WebsiteCheck', 'RKW Template - Theme: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Websites/Eanpc', 'RKW Template - Theme: Eanpc');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Websites/RkwBadenWuerttemberg', 'RKW Template - Theme: RkwBadenWürttemberg');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Websites/RkwBremen', 'RKW Template - Theme: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Websites/RkwBundesverein', 'RKW Template - Theme: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Websites/RkwNord', 'RKW Template - Theme: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Websites/RkwSachsenAnhalt', 'RKW Template - Theme: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TypoScript/_Websites/RkwThueringen', 'RKW Template - Theme: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/WePstra/Configuration/TypoScript', 'RKW Template - Theme: WePstra');

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/TsConfig.typoscript', 'RKW Template');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Microsites/Aprodi/TsConfig.typoscript', 'RKW Template - Theme: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Microsites/BauMitBim/TsConfig.typoscript', 'RKW Template - Theme: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Microsites/DigiScouts/TsConfig.typoscript', 'RKW Template - Theme: DigiScouts');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Microsites/EcoStep/TsConfig.typoscript', 'RKW Template - Theme: EcoStep');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Microsites/FrauenAmBau/TsConfig.typoscript', 'RKW Template - Theme: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Microsites/Gem/TsConfig.typoscript', 'RKW Template - Theme: GEM');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Microsites/MeinRkw/TsConfig.typoscript', 'RKW Template - Theme: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Microsites/RessinnoBau/TsConfig.typoscript', 'RKW Template - Theme: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Microsites/WebsiteCheck/TsConfig.typoscript', 'RKW Template - Theme: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Websites/Eanpc/TsConfig.typoscript', 'RKW Template - Theme: Eanpc');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Websites/RkwBadenWuerttemberg/TsConfig.typoscript', 'RKW Template - Theme: RkwBadenWürttemberg');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Websites/RkwBremen/TsConfig.typoscript', 'RKW Template - Theme: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Websites/RkwBundesverein/TsConfig.typoscript', 'RKW Template - Theme: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Websites/RkwNord/TsConfig.typoscript', 'RKW Template - Theme: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Websites/RkwSachsen/TsConfig.typoscript', 'RKW Template - Theme: RkwSachsen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Websites/RkwSachsenAnhalt/TsConfig.typoscript', 'RKW Template - Theme: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum/Configuration/TsConfig/_Websites/RkwThueringen/TsConfig.typoscript', 'RKW Template - Theme: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/WePstra/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: WePstra');

    },
    $_EXTKEY
);
