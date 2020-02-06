<?php

# START - override for SEO YOAST-Extension
$GLOBALS['TCA']['pages']['palettes']['metatags']['showitem'] =
    preg_replace('/keywords(.*,|.*$)/', '', $GLOBALS['TCA']['pages']['palettes']['metatags']['showitem']);

foreach ($GLOBALS['TCA']['pages']['types'] as $typeKey => $typeArray) {
    $GLOBALS['TCA']['pages']['types'][$typeKey]['showitem'] = str_replace(
        'LLL:EXT:yoast_seo/Resources/Private/Language/BackendModule.xlf:pages.tabs.seo',
        'SEO & Link',
        $GLOBALS['TCA']['pages']['types'][$typeKey]['showitem']);
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'yoast-metadata',
    '--linebreak--, keywords',
    'after:description'
);

# END - override for SEO YOAST-Extension
