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

use TYPO3\CMS\Install\Updates\AbstractUpdate;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Database\Connection;
use TYPO3\CMS\Core\Resource\Exception;
use TYPO3\CMS\Core\Resource\File;
use TYPO3\CMS\Core\Resource\ResourceFactory;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\MathUtility;
use TYPO3\CMS\Core\Database\Query\Restriction\StartTimeRestriction;
use TYPO3\CMS\Core\Database\Query\Restriction\EndTimeRestriction;
use TYPO3\CMS\Core\Database\Query\Restriction\HiddenRestriction;
use TYPO3\CMS\Core\Database\Query\Restriction\DeletedRestriction;
use TYPO3\CMS\Backend\Utility\BackendUtility;

/**
 * Class UpdateWizard
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright Rkw Kompetenzzentrum
 * @package RKW_RkwTemplates
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */

class UpdateWizard extends AbstractUpdate
{

    /**
     * @var string
     */
    protected $title = 'Updater for rkw_template to update from TYPO3 7.6 to TYPO3 8.7';


    /**
     * Integer: The interval between sorting numbers used with tables with a 'sorting' field defined. Min 1
     *
     * @var int
     */
    protected $sortIntervals = 256;


    /**
     * Checks whether updates are required.
     *
     * @param string $description The description for the update
     * @return bool Whether an update is required (TRUE) or not (FALSE)
     */
    public function checkForUpdate(&$description)
    {
        // version check!!!!



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


        $this->migrateConfiguration($databaseQueries);
        $this->migrateCropping($databaseQueries);
        $this->migrateTeaserText($databaseQueries);
        $this->migratePublicationDate($databaseQueries);

        $this->migrateSliderElements($databaseQueries);
        $this->migrateMissionStatementElements($databaseQueries);
        $this->migrateTopicElements($databaseQueries);
        $this->migrateLogoElements($databaseQueries);
        $this->migratePromoterElements($databaseQueries);
        $this->migrateShortlinkElements($databaseQueries);

        $this->migrateContentsForTopicPages($databaseQueries);

        $this->mergeCols($databaseQueries);

        $this->removeRkwSearch($databaseQueries);
        $this->removeRkwConsultant($databaseQueries);

        return true;
        var_dump($databaseQueries);
        die();

        $fields = [
            'fieldname' => $this->fieldToMigrate,
            'table_local' => 'sys_file',
            'pid' => ($this->table === 'pages' ? $row['uid'] : $row['pid']),
            'uid_foreign' => $row['uid'],
            'uid_local' => $fileUid,
            'tablenames' => $this->table,
            'crdate' => time(),
            'tstamp' => time(),
            'sorting' => ($i + 256),
            'sorting_foreign' => $i,
        ];

        $queryBuilder = $connectionPool->getQueryBuilderForTable('sys_file_reference');
        $queryBuilder->insert('sys_file_reference')->values($fields)->execute();
        $dbQueries[] = str_replace(LF, ' ', $queryBuilder->getSQL());



        var_dump($updateQueryBuilder->getSQL());

        var_dump($updateQueryBuilder->getSQL());
        die();



        return true;
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $queryBuilder->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilder->select('*')
            ->from('sys_refindex')
            ->where(
                $queryBuilder->expr()->eq('ref_table', $queryBuilder->createNamedParameter('_FILE', \PDO::PARAM_STR)),
                $queryBuilder->expr()->eq('softref_key', $queryBuilder->createNamedParameter('typolink_tag', \PDO::PARAM_STR)),
                $queryBuilder->expr()->eq('deleted', $queryBuilder->createNamedParameter(0, \PDO::PARAM_INT))
            )
            ->execute();
        while ($record = $statement->fetch()) {
            $fileReference = 0;
            if (MathUtility::canBeInterpretedAsInteger($record['ref_string'])) {
                $fileReference = $record['ref_string'];
            } else {
                try {
                    $fileObject = ResourceFactory::getInstance()->retrieveFileOrFolderObject($record['ref_string']);
                    if ($fileObject instanceof File) {
                        $fileReference = $fileObject->getUid();
                    }
                } catch (Exception $e) {

                }
            }

            $updateQueryBuilder = $connection->createQueryBuilder();
            $updateQueryBuilder->getRestrictions()
                ->removeByType(StartTimeRestriction::class)
                ->removeByType(EndTimeRestriction::class)
                ->removeByType(HiddenRestriction::class)
                ->removeByType(DeletedRestriction::class);

            $updateQueryBuilder->update('sys_refindex')
                ->where(
                    $updateQueryBuilder->expr()->eq(
                        'hash',
                        $updateQueryBuilder->createNamedParameter($record['hash'], \PDO::PARAM_STR)
                    )
                );

            if ($fileReference) {
                $updateQueryBuilder->set('ref_table', 'sys_file')
                    ->set('ref_uid', $fileReference)
                    ->set('ref_string', '');
            } else {
                $updateQueryBuilder->set('deleted', 1);
            }

            $databaseQueries[] = $updateQueryBuilder->getSQL();
            $updateQueryBuilder->execute();
        }


    }

