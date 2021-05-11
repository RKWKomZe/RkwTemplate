<?php

/**
 * @see: vendor/typo3/cms/typo3/sysext/frontend/Configuration/TCA/tt_content.php
 */

//===============================================================
// Extending tt_content fields
//===============================================================
$temporaryColumn['tx_rkwtemplate_styles'] = [
    'exclude' => 0,
    'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.landingpageOneCol.tx_rkwtemplate_styles',
    'config' => [
        'type' => 'input',
        'size' => 50,
        'max' => 255,
    ],
];

$temporaryColumn['tx_rkwtemplate_anchor_id'] = [
    'exclude' => 0,
    'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.landingpageOneCol.tx_rkwtemplate_anchor_id',
    'config' => [
        'type' => 'input',
        'size' => 50,
        'max' => 60,
    ],
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $temporaryColumn);

//===============================================================
// Defaults for grid elements
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1']['columnsOverrides'] = [
    'date' => [
        'config' => [
            'type' => 'passthrough'
        ]
    ],
    'subheader' => [
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
