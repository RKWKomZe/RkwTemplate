<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_topic'] = [
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
        'header' => [
            'config' => [
                'eval' => 'required',
            ]
        ],
        'header_link' => [
            'config' => [
                'eval' => 'trim,required',
            ]
        ],
        'bodytext' => [
            'config' => [
                'enableRichtext' => false,
            ]
        ],
        'rowDescription' => [
            'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.topic.rowDescription',
            'config' => [
                'type' => 'input',
                'eval' => 'trim',
            ]
        ],
        'image' => [
            'config' => [
                'minitems' => 1,
                'maxitems' => 2,
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

                                // original file dimensions: 570 x 320
                                'cropVariants' => [
                                    'default' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.topic.imageManipulation.default',
                                        'allowedAspectRatios' => [
                                            '300:240' => [
                                                'title' => '300 x 240',
                                                'value' => 300 / 240
                                            ]
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
];

//===============================================================
// Adds the element to the "Type" dropdown
//===============================================================

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.topic.title',
        'rkwtemplate_topic',
        'rkw-template-topic',
    ],
    'textmedia',
    'after'
);
