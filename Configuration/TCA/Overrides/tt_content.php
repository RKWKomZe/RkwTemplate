<?php

/**
 * @see: vendor/typo3/cms/typo3/sysext/frontend/Configuration/TCA/tt_content.php
 */

//===============================================================
// Extending tt_content fields
//===============================================================
$temporaryColumn['tx_rkwtemplate_linktext'] = [
    'exclude' => 0,
    'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.tx_rkwtemplate_linktext',
    'config' => [
        'type' => 'input',
        'size' => 50,
        'max' => 255,
    ],
];

$temporaryColumn['tx_rkwtemplate_styles'] = [
    'displayCond' => [
        'OR' => [
            'FIELD:tx_gridelements_backend_layout:=:contentContainerLandingpageOneCol',
            'FIELD:tx_gridelements_backend_layout:=:contentContainerLandingpageTwoCols',
        ],
    ],
    'exclude' => 0,
    'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.landingpageOneCol.tx_rkwtemplate_styles',
    'config' => [
        'type' => 'input',
        'size' => 50,
        'max' => 255,
    ],
];

$temporaryColumn['tx_rkwtemplate_longitude'] = [
    'exclude' => 1,
    'label' => 'LLL:EXT:rkw_events/Resources/Private/Language/locallang_db.xlf:contentElement.googleMap.latitude',
    'config' => [
        'type' => 'input',
        'size' => 30,
        'eval' => 'trim',
    ],
];

$temporaryColumn['tx_rkwtemplate_latitude'] = [
    'exclude' => 0,
    'label' => 'LLL:EXT:rkw_events/Resources/Private/Language/locallang_db.xlf:contentElement.googleMap.longitude',
    'config' => [
        'type' => 'input',
        'size' => 30,
        'eval' => 'trim',
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
