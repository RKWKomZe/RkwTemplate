<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey) {

        //=================================================================
        // register hooks for CDN!
        //=================================================================
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tslib/class.tslib_fe.php']['pageIndexing'][] = 'RKW\\RkwTemplate\\Hooks\\ReplaceExtensionPathHook';
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tslib/class.tslib_fe.php']['contentPostProc-output'][] = 'RKW\\RkwTemplate\\Hooks\\ReplaceExtensionPathHook->hook_contentPostProc';

    },
    $_EXTKEY
);
