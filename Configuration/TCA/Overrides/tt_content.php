<?php

/**
 * @see: vendor/typo3/cms/typo3/sysext/frontend/Configuration/TCA/tt_content.php
 */

//===============================================================
// Defaults for grid elements
//===============================================================

$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1']['columnsOverrides'] = [
    'date' => [
        'config' => [
            'type' => 'passthrough'
        ]
    ],
    'subheader' => [
        'config' => [
            'type' => 'passthrough'
        ]
    ],
    'header_link' => [
        'config' => [
            'type' => 'passthrough'
        ]
    ],
    'header' => [
        'config' => [
            'eval' => 'required',
        ]
    ]
];

//===============================================================
// Include Custom Content Containers
//===============================================================
foreach (glob(__DIR__ . "/GridElements/ContentContainer/*.php") as $filename) {
    include_once $filename;
}

//===============================================================
// Include Custom Content Elements
//===============================================================
foreach (glob(__DIR__ . "/ContentElements/*.php") as $filename) {
    include_once $filename;
}
