#############################################################################
// XML- SEITENOBJEKT
#############################################################################
pageXml = PAGE
pageXml {

	//===============================================================
	// Seiten-Typ
	//===============================================================
	typeNum = 150
	
	//===============================================================
	// Konfiguration
	//===============================================================
	config {
	
		// Standard-Header deaktivieren
		disableAllHeaderCode = 1
		
		// keine Tags in XHTML umwandeln
		xhtml_cleaning = none
	
		// Inhalt und Zeichensatz definieren
		metaCharset = utf-8 
		additionalHeaders.10.header = Content-Type:text/xml;charset=utf-8

		// Für Suche deaktivieren
		index_enable = 0
		index_metatags = 0
		index_externals = 0
		
	}


	//===============================================================
	// Inhalte
	//===============================================================
	10 = COA
	10 {
	
		// Wrap
		wrap = <?xml version="1.0" encoding="UTF-8" standalone="yes" ?><typo3_xml>|</typo3_xml>
		
		10 = COA
		10 {
			
			// ----------------------------------------------------------
			// Link zur Seite
			// ----------------------------------------------------------
			10 = TEXT
			10 {
				wrap = <link>|</link>
				typolink {
					parameter.data = field:uid
					returnLast = url
				}
			}
			
			// ----------------------------------------------------------
			// Titel der Seite
			// ----------------------------------------------------------
			20 = TEXT
			20 {
				wrap = <title><![CDATA[|]]></title>
				data = field:title
			}
			
			// ----------------------------------------------------------
			// Letztes Update
			// ----------------------------------------------------------
			30 = TEXT
			30 {
				wrap = <last_update>|</last_update>
				data = field:SYS_LASTCHANGED
			}
			
			// ----------------------------------------------------------
			// Inhalt aus Hauptspalte
			// ----------------------------------------------------------
			40 = CONTENT
			40 < styles.content.get
			40 {
				wrap = <item_main>|</item_main>	
				renderObj = CASE
				renderObj {
				
					// Default-Wrap
					stdWrap.dataWrap = <item id="element-id-{field:uid}" headline="{field:header}" date="{field:date}"><![CDATA[|]]></item>				

					// das Feld CType wird für die Fallunterscheidung verwendet.
					// Die jeweiligen Inhaltstypen werden damit zu Unter-Objekten
					key.field = CType

					//=========
					// Standardausgabe wie normaler Content
					default < tt_content
				}
			}
					
			// ----------------------------------------------------------
			// Inhalt aus linker Spalte
			// ----------------------------------------------------------
			60 = CONTENT
			60 < styles.content.getLeft
			60 {
				wrap = <item_left>|</item_left>					
				renderObj < .40.renderObj 
			}			
			
			// ----------------------------------------------------------
			// Inhalt aus rechterSpalte
			// ----------------------------------------------------------
			70 = CONTENT
			70 < styles.content.getRight
			70 {
				wrap = <item_right>|</item_right>					
				renderObj < .40.renderObj 
			}		
		}									
	}
}