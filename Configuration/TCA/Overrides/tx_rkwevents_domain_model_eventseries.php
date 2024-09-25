<?php
$GLOBALS['TCA']['tx_rkwevents_domain_model_eventseries']['columns']['header_image']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] = [

    'articleDesktop' => [
        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:pages.keyvisual.imageManipulation.articleDesktop',
        'allowedAspectRatios' => [
            '1095:590' => [
                'title' => '1095 x 590',
                'value' => 1095 / 590
            ]
        ]
    ],

];
