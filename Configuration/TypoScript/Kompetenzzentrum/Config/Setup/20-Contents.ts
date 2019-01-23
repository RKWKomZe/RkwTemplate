//############################################################################
// Maximum image width per row (0,1,2 usw.)
//############################################################################
tt_content.image.20 {

}

//############################################################################
// Tuning for headlines
//############################################################################
lib.stdheader {
    // Always ignore first headline of tt_content
    if {
        value = 1
        isGreaterThan.data = cObj:parentRecordNumber
    }
}

//############################################################################
// Special Content Elements
//############################################################################

// Old accordion - DEPRICATED
tt_content {

    // display all shortcuts as accordion
    shortcut >
    /*shortcut = COA
    shortcut {

        // header
        5 = TEXT
        5 {
            field = header
            stdWrap.wrap = <div class="accordion__header">|</div>
            stdWrap.required = 1
        }

        10 = RECORDS
        10 {
            // get data from records
            tables = tt_content
            source.data = field: records

            // individual parsing
            conf.tt_content = COA
            conf.tt_content {

                10 = TEXT
                10 {
                    field = header
                    wrap = <div class="accordion-trigger"><span class="title">|</span></div>
                }

                20 = TEXT
                20 {
                    field = bodytext
                    stdWrap.wrap = <div class="accordion-cnt">|</div>
                    stdWrap.parseFunc =< lib.parseFunc_RTE
                }

                wrap = <div class="accordion__item">|</div>

                // only if header is set
                if.isTrue.field = header
            }
        }

        stdWrap.wrap = <div class="accordion">|</div>
        stdWrap.required = 1
    }
    */
}

//############################################################################
//===============================================================
// section-frame accordions
//===============================================================
// only for text-object since it is copied into the text-pic-object
tt_content.text {

    // add introduction text
    15 = CASE
    15 {

        key.field = section_frame

        default >

        100 = TEXT
        100 {
            field = rowDescription
            stdWrap.required = 1
            stdWrap.wrap = <p>|</p>
        }
    }

    20 {
        wrap.cObject = CASE
        wrap.cObject {
            key.field = section_frame

            default >

            100 = TEXT
            100.value = <div class="collapsed-text" data-show="Mehr anzeigen" data-hide="Weniger anzeigen">|</div>
        }
    }
}

//===============================================================
// section-frame anchor menu
//===============================================================
tt_content.stdWrap.innerWrap.cObject {


    101 < tt_content.stdWrap.innerWrap.cObject.default
    101 {

        5 = CONTENT
        5 {
            table = tt_content
            stdWrap.wrap = <nav class="anchor-navi"><p class="anchor-navi__header">Inhaltsverzeichnis</p><ul>|</ul></nav>
            stdWrap.required = 1

            select {
                pidInList = this
                orderBy = sorting
                where = colPos = 0
                languageField = sys_language_uid
            }
            renderObj = TEXT
            renderObj {
                wrap = <li><a href="#" data-scroll-to="#c{field:uid}">|</a></li>
                wrap.insertData = 1
                field = header
                if.isTrue.field = header
            }
        }
    }
}

