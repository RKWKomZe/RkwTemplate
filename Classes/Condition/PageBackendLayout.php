<?php
namespace RKW\RkwTemplate\Condition;

/**
 * Class PageBackendLayout
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright Rkw Kompetenzzentrum
 * @package RKW_RkwTemplates
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */

use \TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;

class PageBackendLayout extends \TYPO3\CMS\Core\Configuration\TypoScript\ConditionMatching\AbstractCondition
{


    /**
     * Checks if the given pid has the given backendLayout in the rootline
     *
     * @param array $conditionParameters
     * @return bool
     */
    public function matchCondition (array $conditionParameters)
    {

        $condition = $conditionParameters[0];
        $backendLayout = $conditionParameters[1];
        $pid = $conditionParameters[2];

        if (!$pid) {
            $pid = intval(GeneralUtility::_GP('id'));
        }

        if (
            ($backendLayout)
            && ($pid)
        ){

            // check backend layout of page
            $currentPage = BackendUtility::getRecord('pages', $pid, 'backend_layout');
            if ($currentPage['backend_layout']) {

                switch($condition){
                    case '=':
                        if ($currentPage['backend_layout'] == $backendLayout) {
                            return true;
                        }
                        break;

                    case '!=':
                        if ($currentPage['backend_layout'] != $backendLayout) {
                            return true;
                        }
                        break;
                }

                return false;
            }


            // get rootline
            $rootline = BackendUtility::BEgetRootLine($pid);
            if ($count = (count($rootline) -1)) {

                foreach ($rootline as $iterator => $page) {

                    // do not check the current page itself
                    if ($iterator == $count) {
                        continue;
                    }

                    if ($page['backend_layout_next_level']) {

                        switch($condition){
                            case '=':
                                if ($page['backend_layout_next_level'] == $backendLayout) {
                                    return true;
                                }
                                break;

                            case '!=':
                                if ($page['backend_layout_next_level'] != $backendLayout) {
                                    return true;
                                }
                                break;
                        }
                    }
                }
            }
        }


        return false;
    }

}