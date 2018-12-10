#############################################################################
// LAZYLOADING- SEITENOBJEKT
#############################################################################
pageContentOnly = PAGE
pageContentOnly {

	//===============================================================
	// Seiten-Typ
	//===============================================================
	typeNum = 160
	
	//===============================================================
	// Konfiguration
	//===============================================================
	config {
		// Standard-Header deaktivieren
		disableAllHeaderCode = 1
		
		// keine Tags in XHTML umwandeln
		xhtml_cleaning = 1
	
		// Inhalt und Zeichensatz definieren
		metaCharset = utf-8 
		additionalHeaders.10.header = Content-Type:text/html;charset=utf-8

		// Für Suche deaktivieren
		index_enable = 0
		index_metatags = 0
		index_externals = 0
	}

	//===============================================================
	// Inhalte
	//===============================================================
	10 = CONTENT
	10 < styles.content.get 
	10 {
		wrap = <div class="html-container">|</div>
	}	
}
