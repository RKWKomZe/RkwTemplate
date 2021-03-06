//############################################################################
// Header
//############################################################################
page {
    10 {
        variables {
            //=================================================================

            pageTitle = TEXT
            pageTitle.field = title

            //=================================================================

            pageSubTitle = TEXT
            pageSubTitle.field = subtitle

            //=================================================================

            pageAbstract = TEXT
            pageAbstract.field = tx_rkwbasics_teaser_text

            //=================================================================

            pageAbstractInherit = TEXT
            pageAbstractInherit.data = levelfield : -1, tx_rkwbasics_teaser_text, slide

            //=================================================================

            pageInformation = TEXT
            pageInformation.data = levelfield : -1, tx_rkwbasics_information, slide

            pageInformationCleared = TEXT
            pageInformationCleared {

                field = tx_rkwbasics_information

                # HTML-Parsing
                stdWrap.parseFunc =< lib.parseFunc_RTE
                stdWrap.HTMLparser = 1
                stdWrap.HTMLparser {
                    keepNonMatchedTags = 0
                    allowTags = p
                    nesting = 0
                    htmlSpecialChars = 0
                    xhtml_cleaning = 0
                }
            }

            //=================================================================
            headerImageBackground = FILES
            headerImageBackground {
                references {
                    table = pages
                    data = levelmedia:-1,slide
                }

                renderObj = IMG_RESOURCE
                renderObj {
                    // picture version
                    layoutKey = picture

                    // take current file
                    file.import.data = file:current:uid
                    file.treatIdAsReference = 1

                    // maximum width for fallback image
                    file.maxW = 2000

                }
            }


            //=================================================================

            headerImage = FILES
            headerImage {
                references {
                    table = pages
                    data = levelmedia:-1,slide
                }

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
                }
            }

            //=================================================================

            headerImageSubpage = FILES
            headerImageSubpage {
                references {
                    table = pages
                    data = levelfield : -1, tx_rkwbasics_teaser_image, slide
                    override.required = 1
                    override.data = levelfield : -1, tx_rkwbasics_article_image, slide
                }

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
                    file.maxW = 1000

                    // inherit default settings
                    layout < tt_content.image.20.1.layout
                    layoutKey < tt_content.image.20.1.layoutKey
                    sourceCollection < plugin.tx_rkwbasics.libs.responsiveImages.sourceCollection

                    // redefine settings based on individual maxW
                    // only override if individual maxW < maxW of breakpoint
                    sourceCollection {
                        mobile.maxW.override = 1000
                        mobile.maxW.override.if {
                            value = {$plugin.tx_rkwbasics.settings.responsiveImages.breakpoints.mobile}
                            isLessThan = 1000
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

            //=================================================================
            // here we have to deactivate the CDN for the bluring with JS (access-problems when trying via different domain in IE)
            headerImagePublications < .headerImageSubpage
            headerImagePublications.renderObj.layout.picture.element  = <picture class="publications-article__picture">###SOURCECOLLECTION###<img id="image" class="publications-article__image" src="###SRC###?noCdn=1"###PARAMS######ALTPARAMS######SELFCLOSINGTAGSLASH###><canvas id="canvas" width="990" height="433" style="" class="publications-article__canvas"></canvas></picture>
            headerImagePublications.renderObj.layout.picture.source = <source srcset="###SRC###?noCdn=1" media="###MEDIAQUERY###"###SELFCLOSINGTAGSLASH###>

            //=================================================================

            headerImageArticle < .headerImageSubpage
            headerImageArticle.renderObj.layout.picture.element  = <picture class="article-picture">###SOURCECOLLECTION###<img src="###SRC###"###PARAMS######ALTPARAMS######SELFCLOSINGTAGSLASH###></picture>

            //=================================================================

            headerVideoArticle = TEXT
            headerVideoArticle.field = tx_rkwbasics_article_video
        }
    }
}
