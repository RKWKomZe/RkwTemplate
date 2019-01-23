#############################################################################
// STANDARD- MARKER
#############################################################################
page {
	10 {
		variables{
		
			// Hauptspalte
			content = CONTENT
			content < styles.content.get
			
			// Linke Spalte, vererben nach unten
			leftContent = CONTENT
			leftContent < styles.content.getLeft
			leftContent.slide = -1

			// Rechte Spalte, vererben nach unten
			rightContent = CONTENT
			rightContent < styles.content.getRight
			rightContent.slide = -1
			
			// Untere Spalte (falls definiert)
			borderContent = CONTENT
			borderContent.table = tt_content
			borderContent.select {
				where = colPos = 3
				orderBy = sorting
				languageField = sys_language_uid
			}
		}
	}
}