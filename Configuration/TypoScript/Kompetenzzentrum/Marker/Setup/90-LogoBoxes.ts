//############################################################################
// Logo boxes
//############################################################################
page {
    10 {
        variables {

            //=================================================================
            logoBoxes = CONTENT
            logoBoxes {
                table = tt_content

                select {
                    where = colPos = 5
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

                    // render only shoutCuts
                    shortcut = COA
                    shortcut {

                        // header
                        5 = TEXT
                        5 {
                            value = Referenzen
                            override.field = header
                            wrap = <h4 class="section-header h2" id="headline-partner">|</h4>
                        }

                        10 = RECORDS
                        10 {
                            // get data from records
                            tables = tt_content
                            source.data = field: records

                            // no check of pid
                            dontCheckPid = 1

                            // individual parsing
                            conf.tt_content = FILES
                            conf.tt_content {

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
                                        altText.field = header
                                        titleText.field = header

                                        // set maxW of fallback image
                                        file.maxW = 160

                                        // inherit default settings
                                        layout < tt_content.image.20.1.layout
                                        layoutKey < tt_content.image.20.1.layoutKey
                                        sourceCollection < plugin.tx_rkwbasics.libs.responsiveImages.sourceCollection

                                        // redefine settings based on individual maxW
                                        // only override if individual maxW < maxW of breakpoint
                                        sourceCollection {
                                            mobile.maxW.override = 160
                                            mobile.maxW.override.if {
                                                value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.mobile}
                                                isLessThan = 160
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

                                        // wrap with link
                                        stdWrap.typolink {
                                            parameter.field = header_link
                                            title.field = header
                                            title.override.field = tx_rkwbasics_header_link_caption
                                            ATagParams = class="box partner" rel="nofollow"
                                            userFunc = RKW\RkwEtracker\UserFunctions\Typolink->getParsedLinkWithDataAttributes
                                        }
                                    }

                                    // only if link is set
                                    if.isTrue.field = header_link

                                    wrap = <div>|</div>
                                }

                            }

                            wrap = <div class="boxes-partners">|</div>
                        }
                    }

                    stdWrap.wrap = <section role="contentinfo" class="section" aria-labelledby="headline-partner">|</section>
                    stdWrap.required = 1
                }
            }


            //=================================================================
            logoBoxesHome < .logoBoxes
            logoBoxesHome {

                renderObj {
                    shortcut.5 {
                        value = Initiativen &amp; Partner
                        wrap = <h3 class="section-header h2" id="headline-partner">|</h3>
                    }
                    stdWrap.wrap = <section role="banner" aria-labelledby="headline-partner">|</section>

                }
            }

            //=================================================================
            logoBoxesHome2 < .logoBoxesHome
            logoBoxesHome2 {
                select.where = colPos = 14

                renderObj {
                    shortcut.5 {
                        value = Zertifizierungen &amp; Akkreditierungen
                        wrap = <h3 class="section-header h2" id="headline-partner2">|</h3>
                    }
                    stdWrap.wrap = <section role="banner" aria-labelledby="headline-partner2">|</section>
                }
            }

            //=================================================================
            cooperationBoxes < .logoBoxes
            cooperationBoxes {

                select.where = colPos = 8

                renderObj {
                    shortcut.5 {
                        value = Kooperationen
                        wrap = <h4 class="section-header h2" id="headline-cooperations">|</h4>
                    }
                    stdWrap.wrap = <section role="contentinfo" aria-labelledby="headline-cooperations">|</section>
                }

            }

            //=================================================================
            projectLogoBoxes = COA
            projectLogoBoxes {

                30 = RECORDS
                30 {
                    source.field = tx_rkwprojects_project_uid
                    tables = tx_rkwprojects_domain_model_projects
                    conf.tx_rkwprojects_domain_model_projects = FILES
                    conf.tx_rkwprojects_domain_model_projects {

                        references {
                            table = tx_rkwprojects_domain_model_projects
                            fieldName = partnerLogos
                        }

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
                                altText.field = name
                                titleText.field = name

                                // set maxW of fallback image
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


                                stdWrap.wrap = <div class="box-wrapper"><div class="powered-by">|</div></div>
                                stdWrap.required = 1
                            }
                        }
                    }

                }
            }
        }
    }
}
