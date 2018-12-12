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






        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/_CORE/TsConfig.ts', 'RKW Template: Core only');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/TsConfig.ts', 'RKW Template: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/Aprodi/TsConfig.ts', 'RKW Template: Aprodi (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/BauMitBim/TsConfig.ts', 'RKW Template: BauMitBim (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/FrauenAmBau/TsConfig.ts', 'RKW Template: FrauenAmBau (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/MeinRkw/TsConfig.ts', 'RKW Template: MeinRkw (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/RessinnoBau/TsConfig.ts', 'RKW Template: RessinnoBau (Microsite)');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/__Microsites/WebsiteCheck/TsConfig.ts', 'RKW Template: WebsiteCheck (Microsite)');



    },
    $_EXTKEY
);
