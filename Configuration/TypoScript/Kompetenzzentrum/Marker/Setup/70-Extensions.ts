//############################################################################
// Extensions
//############################################################################
page {
    10 {
        variables {
            //=================================================================
            // Comment section
            //=================================================================

            commentsBox < lib.tx_rkwsocialcomments
            commentsBox.settings.usingConfig = default

            //=================================================================
            // Gets the alerts box below the pages
            //=================================================================
            alertsBox = USER
            alertsBox {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwAlerts
                pluginName = Rkwalerts
                vendorName = RKW
                controller = Alerts
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Alerts {
                        1 = newInit
                        2 = newAjax
                        3 = new
                        4 = create
                        5 = optIn
                        6 = list
                        7 = deleteconfirm
                        8 = delete
                    }
                }

                view =< plugin.tx_rkwalerts.view
                persistence =< plugin.tx_rkwalerts.persistence
                settings =< plugin.tx_rkwalerts.settings
            }

            //=================================================================
            // Lists all documents form one series as boxes
            //=================================================================
            seriesBoxes = USER
            seriesBoxes {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwSearch
                pluginName = Rkwsearch
                vendorName = RKW
                controller = Search
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Search {
                        1 = publicationsSeries
                        2 = home
                        3 = search
                        4 = publications
                        5 = publicationsSpecial
                        6 = related
                        7 = blog
                        8 = news
                        9 = series
                        10 = consultants
                        11 = consultantsInternal
                        12 = example
                        13 = recentArticle
                        14 = recent
                        15 = pageNotFound
                    }
                }

                view =< plugin.tx_rkwsearch.view
                persistence =< plugin.tx_rkwsearch.persistence
                settings =< plugin.tx_rkwsearch.settings

                // deactivate autoload
                settings.search.noAutoloadMore = 1
            }


            //=================================================================
            // Author-Box for showing works
            //=================================================================
            authorWork = COA_INT
            authorWork {
                10 = USER_INT
                10 {
                    userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                    extensionName = RkwAuthors
                    pluginName = Rkwauthorswork
                    vendorName = RKW
                    controller = Authors
                    switchableControllerActions {
                        // Again: Controller-Name and Action
                        Authors {
                            1 = showWork
                        }
                    }

                    view =< plugin.tx_rkwauthors.view
                    persistence =< plugin.tx_rkwauthors.persistence
                    settings =< plugin.tx_rkwauthors.settings

                    // Only show content if work is to be displayed!
                    stdWrap.ifEmpty.cObject < page.10.variables.boxContent
                }
            }

            //=================================================================
            // Author-Box on topic pages
            //=================================================================

            pageAuthorsBox = USER
            pageAuthorsBox {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwAuthors
                pluginName = Rkwauthors
                vendorName = RKW
                controller = Authors
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Authors {
                        1 = pageBox
                    }
                }

                view =< plugin.tx_rkwauthors.view
                persistence =< plugin.tx_rkwauthors.persistence
                settings =< plugin.tx_rkwauthors.settings
            }

            //=================================================================
            // first author box on article pages
            //=================================================================

            pageAuthorsDetailFirst = USER
            pageAuthorsDetailFirst {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwAuthors
                pluginName = Rkwauthors
                vendorName = RKW
                controller = Authors
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Authors {
                        1 = pageBoxSmallFirst
                    }
                }

                view =< plugin.tx_rkwauthors.view
                persistence =< plugin.tx_rkwauthors.persistence
                settings =< plugin.tx_rkwauthors.settings
            }

            //=================================================================
            // other authors on article pages
            //=================================================================

            pageAuthorsDetailRest = USER
            pageAuthorsDetailRest {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwAuthors
                pluginName = Rkwauthors
                vendorName = RKW
                controller = Authors
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Authors {
                        1 = pageBoxSmallRest
                    }
                }

                view =< plugin.tx_rkwauthors.view
                persistence =< plugin.tx_rkwauthors.persistence
                settings =< plugin.tx_rkwauthors.settings
            }

            //=================================================================
            // Comma separated list of authors for publication pages
            //=================================================================

            pageAuthorsCommaList = USER
            pageAuthorsCommaList {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwAuthors
                pluginName = Rkwauthors
                vendorName = RKW
                controller = Authors
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Authors {
                        1 = pageCommaList
                    }
                }

                view =< plugin.tx_rkwauthors.view
                persistence =< plugin.tx_rkwauthors.persistence
                settings =< plugin.tx_rkwauthors.settings
            }


            //=================================================================
            // Get uid of parent import page
            //=================================================================

            importParentPageUid = USER
            importParentPageUid {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = BmPdf2content
                pluginName = Pi1
                vendorName = BM
                controller = DisplayPages
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    DisplayPages {
                        1 = importParentPage
                    }
                }

                view =< plugin.tx_bmpdf2content.view
                persistence =< plugin.tx_bmpdf2content.persistence
                settings =< plugin.tx_bmpdf2content.settings
                settings.importParentPage.showField = uid
            }

            //=================================================================
            // Get title of parent import page
            //=================================================================

            importParentPageTitle = USER
            importParentPageTitle {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = BmPdf2content
                pluginName = Pi1
                vendorName = BM
                controller = DisplayPages
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    DisplayPages {
                        1 = importParentPage
                    }
                }

                view =< plugin.tx_bmpdf2content.view
                persistence =< plugin.tx_bmpdf2content.persistence
                settings =< plugin.tx_bmpdf2content.settings
                settings.importParentPage.showField = title
            }

            //=================================================================
            // Get title of parent import page
            //=================================================================

            importParentPagePubDate = USER
            importParentPagePubDate {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = BmPdf2content
                pluginName = Pi1
                vendorName = BM
                controller = DisplayPages
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    DisplayPages {
                        1 = importParentPage
                    }
                }

                view =< plugin.tx_bmpdf2content.view
                persistence =< plugin.tx_bmpdf2content.persistence
                settings =< plugin.tx_bmpdf2content.settings
                settings.importParentPage.showField = pubDate

                // Fallback for those without active RKW Search
                stdWrap.ifEmpty.cObject = TEXT
                stdWrap.ifEmpty.cObject {
                    field = crdate
                    field.override = lastUpdated

                }
            }

            //=================================================================
            // loads image resources for article pages
            //=================================================================

            imageResourcesArticles = USER
            imageResourcesArticles {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwBasics
                pluginName = Rkwmediasources
                vendorName = RKW
                controller = MediaSources
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    MediaSources {
                        1 = listPage
                    }
                }

                view =< plugin.tx_rkwbasics.view
                persistence =< plugin.tx_rkwbasics.persistence
                settings =< plugin.tx_rkwbasics.settings
                settings.includeFieldsList = pages.tx_rkwbasics_teaser_image, pages.tx_rkwbasics_article_image
            }

            //=================================================================
            // loads image resources for publications and topics
            //=================================================================

            imageResources = USER
            imageResources < .imageResourcesArticles
            imageResources {
                settings.includeFieldsList = pages.tx_rkwbasics_teaser_image, pages.media, tt_content.image
            }

            //=================================================================
            // add the add-to-watchlist- button on each page
            //=================================================================
            /*
            addToWatchlist = USER
            addToWatchlist {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwWatchlist
                pluginName = AddToWatchlist
                vendorName = RKW
                controller = Watchlist
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Watchlist {
                        1 = add
                        2 = addToWatchlist
                    }
                }

                view =< plugin.tx_rkwwatchlist.view
                persistence =< plugin.tx_rkwwatchlist.persistence
                settings =< plugin.tx_rkwwatchlist.settings
            }
            */

            //=================================================================
            // Info-Overlay
            //=================================================================
            overlayContent = USER
            overlayContent {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwInfoLayer
                pluginName = Infolayer
                vendorName = RKW
                controller = Infolayer
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Infolayer {
                        1 = show
                        2 = conten
                        3 = cookie
                        4 = dismiss
                    }
                }
                view =< plugin.tx_rkwinfolayer.view
                persistence =< plugin.tx_rkwinfolayer.persistence
                settings =< plugin.tx_rkwinfolayer.settings
            }

            //=================================================================
            // Mein RKW Overloading
            //=================================================================

            meinRkwLayer = USER
            meinRkwLayer {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwRegistration
                pluginName = RkwregistrationAjax
                vendorName = RKW
                controller = Ajax
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Ajax {
                        1 = loginInfoInit
                    }
                }

                view =< plugin.tx_rkwregistration.view
                persistence =< plugin.tx_rkwregistration.persistence
                settings =< plugin.tx_rkwregistration.settings
            }

            //=================================================================
            // add googleMaps to consultant view
            //=================================================================
            consultantMaps = USER
            consultantMaps {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwConsultant
                pluginName = Rkwconsultantmaps
                vendorName = RKW
                controller = Consultant
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Consultant {
                        1 = maps
                    }
                }

                view =< plugin.tx_rkwconsultant.view
                persistence =< plugin.tx_rkwconsultant.persistence
                settings =< plugin.tx_rkwconsultant.settings

                stdWrap.wrap = <picture class="article-picture">|</picture>

            }

            //=================================================================
            // add gallery to consultant view
            //=================================================================
            consultantGallery = USER
            consultantGallery {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwConsultant
                pluginName = Rkwconsultantgallery
                vendorName = RKW
                controller = Consultant
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Consultant {
                        1 = gallery
                    }
                }

                view =< plugin.tx_rkwconsultant.view
                persistence =< plugin.tx_rkwconsultant.persistence
                settings =< plugin.tx_rkwconsultant.settings
            }

            //=================================================================
            // add infobox to consultant view
            //=================================================================
            consultantInfo = USER
            consultantInfo {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwConsultant
                pluginName = Rkwconsultantinfo
                vendorName = RKW
                controller = Consultant
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Consultant {
                        1 = info
                    }
                }

                view =< plugin.tx_rkwconsultant.view
                persistence =< plugin.tx_rkwconsultant.persistence
                settings =< plugin.tx_rkwconsultant.settings
            }

            //=================================================================
            // add company name of consultant to consultant view
            //=================================================================
            consultantCompany = USER
            consultantCompany {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwConsultant
                pluginName = Rkwconsultantcompany
                vendorName = RKW
                controller = Consultant
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Consultant {
                        1 = company
                    }
                }

                view =< plugin.tx_rkwconsultant.view
                persistence =< plugin.tx_rkwconsultant.persistence
                settings =< plugin.tx_rkwconsultant.settings
            }

            //=================================================================
            // add googleMaps to event view
            //=================================================================
            eventMaps = USER
            eventMaps {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwEvents
                pluginName = Eventmaps
                vendorName = RKW
                controller = Event
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Event {
                        1 = maps
                    }
                }

                view =< plugin.tx_rkwevents.view
                persistence =< plugin.tx_rkwevents.persistence
                settings =< plugin.tx_rkwevents.settings

                stdWrap.wrap = <picture class="article-picture">|</picture>

            }

            //=================================================================
            // add infobox to event view
            //=================================================================
            eventInfo = USER
            eventInfo {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwEvents
                pluginName = Eventinfo
                vendorName = RKW
                controller = Events
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Event {
                        1 = info
                    }
                }

                view =< plugin.tx_rkwevents.view
                persistence =< plugin.tx_rkwevents.persistence
                settings =< plugin.tx_rkwevents.settings
            }

            //=================================================================
            // add event title to event view
            //=================================================================
            eventTitle = USER
            eventTitle {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwEvents
                pluginName = Eventtitle
                vendorName = RKW
                controller = Event
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Event {
                        1 = title
                    }
                }

                view =< plugin.tx_rkwevents.view
                persistence =< plugin.tx_rkwevents.persistence
                settings =< plugin.tx_rkwevents.settings
            }

            //=================================================================
            // add event gallery 1
            //=================================================================
            galleryOne = USER
            galleryOne {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwEvents
                pluginName = Galleryone
                vendorName = RKW
                controller = Event
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Event {
                        1 = showGalleryOne
                    }
                }

                view =< plugin.tx_rkwevents.view
                persistence =< plugin.tx_rkwevents.persistence
                settings =< plugin.tx_rkwevents.settings
            }

            //=================================================================
            // add event gallery 2
            //=================================================================
            galleryTwo = USER
            galleryTwo {
                userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
                extensionName = RkwEvents
                pluginName = Gallerytwo
                vendorName = RKW
                controller = Event
                switchableControllerActions {
                    // Again: Controller-Name and Action
                    Event {
                        1 = showGalleryTwo
                    }
                }

                view =< plugin.tx_rkwevents.view
                persistence =< plugin.tx_rkwevents.persistence
                settings =< plugin.tx_rkwevents.settings
            }
        }
    }
}