    /**
     * Update mission statement elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migrateConfiguration(array &$databaseQueries)
    {

        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('sys_template');

        // find relevant root sys_templates
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $queryBuilder->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilder->select('*')
            ->from('sys_template')
            ->where(
                $queryBuilder->expr()->eq('root',
                    $queryBuilder->createNamedParameter(1, \PDO::PARAM_INT)
                )
            )
            ->execute();


        // go through all sys_templates
        while ($record = $statement->fetch()) {

            $search = [
                'EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum',
                'EXT:rkw_template/Configuration/TypoScript/WePstra',
                'EXT:rkw_template/Configuration/Themes/Kompetenzzentrum/TypoScript',
                'EXT:rkw_template/Configuration/Themes/WePstra/TypoScript',
                'EXT:css_styled_content/Configuration/TypoScript/,',
                'EXT:rtehtmlarea/static/clickenlarge/,',
            ];
            $replace = [
                'EXT:rkw_template/Themes/Kompetenzzentrum/Configuration/TypoScript',
                'EXT:rkw_template/Themes/WePstra/Configuration/TypoScript',
                'EXT:rkw_template/Themes/Kompetenzzentrum/Configuration/TypoScript',
                'EXT:rkw_template/Themes/WePstra/Configuration/TypoScript',
                '',
                '',
            ];
            $record['include_static_file'] = str_replace($search, $replace, $record['include_static_file']);

            // add default templates
            if (strpos($record['include_static_file'], 'EXT:fluid_styled_content/Configuration/TypoScript/') === false) {
                $record['include_static_file'] =  'EXT:fluid_styled_content/Configuration/TypoScript/,EXT:fluid_styled_content/Configuration/TypoScript/Styling/,EXT:gridelements/Configuration/TypoScript/,EXT:rkw_template/Configuration/TypoScript,'
                    . $record['include_static_file'];
            }

            // update
            /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
            $updateQueryBuilder = $connection->createQueryBuilder();
            $updateQueryBuilder->update('sys_template')
                ->set('include_static_file', $record['include_static_file'])
                ->where(
                    $updateQueryBuilder->expr()->eq('uid',
                        $updateQueryBuilder->createNamedParameter($record['uid'], \PDO::PARAM_INT)
                    )
                );
            $databaseQueries[] = $updateQueryBuilder->getSQL();
            $updateQueryBuilder->execute();
        }


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
                $queryBuilder->expr()->eq('is_siteroot',
                    $queryBuilder->createNamedParameter(1, \PDO::PARAM_INT)
                )
            )
            ->execute();

        // go through all pages
        while ($record = $statement->fetch()) {

            $search = [
                '.ts',
                'EXT:rkw_template/Configuration/TsConfig/Kompetenzzentrum',
                'EXT:rkw_template/Configuration/TsConfig/WePstra',
                'EXT:rkw_template/Configuration/Themes/Kompetenzzentrum/TsConfig',
                'EXT:rkw_template/Configuration/Themes/WePstra/TsConfig',
            ];
            $replace = [
                '.typoscript',
                'EXT:rkw_template/Themes/Kompetenzzentrum/Configuration/TsConfig',
                'EXT:rkw_template/Themes/WePstra/Configuration/TsConfig',
                'EXT:rkw_template/Themes/Kompetenzzentrum/Configuration/TsConfig',
                'EXT:rkw_template/Themes/WePstra/Configuration/TsConfig',
            ];

            $record['tsconfig_includes'] = str_replace($search, $replace, $record['tsconfig_includes']);

            // add default template
            if (strpos($record['tsconfig_includes'], 'EXT:rkw_template/Configuration/TsConfig/TsConfig.typoscript') === false) {
                $record['tsconfig_includes'] = 'EXT:rkw_template/Configuration/TsConfig/TsConfig.typoscript,' . $record['tsconfig_includes'];
            }

            // update
            /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
            $updateQueryBuilder = $connection->createQueryBuilder();
            $updateQueryBuilder->update('pages')
                ->set('tsconfig_includes', $record['tsconfig_includes'])
                ->where(
                    $updateQueryBuilder->expr()->eq('uid',
                        $updateQueryBuilder->createNamedParameter($record['uid'], \PDO::PARAM_INT)
                    )
                );
            $databaseQueries[] = $updateQueryBuilder->getSQL();
            $updateQueryBuilder->execute();
        }


        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('be_groups');

        // find relevant root sys_templates
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $queryBuilder->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilder->select('*')
            ->from('be_groups')
            ->execute();

        // go through all sys_templates
        while ($record = $statement->fetch()) {

            $search = [
                'EXT:rkw_template/Configuration/TsConfigBeGroups/_Core/',
                'EXT:rkw_template/Configuration/TsConfigBeGroups/Kompetenzzentrum/',
                'EXT:rkw_template/Configuration/TsConfigBeGroups/WePstra/',
            ];
            $replace = [
                'EXT:rkw_template/Themes/_Core/Configuration/TsConfigBeGroups/',
                'EXT:rkw_template/Themes/Kompetenzzentrum/Configuration/TsConfigBeGroups/',
                'EXT:rkw_template/Themes/WePstra/Configuration/TsConfigBeGroups/',
            ];
            $record['TSconfig'] = str_replace($search, $replace, $record['TSconfig']);

            // update
            /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
            $updateQueryBuilder = $connection->createQueryBuilder();
            $updateQueryBuilder->update('be_groups')
                ->set('TSconfig', $record['TSconfig'])
                ->where(
                    $updateQueryBuilder->expr()->eq('uid',
                        $updateQueryBuilder->createNamedParameter($record['uid'], \PDO::PARAM_INT)
                    )
                );
            $databaseQueries[] = $updateQueryBuilder->getSQL();
            $updateQueryBuilder->execute();
        }


        $this->setLock(__FUNCTION__);

    }


    /**
     * Update cropping for header image elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migrateCropping(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        // first of all we need all pages with a certain backendLayout and all pages
        // which inherit this certain backendLayout

        // multiple cases per BE-Layout!!!!!!
        $backendLayoutArray = [
            'pagets__topicPages' => [
                'media' => [
                    'field' => 'media',
                    'fieldTarget' => 'media',
                    'cropTarget' => 'topicDesktop',
                    'sortingTarget' => $this->sortIntervals
                ],
                'tx_rkwbasics_article_image' => [
                    'field' => 'txRkwBasicsArticleImage',
                    'fieldTarget' => 'media',
                    'cropTarget' => 'articleDesktop',
                    'sortingTarget' => $this->sortIntervals * 2
                ],
                'tx_rkwbasics_teaser_image' => [
                    'field' => 'txRkwBasicsTeaserImage',
                    'fieldTarget' => 'txRkwBasicsTeaserImage',
                    'cropTarget' => 'teaser',
                    'sortingTarget' => $this->sortIntervals
                ]
            ],
            'pagets__contentPages' => [
                'media' => [
                    'field' => 'media',
                    'fieldTarget' => 'media',
                    'cropTarget' => 'topicDesktop',
                    'sortingTarget' => $this->sortIntervals * 2
                ],
                'tx_rkwbasics_article_image' => [
                    'field' => 'txRkwBasicsArticleImage',
                    'fieldTarget' => 'media',
                    'cropTarget' => 'articleDesktop',
                    'sortingTarget' => $this->sortIntervals
                ],
                'tx_rkwbasics_teaser_image' => [
                    'field' => 'txRkwBasicsTeaserImage',
                    'fieldTarget' => 'txRkwBasicsTeaserImage',
                    'cropTarget' => 'teaser',
                    'sortingTarget' => $this->sortIntervals
                ]
            ]
        ];


        /** @var  \TYPO3\CMS\Core\Database\Connection $connectionPages */
        $connectionPages = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('pages');

