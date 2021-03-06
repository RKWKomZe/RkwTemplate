// ############################################################################
// Extending BodyTag-Class//#############################################################################
page {
    bodyTagCObject.10 {
        // Set CSS-Class based on field, including fallback
        30 = RECORDS
        30 {
            source.data = levelfield : -1, tx_rkwbasics_department, slide
            tables = tx_rkwbasics_domain_model_department
            conf.tx_rkwbasics_domain_model_department = TEXT
            conf.tx_rkwbasics_domain_model_department {
                value = topic-1
                override.field = css_class
            }

            stdWrap.noTrimWrap = | ||
        }

        50 = CASE
        50 {
            // slide the template
            key.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
            key.override.field = layout

            // default template file
            default = TEXT
            default.value = project

            1 = TEXT
            1 {
                value = project
            }

            2 = TEXT
            2 {
                value = home page-grid--4
            }

            3 = TEXT
            3 {
                value = page-area
            }

            4 = TEXT
            4 {
                value = publication
            }

            5 = TEXT
            5 {
                value =
            }

            6 = TEXT
            6 {
                value =
            }

            7 = TEXT
            7 {
                value = page-area first-letter-normal
            }

            8 = TEXT
            8 {
                value = project first-letter-normal
            }

            9 = TEXT
            9 {
                value = page-area
            }

            10 = TEXT
            10 {
                value = page-broken-link
            }

            11 = TEXT
            11 {
                value = page-map
            }

            12 = TEXT
            12 {
                value =  project project--full
            }

            200 = TEXT
            200 {
                value =
            }

            210 = COA_INT
            210 {
                10 = TEXT
                10.value {
                    // create nested select db query
                    // 1. get/post author in frontend -> get department field
                    stdWrap {
                        wrap3 = {|}
                        dataWrap = DB:tx_rkwauthors_domain_model_authors:{gp:tx_rkwauthors_rkwauthorsdetail|author}:department
                        dataWrap.intval = 1
                        insertData = 1
                    }

                    // 2. relation to table department -> get field css_class (of department which is part of author)
                    wrap3 = {DB:tx_rkwbasics_domain_model_department:|:css_class}
                    insertData = 1
                }

                20 = TEXT
                20.value = expert
                20.noTrimWrap = | ||
            }

            300 = COA_INT
            300 {
                10 = TEXT
                10.value {
                    // create nested select db query
                    // 1. get/post event in frontend -> get department field
                    stdWrap {
                        wrap3 = {|}
                        dataWrap = DB:tx_rkwevents_domain_model_event:{gp:tx_rkwevents_pi1|event}:department
                        // Intval zerstört Abfrage (anders als bei Authors haben wir hier keinen ObjectStorage bei "department")
                        // @toDo Eigentlich sollte hier schon ein intval stattfinden!!
                        // dataWrap.intval = 1
                        insertData = 1
                    }

                    // 2. relation to table department -> get field css_class (of department which is part of the event)
                    wrap3 = {DB:tx_rkwbasics_domain_model_department:|:css_class}
                    insertData = 1
                }

                20 = TEXT
                20.value = project
                20.noTrimWrap = | ||
            }

            stdWrap.noTrimWrap = | ||
        }


        60 = TEXT
        60 {
            value = microsite
            stdWrap.noTrimWrap = | ||
            if.isTrue = {$plugin.tx_rkwtemplate_config.isMicrosite}
        }

        // CSS clas for grid
        70 = CASE
        70 {
            // slide the template
            key.data = levelfield:-1,tx_rkwbasics_css_class,slide

            // default
            default >

            1 = TEXT
            1 {
                value = page-grid--4
            }
            stdWrap.noTrimWrap = | ||

        }
    }
}

