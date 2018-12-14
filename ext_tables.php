<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
    {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/_CORE', 'RKW Template: Core only');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum', 'RKW Template: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/Aprodi', 'RKW Template: Aprodi (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/BauMitBim', 'RKW Template: BauMitBim (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/FrauenAmBau', 'RKW Template: FrauenAmBau (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/MeinRkw', 'RKW Template: MeinRkw (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/RessinnoBau', 'RKW Template: RessinnoBau (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Microsites/WebsiteCheck', 'RKW Template: WebsiteCheck (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/Eanpc', 'RKW Template: Eanpc (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwBremen', 'RKW Template: RkwBremen (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwBundesverein', 'RKW Template: RkwBundesverein (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwNord', 'RKW Template: RkwNord (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwSachsenAnhalt', 'RKW Template: RkwSachsenAnhalt (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/__Websites/RkwThueringen', 'RKW Template: RkwThüringen (Website)');



        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/_CORE/TsConfig.ts', 'RKW Template: Core only');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/TsConfig.ts', 'RKW Template: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/Aprodi/TsConfig.ts', 'RKW Template: Aprodi (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/BauMitBim/TsConfig.ts', 'RKW Template: BauMitBim (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/FrauenAmBau/TsConfig.ts', 'RKW Template: FrauenAmBau (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/MeinRkw/TsConfig.ts', 'RKW Template: MeinRkw (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/RessinnoBau/TsConfig.ts', 'RKW Template: RessinnoBau (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/WebsiteCheck/TsConfig.ts', 'RKW Template: WebsiteCheck (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/Eanpc/TsConfig.ts', 'RKW Template: Eanpc (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwBremen/TsConfig.ts', 'RKW Template: RkwBremen (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwBundesverein/TsConfig.ts', 'RKW Template: RkwBundesverein (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwNord/TsConfig.ts', 'RKW Template: RkwNord (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwSachsen/TsConfig.ts', 'RKW Template: RkwSachsen (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwSachsenAnhalt/TsConfig.ts', 'RKW Template: RkwSachsenAnhalt (Website)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Websites/RkwThueringen/TsConfig.ts', 'RKW Template: RkwThüringen (Website)');




    },
    $_EXTKEY
);
