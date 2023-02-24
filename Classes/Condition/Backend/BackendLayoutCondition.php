<?php
namespace RKW\RkwTemplate\Condition\Backend;

/**
 * Class BackendLayout
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright RKW Kompetenzzentrum
 * @package RKW_RkwTemplates
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */

use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Class BackendLayoutCondition
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright RKW Kompetenzzentrum
 * @package RKW_RkwTemplate
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class BackendLayoutCondition extends \TYPO3\CMS\Core\Configuration\TypoScript\ConditionMatching\AbstractCondition
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
        $pid = intval($conditionParameters[2]);
        $colPos = GeneralUtility::_GP('colPos'); // no intval here; must be able to be false

        // get pid from params or from element
        if (!$pid) {

            $pid = $this->getPid();
        }

        // do not use this on gridElements
        // those have colPos = -1
        if ($colPos < 0){
            return false;
        }

        // check backendLayout
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

                        break;
                    }
                }
            }
        }


        return false;
    }


    /**
     * Returns current PID
     *
     * @return int
     */
    public function getPid (): int
    {
        $pid = intval(GeneralUtility::_GP('id'));
        if ($editArray = GeneralUtility::_GP('edit')) {
            if (
                ($table = array_key_first($editArray))
                && ($table == 'tt_content')
            ){

                if (
                    ($uid = array_key_first($editArray[$table]))
                    && ($action = $editArray[$table][$uid])
                ) {
                    if ($action != 'new') {

                        if ($record = BackendUtility::getRecord($table, $uid, 'pid')) {
                            $pid = $record['pid'];
                        }

                        /*if ($table == 'tt_content') {
                            $colPos = BackendUtility::getRecord($table, $uid, 'colPos')['colPos'];
                        }*/
                    }
                }
            }
        }

        return $pid;
    }

}
