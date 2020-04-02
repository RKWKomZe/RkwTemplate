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
use TYPO3\CMS\Core\Resource\Exception;
use TYPO3\CMS\Core\Resource\File;
use TYPO3\CMS\Core\Resource\ResourceFactory;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\MathUtility;


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
    protected $title = 'Title of this updater';

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

        $this->updateConfiguration($databaseQueries);
        $this->updateSliderElements($databaseQueries);
        $this->updateMissionStatementElements($databaseQueries);
        $this->updateTopicElements($databaseQueries);

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
    protected function updateConfiguration(array &$databaseQueries)
    {

        if ($this->hasLock(__FUNCTION__)){
            return;
        }

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('sys_template');

        // find relevant root sys_templates
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
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
                'Configuration/TypoScript/Kompetenzzentrum',
                'Configuration/TypoScript/WePstra',
                'EXT:css_styled_content/Configuration/TypoScript/,',
                'EXT:rtehtmlarea/static/clickenlarge/,',
            ];
            $replace = [
                'Configuration/Themes/Kompetenzzentrum/TypoScript',
                'Configuration/Themes/WePstra/TypoScript',
                'EXT:fluid_styled_content/Configuration/TypoScript/,EXT:fluid_styled_content/Configuration/TypoScript/Styling/,EXT:gridelements/Configuration/TypoScript/,EXT:rkw_template/Configuration/TypoScript,',
                '',
            ];
            $record['include_static_file'] = str_replace($search, $replace, $record['include_static_file']);

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
                'Configuration/TsConfig/Kompetenzzentrum',
                'Configuration/TsConfig/WePstra',
            ];
            $replace = [
                '.typoscript',
                'Configuration/Themes/Kompetenzzentrum/TsConfig',
                'Configuration/Themes/WePstra/TsConfig',
            ];
            $record['tsconfig_includes'] =
                'EXT:rkw_template/Configuration/TsConfig/TsConfig.typoscript,' .
                str_replace($search, $replace, $record['tsconfig_includes']);

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

        $this->setLock(__FUNCTION__);

    }



    /**
     * Update slider elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function updateSliderElements(array &$databaseQueries)
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
        $this->moveElementsToGridElement(4, 'rkwtemplate_slider', 'sliderContainer', [], $databaseQueries);

        $this->setLock(__FUNCTION__);
    }


    /**
     * Update mission statement elements
     *
     * @param array $databaseQueries Queries done in this update
     */
    protected function updateMissionStatementElements(array &$databaseQueries)
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
    protected function updateTopicElements(array &$databaseQueries)
    {
        if ($this->hasLock(__FUNCTION__)){
            return;
        }


        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');


        // find all topic elements and move css class from header_link to header_layout
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $statement = $queryBuilder->select('*')
            ->from('tt_content')
            ->where(
                $queryBuilder->expr()->eq('colPos',
                    $queryBuilder->createNamedParameter(13, \PDO::PARAM_INT)
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
        $this->moveElementsToGridElement(13, 'rkwtemplate_topic', 'topicContainer', $labels, $databaseQueries);

        $this->setLock(__FUNCTION__);
    }


    /**
     * Moves elements into a newly added grid element
     *
     * @param int    $colPos
     * @param string $cType
     * @param string    $gridLayout
     * @param array  $labels
     * @param array  $databaseQueries Queries done in this update
     */
    protected function moveElementsToGridElement (int $colPos, string $cType, string $gridLayout, array $labels, array &$databaseQueries)
    {

        /** @var  \TYPO3\CMS\Core\Database\Connection $connection */
        $connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content');

        // find all slider pages
        /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
        $queryBuilder = $connection->createQueryBuilder();
        $statement = $queryBuilder->select('*')
            ->from('tt_content')
            ->where(
                $queryBuilder->expr()->eq('colPos',
                    $queryBuilder->createNamedParameter($colPos, \PDO::PARAM_INT)
                )
            )
            ->groupBy('pid')
            ->execute();


        // go through all pages
        while ($record = $statement->fetch()) {

            if ($pid = intval($record['pid'])) {

                $label = 'Container';
                if (isset($labels['_default'])) {
                    $label = $labels['_default'];
                }
                if (isset($labels[$pid])) {
                    $label = $labels[$pid];
                }

                $insertQueryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tt_content');

                // create a new grid-element
                $newElement = [
                    'pid' => intval($record['pid']),
                    'sorting' => 0,
                    'colPos' => intval($colPos),
                    'CType' => 'gridelements_pi1',
                    'header' => $label,
                    'tx_gridelements_backend_layout' => $gridLayout
                ];

                /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $insertQueryBuilder */
                $insertQueryBuilder->insert('tt_content')->values($newElement)->execute();
                $databaseQueries[] = $insertQueryBuilder->getSQL();
                $newElementUid = $insertQueryBuilder->getConnection()->lastInsertId();

                // update sub elements
                /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $updateQueryBuilder */
                $updateQueryBuilder = $connection->createQueryBuilder();
                $updateQueryBuilder->update('tt_content')
                    ->set('tx_gridelements_container', intval($newElementUid))
                    ->set('tx_gridelements_columns', intval($colPos))
                    ->set('colPos', -1)
                    ->where(
                        $updateQueryBuilder->expr()->eq('CType',
                            $updateQueryBuilder->createNamedParameter($cType, \PDO::PARAM_STR)
                        ),
                        $updateQueryBuilder->expr()->eq('colPos',
                            $updateQueryBuilder->createNamedParameter(intval($colPos), \PDO::PARAM_INT)
                        ),
                        $updateQueryBuilder->expr()->eq('pid',
                            $updateQueryBuilder->createNamedParameter($pid, \PDO::PARAM_INT)
                        )
                    );
                $databaseQueries[] = $updateQueryBuilder->getSQL();
                $updateQueryBuilder->execute();

                // update counter of container
                /** @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
                $countQueryBuilder = $connection->createQueryBuilder();
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
     * Checks the lock
     *
     * @param string $method
     * @return bool
     */
    protected function hasLock ($method)
    {
        return file_exists(PATH_site . 'typo3temp/locks/tx_rkwtemplate_' . $method . '.lock');
    }


    /**
     * Sets the lock
     *
     * @param string $method
     * @return bool
     */
    protected function setLock ($method)
    {
        return touch(PATH_site . 'typo3temp/locks/tx_rkwtemplate_' . $method . '.lock');
    }

}
