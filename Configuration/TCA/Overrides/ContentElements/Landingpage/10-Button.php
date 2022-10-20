<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_button'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            header_layout;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_layout_formlabel,
            --linebreak--,
            header_link;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_link_formlabel,
        rowDescription,
        bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
            --palette--;;language,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
            --palette--;;hidden,
    ',
    'columnsOverrides' => [
        'header_link' => [
            'config' => [
                'eval' => 'trim',
            ]
        ],
        'bodytext' => [
            'config' => [
                'type' => 'passthrough'
            ]
        ],
        'rowDescription' => [
            'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.button.rowDescription',
            'config' => [
                'type' => 'input',
                'eval' => 'trim',
            ]
        ],
    ]
];


//===============================================================
// Adds the element to the "Type" dropdown
//===============================================================

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.button.title',
        'rkwtemplate_button',
        'rkw-template-button',
    ],
    'textmedia',
    'after'
);
