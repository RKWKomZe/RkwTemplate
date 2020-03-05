#############################################################################
// LOGO - MARKER
#############################################################################
page {
	10 {
		variables {

			siteLogo = IMAGE
			siteLogo{

				// Logo aus Rootpage laden
				file {
					import.data = levelmedia:-1, slide
					treatIdAsReference = 1
					import.listNum = 0
				}
				
				// Anpassen: Alt Text Logo
				altText = Logo
				
				// Anpassen: Title Text Logo
				titleText = Zur Startseite
				
				imageLinkWrap = 1
				imageLinkWrap {
					enable = 1
					typolink {
				
						target = _blank
						
						// Logo linkt immer auf die baseURL
						parameter < config.baseURL
						
						title.cObject=TEXT
						title.cObject.field=title
						ATagBeforeWrap = 1
					}
				}
			}
		}
	}
}
