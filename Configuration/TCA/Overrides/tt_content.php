<?php

// Adds the slider to the "Type" dropdown
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

// Configure the default backend fields for the content element
$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_slider'] = [
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
        'CType' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'colPos' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
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
        'header' => [
            'config' => [
                'eval' => 'required',
            ]
        ],
        'image' => [
            'config' => [
                'minitems' => 1
            ]
        ],
        'header_layout' => [
            'exclude' => false,
            'label' => 'LLL:EXT:lang/Resources/Private/Language/locallang_general.xlf:LGL.type',
            'config' => [
                'items' => [
                    [
                        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.type.I.default',
                        '0'
                    ],
                    [
                        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.type.I.1',
                        '1'
                    ],
                    [
                        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.slider.type.I.2',
                        '2'
                    ],
                ],
                'default' => 0
            ]
        ],
        'header_position' => [
            'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_position',
            'exclude' => false,
            'config' => [
                'items' => [
                    [
                        'LLL:EXT:lang/Resources/Private/Language/locallang_general.xlf:LGL.default_value',
                        ''
                    ],
                    [
                        'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_position.I.1',
                        'center'
                    ],
                    [
                        'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_position.I.2',
                        'right'
                    ],
                    [
                        'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_position.I.3',
                        'left'
                    ]
                ],
                'default' => ''
            ]
        ],
    ],
];