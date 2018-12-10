#############################################################################
# NAVIGATION- MARKER
#############################################################################
page {
	10 {
		variables {
		
			metaNav = HMENU
			metaNav {


				special = directory

				# Id angeben, von der aus wir Starten (alle Unterseiten werden aufgenommen)
				special.value = {$metaNavConfig.pid}

				# Seiten, die nicht aufgenommen werden sollen
				excludeUidList >

				1 = TMENU
				1 {

					NO {
						wrapItemAndSub = ||*|&nbsp;&#124;&nbsp;|*|
						ATagTitle.field = title
						stdWrap.htmlSpecialChars = 1
                        ATagParams = {$metaNavConfig.ATagParams}

					}


					CUR < .NO
					CUR = 1
					CUR {
						ATagParams = class="active"
					}

					ACT < .CUR
					ACT = 1

				}

			}
		}
	}
}