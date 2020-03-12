<?php

//===============================================================
// Configure the default backend fields for the content element
//===============================================================
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
    ],
];

//===============================================================
// Adds the slider to the "Type" dropdown
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