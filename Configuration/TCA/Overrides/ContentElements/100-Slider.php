<?php

//===============================================================
// Define element fields
//===============================================================
$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_slider'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            --palette--;;headers,
            rowDescription,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.images,
            image,            
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
            --palette--;;language,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
            --palette--;;hidden,
    ',
    'columnsOverrides' => [
        'date' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'header_link' => [
            'config' => [
                'eval' => 'trim',
            ]
        ],
        'rowDescription' => [
            'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.rowDescription',
            'config' => [
                'type' => 'input',
                'eval' => 'trim',
            ]
        ],
        'image' => [
            'config' => [
                'minitems' => 1,
                // 'maxitems' => 1,
                'overrideChildTca' => [
                    'columns' => [
                        'crop' => [
                            'config' => [
                                // original file dimensions: 2250x680; motive centered
                                'cropVariants' => [
                                    // for landingpages
                                    'desktop-landingpage-big' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.imageManipulation.desktop-landingpage-big',
                                        'allowedAspectRatios' => [
                                            '2500:1400' => [
                                                'title' => '2500 x 1400',
                                                'value' => 2500 / 1400
                                            ]
                                        ],
                                        'coverAreas' => [
                                            [
                                                'x' => 0,
                                                'y' => 0,
                                                'width' => 0.55,
                                                'height' => 1,
                                            ],
                                        ]
                                    ],
                                    'desktop-landingpage' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.imageManipulation.desktop-landingpage',
                                        'allowedAspectRatios' => [
                                            '1460:1200' => [
                                                'title' => '1460 x 1200',
                                                'value' => 1460 / 1200
                                            ]
                                        ],
                                        'coverAreas' => [
                                            [
                                                'x' => 0,
                                                'y' => 0,
                                                'width' => 0.55,
                                                'height' => 1,
                                            ],
                                        ]
                                    ],
                                    'desktop' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.imageManipulation.desktop',
                                        'allowedAspectRatios' => [
                                            '1460:800' => [
                                                'title' => '1460 x 800',
                                                'value' => 1460 / 800
                                            ]
                                        ],
                                        'coverAreas' => [
                                            [
                                                'x' => 0,
                                                'y' => 0,
                                                'width' => 0.55,
                                                'height' => 1,
                                            ],
                                        ]
                                    ],
                                    'tablet' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.imageManipulation.tablet',
                                        'allowedAspectRatios' => [
                                            '1024:800' => [
                                                'title' => '1024 x 800',
                                                'value' => 1024 / 800
                                            ]
                                        ]
                                    ],
                                    'mobile' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.imageManipulation.mobile',
                                        'allowedAspectRatios' => [
                                            '480:540' => [
                                                'title' => '480 x 450',
                                                'value' => 480 / 450
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
];


//===============================================================
// Adds the element to the "Type" dropdown
//===============================================================

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.title',
        'rkwtemplate_slider',
        'rkw-template-slider',
    ],
    'textmedia',
    'after'
);