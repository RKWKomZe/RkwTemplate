config {

  	# Deactivate CDN
  	tx_rkwbasics_cdn.enable = 0

	# Cache deaktivieren (nur für Entwicklung)
	no_cache = 1
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
        30.value (
            <script src="https://use.typekit.net/clc1sus.js"></script>
            <script>try{Typekit.load({ async: true });}catch(e){}</script>
        )
    }
}