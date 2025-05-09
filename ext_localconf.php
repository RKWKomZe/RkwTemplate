<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey) {

        //=================================================================
        // Configure Plugin
        //=================================================================
        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'RKW.' . $extKey,
            'Rkwtemplate',
            array(
                'Ajax' => 'mobileMenu',
            ),
            // non-cacheable actions
            array(
                'Ajax' => 'mobileMenu',
            )
        );

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
            'rkw-template-boxsliderelement', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Slider.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-calltoaction', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Collapsed.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-collage', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Collage.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-collapsed', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Collapsed.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-listelement', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/ListElement.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-gallery', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Gallery.svg']
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
            'rkw-template-morelist', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/MoreList.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-siteheader', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/SiteHeader.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-textimagebackground', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/TextImageBackground.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-button', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Button.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-textwithbutton', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/TextWithButton.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-tagcloudelement', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Tile.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-testimonial', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Tile.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-tile', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Tile.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-topic', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Topic.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-multimedia', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Multimedia.svg']
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
            'rkw-template-keyvisual', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/TableOfContents.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-toclandingpage', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/TableOfContents.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-overview', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Overview.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-tab', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Tab.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-accordion', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Accordion.svg']
        );
        $iconRegistry->registerIcon(
            'rkw-template-testimonial', // Icon-Identifier, e.g. tx-myext-action-preview
            \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
            ['source' => 'EXT:rkw_template/Resources/Public/ContentElements/Icons/Testimonial.svg']
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
        if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateKompetenzzentrum2020'])) {
            $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateKompetenzzentrum2020'] = 'EXT:rkw_template/Themes/Kompetenzzentrum2020/Configuration/TsConfig/RTE/Editor/Default.yaml';
        }
        if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateKompetenzzentrum2020Stage'])) {
            $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateKompetenzzentrum2020Stage'] = 'EXT:rkw_template/Themes/Kompetenzzentrum2020/Configuration/TsConfig/RTE/Editor/Default.stage.yaml';
        }
        if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateKompetenzzentrum2020Dev'])) {
            $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateKompetenzzentrum2020Dev'] = 'EXT:rkw_template/Themes/Kompetenzzentrum2020/Configuration/TsConfig/RTE/Editor/Default.dev.yaml';
        }
        if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateWePstra'])) {
            $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['rkwTemplateWePstra'] = 'EXT:rkw_template/Themes/WePstra/Configuration/TsConfig/RTE/Editor/Default.yaml';
        }

        // override dropdown styles for RTE
        if( TYPO3_MODE == "BE"){
            $GLOBALS['TBE_STYLES']['skins']['rkw_template']['stylesheetDirectories'][] = 'EXT:rkw_template/Resources/Public/Backend/Css';
        }

        //=================================================================
        // override language files for other extensions
        //=================================================================
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['EXT:rkw_projects/Resources/Private/Language/locallang_db.xlf'][] = 'EXT:rkw_template/Themes/Kompetenzzentrum2020/Resources/Private/Language/Overrides/RkwProjects/locallang_db.xlf';
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['de']['EXT:rkw_projects/Resources/Private/Language/de.locallang_db.xlf'][] = 'EXT:rkw_template/Themes/Kompetenzzentrum2020/Resources/Private/Language/Overrides/RkwProjects/de.locallang_db.xlf';


        //=================================================================
        // Add rootline-Fields
        //=================================================================
        $GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'] .= ', tx_rkwtemplate_disable_title_prefix,';

    },
    'rkw_template'
);
