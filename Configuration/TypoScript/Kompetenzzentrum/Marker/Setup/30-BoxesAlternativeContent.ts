//############################################################################
// Content
//############################################################################
page {
    10 {
        variables {
            // Delete unused markers
            leftContent >
            borderContent >


            //=================================================================
            // Additional boxes below the contents
            //=================================================================
            boxContent = CONTENT
            boxContent {
                slide = -1
                table = tt_content
                select {
                    where = colPos = 6
                    orderBy = sorting
                    languageField = sys_language_uid
                }

                renderObj = COA
                renderObj < tt_content.list
                renderObj {
                    5 = LOAD_REGISTER
                    5 {
                        contentCounterBoxes.data = register:contentCounterBoxes
                        contentCounterBoxes.stdWrap.wrap = |+1
                        contentCounterBoxes.prioriCalc = 1
                    }

                    // set header
                    10 = TEXT
                    10 {
                        field = header
                        wrap = <h4 class="section-header h2" id="box-normal-{register:contentCounterBoxes}">|</h4>
                        wrap.insertData = 1
                        required = 1
                    }

                    // set plugin content
                    20 < tt_content.list.20

                    wrap = <section class="section" role="complementary">|</section>
                }
            }

            //=================================================================
            // Additional boxes below the contents
            //=================================================================
            boxContentPublications < .boxContent
            boxContentPublications {

                select {
                    where = colPos = 3
                }
            }

            //=================================================================
            // Additional boxes below the contents for articles
            //=================================================================
            boxContentArticles < .boxContent
            boxContentArticles {

                select {
                    where = colPos = 17
                }
            }

            //=================================================================
            // Additional boxes below the contents
            //=================================================================
            boxContentPrio = CONTENT
            boxContentPrio {
                slide = -1
                table = tt_content
                select {
                    where = colPos = 9
                    orderBy = sorting
                    languageField = sys_language_uid
                }

                renderObj = COA
                renderObj < tt_content.list
                renderObj {
                    5 = LOAD_REGISTER
                    5 {
                        contentCounterBoxesPrio.data = register:contentCounterBoxesPrio
                        contentCounterBoxesPrio.stdWrap.wrap = |+1
                        contentCounterBoxesPrio.prioriCalc = 1
                    }

                    // set header
                    10 = TEXT
                    10 {
                        field = header
                        wrap = <h4 class="section-header h2" id="box-prio-{register:contentCounterBoxesPrio}">|</h4>
                        required = 1
                    }

                    // set plugin content
                    20 < tt_content.list.20

                    wrap = <section class="section" role="complementary">|</section>
                }
            }

            //=================================================================
            // plugin only
            //=================================================================
            pluginOnly = CONTENT
            pluginOnly {
                slide = -1
                table = tt_content
                select {
                    where = colPos = 6
                    orderBy = sorting
                    languageField = sys_language_uid
                }

                renderObj = COA
                renderObj {

                    10 = TEXT
                    10 {
                        field = header
                        stdWrap.wrap = <h2 class="section-header">|</h2>
                        stdWrap.required = 1
                    }

                    // set plugin content
                    20 < tt_content.list.20
                }
            }

            //=================================================================
            // plugin only
            //=================================================================
            htmlOnly = CONTENT
            htmlOnly {
                slide = -1
                table = tt_content
                select {
                    where = colPos = 15
                    orderBy = sorting
                    languageField = sys_language_uid
                }

                renderObj = CASE
                renderObj {

                    key.field = CType

                    // default: ignore all
                    default = COA
                    default >

                    // render only html
                    html = COA
                    html {

                        10 = TEXT
                        10.field = header
                        10.wrap = <h2 class="section-header">|</h2>

                        20 = TEXT
                        20.field = bodytext
                    }
                }
            }

            //=================================================================
            // News-Content
            //=================================================================
            newsContent = CONTENT
            newsContent {

                table = tt_content
                select {
                    where = colPos = 16
                    orderBy = sorting
                    languageField = sys_language_uid
                }

                renderObj = COA
                renderObj < tt_content.list
                renderObj {

                    // set header
                    10 = TEXT
                    10 {
                        field = header
                        wrap = <h2 class="section-header" id="headline-news">|</h2>
                        wrap.insertData = 1
                        required = 1
                    }


                    // set plugin content
                    20 < tt_content.list.20

                }
            }

            //=================================================================
            // News-Content
            //=================================================================
            callToAction = CONTENT
            callToAction {

                table = tt_content
                select {
                    where = colPos = 18
                    orderBy = sorting
                    languageField = sys_language_uid
                }

                // rendering for plugins, but without headline
                renderObj = COA
                renderObj < tt_content.list
                renderObj.10 >
            }
        }
    }
}