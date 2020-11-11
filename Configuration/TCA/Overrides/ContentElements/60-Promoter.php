<?php

//===============================================================
// Define element fields
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['rkwtemplate_promoter'] = $GLOBALS['TCA']['tt_content']['types']['rkwtemplate_logo'];

//===============================================================
// Adds the element to the "Type" dropdown
//===============================================================

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.promoter.title',
        'rkwtemplate_promoter',
        'rkw-template-promoter',
    ],
    'textmedia',
    'after'
);