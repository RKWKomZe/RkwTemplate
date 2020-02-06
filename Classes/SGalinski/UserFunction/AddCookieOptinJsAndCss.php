<?php

namespace RKW\RkwTemplate\SGalinski\UserFunction;

/***************************************************************
 *  Copyright notice
 *
 *  (c) sgalinski Internet Services (https://www.sgalinski.de)
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

use SGalinski\SgCookieOptin\Service\LicensingService;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Database\DatabaseConnection;
use TYPO3\CMS\Core\Database\Query\Restriction\DeletedRestriction;
use TYPO3\CMS\Core\SingletonInterface;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\VersionNumberUtility;
use TYPO3\CMS\Frontend\Controller\TypoScriptFrontendController;

/**
 * Adds the Cookie Optin JavaScript if it's generated for the current page.
 */
class AddCookieOptinJsAndCss extends \SGalinski\SgCookieOptin\UserFunction\AddCookieOptinJsAndCss {


    protected function getFirstStoragePid ()
    {
        /** @var \TYPO3\CMS\Extbase\Object\ObjectManager $objectManager */
        $objectManager = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\Object\ObjectManager::class);

        /** @var \TYPO3\CMS\Extbase\Configuration\ConfigurationManager $configurationManager */
        $configurationManager = $objectManager->get(\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::class);
        $settings = $configurationManager->getConfiguration(
            \TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::CONFIGURATION_TYPE_FRAMEWORK,
            'sgcookieoptin'
        );

        if ($settings['persistence']['storagePid']) {
            $pidArray = GeneralUtility::trimExplode(',', $settings['persistence']['storagePid']);
            if ($pid = intval($pidArray[0])){
                return $pid;
            }
        }

        return -1;

    }

	/**
	 * Returns true, if a configuration is on the given page id.
	 *
	 * @param int $pageUid
	 *
	 * @return boolean
	 */
	protected function isConfigurationOnPage($pageUid)
    {
        $pageUid = (int)$pageUid;
        if ($pageUid <= 0) {
            return false;
        }

        if ($confPid = $this->getFirstStoragePid()) {
            $pageUid = $confPid;
        }

        return parent::isConfigurationOnPage($pageUid);
	}


    /**
     * Returns always the first page within the rootline
     *
     * @return int
     */
    protected function getRootPageId() {
        if ($this->rootpage === NULL) {

            if ($siteRootId = $this->getFirstStoragePid()) {
                $this->rootpage = $siteRootId;
            }
        }

        return parent::getRootPageId();
    }
}
