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

use Doctrine\DBAL\Driver\Exception;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * IsFirstChildViewHelper
 *
 * @author Christian Dilger <c.dilger@addorange.de>
 * @copyright RKW Kompetenzzentrum
 * @package RKW_Template
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class IsFirstChildViewHelper extends AbstractViewHelper
{

    /**
     * Initialize arguments
     *
     * @return void
     */
    public function initializeArguments(): void
    {
        parent::initializeArguments();
        $this->registerArgument('record', 'array', 'The content element record', true);
    }


    /**
     * @param array                     $arguments
     * @param \Closure                  $renderChildrenClosure
     * @param RenderingContextInterface $renderingContext
     * @return bool
     * @throws Exception
     */
    public static function renderStatic(
        array $arguments,
        \Closure $renderChildrenClosure,
        RenderingContextInterface $renderingContext
    ): bool {

        $record = $arguments['record'];
        if (!is_array($record) || empty($record['uid'])) {
            return false;
        }

        $pid = (int)($record['pid'] ?? 0);
        if ($pid > 0) {
            $isLandingpage = false;
            $pageRecord = BackendUtility::getRecord('pages', $pid, 'backend_layout,backend_layout_next_level');
            if ($pageRecord) {
                if (($pageRecord['backend_layout'] ?? '') === 'pagets__landingPages') {
                    $isLandingpage = true;
                } else {
                    $rootline = BackendUtility::BEgetRootLine($pid);
                    foreach ($rootline as $page) {
                        if (($page['backend_layout_next_level'] ?? '') === 'pagets__landingPages' || ($page['backend_layout'] ?? '') === 'pagets__landingPages') {
                            $isLandingpage = true;
                            break;
                        }
                    }
                }
            }
            if (!$isLandingpage) {
                return false;
            }
        } else {
            return false;
        }

        $uid = (int)$record['uid'];
        $colPos = (int)($record['colPos'] ?? 0);
        $container = (int)($record['tx_gridelements_container'] ?? 0);
        $sysLanguageUid = (int)($record['sys_language_uid'] ?? 0);

        $queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tt_content');

        $queryBuilder
            ->select('uid')
            ->from('tt_content')
            ->where(
                $queryBuilder->expr()->eq('pid', $queryBuilder->createNamedParameter($pid)),
                $queryBuilder->expr()->eq('sys_language_uid', $queryBuilder->createNamedParameter($sysLanguageUid)),
                $queryBuilder->expr()->eq('deleted', $queryBuilder->createNamedParameter(0)),
                $queryBuilder->expr()->eq('hidden', $queryBuilder->createNamedParameter(0))
            );

        if ($container > 0) {
            $queryBuilder->andWhere(
                $queryBuilder->expr()->eq('tx_gridelements_container', $queryBuilder->createNamedParameter($container))
            );
        } else {
            $queryBuilder->andWhere(
                $queryBuilder->expr()->eq('colPos', $queryBuilder->createNamedParameter($colPos)),
                $queryBuilder->expr()->eq('tx_gridelements_container', $queryBuilder->createNamedParameter(0))
            );
        }

        $firstUid = (int)$queryBuilder
            ->orderBy('sorting', 'ASC')
            ->setMaxResults(1)
            ->execute()
            ->fetchOne();

        return $firstUid === $uid;
    }
}
