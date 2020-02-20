#############################################################################
# Extending BodyTag-Class
#############################################################################
page {

	bodyTagCObject.10 {

		# Klasse setzen basierend auf CSS-Feld im verknüpften Datensatz
		# natürlich mit Fallback!
		30 = RECORDS
		30 {
			source.data = levelfield : -1, tx_rkwbasics_department, slide
			tables = tx_rkwbasics_domain_model_department
			conf.tx_rkwbasics_domain_model_department = TEXT
			conf.tx_rkwbasics_domain_model_department {

				value = topic-1
				override.field = css_class
			}

			stdWrap.noTrimWrap = | ||
		}

		50 = CASE
		50 {

			# slide the template
			key.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
			key.override.field = layout

			# default template file
			default = TEXT
			default.value = project

			1 = TEXT
			1 {
				value = project
			}

			2 = TEXT
			2 {
				value = home search
			}

			3 = TEXT
			3 {
				value = page-area
			}

			4 = TEXT
			4 {
				value = publication
			}

			5 = TEXT
			5 {
				value = search
			}

			6 = TEXT
			6 {
				value = search
			}

			7 = TEXT
			7 {
				value = page-area
			}

			stdWrap.noTrimWrap = | ||
		}
	}
}

