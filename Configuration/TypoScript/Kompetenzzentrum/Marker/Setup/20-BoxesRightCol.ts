//#############################################################################
// Right col
//#############################################################################
page {
    10 {
        variables {
            //=================================================================
            // Content rendering for right column on topic pages
            //=================================================================
            rightContent {
                renderObj = COA
                renderObj {
                    10 = COA
                    10 {
                        // Headline
                        10 = TEXT
                        10 {
                            field = header
                            wrap = <header><p>|</p></header>
                        }

                        // Footer with icon
                        20 = CASE
                        20 {
                            key.field = layout

                            default = TEXT
                            default.value = <p class="icon-list">Artikel</p>

                            4 = TEXT
                            4.value = <p class="icon-planet">Link</p>

                            5 = TEXT
                            5.value = <p class="icon-file">Download</p>

                            6 = TEXT
                            6.value = <p class="icon-book">Publikation</p>

                            7 = TEXT
                            7.value = <p class="icon-list">Thema</p>

                            stdWrap.wrap = <footer>|</footer>
                        }

                        stdWrap {
                            typolink {
                                parameter.field = header_link
                                ATagParams = class="box"
                                userFunc = RKW\RkwEtracker\UserFunctions\Typolink
                            }
                        }
                    }

                    //=====================================================
                    // Wrap around all
                    stdWrap.outerWrap.cObject = COA
                    stdWrap.outerWrap.cObject {
                        10 = LOAD_REGISTER
                        10.countingRightCol {
                            cObject = TEXT
                            cObject.data = register:countingRightCol
                            cObject.wrap = |+1
                            prioriCalc = intval
                        }

                        20 = CASE
                        20 {
                            key {
                                // Calculation via modulo
                                // Rest of division by 2
                                // Equals 0 for each second object
                                cObject = TEXT
                                cObject.data = register:countingRightCol
                                cObject.wrap = |%2
                                prioriCalc = intval
                            }

                            // default-wrap
                            default = TEXT
                            default.value = |

                            // rest of modulo == 0
                            0 = TEXT
                            0.value = |</div><div class="box-wrapper">
                        }
                    }

                    // online if there is link and header set
                    if.isTrue.field = header_link
                    if.isTrue.isTrue.field = header
                }

                stdWrap.wrap = <div class="box-wrapper">|</div>
                stdWrap.required = 1
            }

            //=================================================================
            // Boxes for right column on publications / articles
            //=================================================================
            relatedBoxes = CONTENT
            relatedBoxes {
                table = tt_content
                select {
                    where = colPos = 7
                    orderBy = sorting
                    languageField = sys_language_uid
                    pidInList = {$boxesRightColConfig.relatedPid}
                }

                renderObj = COA
                renderObj < tt_content.list
                renderObj {
                    // set header
                    10 = TEXT
                    10 {
                        field = header
                        wrap = <div class="related-box-title" id="headline-interesting"><h4 class="h2">|</h4></div>
                        required = 1
                    }

                    // set plugin content
                    20 < tt_content.list.20

                    wrap = <aside class="related-box" aria-labelledby="headline-interesting">|</aside>
                }
            }


            //=================================================================
            // Boxes for right column on events
            //=================================================================
            relatedBoxesEvents < .relatedBoxes
            relatedBoxesEvents {
                select.pidInList = {$boxesRightColConfig.relatedEvents}
            }
        }
    }
}