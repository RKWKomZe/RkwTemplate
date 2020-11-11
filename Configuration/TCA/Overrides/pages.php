<?php

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
            '2000:320' => [
                'title' => '1024 x 550',
                'value' => 1024 / 550
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

$GLOBALS['TCA']['pages']['columns']['tx_rkwbasics_teaser_image']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] = [
    'teaser' => [
        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.keyvisual.imageManipulation.teaser',
        'allowedAspectRatios' => [
            '350:192' => [
                'title' => '350 x 192',
                'value' => 350 / 192
            ]
        ]
    ],
];