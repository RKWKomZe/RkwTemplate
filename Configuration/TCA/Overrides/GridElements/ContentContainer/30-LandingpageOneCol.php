<?php

//===============================================================
// Define element fields
//===============================================================
$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1'] = [
    'showitem' => '
    	--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.header;header,
        subheader,
        tx_gridelements_backend_layout,
        pi_flexform,
        tx_gridelements_children,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.appearanceLinks;appearanceLinks,
        tx_rkwtemplate_styles,
        --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.images,
        image,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,--palette--;;language,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
        --palette--;;hidden,
        --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,
        --div--;LLL:EXT:lang/Resources/Private/Language/locallang_tca.xlf:sys_category.tabs.category,
        categories,
        --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,rowDescription
	',
    'columnsOverrides' => [
        'image' => [
            'config' => [
                'minitems' => 0,
                'maxitems' => 1,
                'overrideChildTca' => [
                    'columns' => [
                        'title' => [
                            'config' => [
                                'type' => 'passthrough'
                            ]
                        ],
                        'link' => [
                            'config' => [
                                'type' => 'passthrough'
                            ]
                        ],
                        'description' => [
                            'config' => [
                                'type' => 'passthrough'
                            ]
                        ],
                        'alternative' => [
                            'config' => [
                                'type' => 'passthrough'
                            ]
                        ],
                        'crop' => [
                            'config' => [

                                // original file dimensions: 1050 x 500
                                'cropVariants' => [
                                    'default' => [
                                        'title' => 'LLL:EXT:rkw_template/Resources/Private/Language/locallang_db.xlf:contentElement.imageList.imageManipulation.default',
                                        'allowedAspectRatios' => [
                                            '1050:500' => [
                                                'title' => '1050 x 500',
                                                'value' => 1050 / 500
                                            ]
                                        ],
                                        'coverAreas' => [
                                            [
                                                'x' => 0.6,
                                                'y' => 0,
                                                'width' => 0.4,
                                                'height' => 1,
                                            ],
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
];
