<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_tab'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_formlabel,
            --linebreak--,
            header_layout;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_layout_formlabel,
            --linebreak--,
        bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
            --palette--;;language,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
            --palette--;;hidden,
    ',
    'columnsOverrides' => [
        'header' => [
            'config' => [
                'eval' => 'trim,required',
            ]
        ],
        'bodytext' => [
            'config' => [
                'eval' => 'trim,required',
                'enableRichtext' => true,
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
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.tab.title',
        'rkwtemplate_tab',
        'rkw-template-tab',
    ],
    'textmedia',
    'after'
);
