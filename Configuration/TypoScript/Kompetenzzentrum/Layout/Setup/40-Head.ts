#############################################################################
// Head-Data
#############################################################################
page {
    //===============================================================
    // Meta-Tags
    //===============================================================
    meta {
        keywords.data = levelfield:-1, keywords, slide

        description.data = levelfield:-1, tx_rkwbasics_teaser_text, slide
        description.override {
            field = description
            if.isTrue.field = description
        }

        robots = index,follow,noodp,noydir
        google = notranslate
    }

    //===============================================================
    // Other
    //===============================================================
    headerData {


        //===============================================================
        // title-Tag
        //===============================================================
        100 >
        100 = COA_INT
        100 {

            // prepend publication title on publication pages
            // For import-sub-pages only!
            5 = COA
            5 {

                10 = USER
                10 {
                    userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                    extensionName = BmPdf2content
                    pluginName = Pi1
                    vendorName = BM
                    controller = DisplayPages
                    switchableControllerActions {
                        // Again: Controller-Name and Action
                        DisplayPages {
                            1 = importParentPage
                        }
                    }

                    view =< plugin.tx_bmpdf2content.view
                    persistence =< plugin.tx_bmpdf2content.persistence
                    settings =< plugin.tx_bmpdf2content.settings
                    settings.importParentPage.showField = title
                }

                stdWrap.noTrimWrap = ||: |
                if {
                    value = 1
                    equals.field = tx_bmpdf2content_is_import_sub
                }
            }

            // title
            10 = TEXT
            10 {

                field = title
            }

            // additional title for events
            11 = COA
            11 {

                10 = TEXT
                10 {
                    dataWrap = DB:tx_rkwevents_domain_model_event:{gp:tx_rkwevents_pi1|event}:title
                    wrap3 = {|}
                    insertData=1
                }

                stdWrap.noTrimWrap = |: | - Veranstaltung |
                stdWrap.required = 1
            }

            // additional title for consultation
            12 = COA
            12 {

                10 = TEXT
                10 {
                    dataWrap = DB:tx_rkwconsultant_domain_model_consultant:{gp:tx_rkwconsultant_rkwconsultant|consultant}:company
                    wrap3 = {|}
                    insertData=1
                }

                stdWrap.noTrimWrap = |: | - Beratung |
                stdWrap.required = 1
            }

            // additional title for authors
            13 = COA
            13 {

                10 = TEXT
                10 {
                    dataWrap = DB:tx_rkwauthors_domain_model_authors:{gp:tx_rkwauthors_rkwauthorsdetail|author}:first_name
                    wrap3 = {|}
                    insertData=1
                }

                stdWrap.noTrimWrap = |: ||
                stdWrap.required = 1
            }

            14 = COA
            14 {

                10 = TEXT
                10 {
                    dataWrap = DB:tx_rkwauthors_domain_model_authors:{gp:tx_rkwauthors_rkwauthorsdetail|author}:last_name
                    wrap3 = {|}
                    insertData=1
                }

                stdWrap.noTrimWrap = | | - Ansprechpartner |
                stdWrap.required = 1
            }


            // additional label for publication main pages
            // in order to avoid conflicts with blog-articles
            20 = TEXT
            20 {

                value = Publikation
                stdWrap.noTrimWrap = | - ||

                if {
                    value = 1
                    equals {

                        field = tx_bmpdf2content_is_import
                    }

                }
            }


            // add department
            25 = COA
            25 {
                10 = RECORDS
                10 {
                    source.data = levelfield: -1 , tx_rkwbasics_department, slide
                    tables = tx_rkwbasics_domain_model_department
                    conf.tx_rkwbasics_domain_model_department = COA
                    conf.tx_rkwbasics_domain_model_department {

                        // not on common pages (department uid = 6)
                        10 = TEXT
                        10 {
                            field = name
                            required = 1

                            if {
                                value = 6
                                equals.field = uid
                                negate = 1
                            }

                        }

                        // for common pages we add the name of the company
                        20 = TEXT
                        20 {
                            value = RKW Kompetenzzentrum

                            if {
                                value = 6
                                equals.field = uid
                            }
                        }

                        stdWrap.noTrimWrap = | - ||
                    }
                }
            }


            // global wrapper
            stdWrap.wrap = <title>|</title>

            // specialchars for title
            stdWrap.htmlSpecialChars = 1

        }



        // Viewport
        500 = TEXT
        500.value (
			<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1">
        )

        // Pagename for OpenGraph
        5000.40.value = RKW Kompetenzzentrum

        // Publisher for OpenGraph
        5000.70.value = https://www.facebook.com/RKWexperten

        // Facebook Instant Articles
        5500 = TEXT
        5500.value = <meta property="fb:pages" content="436969943109294" />
    }
}