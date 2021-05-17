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

$temporaryColumn['tx_rkwtemplate_icon'] = [
    'exclude' => 0,
    'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.tx_rkwtemplate_icon',
    'config' => [
        'type' => 'input',
        'size' => 45,
        'eval' => 'trim',
        'valuePicker' => [
            'items' => [
                ['ic-youtube', 'ic-youtube'],
                ['ic-youtube-2', 'ic-youtube-2'],
                ['ic-facebook', 'ic-facebook'],
                ['ic-instagram', 'ic-instagram'],
                ['ic-circle-arrow', 'ic-circle-arrow'],
                ['ic-twitter', 'ic-twitter'],
                ['ic-xing', 'ic-xing'],
                ['ic-linkedin"', 'ic-linkedin"'],
                ['ic-document', 'ic-document'],
                ['ic-date', 'ic-date'],
                ['ic-trash', 'ic-trash'],
                ['ic-date-alarm', 'ic-date-alarm'],
                ['ic-location', 'ic-location'],
                ['ic-download', 'ic-download'],
                ['ic-views', 'ic-views'],
                ['ic-search', 'ic-search'],
                ['ic-circle-close', 'ic-circle-close'],
                ['ic-arrow-primary', 'ic-arrow-primary'],
                ['ic-arrow-footer', 'ic-arrow-footer'],
                ['ic-plus-colored', 'ic-plus-colored'],
                ['ic-ticket', 'ic-ticket'],
                ['ic-speech', 'ic-speech'],
                ['ic-mail', 'ic-mail'],
                ['ic-phone', 'ic-phone'],
                ['ic-globe', 'ic-globe'],
                ['ic-clipboard', 'ic-clipboard'],
                ['ic-contacts', 'ic-contacts'],
                ['ic-people', 'ic-people'],
                ['ic-events', 'ic-events'],
                ['ic-mobile-menu', 'ic-mobile-menu'],
                ['ic-mobile-menu-close', 'ic-mobile-menu-close'],
            ],
        ],
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
