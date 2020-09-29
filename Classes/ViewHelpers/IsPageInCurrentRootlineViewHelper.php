<?php

namespace RKW\RkwTemplate\ViewHelpers;
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
use TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * IsPageInCurrentRootlineViewHelper
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright Rkw Kompetenzzentrum
 * @package RKW_Template
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class IsPageInCurrentRootlineViewHelper extends AbstractViewHelper
{

    /**
     * Initialize arguments
     */
    public function initializeArguments()
    {
        $this->registerArgument('pageUid', 'integer', 'An pageUid to check against the current rootline.');
    }


    /**
     * @param array                     $arguments
     * @param \Closure                  $renderChildrenClosure
     * @param RenderingContextInterface $renderingContext
     * @return bool
     */
    public static function renderStatic(
        array $arguments,
        \Closure $renderChildrenClosure,
        RenderingContextInterface $renderingContext
    ) {

        if (
            ($pageUid = $arguments['pageUid'])
            && ($currentPid =  intval($GLOBALS['TSFE']->id))
        ){

            // get site root of current page
            $rootline = \TYPO3\CMS\Backend\Utility\BackendUtility::BEgetRootLine($currentPid);
            foreach ($rootline as $rootlinePage) {

                // if site is in rootline
                if ($rootlinePage['uid'] == $pageUid) {
                    return true;
                }
            }
        }

        return false;
    }

}