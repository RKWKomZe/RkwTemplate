#############################################################################
// NAVIGATION- MARKER
#############################################################################
page {
    10 {
        variables {
            //==============================================================
            // Content navigation
            //==============================================================
            subNav = COA
            subNav {
                10 = HMENU
                10 {
                    entryLevel = {$subNavConfig.entryLevel}

                    // pages to exclude
                    excludeUidList >

                    // LEVEL 1
                    1 = TMENU
                    1 {
                        NO {
                            wrapItemAndSub = <li class="top-menu__list-item top-menu__level2-item">|</li>
                            ATagTitle.field = title

                            stdWrap.cObject = TEXT
                            stdWrap.cObject.field = tx_rkwbasics_alternative_title // title

                            ATagParams = class="top-menu__list-link top-menu__level2-link link" rel="nofollow"
                            stdWrap.htmlSpecialChars = 1
                        }

                        CUR < .NO
                        CUR = 1
                        CUR {
                            wrapItemAndSub = <li class="top-menu__list-item top-menu__level2-item top-menu__list-item--displayed">|</li>
                            ATagParams = class="top-menu__list-link top-menu__level2-link top-menu__list-link--active link" rel="nofollow"
                        }

                        ACT < .CUR
                        ACT {
                           // ATagParams = class="top-menu__list-link top-menu__level2-link  link" rel="nofollow"
                        }
                        ACT = 1

                        CURIFSUB < .CUR
                        CURIFSUB = 1
                        CURIFSUB {
                            wrapItemAndSub = <li class="top-menu__list-item top-menu__level2-item top-menu__list-item--displayed">|</li>
                        }

                        ACTIFSUB < .CURIFSUB
                        ACTIFSUB {
                            ATagParams = class="top-menu__list-link top-menu__level2-link  link" rel="nofollow"
                        }
                        ACTIFSUB = 1
                    }

                    // LEVEL 2
                    2 < .1
                    2 {
                        expAll = 1

                        wrap = <div class="top-menu__offset-menu"><ul class="top-menu__level3">|</ul><div class="top-menu__nav-buttons"><div class="top-menu__button top-menu__button--left"><a href="#" class="top-menu__left-icon icon-scroll-left link"></a></div><div class="top-menu__button top-menu__button--right"><a href="#" class="top-menu__right-icon icon-scroll-right link"></a></div></div></div>
                        NO {
                            wrapItemAndSub = <li class="top-menu__list-item top-menu__level3-item">|</li>
                            ATagParams = class="top-menu__list-link link" rel="nofollow"

                            before.cObject = LOAD_REGISTER
                            before.cObject {
                                menuLevelCounter = top-menu--sublevel-exists
                            }
                        }

                        CUR < .NO
                        CUR = 1
                        CUR {
                            wrapItemAndSub = <li class="top-menu__list-item top-menu__level3-item top-menu__list-item--displayed">|</li>
                            ATagParams = class="top-menu__list-link top-menu__list-link--active link" rel="nofollow"
                        }

                        ACT < .CUR
                        ACT = 1

                        CURIFSUB < .CUR
                        CURIFSUB = 1

                        ACTIFSUB < .CURIFSUB
                        ACTIFSUB = 1
                    }

                    // LEVEL 3
                    3 < .2
                    3 {

                        // Wirkt auch in Mein RKW!
                        // sort by title for some pids
                       // alternativeSortingField = title ASC
                       // alternativeSortingField.if {
                       //     value = {$sortByTitlePidList}
                       //     isInList.field = pid
                       // }

                        wrap = <ul class="top-menu__level4 top-menu__sublist">|</ul>
                        NO {
                            wrapItemAndSub = <li class="top-menu__sublist-item">|</li>
                            ATagParams = class="top-menu__sublist-link link" rel="nofollow"
                        }

                        // top-menu__sublist-link--current wird demnächst dynamisch via JS eingesetzt!!! Dann wird nur noch current-page in die tatschlich aktive Seite eingebaut!
                        CUR < .NO
                        CUR = 1
                        CUR {
                            ATagParams = class="top-menu__sublist-link top-menu__sublist-link--current-page link" rel="nofollow"
                            // ATagParams = class="top-menu__sublist-link top-menu__sublist-link--current link" rel="nofollow"

                        }

                        ACT < .CUR
                        ACT = 1
                        ACT {
                            ATagParams = class="top-menu__sublist-link link" rel="nofollow"
                            //ATagParams = class="top-menu__sublist-link top-menu__sublist-link--current link" rel="nofollow"
                        }

                        IFSUB < .NO
                        IFSUB = 1
                        IFSUB {

                            wrapItemAndSub = <li class="top-menu__sublist-item ">|</ul>
                            after.cObject = COA
                            after.cObject {

                                5 = TEXT
                                5.value = <ul class="top-menu__deeper-level top-menu__sublist"><li class="top-menu__sublist-item">

                                10 = TEXT
                                10 {
                                    htmlSpecialChars = 1
                                    data = field:title
                                    typolink.parameter.data = field:uid
                                    typolink.ATagParams = class="top-menu__sublist-link top-menu__sublist-link--back top-menu__sublist-link--arrow-left link" rel="nofollow"
                                }

                                20 = TEXT
                                20.value = </li>
                            }
                        }

                        CURIFSUB < .CUR
                        CURIFSUB = 1
                        CURIFSUB.after.cObject < .IFSUB.after.cObject
                        CURIFSUB.wrapItemAndSub < .IFSUB.wrapItemAndSub


                        ACTIFSUB < .CURIFSUB
                        ACTIFSUB = 1
                        ACTIFSUB {
                            ATagParams = class="top-menu__sublist-link link" rel="nofollow"
                        }

                    }

                    // LEVEL 4
                    4 < .3
                    4 {
                        wrap >
                        alternativeSortingField >
                    }

                    // LEVEL 5
                    5 < .4

                    // LEVEL 6
                    6 < .4

                    // LEVEL 7
                    7 < .4

                    // LEVEL 8
                    8 < .4

                    // LEVEL 9
                    9 < .4

                    // LEVEL 10
                    10 < .4


                    stdWrap.wrap = <div class="top-menu {register:menuLevelCounter}" role="navigation"><div class="container"><ul class="top-menu__level2">|</ul><div class="top-menu__submenu"><a href="#" class="top-menu__close-icon icon-close link"></a></div></div></div>
                    stdWrap.insertData = 1
                    stdWrap.required = 1
                }
            }
        }
    }
}