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
 * GetLandingpageElementModClassViewHelper
 *
 * @author Christian Dilger <c.dilger@addorange.de>
 * @copyright Rkw Kompetenzzentrum
 * @package RKW_Template
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class GetLandingpageElementModClassViewHelper extends AbstractViewHelper
{

    /**
     * Initialize arguments
     */
    public function initializeArguments()
    {
        $this->registerArgument('headerPosition', 'integer', 'An integer defining appearance of the content element.');
    }


    /**
     * @param array                     $arguments
     * @param \Closure                  $renderChildrenClosure
     * @param RenderingContextInterface $renderingContext
     * @return string
     */
    public static function renderStatic(
        array $arguments,
        \Closure $renderChildrenClosure,
        RenderingContextInterface $renderingContext
    ) {

        if (
            ($headerPosition = $arguments['headerPosition'])
        ){

            $modifiers = [
                'primary-mod',
                'secondary-mod',
                'tertiary-mod',
                'quarterly-mod',
            ];

            return $modifiers[$headerPosition - 1];
        }

        return '';
    }

}