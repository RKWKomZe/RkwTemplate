<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
    {

        // Add fix for combos of RKEditor
       $GLOBALS['TBE_STYLES']['skins']['rkw_template']['stylesheetDirectories'][] = 'EXT:rkw_template/Resources/Public/Backend/Css';
    },
    'rkw_template'
);
