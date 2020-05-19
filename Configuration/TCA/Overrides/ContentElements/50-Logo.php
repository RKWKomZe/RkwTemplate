<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_logo'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            --palette--;;headers,
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
        'header_layout' => [
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
        'image' => [
            'config' => [
                'minitems' => 1,
                'maxitems' => 1,
                'overrideChildTca' => [
                    'columns' => [
                        'crop' => [
                            'config' => [

                                // original file dimensions: 160 x 320
                                'cropVariants' => [
                                    'default' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.logo.imageManipulation.default',
                                        'allowedAspectRatios' => [
                                            '160:320' => [
                                                'title' => '160 x 320',
                                                'value' => 160 / 320
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
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.logo.title',
        'rkwtemplate_logo',
        'rkw_template',
    ],
    'textmedia',
    'after'
);