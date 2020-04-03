// ############################################################################
// Mainmenu
// ############################################################################
lib.rkwMainMenu = COA
lib.rkwMainMenu {

    20 = COA
    20 {
        10 = HMENU
        10 {
            special = directory

            // id or level were we start from
            special.value = {$mainNavConfig.pid}

            // pages to exclude
            excludeUidList >

            // LEVEL 1
            1 = TMENU
            1 {
                maxItems = 10
                expAll = 1
                wrap = <ul class="main-menu__level0">|</ul>

                NO {
                    wrapItemAndSub = <li class="main-menu__item main-menu__item--mobile">|</li>|*|<li class="main-menu__item">|</li>
                    ATagTitle.field = title
                    ATagParams = class="main-menu__item-link link"

                    stdWrap.cObject = TEXT
                    stdWrap.cObject.field = tx_rkwbasics_alternative_title // title

                    stdWrap.htmlSpecialChars = 1
                    stdWrap.wrap = {$mainNavConfig.icons}
                }

                CUR < .NO
                CUR = 1
                CUR {
                    ATagParams = class="main-menu__item-link link main-menu__item-link--current"
                }

                ACT < .CUR
                ACT = 1

                IFSUB < .NO
                IFSUB = 1
                IFSUB {
                    ATagParams = class="main-menu__item-link link" rel="nofollow"
                }

                CURIFSUB < .CUR
                CURIFSUB = 1
                CURIFSUB {
                    ATagParams = class="main-menu__item-link link main-menu__item-link--current" rel="nofollow"
                }

                ACTIFSUB < .CURIFSUB
                ACTIFSUB = 1
            }

            // LEVEL 2
            2 < .1
            2 {
                maxItems >
                wrap = <ul class="main-menu__sublist">|</ul>

                NO {
                    wrapItemAndSub = <li class="main-menu__sublist-item main-menu__deeper-list-item">|</li>
                    ATagParams = class="main-menu__sublist-link main-menu__deeper-list-link link"
                    stdWrap.wrap >
                }

                CUR < .NO
                CUR = 1
                CUR {
                    ATagParams =  class="main-menu__sublist-link main-menu__deeper-list-link--current-page main-menu__deeper-list-link link"
                    // ATagParams = class="main-menu__sublist-link main-menu__deeper-list-link--current main-menu__deeper-list-link link"
                }

                ACT < .CUR
                ACT = 1
                ACT {
                    ATagParams =  class="main-menu__sublist-link main-menu__deeper-list-link link"
                }


                IFSUB < .NO
                IFSUB = 1
                IFSUB {

                    wrapItemAndSub = <li class="main-menu__sublist-item main-menu__deeper-list-item">|</ul></li>
                    ATagParams = class="main-menu__sublist-link main-menu__deeper-list-link link" rel="nofollow"

                    after.cObject = COA
                    after.cObject {

                        5 = TEXT
                        5.value = <ul class="main-menu__deeper-level-list"><li class="main-menu__deeper-list-item">

                        10 = TEXT
                        10 {
                            htmlSpecialChars = 1
                            data = field:title
                            typolink.parameter.data = field:uid
                            typolink.ATagParams = class="main-menu__deeper-list-link main-menu__deeper-list-link--back main-menu__deeper-list-link--arrow-left link" rel="nofollow"
                        }

                        20 = TEXT
                        20.value = </li>
                    }
                }

                CURIFSUB < .IFSUB
                CURIFSUB = 1
                CURIFSUB.ATagParams = class="main-menu__sublist-link main-menu__deeper-list-link--current-page main-menu__deeper-list-link link" rel="nofollow"


                ACTIFSUB < .CURIFSUB
                ACTIFSUB = 1
                ACTIFSUB.ATagParams = class="main-menu__sublist-link main-menu__deeper-list-link link" rel="nofollow"

            }

            // LEVEL 3
            3 < .2
            3 {
                wrap >

                NO {
                    wrapItemAndSub = <li class="main-menu__deeper-list-item">|</li>
                    ATagParams = class="main-menu__deeper-list-link link"
                }

                CUR < .NO
                CUR = 1
                CUR {
                    ATagParams = class="main-menu__deeper-list-link main-menu__deeper-list-link--current-page link"
                }

                ACT < .CUR
                ACT = 1
                ACT {
                    ATagParams = class="main-menu__deeper-list-link link"
                }

                IFSUB {
                    wrapItemAndSub = <li class="main-menu__deeper-list-item">|</ul></li>
                    ATagParams = class="main-menu__deeper-list-link link" rel="nofollow"
                }

                CURIFSUB < .IFSUB
                CURIFSUB = 1
                CURIFSUB {
                    ATagParams = class="main-menu__deeper-list-link main-menu__deeper-list-link--current-page link" rel="nofollow"
                }

                ACTIFSUB < .CURIFSUB
                ACTIFSUB = 1
                ACTIFSUB {
                    ATagParams = class="main-menu__deeper-list-link link" rel="nofollow"
                }
            }

            // LEVEL 4
            4 < .3

            // LEVEL 5
            5 < .3

            // LEVEL 6
            6 < .3

            // LEVEL 7
            7 < .3

            // LEVEL 8
            8 < .3

            // LEVEL 9
            9 < .3

            // LEVEL 10
            10 < .3
        }
    }
}

// #########################################################
// Inherit settings into marker
// #########################################################

page {
    10 {
        variables {
            mainNav < lib.rkwMainMenu

            mainNavMicrosite < lib.rkwMainMenu
            mainNavMicrosite.20.10 {

                // start layout at one level deeper here!
                1 < .2
                1.wrap = <ul class="main-menu__sublist main-menu__sublist--microsite">|</ul>

                2 < .3
            }
        }
    }
}

// #########################################################
// "Mein RKW" item is re-loaded via AJAX because of varnish!
// #########################################################
lib.txRkwRegistrationAjaxCoa >
lib.txRkwRegistrationAjaxCoa = COA
lib.txRkwRegistrationAjaxCoa {
    // Get menu of "Mein RKW"
    10 = HMENU
    10 {
        special = directory
        special.value = 609

        // LEVEL 2
        1 < lib.rkwMainMenu.20.10.2
        1.wrap >

        stdWrap.wrap = <script>var txRkwRegistrationAjaxUl = jQuery('#menu-mein-rkw').parent().parent().children('ul').first(); if (txRkwRegistrationAjaxUl) { txRkwRegistrationAjaxUl.html('|'); }</script>
    }

    // link to login mask
    20 = COA
    20 {


        10 = TEXT
        10 {
            typolink.parameter = {$plugin.tx_rkwregistration.settings.users.loginPid}
            typolink.returnLast = url

        }

        20 = COA
        20 {

            10 = TEXT
            10 {

                typolink.parameter = {$mainNavConfig.xdlPid}
                typolink.forceAbsoluteUrl = 1
                // forceAbsoluteUrl.scheme = https
                typolink.returnLast = url
                stdWrap.rawUrlEncode = 1
            }
            wrap = ?tx_rkwregistration_rkwregistration[xdlUrl]=|
        }

        wrap =  <script>jQuery('#menu-mein-rkw').parent().attr('target', '_blank').attr('href', '|');</script>

    }

    // not needed at the moment!
    20 >
}

// show login status and set link to Mein RKW if logged in
[loginUser = *]
    lib.txRkwRegistrationAjaxCoa {

        # no XDL-param here - but login highlighting
        20.20 >

        30 = TEXT
        30.value = jQuery('#menu-mein-rkw').addClass('main-menu__item-content--loggedin');
        30.wrap = <script>|</script>

    }
[global]

