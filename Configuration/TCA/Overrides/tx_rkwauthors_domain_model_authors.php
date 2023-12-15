<?php

$GLOBALS['TCA']['tx_rkwauthors_domain_model_authors']['columns']['image_boxes']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] = [
    'default' => [
        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:tx_rkwauthors_domain_model_authors.imageBoxes.imageManipulation.teaser',
        'allowedAspectRatios' => [
            '350:350' => [
                'title' => '350 x 350',
                'value' => 350 / 350
            ]
        ]
    ],
];
