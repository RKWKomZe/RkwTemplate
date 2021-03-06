#############################################################################
# SPECIAL- MARKER
#############################################################################
page {
	10 {
		variables  {

			#=================================================================
			descriptionSchemaOrg = TEXT
            descriptionSchemaOrg {
                data = levelfield:-1, tx_rkwbasics_teaser_text, slide
                data.override {
                field = description
                if.isTrue.field = description
                }
            }
			#=================================================================
			headerImageSchemaOrg < page.headerData.5000.60.10
			headerImageSchemaOrg.10.renderObj.file.maxW = 1000
			headerImageSchemaOrg.wrap = {$plugin.tx_rkwtemplate_config.baseUrl}|

			#=================================================================

			logoUrlSchemaOrg = TEXT
			logoUrlSchemaOrg.value = {$plugin.tx_rkwtemplate_config.baseUrl}{$plugin.tx_rkwtemplate_config.website.logoFile}

			#=================================================================
			pageAuthorsSchemaOrg = USER
			pageAuthorsSchemaOrg {

				userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
				extensionName = RkwAuthors
				pluginName = Rkwauthors
				vendorName = RKW
				controller = Authors
				switchableControllerActions {

					# Again: Controller-Name and Action
					Authors {
						1 = pageSchemaOrg
					}
				}

				view < plugin.tx_rkwauthors.view
				persistence < plugin.tx_rkwauthors.persistence
				settings < plugin.tx_rkwauthors.settings

			}
		}
	}
}

