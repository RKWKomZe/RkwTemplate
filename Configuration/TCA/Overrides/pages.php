<?php

$tmpColsPages = [


    'tx_rkwtemplate_landingpage_primary_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_primary_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_primary_effect_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_primary_effect_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_primary_effect_text_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_primary_effect_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_primary_top_text_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_primary_top_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_primary_top_effect_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_primary_top_effect_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_primary_top_effect_text_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_primary_top_effect_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],

    'tx_rkwtemplate_landingpage_secondary_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_secondary_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_secondary_effect_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_secondary_effect_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_secondary_effect_text_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_secondary_effect_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_secondary_top_text_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_secondary_top_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_secondary_top_effect_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_secondary_top_effect_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],
    'tx_rkwtemplate_landingpage_secondary_top_effect_text_color' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_secondary_top_effect_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
            'eval' => 'required',
        ],
    ],

    'tx_rkwtemplate_landingpage_tertiary_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_tertiary_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_tertiary_effect_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_tertiary_effect_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_tertiary_effect_text_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_tertiary_effect_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_tertiary_top_text_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_tertiary_top_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_tertiary_top_effect_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_tertiary_top_effect_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_tertiary_top_effect_text_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_tertiary_top_effect_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    
    'tx_rkwtemplate_landingpage_quarterly_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_quarterly_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_quarterly_effect_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_quarterly_effect_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_quarterly_effect_text_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_quarterly_effect_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_quarterly_top_text_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_quarterly_top_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_quarterly_top_effect_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_quarterly_top_effect_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],
    'tx_rkwtemplate_landingpage_quarterly_top_effect_text_color' => [
        'displayCond' => [
            'AND' => [
                'FIELD:layout:=:30000',
                'FIELD:tx_rkwtemplate_landingpage_show_more_colors:REQ:TRUE'
            ]
        ],
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_quarterly_top_effect_text_color',
        'config' => [
            'type' => 'input',
            'renderType' => 'colorpicker',
            'size' => 10,
        ],
    ],

    'tx_rkwtemplate_landingpage_show_more_colors' => [
        'displayCond' => 'FIELD:layout:=:30000',
        'exclude' => 0,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_show_more_colors',
        'onChange' => 'reload',
        'config' => [
            'type' => 'check',
            'default' => 0,
            'items' => [
                '1' => [
                    '0' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_landingpage_show_more_colors.I.enabled'
                ],
            ],
        ],
    ],
        
    'tx_rkwtemplate_disable_flyout_menu' => [
        'exclude' => 1,
        'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_disable_flyout_menu',
        'config' => [
            'type' => 'check',
            'default' => 0,
            'items' => [
                '1' => [
                    '0' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.tx_rkwtemplate_disable_flyout_menu.I.enabled'
                ],
            ],
        ],
    ],
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'pages', $tmpColsPages
);

// create to new palettes
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'tx_rkwtemplate_primary_color',
    'tx_rkwtemplate_landingpage_primary_color, tx_rkwtemplate_landingpage_primary_effect_color, tx_rkwtemplate_landingpage_primary_effect_text_color, --linebreak--, tx_rkwtemplate_landingpage_primary_top_text_color, tx_rkwtemplate_landingpage_primary_top_effect_color, tx_rkwtemplate_landingpage_primary_top_effect_text_color'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'tx_rkwtemplate_secondary_color',
    'tx_rkwtemplate_landingpage_secondary_color, tx_rkwtemplate_landingpage_secondary_effect_color, tx_rkwtemplate_landingpage_secondary_effect_text_color, --linebreak--, tx_rkwtemplate_landingpage_secondary_top_text_color, tx_rkwtemplate_landingpage_secondary_top_effect_color, tx_rkwtemplate_landingpage_secondary_top_effect_text_color, --linebreak--, tx_rkwtemplate_landingpage_show_more_colors'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'tx_rkwtemplate_tertiary_color',
    'tx_rkwtemplate_landingpage_tertiary_color, tx_rkwtemplate_landingpage_tertiary_effect_color, tx_rkwtemplate_landingpage_tertiary_effect_text_color, --linebreak--, tx_rkwtemplate_landingpage_tertiary_top_text_color, tx_rkwtemplate_landingpage_tertiary_top_effect_color, tx_rkwtemplate_landingpage_tertiary_top_effect_text_color'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'tx_rkwtemplate_quarterly_color',
    'tx_rkwtemplate_landingpage_quarterly_color, tx_rkwtemplate_landingpage_quarterly_effect_color, tx_rkwtemplate_landingpage_quarterly_effect_text_color, --linebreak--, tx_rkwtemplate_landingpage_quarterly_top_text_color, tx_rkwtemplate_landingpage_quarterly_top_effect_color, tx_rkwtemplate_landingpage_quarterly_top_effect_text_color'
);

// add field
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'layout',
    '--linebreak--, tx_rkwtemplate_disable_flyout_menu, --linebreak--'
);

