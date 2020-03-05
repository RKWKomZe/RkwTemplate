#############################################################################
// NAVIGATION- MARKER
#############################################################################
page {
    10 {
        variables {
            //==============================================================
            // Content navigation
            //==============================================================
            newsNav = COA_INT
            newsNav {

                10 = HMENU
                10 {
                    special = directory

                    // id or level were we start from
                    special.value = {$newsNavConfig.pid}

                    // pages to exclude
                    excludeUidList >

                    // LEVEL 1
                    1 = TMENU
                    1 {
                        NO {

                            doNotLinkIt = 1
                            stdWrap.cObject = COA
                            stdWrap.cObject {


                                wrap = <div class="box-wrapper">|</div>

                                //======================================
                                // opening link tag
                                10 = COA
                                10 {


                                    10 = COA
                                    10 {
                                        10 = TEXT
                                        10 {
                                            typolink {
                                                parameter.data = field:uid
                                                returnLast = url
                                            }

                                        }
                                        stdWrap.noTrimWrap = | href="|"|

                                    }


                                    20 = RECORDS
                                    20 {
                                        source.field = tx_rkwbasics_department
                                        tables = tx_rkwbasics_domain_model_department
                                        conf.tx_rkwbasics_domain_model_department = TEXT
                                        conf.tx_rkwbasics_domain_model_department {
                                            value = topic-1
                                            override.field = css_class
                                            stdWrap.noTrimWrap = | class="box big |"|
                                        }
                                    }

                                    30 = TEXT
                                    30 {
                                        field = title
                                        stdWrap.noTrimWrap = | title="|"|
                                    }

                                    stdWrap.noTrimWrap = |<a| target="_blank">
                                    stdWrap.required = 1
                                }

                                //======================================
                                // header
                                20 = TEXT
                                20 {
                                    field = title
                                    wrap = <header><p>|</p></header>
                                    stdWrap.crop = 60|...
                                }

                                //======================================
                                // image
                                30 = FILES
                                30 {
                                    references {
                                        table = pages
                                        fieldName = txRkwBasicsTeaserImage
                                        uid.data = field:uid
                                    }

                                    // only one!
                                    maxItems = 1

                                    // render images
                                    renderObj = IMAGE
                                    renderObj {
                                        // picture version
                                        layoutKey = picture

                                        // take current file
                                        file.import.data = file:current:uid
                                        file.treatIdAsReference = 1

                                        // set alt-text and title
                                        altText.data = file:current:title
                                        titleText.data = file:current:alternative

                                        // maximum width for fallback image
                                        file.maxW = 320

                                        // inherit default settings
                                        layout < tt_content.image.20.1.layout
                                        layoutKey < tt_content.image.20.1.layoutKey
                                        sourceCollection < plugin.tx_rkwbasics.libs.responsiveImages.sourceCollection

                                        // redefine settings based on individual maxW
                                        // only override if individual maxW < maxW of breakpoint
                                        sourceCollection {
                                            mobile.maxW.override = 320
                                            mobile.maxW.override.if {
                                                value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.mobile}
                                                isLessThan = 320
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

                                    stdWrap.wrap = <div class="box-content">|</div>
                                }

                                //======================================
                                // footer
                                40 = TEXT
                                40.value = <footer><p class="icon-article">Artikel</p></footer>


                                //======================================
                                // closing A-tag
                                50 = TEXT
                                50.value = </a>

                            }

                        }

                        CUR < .NO
                        CUR = 1
                        CUR {

                        }

                        ACT < .CUR
                        ACT {
                        }
                        ACT = 1

                    }


                    stdWrap.wrap = <section role="complementary" aria-labelledby="headline-news"><div class="section-header"><h2 id="headline-news">{$newsNavConfig.headline}</h2></div><div class="boxes-grid">|</div></section>
                    stdWrap.insertData = 1
                    stdWrap.required = 1
                }
            }
        }
    }
}