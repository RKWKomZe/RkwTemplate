#############################################################################
# LAYOUT- SWITCH
#############################################################################
# Templates nach Layout aussuchen
page {

	10 = FLUIDTEMPLATE
	10 {

		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {

			# slide the template
			key.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
			key.override.field = layout

			# default template file
			default = TEXT
			default.value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Standard.html

			1 = TEXT
			1 {
				value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Standard.html
			}

			2 = TEXT
			2 {
				value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Faq.html
			}

			3 = TEXT
			3 {
				value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/ImportantInformation.html
			}

			4 = TEXT
			4 {
				value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/AdditionalPages.html
			}

            5 = TEXT
            5 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Landingpage.html
            }

		}

        partialRootPaths {
			10 =  {$plugin.tx_rkwtemplate_config.paths.default.partials}

		}
		layoutRootPaths {
			10 =  {$plugin.tx_rkwtemplate_config.paths.default.layouts}

		}
	}
}
