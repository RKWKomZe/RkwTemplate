<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_mission'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_formlabel,
            --linebreak--,
            subheader;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:subheader_formlabel,
            header_link;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_link_formlabel,
            rowDescription,
            bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
            --palette--;;language,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
            --palette--;;hidden,
    ',
    'columnsOverrides' => [
        'header' => [
            'config' => [
                'eval' => 'required',
            ]
        ],
        'header_link' => [
            'config' => [
                'eval' => 'trim',
            ]
        ],
        'bodytext' => [
            'config' => [
                'enableRichtext' => false,
                'eval' => 'required',
            ]
        ],
        'rowDescription' => [
            'label' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.topic.rowDescription',
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
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.mission.title',
        'rkwtemplate_mission',
        'rkw-template-mission',
    ],
    'textmedia',
    'after'
);
