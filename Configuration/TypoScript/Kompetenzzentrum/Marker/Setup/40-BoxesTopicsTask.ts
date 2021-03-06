//############################################################################
// Content
//############################################################################
page {
    10 {
        variables {


            //=================================================================
            // Box with task
            //=================================================================
            boxTask = CONTENT
            boxTask {
                table = tt_content
                select {
                    where = colPos = 12
                    pidInList = {$boxesTopicsTaskConfig.pid}
                    orderBy = sorting
                    languageField = sys_language_uid
                }

                renderObj = CASE
                renderObj {
                    key.field = CType

                    // default: ignore all
                    default = COA
                    default >

                    // render only image
                    text = COA
                    text {
                        // set header
                        10 = TEXT
                        10 {
                            field = header
                            wrap = <h1 class="home__header" id="headline-statement">|</h1>
                            required = 1
                        }

                        // set content
                        20 = TEXT
                        20 {
                            field = bodytext
                            wrap = <div class="home__text">|</div>
                            required = 1

                            # HTML-Parsing
                            stdWrap.parseFunc =< lib.parseFunc_RTE
                            stdWrap.HTMLparser = 1
                            stdWrap.HTMLparser {
                                keepNonMatchedTags = 0
                                allowTags = a,p,h2
                                nesting = 0
                                htmlSpecialChars = 0
                                xhtml_cleaning = 0
                            }
                        }
                    }
                }

                stdWrap {
                    wrap = <div class="home__aufgabe">|</div>
                    required = 1
                }
            }


            //==========================================================
            // Topic boxes
            //==========================================================
            boxTopics = COA
            boxTopics {

                10 = TEXT
                10 {
                    value = {$boxesTopicsTaskConfig.topicHeadline}
                    wrap =  <h2 class="section-header section-header--center" id="headline-topics">|</h4>
                    required = 1
                }

                20 = CONTENT
                20 {
                    table = tt_content
                    select {
                        where = colPos = 13
                        pidInList = {$boxesTopicsTaskConfig.pid}
                        orderBy = sorting
                        languageField = sys_language_uid
                    }

                    // individual parsing
                    renderObj = CASE
                    renderObj {
                        key.field = CType

                        // default: ignore all
                        default = COA
                        default >

                        // render only image
                        textpic = COA
                        textpic {

                            //==========================================================
                            // Split link in order to add additional CSS classes
                            5 = LOAD_REGISTER
                            5 {
                                homeBoxLinkUid.stdWrap.field = header_link
                                homeBoxLinkUid.split {
                                    token.char = 32
                                    cObjNum = 1||*

                                    1 = TEXT
                                    1.current = 1
                                }

                                homeBoxLinkTarget.stdWrap.field = header_link
                                homeBoxLinkTarget.split {
                                    token.char = 32
                                    cObjNum = 1||2||*

                                    2 = TEXT
                                    2.current = 1
                                }

                                homeBoxLinkClass.stdWrap.field = header_link
                                homeBoxLinkClass.split {
                                    token.char = 32
                                    cObjNum = 1||2||3||*

                                    3 = TEXT
                                    3.current = 1
                                }

                                homeBoxLinkTitle.stdWrap.field = header_link
                                homeBoxLinkTitle.split {
                                    token.char = 32
                                    cObjNum = 1||2||3||4

                                    4 = TEXT
                                    4.current = 1
                                }
                            }

                            //==========================================================
                            // load images via FAL
                            10 = FILES
                            10 {
                                references {
                                    table = tt_content
                                    uid.data = field:uid
                                    fieldName = image
                                }

                                // only one!
                                maxItems = 1

                                // render images
                                renderObj = COA
                                renderObj {
                                    10 = IMAGE
                                    10 {
                                        // picture version
                                        layoutKey = picture

                                        // take current file
                                        file.import.data = file:current:uid
                                        file.treatIdAsReference = 1

                                        // set alt-Text and title
                                        altText.data = register:homeBoxLinkTitle
                                        title.data = register:homeBoxLinkTitle

                                        // set maxW of fallback image
                                        file.maxW = 570
                                        file.maxH = 320

                                        // inherit default settings
                                        layout < tt_content.image.20.1.layout
                                        layoutKey < tt_content.image.20.1.layoutKey
                                        sourceCollection < plugin.tx_rkwbasics.libs.responsiveImages.sourceCollection

                                        // redefine settings based on individual maxW
                                        // only override if individual maxW < maxW of breakpoint
                                        sourceCollection {
                                            mobile.maxW.override = 570
                                            mobile.maxW.override.if {
                                                value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.mobile}
                                                isLessThan = 570
                                            }

                                            mobileRetina2.maxW.override < .mobile.maxW.override

                                            tablet.maxW.override < .mobile.maxW.override
                                            tablet.maxW.override.if.value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.tablet}
                                            tabletRetina2.maxW.override < .tablet.maxW.override
                                            tabletRetina3.maxW.override < .tablet.maxW.override

                                            desktop.maxW.override < .mobile.maxW.override
                                            desktop.maxW.override.if.value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.desktop}
                                            desktopRetina2.maxW.override < .desktop.maxW.override
                                        }


                                    }
                                }
                                stdWrap.wrap = <figure>|</figure>
                                stdWrap.required = 1

                                // link
                                stdWrap.typolink {
                                    parameter = {register:homeBoxLinkUid} {register:homeBoxLinkTarget} - {register:homeBoxLinkTitle}
                                    parameter.insertData = 1

                                    // eTracker
                                    userFunc < lib.parseFunc_RTE.tags.link.typolink.userFunc
                                }
                            }

                            //==========================================================
                            // set content
                            20 = COA
                            20 {

                                // header
                                10 = TEXT
                                10 {
                                    field = header
                                    required = 1
                                    wrap =  <h3 class="feature-box__title">|</h3>

                                    // link
                                    stdWrap.typolink {
                                        parameter = {register:homeBoxLinkUid} {register:homeBoxLinkTarget} "feature-box__link" {register:homeBoxLinkTitle}
                                        parameter.insertData = 1

                                        // eTracker
                                        userFunc < lib.parseFunc_RTE.tags.link.typolink.userFunc
                                    }
                                }

                                // further description
                                20 = TEXT
                                20 {
                                    field = bodytext
                                    required = 1
                                    wrap =  <div class="feature-box__description">|</div>

                                    stdWrap.parseFunc =< lib.parseFunc_RTE
                                    stdWrap.HTMLparser = 1
                                    stdWrap.HTMLparser {
                                        keepNonMatchedTags = 0
                                        allowTags = a,p
                                        nesting = 0
                                        htmlSpecialChars = 0
                                        xhtml_cleaning = 0
                                    }
                                }

                                stdWrap.wrap = <div class="feature-box__content">|</div>
                            }

                            // set wrap and link
                            stdWrap.outerWrap = <div class="feature-box {register:homeBoxLinkClass}">|</div>
                            stdWrap.outerWrap.insertData = 1

                            // only if link is set
                            if.isTrue.field = header_link
                        }

                        image < .textpic
                        image.20.20 >
                    }

                    stdWrap {
                        wrap = <div class="boxes-home">|</div>
                        required = 1
                    }
                }

                stdWrap {
                    wrap = <section aria-labelledby="headline-topics" class="section-colored padding-mobile">|</section>
                    required = 1
                }
            }


            //=================================================================
            // Boxes with task only - special case for RKW Map
            //=================================================================
            boxIntroductionMap < .boxTask
            boxIntroductionMap {

                renderObj {
                    text {
                        10 {
                            wrap = <h2 id="headline-statement">|</h2>
                        }

                        20 {
                            wrap = <p>|</p>
                        }
                    }
                }

                stdWrap >

            }

            //=================================================================
            // Boxes overview - special case for RKW Map
            //=================================================================
            boxOverviewBoxesMap  = COA
            boxOverviewBoxesMap {

                10 = CONTENT
                10 {
                    table = tt_content
                    select {
                        where = colPos = 13
                        pidInList = {$boxesTopicsTaskConfig.pid}
                        orderBy = sorting
                        languageField = sys_language_uid
                    }

                    // individual parsing
                    renderObj = CASE
                    renderObj {
                        key.field = CType

                        // default: ignore all
                        default = COA
                        default >

                        // render only image
                        text = COA
                        text {

                            // set header
                            10 = TEXT
                            10 {
                                field = header
                                wrap = <header><p>|</p></header>
                                required = 1
                            }

                            // set content
                            20 = TEXT
                            20 {
                                field = bodytext
                                wrap = <div class="box__content">|</div>
                                required = 1

                                # HTML-Parsing
                                stdWrap.parseFunc =< lib.parseFunc_RTE
                                stdWrap.HTMLparser = 1
                                stdWrap.HTMLparser {
                                    keepNonMatchedTags = 0
                                    allowTags = a,p
                                    nesting = 0
                                    htmlSpecialChars = 0
                                    xhtml_cleaning = 0
                                }
                            }

                            // set footer
                            30 = TEXT
                            30 {

                                field = tx_rkwbasics_header_link_caption

                                // set wrap and link
                                stdWrap.outerWrap = <footer><p>|</p></footer>
                                stdWrap.typolink {
                                    parameter.field = header_link
                                    parameter.insertData = 1
                                    ATagBeforeWrap = 1
                                    ATagParams = class="button"
                                    wrap = <span>|</span>

                                    // eTracker
                                    userFunc < lib.parseFunc_RTE.tags.link.typolink.userFunc
                                }

                                // only if link is set
                                if.isTrue.field = tx_rkwbasics_header_link_caption
                                if.isTrue.if.isTrue.field = header_link


                            }

                        }

                        stdWrap {
                            wrap = <div class="box">|</div>
                            required = 1
                        }
                    }
                }
            }

            //==========================================================
            // Special boxes
            //==========================================================
            boxSpecial = TEXT

        }
    }
}

// add topics to search-not-found-page!
TxRkwSearchNotFoundPage {
    30 < page.10.variables.boxTopics
    30.wrap = <section role="heading" aria-labelledby="headline-statement">|</section>
}