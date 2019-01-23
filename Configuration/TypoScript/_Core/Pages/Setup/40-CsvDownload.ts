#############################################################################
// CSV-DOWNLOAD - SEITENOBJEKT
#############################################################################
pageCsvDownload = PAGE
pageCsvDownload{

	//===============================================================
	// Seiten-Typ
	//===============================================================
	typeNum = 180
	
	//===============================================================
	// Konfiguration
	//===============================================================
	config {
		// Standard-Header deaktivieren
		disableAllHeaderCode = 1
		
		// keine Tags in XHTML umwandeln & kein Caching
		xhtml_cleaning = 0
	
		// Inhalt und Zeichensatz definieren
		// Das Ganze muss latin1 sein, Excel voll doof ist
		additionalHeaders.10.header = Content-type:application/csv;charset=utf-8|Content-Disposition: attachment; filename=export.csv|Content-Transfer-Encoding:binary

		// Für Suche deaktivieren
		index_enable = 0
		index_metatags = 0
		index_externals = 0
		
		// kein Caching
		no_cache = 1
	}

	//===============================================================
	// Inhalt
	//===============================================================
	10 = CONTENT
	10 {
		table = tt_content
		select {
			where = colPos = 0
			orderBy = sorting
			languageField = sys_language_uid
		}
	}
}