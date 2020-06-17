<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
    {

        //=================================================================
        // Add TypoScript
        //=================================================================
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/_Core', 'RKW Template: Core only');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum', 'RKW Template: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/Aprodi', 'RKW Template/Microsite KomZe: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/BauMitBim', 'RKW Template/Microsite KomZe: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/DigiScouts', 'RKW Template/Microsite KomZe: DigiScouts');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/EcoStep', 'RKW Template/Microsite KomZe: EcoStep');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/EEPA', 'RKW Template/Microsite KomZe: EEPA');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/FrauenAmBau', 'RKW Template/Microsite KomZe: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/Gem', 'RKW Template/Microsite KomZe: GEM');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/MeinRkw', 'RKW Template/Microsite KomZe: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/RkwGeschichte', 'RKW Template/Microsite KomZe: RkwGeschichte');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/RessinnoBau', 'RKW Template/Microsite KomZe: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Microsites/WebsiteCheck', 'RKW Template/Microsite KomZe: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Websites/Eanpc', 'RKW Template/Website KomZe: Eanpc');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Websites/RkwBadenWuerttemberg', 'RKW Template/Website KomZe: RkwBadenWürttemberg');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Websites/RkwBremen', 'RKW Template/Website KomZe: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Websites/RkwBundesverein', 'RKW Template/Website KomZe: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Websites/RkwNord', 'RKW Template/Website KomZe: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Websites/RkwSachsenAnhalt', 'RKW Template/Website KomZe: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/Kompetenzzentrum/_Websites/RkwThueringen', 'RKW Template/Website KomZe: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript/WePstra', 'RKW Template: WePstra');

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/_Core/TsConfig.ts', 'RKW Template: Core only');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/TsConfig.ts', 'RKW Template: Kompetenzzentrum');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/Aprodi/TsConfig.ts', 'RKW Template/Microsite KomZe: Aprodi');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/BauMitBim/TsConfig.ts', 'RKW Template/Microsite KomZe: BauMitBim');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/DigiScouts/TsConfig.ts', 'RKW Template/Microsite KomZe: DigiScouts');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/EcoStep/TsConfig.ts', 'RKW Template/Microsite KomZe: EcoStep');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/EEPA/TsConfig.ts', 'RKW Template/Microsite KomZe: EEPA');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/FrauenAmBau/TsConfig.ts', 'RKW Template/Microsite KomZe: FrauenAmBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/Gem/TsConfig.ts', 'RKW Template/Microsite KomZe: GEM');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/MeinRkw/TsConfig.ts', 'RKW Template/Microsite KomZe: MeinRkw');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/RkwGeschichte/TsConfig.ts', 'RKW Template/Microsite KomZe: RkwGeschichte');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/RessinnoBau/TsConfig.ts', 'RKW Template/Microsite KomZe: RessinnoBau');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Microsites/WebsiteCheck/TsConfig.ts', 'RKW Template/Microsite KomZe: WebsiteCheck');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Websites/Eanpc/TsConfig.ts', 'RKW Template/Microsite KomZe: Eanpc');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Websites/RkwBadenWuerttemberg/TsConfig.ts', 'RKW Template/Website KomZe: RkwBadenWürttemberg');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Websites/RkwBremen/TsConfig.ts', 'RKW Template/Website KomZe: RkwBremen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Websites/RkwBundesverein/TsConfig.ts', 'RKW Template/Website KomZe: RkwBundesverein');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Websites/RkwNord/TsConfig.ts', 'RKW Template/Website KomZe: RkwNord');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Websites/RkwSachsen/TsConfig.ts', 'RKW Template/Website KomZe: RkwSachsen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Websites/RkwSachsenAnhalt/TsConfig.ts', 'RKW Template/Website KomZe: RkwSachsenAnhalt');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/Kompetenzzentrum/_Websites/RkwThueringen/TsConfig.ts', 'RKW Template/Website KomZe: RkwThüringen');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/WePstra/TsConfig.ts', 'RKW Template: WePstra');

    },
    $_EXTKEY
);
