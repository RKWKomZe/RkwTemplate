<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
    {

        //=================================================================
        // Add TypoScript
        //=================================================================
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript', 'RKW Template');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/Kompetenzzentrum2016/Configuration/TypoScript', 'RKW Template - Theme: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/Aprodi/Configuration/TypoScript', 'RKW Template - Theme: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/BauMitBim/Configuration/TypoScript', 'RKW Template - Theme: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/DigiScouts/Configuration/TypoScript', 'RKW Template - Theme: DigiScouts');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/EcoStep/Configuration/TypoScript', 'RKW Template - Theme: EcoStep');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/EEPA/Configuration/TypoScript', 'RKW Template - Theme: EEPA');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/FrauenAmBau/Configuration/TypoScript', 'RKW Template KomZe - Theme: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/GEM/Configuration/TypoScript', 'RKW Template - Theme: GEM');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/MeinRkw/Configuration/TypoScript', 'RKW Template - Theme: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/RessinnoBau/Configuration/TypoScript', 'RKW Template - Theme: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/RkwGeschichte/Configuration/TypoScript', 'RKW Template - Theme: RKW Geschichte');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Microsites/WebsiteCheck/Configuration/TypoScript', 'RKW Template - Theme: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Websites/EANPC/Configuration/TypoScript', 'RKW Template - Theme: EANPC');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Websites/RkwBadenWuerttemberg/Configuration/TypoScript', 'RKW Template - Theme: RkwBadenWürttemberg');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Websites/RkwBremen/Configuration/TypoScript', 'RKW Template - Theme: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Websites/RkwBundesverein/Configuration/TypoScript', 'RKW Template - Theme: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Websites/RkwNord/Configuration/TypoScript', 'RKW Template - Theme: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Websites/RkwSachsenAnhalt/Configuration/TypoScript', 'RKW Template - Theme: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/_Websites/RkwThueringen/Configuration/TypoScript', 'RKW Template - Theme: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Themes/WePstra/Configuration/TypoScript', 'RKW Template - Theme: WePstra');

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/TsConfig.typoscript', 'RKW Template');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum2016/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/Aprodi/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/BauMitBim/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/DigiScouts/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: DigiScouts');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/EcoStep/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: EcoStep');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/EEPA/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: EEPA');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/FrauenAmBau/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/GEM/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: GEM');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/MeinRkw/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/RessinnoBau/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/RkwGeschichte/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RKW Geschichte');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/WebsiteCheck/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/EANPC/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: EANPC');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwBadenWuerttemberg/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwBadenWürttemberg');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwBremen/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwBundesverein/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwNord/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwSachsen/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwSachsen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwSachsenAnhalt/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwThueringen/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/WePstra/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: WePstra');

    },
    $_EXTKEY
);
