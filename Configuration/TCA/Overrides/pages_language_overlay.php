<?php

# START - override for SEO YOAST-Extension
$GLOBALS['TCA']['pages_language_overlay']['palettes']['metatags']['showitem'] =
    preg_replace('/keywords(.*,|.*$)/', '', $GLOBALS['TCA']['pages_language_overlay']['palettes']['metatags']['showitem']);

foreach ($GLOBALS['TCA']['pages_language_overlay']['types'] as $typeKey => $typeArray) {
    $GLOBALS['TCA']['pages_language_overlay']['types'][$typeKey]['showitem'] = str_replace('LLL:EXT:yoast_seo/Resources/Private/Language/BackendModule.xlf:pages.palettes.metadata', 'SEO', $GLOBALS['TCA']['pages_language_overlay']['types'][$typeKey]['showitem']);
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages_language_overlay',
    'yoast-metadata',
    '--linebreak--, keywords',
    'after:description'
);

# END - override for SEO YOAST-Extension
