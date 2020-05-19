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
                'eval' => 'trim,required',
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

                                // original file dimensions: 2250x800; motive centered
                                'cropVariants' => [
                                    'desktop' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.imageManipulation.desktop',
                                        'allowedAspectRatios' => [
                                            '1500:800' => [
                                                'title' => '1500 x 800',
                                                'value' => 1500 / 800
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
                                            '1100:800' => [
                                                'title' => '1100 x 800',
                                                'value' => 1100 / 800
                                            ]
                                        ]
                                    ],
                                    'mobile' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.imageManipulation.mobile',
                                        'allowedAspectRatios' => [
                                            '550:440' => [
                                                'title' => '550 x 440',
                                                'value' => 550 / 440
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
        'rkw_template',
    ],
    'textmedia',
    'after'
);