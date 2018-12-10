<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

// register hooks for CDN!
$TYPO3_CONF_VARS['SC_OPTIONS']['tslib/class.tslib_fe.php']['pageIndexing'][] = 'RKW\\RkwTemplate\\Hooks\\ReplaceExtensionPathHook';
$TYPO3_CONF_VARS['SC_OPTIONS']['tslib/class.tslib_fe.php']['contentPostProc-output'][] = 'RKW\\RkwTemplate\\Hooks\\ReplaceExtensionPathHook->hook_contentPostProc';


?>