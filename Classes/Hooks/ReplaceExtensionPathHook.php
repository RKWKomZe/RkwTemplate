<?php

namespace RKW\RkwTemplate\Hooks;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

/**
 * Class ReplaceExtensionPathHook
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright Rkw Kompetenzzentrum
 * @package RKW_RkwTemplates
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class ReplaceExtensionPathHook
{

    /**
     * Replaces string patterns from the page content.
     * You can use it to replace URLs for Content Delivery Network (CDN).
     * Called before page is indexed, thus CSS and JS-Files are missing here
     *
     * @param \TYPO3\CMS\Frontend\Controller\TypoScriptFrontendController $obj
     * @return void The content is also passed by reference
     */
    function hook_indexContent($obj)
    {

        // get helper
        /** @var \RKW\RkwTemplate\Helper\ReplaceExtensionPath $helper */
        $helper = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('RKW\\RkwTemplate\\Helper\\ReplaceExtensionPath');

        // Replace content
        $obj->content = $helper->searchReplace($obj->content);

    }

    /**
     * Replaces string patterns from the page content.
     * You can use it to replace URLs for Content Delivery Network (CDN).
     * Called before page is outputed in order to include INT-Scripts
     *
     * @param array $params
     * @return void The content is passed by reference
     */
    function hook_contentPostProc(&$params)
    {

        // get object
        $obj = $params['pObj'];

        // get helper
        /** @var \RKW\RkwTemplate\Helper\ReplaceExtensionPath $helper */
        $helper = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('RKW\\RkwTemplate\\Helper\\ReplaceExtensionPath');

        // Replace content
        $obj->content = $helper->searchReplace($obj->content);

    }

} 