        /** @var  \TYPO3\CMS\Core\Database\Connection $connectionReference */
        $connectionReference = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('sys_file_reference');

        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilderPages */
        $queryBuilderPages = $connectionPages->createQueryBuilder();
        $queryBuilderPages->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilderPages->select('*')
            ->from('pages')
            ->orWhere(
                $queryBuilderPages->expr()->in('backend_layout',
                    $queryBuilderPages->createNamedParameter(array_keys($backendLayoutArray), Connection::PARAM_STR_ARRAY)
                ),
                $queryBuilderPages->expr()->in('backend_layout',
                    $queryBuilderPages->createNamedParameter(0,  \PDO::PARAM_INT)
                )
            )
            ->execute();


        // go through all elements
        while ($record = $statement->fetch()) {

            $recordBackendLayout = $record['backend_layout'];

            // if there is no backendLayout in the current record, we check for inheritance
            if (empty($recordBackendLayout)) {

                $rootline = \TYPO3\CMS\Backend\Utility\BackendUtility::BEgetRootLine($record['uid']);
                foreach ($rootline as $rootlinePage) {
                    if ($rootlinePage['uid'] == $record['uid']) {
                        continue;
                    }

                    if ($recordBackendLayout = $rootlinePage['backend_layout_next_level']) {
                        break;
                    }
                }
            }

            // now check for backendLayout and work through all pages with valid backendLayout
            if (in_array($recordBackendLayout, array_keys($backendLayoutArray))) {

                foreach ($backendLayoutArray[$recordBackendLayout] as $dbField => $config) {

                    if ($record[$dbField]) {

                        // get all sys_file_references of current page
                        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilderReference */
                        $queryBuilderReference = $connectionReference->createQueryBuilder();
                        $queryBuilderReference->getRestrictions()
                            ->removeByType(StartTimeRestriction::class)
                            ->removeByType(EndTimeRestriction::class)
                            ->removeByType(HiddenRestriction::class)
                            ->removeByType(DeletedRestriction::class);

                        $statementReference = $queryBuilderReference->select('*')
                            ->from('sys_file_reference')
                            ->where(
                                $queryBuilderReference->expr()->in('tablenames',
                                    $queryBuilderReference->createNamedParameter('pages',  \PDO::PARAM_STR)
                                ),
                                $queryBuilderReference->expr()->in('fieldname',
                                    $queryBuilderReference->createNamedParameter($config['field'],  \PDO::PARAM_STR)
                                ),
                                $queryBuilderReference->expr()->in('uid_foreign',
                                    $queryBuilderReference->createNamedParameter($record['uid'],  \PDO::PARAM_INT)
                                )
                            )
                            ->execute();

                        while ($reference = $statementReference->fetch()) {

                            // update reference elements
                            /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
                            $updateQueryBuilder = $connectionReference->createQueryBuilder();
                            $updateQueryBuilder->update('sys_file_reference')
                                ->set('tablenames', 'pages')
                                ->set('fieldname', $config['fieldTarget'])
                                ->set('sorting', $config['sortingTarget'])
                                ->where(
                                    $updateQueryBuilder->expr()->eq('uid',
                                        $updateQueryBuilder->createNamedParameter(intval($reference['uid']), \PDO::PARAM_INT)
                                    )
                                );


                            if ($reference['crop']) {

                                // updating cropName
                                $referenceCrop = json_decode($reference['crop'], true);
                                if ($referenceCrop['default']) {
                                    $cropNew = [
                                        $config['cropTarget'] => $referenceCrop['default']
                                    ];

                                    // now update the crop configuration in the reference
                                    $updateQueryBuilder->set('crop', json_encode($cropNew));
                                }
                            }

                            $databaseQueries[] = $updateQueryBuilder->getSQL();
                            $updateQueryBuilder->execute();
                        }
                    }
                }
            }
        }

