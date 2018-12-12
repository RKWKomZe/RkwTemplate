#############################################################################
// SPECIAL - MARKER
#############################################################################
page {
	10 {
		variables {

			//==================================================================

			// Sprachmarker für's Template (ganz praktisch für statische Links)
			languageId = TEXT
			languageId.data = GPVar:L

			//==================================================================
			
			copyright = TEXT
			copyright.data = date:U
			copyright.strftime = %Y
			copyright.noTrimWrap = |&copy; RKW ||

			//==================================================================
	
			date = TEXT
			date.data = date:U
			date.strftime = %d.%m.%Y
			date.wrap =  |

			//==================================================================

			dateModified = TEXT
			dateModified.field = tstamp
			dateModified.strftime = %d.%m.%Y
			dateModified.wrap =  |

			//==================================================================
			
			baeUrl = TEXT
			baseUrl.value < config.baseURL

			//==================================================================

			printLink = TEXT
			printLink {
				value = Seite drucken
				typolink {
					parameter.data = page:uid
					additionalParams.insertData=1
					additionalParams = &type=98
					target = _blank
		
					// Query-String anhängen
					addQueryString = 1
					addQueryString.method = GET,POST
					
					ATagParams = class="print-page"
				}
			}
		}
	}
}

[globalVar = GP:L = 1]
	page.10.marks.PRINT-MENU.value=print page
[global]