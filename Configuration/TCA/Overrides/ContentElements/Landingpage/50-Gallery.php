<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_gallery'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            --palette--;;headers,
        bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,            
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
        'header' => [
            'config' => [
                'type' => 'passthrough',
            ]
        ],
        'header_position' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'subheader' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'header_layout' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'header_link' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'bodytext' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'image' => [
            'config' => [
                'minitems' => 1,
                'maxitems' => 99,
                'overrideChildTca' => [
                    'columns' => [
                        'title' => [
                            'config' => [
                                'type' => 'passthrough'
                            ]
                        ],
                        'link' => [
                            'config' => [
                                'type' => 'passthrough'
                            ]
                        ],
                        'description' => [
                            'config' => [
                                'type' => 'passthrough'
                            ]
                        ],
                        'alternative' => [
                            'config' => [
                                'type' => 'passthrough'
                            ]
                        ],
                        'crop' => [
                            'config' => [

                                // original file dimensions: 1050 x 500
                                'cropVariants' => [
                                    'default' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.gallery.imageManipulation.default',
                                        'allowedAspectRatios' => [
                                            '1050:500' => [
                                                'title' => '1050 x 500',
                                                'value' => 1050 / 500
                                            ]
                                        ],
                                    ],
                                    'thumbnail' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.gallery.imageManipulation.thumbnail',
                                        'allowedAspectRatios' => [
                                            '125:125' => [
                                                'title' => '125 x 125',
                                                'value' => 125 / 125
                                            ]
                                        ],
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
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.gallery.title',
        'rkwtemplate_gallery',
        'rkw-template-gallery',
    ],
    'textmedia',
    'after'
);