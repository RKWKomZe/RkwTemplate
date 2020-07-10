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
            'rkw-template-slider', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Slider.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-collapsed', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Collapsed.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-imagelist', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/ImageList.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-imagetextoverlay', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/ImageTextOverlay.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-mission', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Mission.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-topic', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Topic.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-media', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Media.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-logo', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Logo.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-promoter', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Promoter.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-shortlink', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Shortlink.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-toc', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/TableOfContents.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-overview', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Overview.svg']
        );
        unset($iconRegistry);

        //=================================================================
        // Add RTE preset
        //=================================================================
        if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateCore'])) {
            $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateCore'] = 'EXT:rkw_template/Themes/_Core/Configuration/TsConfig/RTE/Editor/Default.yaml';
        }
        if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateKompetenzzentrum2016'])) {
            $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateKompetenzzentrum2016'] = 'EXT:rkw_template/Themes/Kompetenzzentrum2016/Configuration/TsConfig/RTE/Editor/Default.yaml';
        }
        if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateWePstra'])) {
            $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateWePstra'] = 'EXT:rkw_template/Themes/WePstra/Configuration/TsConfig/RTE/Editor/Default.yaml';
        }


        //=================================================================
        // register hooks for CDN!
        //=================================================================
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tslib/class.tslib_fe.php']['pageIndexing'][] = 'RKW\\RkwTemplate\\Hooks\\ReplaceExtensionPathHook';
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['tslib/class.tslib_fe.php']['contentPostProc-output'][] = 'RKW\\RkwTemplate\\Hooks\\ReplaceExtensionPathHook->hook_contentPostProc';

        //=================================================================
        // register update wizard
        //=================================================================
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/install']['update'][\RKW\RkwTemplate\Updates\UpdateWizard::class] = \RKW\RkwTemplate\Updates\UpdateWizard::class;
    },
    $_EXTKEY
);