//===============================================================
// Special rendering for image left / right of content
//===============================================================
tt_content.image.20 {

    layout {

        //-------------------------------------------------------
        // Small images left, text right
        //-------------------------------------------------------
        // intext-left
        18 >
        18 = COA
        18 {

            stdWrap.wrap = <div class="picture-list">|</div>
            stdWrap.required = 1

            10 = TEXT
            10 {
                field = header

                stdWrap.required = 1
                stdWrap.wrap.cObject = CASE
                stdWrap.wrap.cObject {

                    key.field = header_layout
                    key.ifEmpty = {$content.defaultHeaderType}
                    key.ifEmpty.override.data = register: defaultHeaderType

                    default = TEXT
                    default.value = <h2 class="picture-list__header">|</h2>

                    1 = TEXT
                    1.value = <h1 class="picture-list__header">|</h1>

                    2 = TEXT
                    2.value = <h2 class="picture-list__header">|</h2>

                    3 = TEXT
                    3.value = <h3 class="picture-list__header">|</h3>

                    4 = TEXT
                    4.value = <h4 class="picture-list__header">|</h4>

                    5 = TEXT
                    5.value = <h5 class="picture-list__header">|</h5>

                }
            }

            20 = COA
            20 {

                stdWrap.wrap = <div class="picture-list__item">|</div>
                stdWrap.required = 1

                // images
                10 = COA
                10 {

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
                                file.maxW = 328c

                                // inherit default settings
                                layout < tt_content.image.20.1.layout
                                layoutKey < tt_content.image.20.1.layoutKey
                                sourceCollection < plugin.tx_rkwbasics.libs.responsiveImages.sourceCollection

                                // redefine settings based on individual maxW
                                // only override if individual maxW < maxW of breakpoint
                                sourceCollection {
                                    mobile.maxW.override = 328
                                    mobile.maxW.override.if {
                                        value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.mobile}
                                        isLessThan = 328
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
                                stdWrap.wrap = <figure class="picture-list__image">|</figure>

                                // remove height-attribute because of problems with SVGs
                                stdWrap.replacement {
                                     20 {
                                        search = # height="[0-9]*?"#i
                                        replace =
                                        useRegExp = 1
                                    }
                                }
                            }
                        }
                    }

                }

                // Text
                20 = COA
                20 {

                    10 = TEXT
                    10 {
                        field = rowDescription
                        stdWrap.required = 1
                        stdWrap.wrap = <p>|</p>

                    }

                    20 = TEXT
                    20 {
                        field = bodytext

                        // HTML-Parsing
                        stdWrap.parseFunc =< lib.parseFunc_RTE

                        stdWrap.wrap.cObject = CASE
                        stdWrap.wrap.cObject {
                            key.field = section_frame

                            default >

                            100 = TEXT
                            100.value =<div class="collapsed-text" data-show="Mehr anzeigen" data-hide="Weniger anzeigen">|</div>
                        }
                        stdWrap.required = 1
                    }

                    stdWrap.wrap = <div class="picture-list__content">|</div>
                    stdWrap.required = 1
                }
            }
        }

        //-------------------------------------------------------
        // big image in background, text right
        //-------------------------------------------------------
        // intext-left-nowrap
        26 >
        26 = COA
        26 {

            10 = TEXT
            10.value = <div class="picture-section" style="


            // get images via FAL
            20 = FILES
            20 {
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
                    10 = IMG_RESOURCE
                    10 {
                        // picture version
                        layoutKey = picture

                        // take current file
                        file.import.data = file:current:uid
                        file.treatIdAsReference = 1

                        // set maxW for fallback image
                        file.maxW = 1050

                        stdWrap.wrap = background-image: url('|')

                    }
                }
            }

            30 = TEXT
            30.value = ">

            // get images via FAL
            40 < .20
            40 {

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
                        file.maxW = 1050

                        // inherit default settings
                        layout < tt_content.image.20.1.layout
                        layoutKey < tt_content.image.20.1.layoutKey
                        sourceCollection < plugin.tx_rkwbasics.libs.responsiveImages.sourceCollection

                        // redefine settings based on individual maxW
                        // only override if individual maxW < maxW of breakpoint
                        sourceCollection {
                            mobile.maxW.override = 1050
                            mobile.maxW.override.if {
                                value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.mobile}
                                isLessThan = 1050
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
                        stdWrap.wrap = <figure class="picture-section__mobile-image">|</figure>
                    }
                }
            }

            50 = COA
            50 {

                10 = TEXT
                10 = < lib.stdheader

                20 = TEXT
                20 {
                    field = bodytext

                    # HTML-Parsing
                    stdWrap.parseFunc =< lib.parseFunc_RTE
                    stdWrap.HTMLparser = 1
                }

                stdWrap.wrap = <div class="picture-section__content">|</div>
                stdWrap.required = 1
            }

            60 = TEXT
            60.value = </div>
        }
    }
}

tt_content.textpic {

    // remove header for imageorient <= 18
    10.if.value = 18

    20 {

        // remove div around header for imageorient 25/26
        text.10 >
    }
}


//############################################################################
// Tuning for RTE
//############################################################################
lib.parseFunc_RTE {
    externalBlocks {
        //===============================================================
        // Adaption of CSS-classes for tables and lists
        //===============================================================
        table.stdWrap.HTMLparser = 1
        table.stdWrap.HTMLparser.tags.table.fixAttrib.class {
            default = contenttable responsive
            always = 1
            list = responsive,contenttable,contenttable-1,contenttable-events
        }
    }
}

