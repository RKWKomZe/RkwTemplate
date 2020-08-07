<?php
namespace RKW\RkwTemplate\Condition\Backend;

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

class ColPosCondition extends \TYPO3\CMS\Core\Configuration\TypoScript\ConditionMatching\AbstractCondition
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
        $colPosTarget = intval($conditionParameters[1]);

        if (! $colPos = intval(GeneralUtility::_GP('colPos'))) {
            if ($editArray = GeneralUtility::_GP('edit')) {
                if (
                    ($table = array_key_first($editArray))
                    && ($table == 'tt_content')
                    && (array_key_first($editArray[$table]))
                ){
                    $uid = array_key_first($editArray[$table]);
                    $colPos = intval(BackendUtility::getRecord($table, $uid, 'colPos')['colPos']);
                }
            }
        }

        switch($condition){
            case '=':
                if ($colPosTarget == $colPos) {
                    return true;
                }
                break;

            case '!=':
                if ($colPosTarget != $colPos) {
                    return true;
                }
                break;
        }

        return false;
    }

}