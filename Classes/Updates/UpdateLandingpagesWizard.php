<?php
namespace RKW\RkwTemplate\Updates;

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

use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Database\Connection;
use TYPO3\CMS\Core\Resource\Exception;
use TYPO3\CMS\Core\Resource\File;
use TYPO3\CMS\Core\Resource\ResourceFactory;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\MathUtility;
use TYPO3\CMS\Core\Utility\VersionNumberUtility;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Database\Query\Restriction\StartTimeRestriction;
use TYPO3\CMS\Core\Database\Query\Restriction\EndTimeRestriction;
use TYPO3\CMS\Core\Database\Query\Restriction\HiddenRestriction;
use TYPO3\CMS\Core\Database\Query\Restriction\DeletedRestriction;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\Package\PackageManager;

/**
 * Class UpdateWizard
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright Rkw Kompetenzzentrum
 * @package RKW_RkwTemplates
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */

class UpdateLandingpagesWizard extends \RKW\RkwBasics\Updates\AbstractUpdate
{


    /**
     * @var string
     */
    protected $extensionKey = 'rkwTemplate';


    /**
     * @var string
     */
    protected $title = 'Updater for rkw_template to new color-fields for landingpages';



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
        }

        return true;
    }

    /**
     * Performs the required update.
     *
     * @param array $databaseQueries Queries done in this update
     * @param string $customMessage Custom message to be displayed after the update process finished
     * @return bool Whether everything went smoothly or not
     */
    public function performUpdate(array &$databaseQueries, &$customMessage)
    {

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('pages');

        // find go through all pages
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $queryBuilder->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilder->select('*')
            ->from('pages')
            ->where(
                $queryBuilder->expr()->eq('layout',
                    $queryBuilder->createNamedParameter(30000, \PDO::PARAM_INT)
                )
            )
            ->execute();

        // go through all pages
        while ($record = $statement->fetch()) {

            // update
            /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
            $updateQueryBuilder = $connection->createQueryBuilder();
            $updateQueryBuilder->update('pages')
                ->set('tx_rkwtemplate_landingpage_primary_color', $record['tx_rkwtemplate_landingpage_primarycolor'])
                ->set('tx_rkwtemplate_landingpage_primary_effect_color', $record['tx_rkwtemplate_landingpage_primarycolor'])
                ->set('tx_rkwtemplate_landingpage_primary_effect_text_color', $record['tx_rkwtemplate_landingpage_primarycolor_text'])
                ->set('tx_rkwtemplate_landingpage_primary_top_text_color', $record['tx_rkwtemplate_landingpage_primarycolor_text'])
                ->set('tx_rkwtemplate_landingpage_primary_top_effect_color', $record['tx_rkwtemplate_landingpage_primarycolor_effect'])
                ->set('tx_rkwtemplate_landingpage_primary_top_effect_text_color', $record['tx_rkwtemplate_landingpage_primarycolor_text'])
                ->set('tx_rkwtemplate_landingpage_secondary_color', $record['tx_rkwtemplate_landingpage_secondarycolor'])
                ->set('tx_rkwtemplate_landingpage_secondary_effect_color', $record['tx_rkwtemplate_landingpage_secondarycolor'])
                ->set('tx_rkwtemplate_landingpage_secondary_effect_text_color', $record['tx_rkwtemplate_landingpage_secondarycolor_text'])
                ->set('tx_rkwtemplate_landingpage_secondary_top_text_color', $record['tx_rkwtemplate_landingpage_secondarycolor_text'])
                ->set('tx_rkwtemplate_landingpage_secondary_top_effect_color', $record['tx_rkwtemplate_landingpage_secondarycolor_effect'])
                ->set('tx_rkwtemplate_landingpage_secondary_top_effect_text_color', $record['tx_rkwtemplate_landingpage_secondarycolor_text'])                
                ->where(
                    $updateQueryBuilder->expr()->eq('uid',
                        $updateQueryBuilder->createNamedParameter($record['uid'], \PDO::PARAM_INT)
                    )
                );

            $databaseQueries[] = $updateQueryBuilder->getSQL();
            $updateQueryBuilder->execute();

        }
        $this->markWizardAsDone();
        return true;

    }

}
