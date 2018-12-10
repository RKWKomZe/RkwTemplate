//############################################################################
// Slider
///############################################################################
page {
    10 {
        variables {
            sliderHome = CONTENT
            sliderHome {
                table = tt_content

                select {
                    where = colPos = 4
                    orderBy = sorting
                    languageField = sys_language_uid
                }

                // individual parsing
                renderObj = COA
                renderObj {

                    //==========================================================
                    // Split link in order to add additional CSS classes
                    5 = LOAD_REGISTER
                    5 {
                        sliderLink.stdWrap.field = header_link
                        sliderLink.split {
                            token.char = 32
                            cObjNum = 1||*

                            1 = TEXT
                            1.current = 1
                        }

                        sliderLinkTarget.stdWrap.field = header_link
                        sliderLinkTarget.split {
                            token.char = 32
                            cObjNum = 1||2||*

                            2 = TEXT
                            2.current = 1
                        }

                        sliderLinkClass.stdWrap.field = header_link
                        sliderLinkClass.split {
                            token.char = 32
                            cObjNum = 1||2||3||*

                            3 = TEXT
                            3.current = 1
                        }
                    }

                    // Images
                    10 = COA
                    10 {

                        // get images via FAL
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

                                    // set alt-text
                                    altText.field = header

                                    // set maxW for fallback image
                                    file.maxW = 2000

                                    // inherit default settings
                                    layout < tt_content.image.20.1.layout
                                    layoutKey < tt_content.image.20.1.layoutKey
                                    sourceCollection < plugin.tx_rkwbasics.libs.responsiveImages.sourceCollection

                                    // redefine settings based on individual maxW
                                    // only override if individual maxW < maxW of breakpoint
                                    sourceCollection {
                                        mobile.maxW.override = 2000
                                        mobile.maxW.override.if {
                                            value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.mobile}
                                            isLessThan = 2000
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

                                    // Wrap image with link
                                    stdWrap.wrap = <figure class="slide-image">|</figure>

                                }
                            }
                        }

                        // tablet image
                        20 < .10
                        20 {
                            begin = 1
                            renderObj {
                                10 {
                                    stdWrap.wrap = <figure class="slide-image-tablet">|</figure>
                                }
                            }

                            stdWrap.ifEmpty.cObject = FILES
                            stdWrap.ifEmpty.cObject < page.10.variables.sliderHome.renderObj.10.10
                            stdWrap.ifEmpty.cObject {
                                renderObj {
                                    10 {
                                        stdWrap.wrap = <figure class="slide-image-tablet">|</figure>
                                    }
                                }
                            }
                        }

                        // tablet image
                        30 < .10
                        30 {
                            begin = 2
                            renderObj {
                                10 {
                                    stdWrap.wrap = <figure class="slide-image-mobile">|</figure>
                                }
                            }

                            stdWrap.ifEmpty.cObject = FILES
                            stdWrap.ifEmpty.cObject < page.10.variables.sliderHome.renderObj.10.10
                            stdWrap.ifEmpty.cObject {
                                renderObj {
                                    10 {
                                        stdWrap.wrap = <figure class="slide-image-mobile">|</figure>
                                    }
                                }
                            }
                        }


                        // Wrap image with link
                        stdWrap.typolink {
                            parameter = {register:sliderLink} {register:sliderLinkTarget} - "{field:tx_rkwbasics_header_link_caption}"
                            parameter.insertData = 1

                            // eTracker
                            userFunc < lib.parseFunc_RTE.tags.link.typolink.userFunc
                        }
                    }



                    // Text
                    20 = COA
                    20 {

                        // Normal content text
                        10 = COA
                        10 {

                            10 = TEXT
                            10 {
                                field = bodytext
                                required = 1
                                stripHtml = 1
                                wrap = <p class="headline">|</p>
                            }

                            20 = TEXT
                            20 {
                                field = header
                                required = 1
                                stripHtml = 1
                                wrap = <h2 class="h1">|</h2>
                            }
                            30 = TEXT
                            30 {
                                field = tx_rkwbasics_header_link_caption
                                typolink {
                                    parameter = {register:sliderLink} {register:sliderLinkTarget} "button {register:sliderLinkClass}" "{field:tx_rkwbasics_header_link_caption}"
                                    parameter.insertData = 1

                                    // eTracker
                                    userFunc < lib.parseFunc_RTE.tags.link.typolink.userFunc
                                }

                                wrap = <p class="slide-button"><span>|</span></p>
                                if.isTrue.field = header_link
                            }

                            wrap = <div class="slide-text">|</div>
                        }

                        if.isTrue.field = header
                    }

                    // Special text for mobile - if set
                    /* Deactivated but still functional
                    30 = COA
                    30 < .20
                    30.10 {
                        20.field = tx_rkwbasics_bodytext_mobile
                        wrap = <div class="slide-text-mobile">|</div>
                    }
                    */

                    stdWrap.wrap = <div class="slide {field:rowDescription}">|</div>
                    stdWrap.insertData = 1
                }
            }
        }
    }
}
