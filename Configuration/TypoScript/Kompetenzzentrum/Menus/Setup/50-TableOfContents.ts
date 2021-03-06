//############################################################################
// Table of contents
// ############################################################################
page {
    10 {
        variables {
            // ==============================================================
            // table fo contens
            // ==============================================================
            tocNav = HMENU
            tocNav {
                special = rootline
                special.range = 6|6
                stdWrap.wrap = <ul class="publications-contents-table__list">|</ul>
                stdWrap.required = 1

                // Level 1
                1 = TMENU
                1 {
                    expAll = 1
                    NO {
                        wrapItemAndSub = <li class="publications-contents-table__list-item">|</li>
                        ATagTitle.field = title
                        ATagParams = class="publications-contents-table__list-link link"
                        stdWrap.wrap = <span class="publications-contents-table__text">|</span>
                        stdWrap.htmlSpecialChars = 1
                    }

                    CUR < .NO
                    CUR = 1
                    CUR {
                        wrapItemAndSub = <li class="publications-contents-table__list-item publications-contents-table__list-item--active">|</li>
                        ATagParams = class="publications-contents-table__list-link link publications-contents-table__list-link--active"
                    }

                    ACT < .CUR
                    ACT = 1
                }

                // Level 2
                2 < .1
                2 {
                    wrap = <ul class="publications-contents-table__sub-list">|</ul>
                }

                // Level 3
                3 < .2

                // Level 4
                4 < .2

                // Level 5
                5 < .2

                // Level 6
                6 < .2
            }
        }
    }
}