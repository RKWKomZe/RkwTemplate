config {

  	# Deactivate CDN
  	tx_rkwbasics_cdn.enable = 0

	# Cache deaktivieren (nur für Entwicklung)
	no_cache = 0
	admPanel = 0

	# Cache- Headers für intern gecachte Seiten
	sendCacheHeaders = 0

	# Compress and concatenate
	concatenateJs = 0
	compressJs = 0

	# Compress and concatenate
	concatenateCss = 0
	compressCss = 0

}

#############################################################################
# Hausschrift
#############################################################################
page {

    headerData {

        30 = TEXT
        30.value  = <script src="https://use.typekit.net/clc1sus.js"></script>
    }
}

#############################################################################
# STANDARD- MARKER
#############################################################################

plugin.tx_rkwconsultant {

	settings {

		# for preview and unlocking of an hidden consultant profile (after create / edit)
		allowedRemoteAddr = 127.0.0.1

		consultant {

			# max profiles per user (no value = no limit)
			maxProfilesUser >
		}

	}
}

# Module configuration
module.tx_rkwmailer {

	settings {

		# URL for hard-links in templates
		baseUrl = http://www.baumitbim.local
	}
}
plugin.tx_rkwmailer < module.tx_rkwmailer




plugin.tx_rkwbasics{

    settings {
        # proxy = 192.168.1.8:80

    }
}

