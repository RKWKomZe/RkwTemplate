<?php
declare(strict_types=1);

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

namespace RKW\RkwTemplate\ViewHelpers;

use Madj2k\CopyrightGuardian\Domain\Repository\MediaSourceRepository;
use TYPO3\CMS\Core\Resource\FileInterface;
use TYPO3\CMS\Core\Resource\FileReference as CoreFileReference;
use TYPO3\CMS\Core\Resource\ResourceFactory;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Domain\Model\FileReference as ExtbaseFileReference;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * CopyrightViewHelper
 *
 * Renders copyright metadata as an overlay for a FAL file or file reference.
 *
 * @author Maximilian Fäßler <maximilian@faesslerweb.de>
 * @copyright RKW Kompetenzzentrum
 * @package RKW_Template
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class CopyrightViewHelper extends AbstractViewHelper
{
    /**
     * Avoid repeated repository queries when many images use the same source.
     *
     * @var array<int, array{name: string, url: string}>
     */
    protected static $mediaSourceCache = [];


    /**
     * The generated link markup must not be escaped by Fluid.
     *
     * @var bool
     */
    protected $escapeOutput = false;


    /**
     * Initializes the ViewHelper arguments.
     *
     * @return void
     */
    public function initializeArguments(): void
    {
        parent::initializeArguments();
        $this->registerArgument('file', 'mixed', 'FAL file, file reference or UID', true);
        $this->registerArgument('treatIdAsReference', 'bool', 'Treat a numeric UID as sys_file_reference', false, true);
        $this->registerArgument('class', 'string', 'Additional CSS class', false, '');
    }


    /**
     * Renders the copyright metadata as an image or video overlay.
     *
     * @return string
     */
    public function render(): string
    {
        $file = $this->resolveFile($this->arguments['file'], (bool)$this->arguments['treatIdAsReference']);
        if (!$file || $this->isCopyrightDisabled($file)) {
            return '';
        }

        $creator = $file->hasProperty('tx_copyrightguardian_creator')
            ? trim((string)$file->getProperty('tx_copyrightguardian_creator'))
            : '';
        $sourceName = '';
        $sourceUrl = '';
        $sourceUid = $file->hasProperty('tx_copyrightguardian_source')
            ? (int)$file->getProperty('tx_copyrightguardian_source')
            : 0;

        if ($sourceUid > 0) {
            if (!isset(self::$mediaSourceCache[$sourceUid])) {
                self::$mediaSourceCache[$sourceUid] = ['name' => '', 'url' => ''];

                /** @var MediaSourceRepository $mediaSourceRepository */
                $mediaSourceRepository = GeneralUtility::makeInstance(MediaSourceRepository::class);
                $mediaSource = $mediaSourceRepository->findByUid($sourceUid);
                if ($mediaSource) {
                    self::$mediaSourceCache[$sourceUid] = [
                        'name' => trim($mediaSource->getName()),
                        'url' => trim($mediaSource->getUrl()),
                    ];
                }
            }

            $sourceName = self::$mediaSourceCache[$sourceUid]['name'];
            $sourceUrl = self::$mediaSourceCache[$sourceUid]['url'];
        }

        $parts = array_values(array_filter([$creator, $sourceName]));
        if (!$parts) {
            return '';
        }

        $text = '© ' . implode(' / ', $parts);
        $content = htmlspecialchars($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');

        if ($sourceUrl !== '') {
            /** @var ContentObjectRenderer $contentObjectRenderer */
            $contentObjectRenderer = GeneralUtility::makeInstance(ContentObjectRenderer::class);
            $content = $contentObjectRenderer->typoLink($content, [
                'parameter' => $sourceUrl,
                'ATagParams' => 'class="media-source-link"',
            ]);
        }

        $additionalClass = preg_replace('/[^a-zA-Z0-9_-]/', '', (string)$this->arguments['class']);
        $class = 'media-source' . ($additionalClass !== '' ? ' ' . $additionalClass : '');

        return '<small class="' . $class . '">' . $content . '</small>';
    }


    /**
     * Resolves a FAL file or file reference from the supplied value.
     *
     * @param mixed $file FAL file, file reference or UID
     * @param bool $treatIdAsReference Treat a numeric UID as sys_file_reference
     * @return FileInterface|null
     * @throws \InvalidArgumentException
     * @throws \TYPO3\CMS\Core\Resource\Exception\FileDoesNotExistException
     * @throws \TYPO3\CMS\Core\Resource\Exception\ResourceDoesNotExistException
     */
    protected function resolveFile($file, bool $treatIdAsReference): ?FileInterface
    {
        if ($file instanceof ExtbaseFileReference) {
            return $file->getOriginalResource();
        }

        if ($file instanceof FileInterface) {
            return $file;
        }

        if (!is_numeric($file) || (int)$file < 1) {
            return null;
        }

        /** @var ResourceFactory $resourceFactory */
        $resourceFactory = GeneralUtility::makeInstance(ResourceFactory::class);
        if ($treatIdAsReference) {
            return $resourceFactory->getFileReferenceObject((int)$file);
        }

        return $resourceFactory->getFileObject((int)$file);
    }


    /**
     * Checks whether copyright output is disabled for a file reference.
     *
     * @param FileInterface $file FAL file or file reference
     * @return bool
     */
    protected function isCopyrightDisabled(FileInterface $file): bool
    {
        return $file instanceof CoreFileReference
            && $file->hasProperty('tx_copyrightguardian_images_no_copyright')
            && (bool)$file->getProperty('tx_copyrightguardian_images_no_copyright');
    }
}
