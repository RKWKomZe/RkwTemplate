<?php
namespace RKW\RkwTemplate\Condition\Backend;

/**
 * Class PageBackendLayout
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright RKW Kompetenzzentrum
 * @package RKW_RkwTemplates
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */

use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Class ColPosCondition
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright RKW Kompetenzzentrum
 * @package RKW_RkwTemplate
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class ColPosCondition extends \TYPO3\CMS\Core\Configuration\TypoScript\ConditionMatching\AbstractCondition
{


    /**
     * Checks if the given pid has the given backendLayout in the rootline
     *
     * @param array $conditionParameters
     * @return bool
     */
    public function matchCondition (array $conditionParameters): bool
    {

        $condition = $conditionParameters[0];
        $colPosTarget = intval($conditionParameters[1]);
        $colPos = GeneralUtility::_GP('colPos');
        if (!isset($colPos)) {
            if ($editArray = GeneralUtility::_GP('edit')) {
                if (
                    ($table = array_key_first($editArray))
                    && ($table == 'tt_content')
                    && (array_key_first($editArray[$table]))
                ) {
                    $uid = array_key_first($editArray[$table]);
                    $colPos = intval(BackendUtility::getRecord($table, $uid, 'colPos')['colPos']);
                }
            }
        }

        if (is_numeric($colPos)) {
            switch ($condition) {
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
        }

        return false;
    }

}
