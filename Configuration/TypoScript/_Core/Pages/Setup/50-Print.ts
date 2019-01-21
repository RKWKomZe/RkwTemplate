#############################################################################
// STANDARD- SEITENOBJEKT
#############################################################################
// Normale Seite referenzieren
pagePrint = PAGE
pagePrint < page
pagePrint {

	//===============================================================
	// Seiten-Typ
	//===============================================================
	typeNum = 98

	//===============================================================
	// Globale Einstellungen
	//===============================================================
	config {

		// Für Suche deaktivieren
		index_enable = 0
		index_metatags = 0
		index_externals = 0
	}
	
	//===============================================================
	// Header abändern
	//===============================================================
	headerData {
		
		// Etwas voranstellen im Title
		1.stdWrap.noTrimWrap = |Druckansicht:  ||
	
		// Kein RSS
		1000 >	
	}
	
	//===============================================================
	// CSS
	//===============================================================
	// CSS löschen und spezielles setzen
	includeCSS >
	includeCSS.file1 = {$plugin.tx_rkwtemplate_config.paths.default.css}/print.css
	includeCSS.file1.media = screen, print	
	
	//===============================================================
	// JS
	//===============================================================
	includeJS >
	includeJSFooterlibs >
	includeJSFooter >
	
	//===============================================================
	// Template
	//===============================================================
	10 {
	
		template = COA
		template {
	
			10 = TEMPLATE
			10 {
				template = FILE
				template.file = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Print.html
			}
		}

	}
}
