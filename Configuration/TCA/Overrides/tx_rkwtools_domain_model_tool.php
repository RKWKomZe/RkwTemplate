<?php

$GLOBALS['TCA']['tx_rkwtools_domain_model_tool']['columns']['image']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] = [
    'default' => [
        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:tx_rkwtools_domain_model_tool.keyvisual.imageManipulation.teaser',
        'allowedAspectRatios' => [
            '350:192' => [
                'title' => '350 x 192',
                'value' => 350 / 192
            ]
        ]
    ],
];