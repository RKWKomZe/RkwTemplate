<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey) {

        //=================================================================
        // register icons
        //=================================================================
        $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
            \TYPO3\CMS\Core\Imaging\IconRegistry::class
        );
        $iconRegistry->registerIcon(
            'rkw_template', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\BitmapIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/_Core/icons/icon-32x32.png']
        );

        //=================================================================
        // register hooks for CDN!
        //=================================================================
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tslib/class.tslib_fe.php']['pageIndexing'][] = 'RKW\\RkwTemplate\\Hooks\\ReplaceExtensionPathHook';
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tslib/class.tslib_fe.php']['contentPostProc-output'][] = 'RKW\\RkwTemplate\\Hooks\\ReplaceExtensionPathHook->hook_contentPostProc';

    },
    $_EXTKEY
);
