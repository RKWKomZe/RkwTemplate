#############################################################################
# NAVIGATION- MARKER
#############################################################################
page {
	10 {
		variables {


			# ==============================================================
			# Content NAV
			# ==============================================================
			breadcrumbNav = HMENU
			breadcrumbNav {

				special = rootline
				special.range = 1

				wrap = <ul class="breadcrumbs">|</ul>

				# LEVEL 0
				1 = TMENU
				1 {

					expAll= 1

					NO {
						wrapItemAndSub = <li>|</li>
						ATagTitle.field = title

                        stdWrap.crop = 30 |...

						ATagParams.insertData = 1
						stdWrap.htmlSpecialChars = 1

					}
				}
			}
		}
	}
}