        $this->setLock(__FUNCTION__);
    }


    /**
     * Update cropping for header image elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migrateTeaserText(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }


        /** @var  \TYPO3\CMS\Core\Database\Connection $connectionPages */
        $connectionPages = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('pages');

        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilderPages */
        $queryBuilderPages = $connectionPages->createQueryBuilder();
        $queryBuilderPages->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilderPages->select('*')
            ->from('pages')
            ->where(
                $queryBuilderPages->expr()->neq('tx_rkwbasics_teaser_text',
                    $queryBuilderPages->createNamedParameter('',  \PDO::PARAM_STR)
                )

            )
            ->execute();


        // go through all elements
        while ($record = $statement->fetch()) {


            // update record elements
            /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
            $updateQueryBuilder = $connectionPages->createQueryBuilder();
            $updateQueryBuilder->update('pages')
                ->set('abstract', $record['tx_rkwbasics_teaser_text'])
                ->where(
                    $updateQueryBuilder->expr()->eq('uid',
                        $updateQueryBuilder->createNamedParameter(intval($record['uid']), \PDO::PARAM_INT)
                    )
                );

            $databaseQueries[] = $updateQueryBuilder->getSQL();
            $updateQueryBuilder->execute();

        }

        $this->setLock(__FUNCTION__);
    }

    /**
     * Update publication date handling
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migratePublicationDate(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }


        /** @var  \TYPO3\CMS\Core\Database\Connection $connectionPages */
        $connectionPages = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('pages');

        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilderPages */
        $queryBuilderPages = $connectionPages->createQueryBuilder();
        $queryBuilderPages->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilderPages->select('*')
            ->from('pages')
            ->where(
                $queryBuilderPages->expr()->neq('tx_rkwsearch_pubdate',
                    $queryBuilderPages->createNamedParameter('',  \PDO::PARAM_STR)
                )

            )
            ->execute();


        // go through all elements
        while ($record = $statement->fetch()) {


            // update record elements
            /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
            $updateQueryBuilder = $connectionPages->createQueryBuilder();
            $updateQueryBuilder->update('pages')
                ->set('lastUpdated', $record['tx_rkwsearch_pubdate'])
                ->where(
                    $updateQueryBuilder->expr()->eq('uid',
                        $updateQueryBuilder->createNamedParameter(intval($record['uid']), \PDO::PARAM_INT)
                    )
                );

            $databaseQueries[] = $updateQueryBuilder->getSQL();
            $updateQueryBuilder->execute();

        }

        $this->setLock(__FUNCTION__);
    }

    /**
     * Update slider elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migrateSliderElements(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        /*
         * Changes for slider-elements
         *
         * UPDATE tt_content SET CType = 'rkwtemplate_slider', subheader = bodytext, bodytext = '' WHERE colPos = 4;
         * UPDATE tt_content SET header_position = 'left' WHERE colPos = 4 AND rowDescription LIKE '%slide--left%';
         * UPDATE tt_content SET header_layout = 1 WHERE colPos = 4 AND rowDescription LIKE '%slide--gradient%' AND NOT rowDescription LIKE '%slide--white%';
         * UPDATE tt_content SET header_layout = 2 WHERE colPos = 4 AND NOT rowDescription LIKE '%slide--gradient%' AND rowDescription LIKE '%slide--white%';
         * UPDATE tt_content SET header_layout = 3 WHERE colPos = 4 AND rowDescription LIKE '%slide--gradient%' AND rowDescription LIKE '%slide--white%';
         * UPDATE tt_content SET rowDescription = tx_rkwbasics_header_link_caption WHERE colPos = 4;
        */
        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('CType', 'rkwtemplate_slider')
            ->set('subheader', 'bodytext', false)
            ->set('bodytext', '')
            ->where(
                $updateQueryBuilder->expr()->eq('colPos',
                    $updateQueryBuilder->createNamedParameter(4, \PDO::PARAM_INT)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();

        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('header_position', 'left')
            ->where(
                $updateQueryBuilder->expr()->eq('colPos',
                    $updateQueryBuilder->createNamedParameter(4, \PDO::PARAM_INT)
                ),
                $updateQueryBuilder->expr()->like('rowDescription',
                    $updateQueryBuilder->expr()->literal('%slide--left%')
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();


        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('header_layout', '1')
            ->where(
                $updateQueryBuilder->expr()->eq('colPos',
                    $updateQueryBuilder->createNamedParameter(4, \PDO::PARAM_INT)
                ),
                $updateQueryBuilder->expr()->like('rowDescription',
                    $updateQueryBuilder->expr()->literal('%slide--gradient%')
                ),
                $updateQueryBuilder->expr()->notLike('rowDescription',
                    $updateQueryBuilder->expr()->literal('%slide--white%')
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();


        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('header_layout', '2')
            ->where(
                $updateQueryBuilder->expr()->eq('colPos',
                    $updateQueryBuilder->createNamedParameter(4, \PDO::PARAM_INT)
                ),
                $updateQueryBuilder->expr()->notLike('rowDescription',
                    $updateQueryBuilder->expr()->literal('%slide--gradient%')
                ),
                $updateQueryBuilder->expr()->like('rowDescription',
                    $updateQueryBuilder->expr()->literal('%slide--white%')
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();


        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('header_layout', '3')
            ->where(
                $updateQueryBuilder->expr()->eq('colPos',
                    $updateQueryBuilder->createNamedParameter(4, \PDO::PARAM_INT)
                ),
                $updateQueryBuilder->expr()->like('rowDescription',
                    $updateQueryBuilder->expr()->literal('%slide--gradient%')
                ),
                $updateQueryBuilder->expr()->like('rowDescription',
                    $updateQueryBuilder->expr()->literal('%slide--white%')
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();


        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('rowDescription', 'tx_rkwbasics_header_link_caption', false)
            ->where(
                $updateQueryBuilder->expr()->eq('colPos',
                    $updateQueryBuilder->createNamedParameter(4, \PDO::PARAM_INT)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();

        // move elements into a grid element-wrapper
        $this->moveElementsFromColToGridContainer([4 => 10],  4, 'sliderContainer', 100, [], $databaseQueries, '', 'rkwtemplate_slider');

        $this->setLock(__FUNCTION__);
    }


    /**
     * Update mission statement elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migrateMissionStatementElements(array &$databaseQueries)
    {

        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');


        /**
         * Updates for mission statement
         *
         * UPDATE tt_content SET CType = 'rkwtemplate_mission' WHERE colPos = 12;
         * UPDATE tt_content SET subheader = header, header = 'Herzlich Willkommen auf dem RKW Portal!' WHERE uid = 7701;
         */
        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('CType', 'rkwtemplate_mission')
            ->where(
                $updateQueryBuilder->expr()->eq('colPos',
                    $updateQueryBuilder->createNamedParameter(12, \PDO::PARAM_INT)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();


        // Check for sub-headlines and transfer them to the subheader
        // find go through all pages
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $queryBuilder->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilder->select('*')
            ->from('tt_content')
            ->where(
                $queryBuilder->expr()->eq('colPos',
                    $queryBuilder->createNamedParameter(12, \PDO::PARAM_INT)
                )
            )
            ->execute();

        // go through all elements
        while ($record = $statement->fetch()) {

            // <h2>Menschen. Unternehmen. Zukunft!</h2>
            $pattern = '#<h[0-9]+>([^<]+)</h[0-9]+>#';
            preg_match($pattern, $record['bodytext'], $matches, PREG_OFFSET_CAPTURE);
            if (
                ($matches)
                && ($matches[1][0])
            ){

                $record['bodytext'] = preg_replace($pattern, '', $record['bodytext']);
                $record['subheader'] = $matches[1][0];

                $updateQueryBuilder = $connection->createQueryBuilder();
                $updateQueryBuilder->update('tt_content')
                    ->set('bodytext', $record['bodytext'])
                    ->set('subheader', $record['subheader'])
                    ->where(
                        $updateQueryBuilder->expr()->eq('uid',
                            $updateQueryBuilder->createNamedParameter($record['uid'] , \PDO::PARAM_INT)
                        )
                    );
                $databaseQueries[] = $updateQueryBuilder->getSQL();
                $updateQueryBuilder->execute();
            }
        }


        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('subheader', 'header', false)
            ->set('header', 'Herzlich Willkommen auf dem RKW Portal!')
            ->where(
                $updateQueryBuilder->expr()->eq('uid',
                    $updateQueryBuilder->createNamedParameter(7701, \PDO::PARAM_INT)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();

        $this->setLock(__FUNCTION__);
    }


    /**
     * Update topic elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migrateTopicElements(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }


        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        // find all topic elements and move css class from header_link to header_layout
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $queryBuilder->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilder->select('*')
            ->from('tt_content')
            ->where(
                $queryBuilder->expr()->eq('colPos',
                    $queryBuilder->createNamedParameter(13, \PDO::PARAM_INT)
                ),
                $queryBuilder->expr()->neq('pid',
                    $queryBuilder->createNamedParameter(4347, \PDO::PARAM_INT)
                )
            )
            ->execute();

        // go through all elements
        while ($record = $statement->fetch()) {

            $updateRecord = [];

            if ($headerLink = $record['header_link']) {

                $pattern = '/ ((topic|project)-([0-9a-z]+)|(feature-box--no-color))/';
                preg_match($pattern, $headerLink, $matches, PREG_OFFSET_CAPTURE);
                if (
                    ($matches)
                    && (isset($matches[2]))
                    && (isset($matches[3]))
                ) {

                    if (strpos(trim($matches[0][0]), 'topic') === 0) {
                        if ($topicId = intval($matches[3][0])) {
                            if ($topicId > 1) {
                                $updateRecord['header_layout'] = $topicId;
                            }
                        }

                    } else if (strpos(trim($matches[0][0]), 'project') === 0) {
                        $updateRecord['header_layout'] = 5;

                    } else if (strpos(trim($matches[0][0]), 'feature-box--no-color') === 0) {
                        $updateRecord['header_layout'] = 6;
                    }

                    $updateRecord['header_link'] = preg_replace($pattern, ' -', $headerLink);

                    // do update!
                    $updateQueryBuilder = $connection->createQueryBuilder();
                    $updateQueryBuilder->update('tt_content')
                        ->set('header_layout', $updateRecord['header_layout'])
                        ->set('header_link', $updateRecord['header_link'])
                        ->where(
                            $updateQueryBuilder->expr()->eq('uid',
                                $updateQueryBuilder->createNamedParameter($record['uid'], \PDO::PARAM_INT)
                            )
                        );
                    $databaseQueries[] = $updateQueryBuilder->getSQL();
                    $updateQueryBuilder->execute();
                }
            }
        }

        /**
         * UPDATE tt_content SET CType = 'rkwtemplate_topic' WHERE colPos = 13;
         */
        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('CType', 'rkwtemplate_topic')
            ->where(
                $updateQueryBuilder->expr()->eq('colPos',
                    $updateQueryBuilder->createNamedParameter(13, \PDO::PARAM_INT)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();

        $labels = [
            '_default' => 'Unsere Themen',
            5062 => 'Unsere Schwerpunkte',
            4763 => 'Unsere Schwerpunkte',
            3595 => 'Unsere Schwerpunkte',
            3471 => 'Unsere Schwerpunkte',
            3757 => 'Unsere Leistungen im Überblick',
            3865 => 'Unsere Schwerpunkte',
            4367 => 'Schnelleinstieg',
            5027 => '',
            5011 => 'Schnelleinstieg',
            3684 => 'Schnelleinstieg',
            5043 => 'Schnelleinstieg',
            3673 => ''
        ];

        // move elements into a grid element-wrapper
        $this->moveElementsFromColToGridContainer([13 => 20], 13, 'topicContainer', 2, $labels, $databaseQueries, '', 'rkwtemplate_topic');

        $this->setLock(__FUNCTION__);
    }



    /**
     * Update logo elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migrateLogoElements(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        $colPosIds = [5,14,8];

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        /** @var  \TYPO3\CMS\Core\Database\Connection $connectionPage */
        $connectionPage = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('pages');

        // find all shortcuts in given cols
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $statement = $queryBuilder->select('*')
            ->from('tt_content')
            ->where(
                $queryBuilder->expr()->eq('CType',
                    $queryBuilder->createNamedParameter('shortcut', \PDO::PARAM_STR)
                ),
                $queryBuilder->expr()->in('colPos',
                    $queryBuilder->createNamedParameter($colPosIds, Connection::PARAM_INT_ARRAY)
                )
            )
            ->execute();


        // go through all elements
        while ($record = $statement->fetch()) {

            $headerLayout = 3;
            $defaultHeader = 'Referenzen';
            if ($record['colPos'] == 14) {
                $headerLayout = 4;
                $defaultHeader = 'Zertifizierungen &amp; Akkreditierungen';

            } else if ($record['colPos'] == 8) {
                $headerLayout = 4;
                $defaultHeader = 'Kooperationen';

            } else {

                // Check if we are on a rootpage
                /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
                $countQueryBuilder = $connectionPage->createQueryBuilder();
                $isSiteRoot = $countQueryBuilder->select('*')
                    ->from('pages')
                    ->where(
                        $countQueryBuilder->expr()->eq('is_siteroot',
                            $countQueryBuilder->createNamedParameter(1, \PDO::PARAM_INT)
                        ),
                        $countQueryBuilder->expr()->eq('uid',
                            $countQueryBuilder->createNamedParameter($record['pid'], \PDO::PARAM_INT)
                        )
                    )
                    ->execute()
                    ->fetchColumn(0);

                if ($isSiteRoot) {
                    $defaultHeader = 'Initiativen &amp; Partner';
                }
            }

            // move shortcut elements into a grid element-wrapper
            $this->moveElementsFromShortCutToGridContainer($record, 30, 'rkwtemplate_logo', 'logoContainer', $headerLayout, $defaultHeader, $databaseQueries);
        }

        $this->setLock(__FUNCTION__);
    }



    /**
     * Update logo elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migratePromoterElements(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        // find all shortcuts in given cols
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $statement = $queryBuilder->select('*')
            ->from('tt_content')
            ->where(
                $queryBuilder->expr()->eq('CType',
                    $queryBuilder->createNamedParameter('shortcut', \PDO::PARAM_STR)
                ),
                $queryBuilder->expr()->eq('colPos',
                    $queryBuilder->createNamedParameter(19, \PDO::PARAM_INT)
                )
            )
            ->execute();


        // go through all elements
        while ($record = $statement->fetch()) {

            // move shortcut elements into a grid element-wrapper
            $this->moveElementsFromShortCutToGridContainer($record, 40, 'rkwtemplate_promoter', 'promoterContainer', 0, 'Förderer', $databaseQueries);
        }

        $this->setLock(__FUNCTION__);
    }


    /**
     * Update shortlink elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migrateShortlinkElements(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        // find all elements in given cols
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $queryBuilder->getRestrictions()
            ->removeByType(StartTimeRestriction::class)
            ->removeByType(EndTimeRestriction::class)
            ->removeByType(HiddenRestriction::class)
            ->removeByType(DeletedRestriction::class);

        $statement = $queryBuilder->select('*')
            ->from('tt_content')
            ->where(
                $queryBuilder->expr()->in('CType',
                    $queryBuilder->createNamedParameter(['header', 'text', 'textpic'], Connection::PARAM_INT_ARRAY)
                ),
                $queryBuilder->expr()->eq('colPos',
                    $queryBuilder->createNamedParameter(2, \PDO::PARAM_INT)
                )
            )
            ->execute();


        // go through all elements
        while ($record = $statement->fetch()) {

            // do update!
            $updateQueryBuilder = $connection->createQueryBuilder();
            $updateQueryBuilder->update('tt_content')
                ->set('header_layout', $record['layout'])
                ->set('CType', 'rkwtemplate_shortlink')
                ->where(
                    $updateQueryBuilder->expr()->eq('uid',
                        $updateQueryBuilder->createNamedParameter($record['uid'], \PDO::PARAM_INT)
                    )
                );
            $databaseQueries[] = $updateQueryBuilder->getSQL();
            $updateQueryBuilder->execute();
        }

        $this->setLock(__FUNCTION__);
    }


    /**
     * Update topic elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function migrateContentsForTopicPages(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        // move elements into a grid element-wrapper
        $this->moveElementsFromColToGridContainer([0 => 50, 2 => 60, 18 => 70], 0, 'contentContainerTwoCols', 0, [], $databaseQueries, 'pagets__topicPages');

        $this->setLock(__FUNCTION__);
    }



    /**
     * Merge cols
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function mergeCols (array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        // order is important!
        $colPosList = [4,12,13,15,16,5,14];
        $this->moveElementsFromColsIntoCol($colPosList, 100, $databaseQueries, 'pagets__homePages');

        $colPosList = [19];
        $this->moveElementsFromColsIntoCol($colPosList, 201, $databaseQueries, 'pagets__topicPages');

        $colPosList = [8,9,6,5];
        $this->moveElementsFromColsIntoCol($colPosList, 202, $databaseQueries, 'pagets__topicPages');

        $this->setLock(__FUNCTION__);
    }


    /**
     * Remove RkwSearch
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function removeRkwSearch (array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        /** @var  \TYPO3\CMS\Core\Database\Connection $connectionPages */
        $connectionPages = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('pages');

        // now delete plugins
        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('deleted', 1)
            ->where(
                $updateQueryBuilder->expr()->eq('CType',
                    $updateQueryBuilder->createNamedParameter('list', \PDO::PARAM_STR)
                ),
                $updateQueryBuilder->expr()->like('list_type',
                    $updateQueryBuilder->createNamedParameter('rkwsearch%', \PDO::PARAM_STR)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();


        // delete pages
        $pageUids = [1368,1371];
        $updateQueryBuilder = $connectionPages->createQueryBuilder();
        $updateQueryBuilder->update('pages')
            ->set('deleted', 1)
            ->where(
                $updateQueryBuilder->expr()->in('uid',
                    $updateQueryBuilder->createNamedParameter($pageUids, Connection::PARAM_INT_ARRAY)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();

        $this->setLock(__FUNCTION__);
    }

    /**
     * Remove RkwSearch
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function removeRkwConsultant (array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        /** @var  \TYPO3\CMS\Core\Database\Connection $connectionPages */
        $connectionPages = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('pages');

        /** @var  \TYPO3\CMS\Core\Database\Connection $connectionFeGroups */
        $connectionFeGroups = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('fe_groups');

        // now delete plugins
        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('deleted', 1)
            ->where(
                $updateQueryBuilder->expr()->eq('CType',
                    $updateQueryBuilder->createNamedParameter('list', \PDO::PARAM_STR)
                ),
                $updateQueryBuilder->expr()->like('list_type',
                    $updateQueryBuilder->createNamedParameter('consultant%', \PDO::PARAM_STR)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();


        // delete pages
        $pageUids = [2525,2524,2523,1917,2820,2264,2819,2341,2340];
        $updateQueryBuilder = $connectionPages->createQueryBuilder();
        $updateQueryBuilder->update('pages')
            ->set('deleted', 1)
            ->where(
                $updateQueryBuilder->expr()->in('uid',
                    $updateQueryBuilder->createNamedParameter($pageUids, Connection::PARAM_INT_ARRAY)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();

        $this->setLock(__FUNCTION__);


        // deactivate fe_usergroup as FE-Service
        $updateQueryBuilder = $connectionFeGroups->createQueryBuilder();
        $updateQueryBuilder->update('fe_groups')
            ->set('tx_rkwregistration_is_service', 0)
            ->where(
                $updateQueryBuilder->expr()->in('uid',
                    $updateQueryBuilder->createNamedParameter(3, \PDO::PARAM_INT)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();

        $this->setLock(__FUNCTION__);

    }

    /**
     * Moves elements into a newly added grid container
     *
     * @param array  $colPosMapper
     * @param int    $gridColPos
     * @param string $gridLayout
     * @param int    $gridHeaderLayout
     * @param array  $gridLabels
     * @param array  $databaseQueries Queries done in this update
     * @param string $backendLayoutFilter
     * @param string $gridElementCTypeFilter
     */
    protected function moveElementsFromColToGridContainer (array $colPosMapper, int $gridColPos, string $gridLayout, int $gridHeaderLayout, array $gridLabels, array &$databaseQueries, string $backendLayoutFilter = '', string $gridElementCTypeFilter = '')
    {

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        // find all relevant pages
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $statement = $queryBuilder->select('*')
            ->from('tt_content')
            ->where(
                $queryBuilder->expr()->in('colPos',
                    $queryBuilder->createNamedParameter(array_keys($colPosMapper), Connection::PARAM_INT_ARRAY)
                )
            )
            ->groupBy('pid')
            ->execute();


        // go through all pages
        while ($record = $statement->fetch()) {

            if ($pid = intval($record['pid'])) {

                if ($backendLayoutFilter) {

                    // only if backendLayout matches
                    $pageBackendLayout = $this->getBackendLayoutRecursiveOfPage($record['pid']);
                    if ($pageBackendLayout != $backendLayoutFilter) {
                        continue;
                    }
                }

                $gridLabel = 'Container';
                if (isset($gridLabels['_default'])) {
                    $gridLabel = $gridLabels['_default'];
                }
                if (isset($gridLabels[$pid])) {
                    $gridLabel = $gridLabels[$pid];
                }

                $insertQueryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tt_content');

                // create a new grid-element
                $newElement = [
                    'pid' => intval($record['pid']),
                    'sorting' => 0,
                    'colPos' => intval($gridColPos),
                    'CType' => 'gridelements_pi1',
                    'header' => $gridLabel,
                    'header_layout' => $gridHeaderLayout,
                    'tx_gridelements_backend_layout' => $gridLayout
                ];

                /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $insertQueryBuilder */
                $insertQueryBuilder->insert('tt_content')->values($newElement)->execute();
                $databaseQueries[] = $insertQueryBuilder->getSQL();
                $newElementUid = $insertQueryBuilder->getConnection()->lastInsertId();

                // update sub elements
                /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
                foreach ($colPosMapper as $mapperSourceColPos => $mapperTargetColPos) {

                    $updateQueryBuilder = $connection->createQueryBuilder();
                    $updateQueryBuilder->update('tt_content')
                        ->set('tx_gridelements_container', intval($newElementUid))
                        ->set('tx_gridelements_columns', intval($mapperTargetColPos))
                        ->set('colPos', -1)
                        ->where(
                            $updateQueryBuilder->expr()->eq('colPos',
                                $updateQueryBuilder->createNamedParameter(intval($mapperSourceColPos), \PDO::PARAM_INT)
                            ),
                            $updateQueryBuilder->expr()->eq('pid',
                                $updateQueryBuilder->createNamedParameter($pid, \PDO::PARAM_INT)
                            )
                        );

                    if ($gridElementCTypeFilter) {
                        $updateQueryBuilder->andWhere(
                            $updateQueryBuilder->expr()->eq('CType',
                                $updateQueryBuilder->createNamedParameter($gridElementCTypeFilter, \PDO::PARAM_STR)
                            )
                        );
                    } else {

                        $updateQueryBuilder->andWhere(
                            $updateQueryBuilder->expr()->neq('CType',
                                $updateQueryBuilder->createNamedParameter('gridelements_pi1', \PDO::PARAM_STR)
                            )
                        );
                    }

                    $databaseQueries[] = $updateQueryBuilder->getSQL();
                    $updateQueryBuilder->execute();

                }


                // update counter of container
                /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
                $countQueryBuilder = $connection->createQueryBuilder();
                $countQueryBuilder->getRestrictions()
                    ->removeByType(StartTimeRestriction::class)
                    ->removeByType(EndTimeRestriction::class)
                    ->removeByType(HiddenRestriction::class);

                $count = $countQueryBuilder->count('*')
                    ->from('tt_content')
                    ->where(
                        $countQueryBuilder->expr()->eq('tx_gridelements_container',
                            $countQueryBuilder->createNamedParameter($newElementUid, \PDO::PARAM_INT)
                        )
                    )
                    ->execute()
                    ->fetchColumn(0);


                /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
                $updateQueryBuilder = $connection->createQueryBuilder();
                $updateQueryBuilder->update('tt_content')
                    ->set('tx_gridelements_children', intval($count))
                    ->where(
                        $updateQueryBuilder->expr()->eq('uid',
                            $updateQueryBuilder->createNamedParameter($newElementUid, \PDO::PARAM_INT)
                        )
                    );
                $databaseQueries[] = $updateQueryBuilder->getSQL();
                $updateQueryBuilder->execute();
            }
        }
    }



    /**
     * Moves elements into a newly added grid container
     *
     * @param array $colPosList
     * @param int $targetColPos
     * @param array  $databaseQueries Queries done in this update
     * @param string $backendLayoutFilter
     */
    protected function moveElementsFromColsIntoCol (array $colPosList, int $targetColPos, array &$databaseQueries, string $backendLayoutFilter = '')
    {

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        // find all contents for each colPos
        $sortingCnt = 0;
        foreach ($colPosList as $colCnt => $colPos) {

            /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
            $queryBuilder = $connection->createQueryBuilder();
            $queryBuilder->getRestrictions()
                ->removeByType(StartTimeRestriction::class)
                ->removeByType(EndTimeRestriction::class)
                ->removeByType(HiddenRestriction::class)
                ->removeByType(DeletedRestriction::class);

            $statement = $queryBuilder->select('*')
                ->from('tt_content')
                ->where(
                    $queryBuilder->expr()->eq('colPos',
                        $queryBuilder->createNamedParameter($colPos, \PDO::PARAM_INT)
                    )
                )
                ->orderBy('sorting')
                ->execute();


            // go through all elements of this colPos
            while ($record = $statement->fetch()) {

                if ($backendLayoutFilter) {

                    // only if backendLayout matches
                    $pageBackendLayout = $this->getBackendLayoutRecursiveOfPage($record['pid']);
                    if ($pageBackendLayout != $backendLayoutFilter) {
                        continue;
                    }
                }

                // now update sorting and colPos
                // higher sorting numbers mean that elements are displayed lower in the list.
                $updateQueryBuilder = $connection->createQueryBuilder();
                $updateQueryBuilder->update('tt_content')
                    ->set('colPos', $targetColPos)
                    ->set('sorting', $sortingCnt)
                    ->where(
                        $updateQueryBuilder->expr()->eq('uid',
                            $updateQueryBuilder->createNamedParameter($record['uid'], \PDO::PARAM_INT)
                        )
                    );
                $databaseQueries[] = $updateQueryBuilder->getSQL();
                $updateQueryBuilder->execute();

                $sortingCnt += $this->sortIntervals;

            }
        }
    }


    /**
     * Moves elements into a newly added grid container
     *
     * @param array $shortCut
     * @param int targetColPos
     * @param string $gridElementCType
     * @param string $gridLayout
     * @param int $gridHeaderLayout
     * @param string $gridDefaultLabel
     * @param array  $databaseQueries Queries done in this update
     */
    protected function moveElementsFromShortCutToGridContainer (array $shortCut, int $targetColPos, string $gridElementCType, string $gridLayout, int $gridHeaderLayout, string $gridDefaultLabel, array &$databaseQueries)
    {

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        // create a new grid-element
        $insertQueryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tt_content');
        $newElement = [
            'pid' => intval($shortCut['pid']),
            'colPos' => intval($shortCut['colPos']),
            'sorting' => 0,
            'CType' => 'gridelements_pi1',
            'header' => $shortCut['header'] ? $shortCut['header'] : $gridDefaultLabel,
            'header_layout' => $gridHeaderLayout,
            'tx_gridelements_backend_layout' => $gridLayout
        ];

        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $insertQueryBuilder */
        $insertQueryBuilder->insert('tt_content')->values($newElement)->execute();
        $databaseQueries[] = $insertQueryBuilder->getSQL();
        $newElementUid = $insertQueryBuilder->getConnection()->lastInsertId();


        // now get the records of the shortcut and set their sorting according to the sorting in the shortcut.
        // higher sorting numbers mean that elements are displayed lower in the list.
        // also change their cType and add them to the new gridElement
        if ($items = explode(',', $shortCut['records'])) {

            $sorting = $this->sortIntervals;
            foreach ($items as $item) {

                $updateQueryBuilder = $connection->createQueryBuilder();
                if ($itemId = str_replace('tt_content_', '', $item)) {
                    $updateQueryBuilder->update('tt_content')
                        ->set('CType', $gridElementCType)
                        ->set('sorting', $sorting)
                        ->set('pid', intval($shortCut['pid']))
                        ->set('tx_gridelements_container', intval($newElementUid))
                        ->set('tx_gridelements_columns', intval($targetColPos))
                        ->set('colPos', -1)
                        ->where(
                            $updateQueryBuilder->expr()->eq('uid',
                                $updateQueryBuilder->createNamedParameter($itemId, \PDO::PARAM_INT)
                            )
                        );

                    $databaseQueries[] = $updateQueryBuilder->getSQL();
                    $updateQueryBuilder->execute();

                    $sorting += $this->sortIntervals;
                }
            }
        }


        // now delete shortcut
        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('deleted', 1)
            ->where(
                $updateQueryBuilder->expr()->eq('uid',
                    $updateQueryBuilder->createNamedParameter($shortCut['uid'], \PDO::PARAM_INT)
                )
            );
        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();


        // delete all other elements from the col and page of the shortcut
        $updateQueryBuilder = $connection->createQueryBuilder();
        $updateQueryBuilder->update('tt_content')
            ->set('deleted', 1)
            ->where(
                $updateQueryBuilder->expr()->eq('pid',
                    $updateQueryBuilder->createNamedParameter($shortCut['pid'], \PDO::PARAM_INT)
                ),
                $updateQueryBuilder->expr()->eq('colPos',
                    $updateQueryBuilder->createNamedParameter($shortCut['colPos'], \PDO::PARAM_INT)
                ),
                $updateQueryBuilder->expr()->neq('CType',
                    $updateQueryBuilder->createNamedParameter($gridElementCType, \PDO::PARAM_STR)
                ),
                $updateQueryBuilder->expr()->neq('CType',
                    $updateQueryBuilder->createNamedParameter('gridelements_pi1', \PDO::PARAM_STR)
                )
            );

        $databaseQueries[] = $updateQueryBuilder->getSQL();
        $updateQueryBuilder->execute();

    }

    /**
     * @param int $pid
     * @return bool|string
     */
    protected function getBackendLayoutRecursiveOfPage (int $pid)
    {

        // get backendLayout of page
        /** @var  \TYPO3\CMS\Core\Database\Connection $connectionPages */
        $connectionPages = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('pages');

        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilderPages */
        $queryBuilderPages = $connectionPages->createQueryBuilder();
        $recordBackendLayout = $queryBuilderPages->select('backend_layout')
            ->from('pages')
            ->where(
                $queryBuilderPages->expr()->eq('uid',
                    $queryBuilderPages->createNamedParameter($pid, \PDO::PARAM_INT)
                )
            )
            ->execute()
            ->fetchColumn(0);

        // check for backendLayout in rootline if not defined in page
        if (empty($recordBackendLayout)) {

            $rootline = \TYPO3\CMS\Backend\Utility\BackendUtility::BEgetRootLine($pid);
            foreach ($rootline as $rootlinePage) {
                if ($rootlinePage['uid'] == $pid) {
                    continue;
                }

                if ($recordBackendLayout = $rootlinePage['backend_layout_next_level']) {
                    break;
                }
            }
        }

        return $recordBackendLayout;
    }


    /**
     * Checks the lock
     *
     * @param string $method
     * @return bool
     */
    protected function hasLock ($method)
    {
        return file_exists(PATH_site . 'typo3temp/var/locks/tx_rkwtemplate_' . $method . '.lock');
    }


    /**
     * Sets the lock
     *
     * @param string $method
     * @return bool
     */
    protected function setLock ($method)
    {
        return touch(PATH_site . 'typo3temp/var/locks/tx_rkwtemplate_' . $method . '.lock');
    }

}