// add palettes in reverse order
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'pages',
    '--palette--;LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.palettes.quarterly_color;tx_rkwtemplate_quarterly_color',
    '',
    'after:layout'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'pages',
    '--palette--;LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.palettes.tertiary_color;tx_rkwtemplate_tertiary_color',
    '',
    'after:layout'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'pages',
    '--palette--;LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.palettes.secondary_color;tx_rkwtemplate_secondary_color',
    '',
    'after:layout'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'pages',
    '--palette--;LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.palettes.primary_color;tx_rkwtemplate_primary_color;;--palette--;LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.palettes.secondary_color;tx_rkwtemplate_secondary_color',
    '',
    'after:layout'
);


$extKey = 'rkw_template';

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Configuration/TsConfig/TsConfig.typoscript', 'RKW Template');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum2016/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: Kompetenzzentrum2016');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/Kompetenzzentrum2020/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: Kompetenzzentrum2020');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/Aprodi/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: Aprodi');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/BauDigi/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: BauDigi');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/Bausachverstaendigentag/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: Bausachverständigentag');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/DigiScouts/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: DigiScouts');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/EcoStep/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: EcoStep');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/EEPA/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: EEPA');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/FrauenAmBau/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: FrauenAmBau');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/MeinRkw/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: MeinRkw');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/RessinnoBau/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RessinnoBau');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/RkwGeschichte/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RKW Geschichte');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Microsites/WebsiteCheck/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: WebsiteCheck');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/EANPC/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: EANPC');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwBadenWuerttemberg/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwBadenWürttemberg');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwBayern/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwBayern');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwBremen/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwBremen');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwBundesverein/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwBundesverein');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwHessen/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwHessen');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwNord/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwNord');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwSachsen/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwSachsen');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwSachsenAnhalt/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwSachsenAnhalt');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/_Websites/RkwThueringen/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: RkwThüringen');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile($extKey, 'Themes/WePstra/Configuration/TsConfig/TsConfig.typoscript', 'RKW Template - Theme: WePstra');



# START - override for SEO YOAST-Extension
$GLOBALS['TCA']['pages']['palettes']['metatags']['showitem'] =
    preg_replace('/keywords(.*,|.*$)/', '', $GLOBALS['TCA']['pages']['palettes']['metatags']['showitem']);

foreach ($GLOBALS['TCA']['pages']['types'] as $typeKey => $typeArray) {
    $GLOBALS['TCA']['pages']['types'][$typeKey]['showitem'] = str_replace(
        'LLL:EXT:yoast_seo/Resources/Private/Language/BackendModule.xlf:pages.tabs.seo',
        'SEO & Link',
        $GLOBALS['TCA']['pages']['types'][$typeKey]['showitem']);
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'yoast-metadata',
    '--linebreak--, keywords',
    'after:description'
);

# END - override for SEO YOAST-Extension

//======================================================================================================
// some adjustments
//======================================================================================================
$GLOBALS['TCA']['pages']['columns']['abstract']['config'] = array_merge (
    $GLOBALS['TCA']['pages']['columns']['abstract']['config'],
    [
        'max' => 250
    ]
);

//======================================================================================================
// reload for color fields
//======================================================================================================
$GLOBALS['TCA']['pages']['columns']['layout'] = array_merge (
    $GLOBALS['TCA']['pages']['columns']['layout'],
    [
        'onChange' => 'reload',
    ]
);

//======================================================================================================
// croppings
//======================================================================================================
$GLOBALS['TCA']['pages']['columns']['media']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] = [

    'topicDesktop' => [
        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.keyvisual.imageManipulation.topicDesktop',
        'allowedAspectRatios' => [
            '1460:360' => [
                'title' => '1460 x 360',
                'value' => 1460 / 360
            ]
        ],
        'coverAreas' => [
            [
                'x' =>  0,
                'y' => 0,
                'width' => 0.45,
                'height' => 1,
            ],
        ]
    ],
    'articleDesktop' => [
        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.keyvisual.imageManipulation.articleDesktop',
        'allowedAspectRatios' => [
            '1095:590' => [
                'title' => '1095 x 590',
                'value' => 1095 / 590
            ]
        ]
    ],
    'publicationDesktop' => [
        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.keyvisual.imageManipulation.publicationDesktop',
        'allowedAspectRatios' => [
            '1460:550' => [
                'title' => '1460 x 550',
                'value' => 1460 / 550
            ]
        ]
    ],
    'menuFlyoutLevel2' => [
        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.keyvisual.imageManipulation.menuFlyoutLevel2',
        'allowedAspectRatios' => [
            '2000:320' => [
                'title' => '320 x 200',
                'value' => 320 / 200
            ]
        ]
    ]
];

/*
$GLOBALS['TCA']['pages']['columns']['tx_rkwbasics_teaser_image']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] =
    array_merge(
        [
            'teaser' => [
                'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.keyvisual.imageManipulation.teaser',
                'allowedAspectRatios' => [
                    '350:192' => [
                        'title' => '350 x 192',
                        'value' => 350 / 192
                    ]
                ]
            ]
        ],
        $GLOBALS['TCA']['pages']['columns']['tx_rkwbasics_teaser_image']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants']
    );
*/
$GLOBALS['TCA']['pages']['columns']['tx_rkwbasics_teaser_image']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] =
[
    'teaser' => [
        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.keyvisual.imageManipulation.teaser',
        'allowedAspectRatios' => [
            '350:192' => [
                'title' => '350 x 192',
                'value' => 350 / 192
            ]
        ]
    ]
];
