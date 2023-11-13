<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_morelist'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_formlabel,
            --linebreak--,
            header_layout;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_layout_formlabel,
        bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
            --palette--;;language,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
            --palette--;;hidden,
    ',
    'columnsOverrides' => [
        'header' => [
            'config' => [
                'eval' => 'trim',
            ]
        ],
        'bodytext' => [
            'config' => [
                'eval' => 'trim',
                'enableRichtext' => true,
            ]
        ],
        'header_layout' => [
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.youtube', 'ic-youtube'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.facebook', 'ic-facebook'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.instagram', 'ic-instagram'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.twitter', 'ic-twitter'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.xing', 'ic-xing'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.linkedin', 'ic-linkedin'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.tiktok', 'ic-tiktok'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.document', 'ic-document'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.date', 'ic-date'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.trash', 'ic-trash'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.date-alarm', 'ic-date-alarm'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.location', 'ic-location'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.download', 'ic-download'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.views', 'ic-views'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.search', 'ic-search'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.ticket', 'ic-ticket'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.speech', 'ic-speech'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.mail', 'ic-mail'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.phone', 'ic-phone'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.globe', 'ic-globe'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.clipboard', 'ic-clipboard'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.contacts', 'ic-contacts'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.people', 'ic-people'],
                    ['LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.header_layout.icon.events', 'ic-events'],
                ],
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
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.moreList.title',
        'rkwtemplate_morelist',
        'rkw-template-morelist',
    ],
    'textmedia',
    'after'
);
