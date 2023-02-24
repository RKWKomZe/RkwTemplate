<?php

//=================================================================
// Register Plugin
//=================================================================
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
    'RKW.RkwTemplate',
    'Rkwtemplate',
    'RKW Template'
);

/**
 * @see: vendor/typo3/cms/typo3/sysext/frontend/Configuration/TCA/tt_content.php
 */

//===============================================================
// Defaults for grid elements
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1'] = [
    'showitem' => '
    	--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.header;header,
        subheader,
        tx_gridelements_backend_layout,
        pi_flexform,
        tx_gridelements_children,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.appearanceLinks;appearanceLinks,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.images,
        image,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,--palette--;;language,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
        --palette--;;hidden,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,
        --div--;LLL:EXT:lang/Resources/Private/Language/locallang_tca.xlf:sys_category.tabs.category,
        categories,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,rowDescription
	',
];

$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1']['columnsOverrides'] = [
    'date' => [
        'config' => [
            'type' => 'passthrough'
        ]
    ],
    'header_link' => [
        'config' => [
            'type' => 'passthrough'
        ]
    ],
    'header' => [
        'config' => [
            'eval' => 'required',
        ]
    ],
    'image' => [
        'config' => [
            'maxitems' => 1,
        ]
    ]
];

//===============================================================
// Include Custom Content Containers
//===============================================================
foreach (glob(__DIR__ . "/GridElements/ContentContainer/*.php") as $filename) {
    include_once $filename;
}

//===============================================================
// Include Custom Content Elements
//===============================================================
foreach (glob(__DIR__ . "/ContentElements/*.php") as $filename) {
    include_once $filename;
}
foreach (glob(__DIR__ . "/ContentElements/Home/*.php") as $filename) {
    include_once $filename;
}
foreach (glob(__DIR__ . "/ContentElements/Landingpage/*.php") as $filename) {
    include_once $filename;
}
