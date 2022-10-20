<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_toc'] = [
    'showitem' => '
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
            --palette--;;general,
            header;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_formlabel,
    ',
    'columnsOverrides' => [
        'header' => [
            'config' => [
                'eval' => 'trim,required',
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
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.toc.title',
        'rkwtemplate_toc',
        'rkw-template-toc',
    ],
    'textmedia',
    'after'
);
