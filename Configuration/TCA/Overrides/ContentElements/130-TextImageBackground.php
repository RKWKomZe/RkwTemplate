<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_textimagebackground'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            --palette--;;headers,
        rowDescription,
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
        'header_link' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'header' => [
            'config' => [
                'eval' => 'trim',
            ]
        ],
        'rowDescription' => [
            'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.textImageBackground.rowDescription',
            'config' => [
                'eval' => 'trim',
            ]
        ],
        'bodytext' => [
            'config' => [
                'eval' => 'trim,required',
                'enableRichtext' => true,
            ]
        ],
        'image' => [
            'config' => [
                'minitems' => 1,
                'maxitems' => 1,
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
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.imageList.imageManipulation.default',
                                        'allowedAspectRatios' => [
                                            '1050:500' => [
                                                'title' => '1050 x 500',
                                                'value' => 1050 / 500
                                            ]
                                        ],
                                        'coverAreas' => [
                                            [
                                                'x' => 0.6,
                                                'y' => 0,
                                                'width' => 0.4,
                                                'height' => 1,
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
    ]
];

//===============================================================
// Adds the element to the "Type" dropdown
//===============================================================

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.textImageBackground.title',
        'rkwtemplate_textimagebackground',
        'rkw-template-textimagebackground',
    ],
    'textmedia',
    'after'
);