<?php
namespace RKW\RkwTemplate\Tests\Integration\Condition\Backend;

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

use Nimut\TestingFramework\TestCase\FunctionalTestCase;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Object\ObjectManager;
use RKW\RkwTemplate\Condition\Backend\BackendLayoutCondition;

/**
 * BackendLayoutTest
 *
 * @author Steffen Kroggel <developer@steffenkroggel.de>
 * @copyright Rkw Kompetenzzentrum
 * @package RKW_RkwTemplate
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class BackendLayoutTest extends FunctionalTestCase
{

    const BASE_PATH = __DIR__ . '/BackendLayoutTest';


    /**
     * @var string[]
     */
    protected $testExtensionsToLoad = [
        'typo3conf/ext/rkw_basics',
        'typo3conf/ext/gridelements',
    ];

    /**
     * @var string[]
     */
    protected $coreExtensionsToLoad = [
    ];



    /**
     * @var \TYPO3\CMS\Extbase\Object\ObjectManager
     */
    private $objectManager;


    /**
     * @var \RKW\RkwTemplate\Condition\Backend\BackendLayoutCondition
     */
    private $subject = null;


    /**
     * Setup
     * @throws \Exception
     */
    protected function setUp()
    {
        parent::setUp();

        $this->importDataSet(self::BASE_PATH . '/Fixtures/Database/Global.xml');
        $this->setUpFrontendRootPage(
            1,
            [
                'EXT:fluid_styled_content/Configuration/TypoScript/',
                'EXT:fluid_styled_content/Configuration/TypoScript/Styling/',
                'EXT:gridelements/Configuration/TypoScript/',
                'EXT:rkw_basics/Configuration/TypoScript/setup.txt',
                'EXT:rkw_templates/Configuration/TypoScript/setup.txt',
                self::BASE_PATH . '/Fixtures/Frontend/Configuration/Rootpage.typoscript',
            ]
        );


        /** @var \TYPO3\CMS\Extbase\Object\ObjectManager $objectManager */
        $this->objectManager = GeneralUtility::makeInstance(ObjectManager::class);
        $this->subject = $this->objectManager->get(BackendLayoutCondition::class);
     }

    //=============================================

    /**
     * @test
     * @throws \Exception
     */
    public function matchConditionChecksForPropertiesOfCurrentPage ()
    {

        /**
         * Scenario:
         *
         * Given the pid given has set a backend layout
         * When I check for that backend layout
         * Then it returns true
         */
        $this->importDataSet(self::BASE_PATH . '/Fixtures/Database/Check10.xml');
        $this::assertTrue($this->subject->matchCondition(['=', 'layout-1', 2]));
        $this::assertFalse($this->subject->matchCondition(['!=', 'layout-1', 2]));

    }


    /**
     * @test
     * @throws \Exception
     */
    public function matchConditionChecksForPropertiesOfCurrentPageEvenIfBackendLayoutIsInherited ()
    {

        /**
         * Scenario:
         *
         * Given the given page has a parent page
         * Given the parent page has a backend layout that is inherited
         * Given the given page has set a own backend layout
         * When I check for the backend layout of the given page
         * Then it returns true
         */
        $this->importDataSet(self::BASE_PATH . '/Fixtures/Database/Check10.xml');
        $this::assertTrue($this->subject->matchCondition(['=', 'layout-2', 3]));
        $this::assertFalse($this->subject->matchCondition(['!=', 'layout-2', 3]));

    }

    /**
     * @test
     * @throws \Exception
     */
    public function matchConditionChecksForPropertiesOfCurrentPageEvenIfBackendLayoutIsInheritedAndConditionDoesNotMatch ()
    {

        /**
         * Scenario:
         *
         * Given the given page has a parent page
         * Given the parent page has a backend layout that is inherited
         * Given the given page has set a own backend layout
         * When I check for a backend layout that does not match the one of the given page
         * Then it returns false
         */
        $this->importDataSet(self::BASE_PATH . '/Fixtures/Database/Check10.xml');
        $this::assertFalse($this->subject->matchCondition(['=', 'layout-1', 3]));
        $this::assertTrue($this->subject->matchCondition(['!=', 'layout-1', 3]));

    }

    /**
     * @test
     * @throws \Exception
     */
    public function matchConditionForInheritedPropertiesIfNoBackendLayoutIsDefinedInCurrentPage ()
    {

        /**
         * Scenario:
         *
         * Given the given page has a parent page
         * Given the parent page has a backend layout that is inherited
         * Given the given page has set no own backend layout
         * When I check for the backend layout of the parent page
         * Then it returns true
         */
        $this->importDataSet(self::BASE_PATH . '/Fixtures/Database/Check10.xml');
        $this::assertTrue($this->subject->matchCondition(['=', 'layout-1', 4]));
        $this::assertFalse($this->subject->matchCondition(['!=', 'layout-1', 4]));

    }

    //=============================================


    /**
     * @test
     */
    public function getPidReturnsIdFromGetParams ()
    {

        /**
         * Scenario:
         *
         * Given a page-id-param is set via GET
         * Given no edit-param is set via GET
         * When I call getPid
         * Then the pid set by page-id-param is returned
         */
        $_GET['id'] = 5;
        $this::assertEquals(5, $this->subject->getPid());

    }

    /**
     * @test
     */
    public function getPidReturnsIdFromGetParamsIfEditTableIsNotTtContent ()
    {

        /**
         * Scenario:
         *
         * Given a page-id-param is set via GET
         * Given a edit-param is set via GET
         * Given the table defined in edit-param is set to pages via GET
         * When I call getPid
         * Then the pid set by page-id-param is returned
         */
        $_GET['id'] = 5;
        $_GET['edit']['pages'][1] = 'edit';
        $this::assertEquals(5, $this->subject->getPid());

    }

    /**
     * @test
     */
    public function getPidReturnsIdFromGetParamsIfEditUidIsZero ()
    {

        /**
         * Scenario:
         *
         * Given a page-id-param is set via GET
         * Given a edit-param is set via GET
         * Given the table defined in edit-param is set to tt_content via GET
         * Given the uid defined in edit-param is set to zero via GET
         * When I call getPid
         * Then the pid set by page-id-param is returned
         */
        $_GET['id'] = 5;
        $_GET['edit']['tt_content'][0] = 'edit';
        $this::assertEquals(5, $this->subject->getPid());
    }

    /**
     * @test
     */
    public function getPidReturnsIdFromGetParamsIfEditUidIsNonExistent ()
    {

        /**
         * Scenario:
         *
         * Given a page-id-param is set via GET
         * Given a edit-param is set via GET
         * Given the table defined in edit-param is set to tt_content via GET
         * Given the uid defined in edit-param is set to a non-existent content-record-id via GET
         * When I call getPid
         * Then the pid set by page-id-param is returned
         */
        $_GET['id'] = 5;
        $_GET['edit']['tt_content'][9999] = 'edit';
        $this::assertEquals(5, $this->subject->getPid());
    }

    /**
     * @test
     * @throws \Exception
     */
    public function getPidReturnsIdFromRecordIfEditUidIsExistent ()
    {

        /**
         * Scenario:
         *
         * Given a page-id is set via GET
         * Given a edit-param is set via GET
         * Given the table defined in edit-param is set to tt_content via GET
         * Given the uid defined in edit-param is set to the id of an existent content-record via GET
         * When I call getPid
         * Then the pid of the content-record set via edit-param is returned
         */
        $this->importDataSet(self::BASE_PATH . '/Fixtures/Database/Check20.xml');
        $_GET['id'] = 5;
        $_GET['edit']['tt_content'][15] = 'edit';
        $this::assertEquals(2, $this->subject->getPid());
    }


    /**
     * @test
     * @throws \Exception
     */
    public function getPidReturnsIdFromGetParamsIfActionIsNew ()
    {

        /**
         * Scenario:
         *
         * Given a page-id is set via GET
         * Given a edit-param is set via GET
         * Given the table defined in edit-param is set to tt_content via GET
         * Given the uid defined in edit-param is set to the id of an existent content-record via GET
         * When I call getPid
         * Then the pid of the content-record set via edit-param is returned
         */
        $this->importDataSet(self::BASE_PATH . '/Fixtures/Database/Check20.xml');
        $_GET['id'] = 5;
        $_GET['edit']['tt_content'][15] = 'new';
        $this::assertEquals(5, $this->subject->getPid());
    }


    //=============================================

    /**
     * TearDown
     */
    protected function tearDown()
    {
        parent::tearDown();
    }



}