<?php

namespace RKW\RkwTemplate\Updates;

/**
 * This file is part of the "RkwSurvey" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 */

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Install\Updates\AbstractUpdate;

/**
 * Migrates "tt_content.CType" fields due to restructured Typoscript and TsConfig folders
 */
class UpdateFolderRestructureWizard extends AbstractUpdate
{

    const TABLE = 'tt_content';

    /**
     * @var string
     */
    protected $title = 'Updates "' . self::TABLE . '" to use correct CType due to restructured Typoscript and TsConfig folders';

    /**
     * Checks whether updates are required.
     *
     * @param string $description The description for the update
     * @return bool Whether an update is required (TRUE) or not (FALSE)
     */
    public function checkForUpdate(&$description)
    {
        if ($this->isWizardDone()) {
            return false;
            //===
        }
        return true;
        //===
    }

    /**
     * Performs the required update.
     *
     * @param array $dbQueries Queries done in this update
     * @param string $customMessage Custom message to be displayed after the update process finished
     * @return bool Whether everything went smoothly or not
     */
    public function performUpdate(array &$dbQueries, &$customMessage)
    {
        $oldCType = 'rkwtemplate_landingpagetoc';
        $newCType = 'rkwtemplate_toclandingpage';

        /** @var Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable(self::TABLE);

        /** @var QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $queryBuilder->getRestrictions()->removeAll();
        $statement = $queryBuilder->select('uid')
            ->from(self::TABLE)
            ->where(
                $queryBuilder->expr()->eq(
                    'CType',
                    $queryBuilder->createNamedParameter($oldCType, \PDO::PARAM_STR)
                )
            )
            ->execute();

        while ($record = $statement->fetch()) {
            /** @var QueryBuilder $queryBuilder */
            $queryBuilder = $connection->createQueryBuilder();
            $queryBuilder->update(self::TABLE)
                ->where(
                    $queryBuilder->expr()->eq(
                        'uid',
                        $queryBuilder->createNamedParameter($record['uid'], \PDO::PARAM_INT)
                    )
                )
                ->set('CType', $newCType);
            $databaseQueries[] = $queryBuilder->getSQL();
            $queryBuilder->execute();
        }

        $this->markWizardAsDone();
        return true;
        //===
    }
}