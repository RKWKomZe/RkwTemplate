//############################################################################
// Special setups for publication pages
//############################################################################
page {
    10 {
        variables {

            isImportSubPage = TEXT
            isImportSubPage.field = tx_bmpdf2content_is_import_sub

            //=================================================================

            pdfThumbnail = FILES
            pdfThumbnail {
                references {
                    table = pages
                    data = levelfield : -1, tx_rkwbasics_file, slide
                }

                renderObj = COA
                renderObj {
                    10 = IMAGE
                    10 {
                        file {
                            // take current file
                            import.data = file:current:publicUrl
                            ext = png

                            // set maxW of fallback image
                            maxW = 215c
                        }

                        // set alt-Text and title
                        altText.data = file:current:title
                        titleText.data = file:current:alternative

                        // inherit default settings
                        layout < tt_content.image.20.1.layout
                        layoutKey < tt_content.image.20.1.layoutKey
                        sourceCollection < plugin.tx_rkwbasics.libs.responsiveImages.sourceCollection

                        / redefine settings based on individual maxW
                        // only override if individual maxW < maxW of breakpoint
                        sourceCollection {
                            mobile.maxW.override = 215
                            mobile.maxW.override.if {
                                value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.mobile}
                                isLessThan = 215
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

                        if.value.data = file:current:extension
                        if.equals = pdf
                    }

                    // Fallback images for Word- and Excel-Files
                    stdWrap.ifEmpty.cObject = COA
                    stdWrap.ifEmpty.cObject {
                        10 < page.10.variables.pdfThumbnail.renderObj.10
                        10 {
                            file.import >
                            file.ext >
                            file = {$plugin.tx_rkwtemplate_config.paths.default.images}/placeholder-files-doc.jpg
                            if.equals = doc
                        }

                        11 < .10
                        11.if.equals = docx

                        12 < .10
                        12.if.equals = docm

                        20 < .10
                        20.file = {$plugin.tx_rkwtemplate_config.paths.default.images}/placeholder-files-xls.jpg
                        20.if.equals = xls

                        21 < .20
                        21.if.equals = xlsx
                    }
                }
            }

            //=================================================================

            coverThumbnail = FILES
            coverThumbnail {
                references {
                    table = pages
                    data = levelfield : -1, tx_rkwbasics_cover, slide
                }

                renderObj = COA
                renderObj < page.10.variables.pdfThumbnail.renderObj
                renderObj {
                    10.if >
                    stdWrap >
                }
            }

            //=================================================================

            pdfDownload = FILES
            pdfDownload {
                references < page.10.variables.pdfThumbnail.references

                renderObj = COA
                renderObj {
                    // store url
                    5 = LOAD_REGISTER
                    5.imageUrl.data = file:current:publicUrl

                    10 = COA
                    10 {
                        // Change caption based on file extension
                        10 = COA
                        10 {
                            10 = TEXT
                            10.value = Word-Datei speichern
                            10.if.value.data = file:current:extension
                            10.if.equals = doc

                            11 < .10
                            11.if.equals = docx

                            12 < .10
                            12.if.equals = docm

                            20 < .10
                            20.value = Excel-Datei speichern
                            20.if.equals = xls

                            21 < .20
                            21.if.equals = xlsx

                            // Fallback / Default
                            stdWrap.ifEmpty.cObject = TEXT
                            stdWrap.ifEmpty.cObject.value = Als PDF herunterladen
                        }

                        stdWrap.typolink {
                            parameter.data = file:current:publicUrl
                            ATagBeforeWrap = 1
                            ATagParams = class="button"
                            wrap = <span class="icon-file">|</span>

                            // eTracker
                            userFunc < lib.parseFunc_RTE.tags.link.typolink.userFunc
                        }
                    }
                }
            }

            //=================================================================

            pdfSize = FILES
            pdfSize {
                references {
                    table = pages
                    data = levelfield : -1, tx_rkwbasics_file, slide
                }

                renderObj = COA
                renderObj {
                    10 = TEXT
                    10 {
                        data = file:current:size
                        bytes.labels = Bytes | KB | MB | GB
                    }
                }
            }


        }
    }
}
