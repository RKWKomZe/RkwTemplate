// ###########################################################################
// Anpassung für Seiteneigenschaften -> Erscheinungsbild -> Layout
// ############################################################################
TCEFORM.pages{

	//===============================================================
	// Frontendlayout ohne Unterseiten
	//===============================================================
	// Die Layouts die man auswählen kann können hier benannt werden
	// Der Wert für 0 sollte leer bleiben, 1 entspricht default
	layout {

        // 0 = Vererben
        // 1 = Artikel
        // 2 = Home
        // 3 = Thema
        // 4 = Publikationen
        // 5 = Suche: Standard
        // 6 = Suche: Keine Ergebnisse
        // 7 = Mein RKW
        // 8 = Spezialseiten
        // 9 = Blog Startseite
        // 10 = Broken Link
        // 100 = Berater Detailseite
        // 200 = Experten Listenansicht
        // 210 = Experten Detailseite
        // 300 = Veranstaltungen Detailseite

        removeItems = 4,6,7,8,9,100

	}

	//===============================================================
	// Frontendlayout mit Unterseiten
	//===============================================================
	// Der Wert für 0 sollte leer bleiben, 1 entspricht default
	tx_rkwbasics_fe_layout_next_level {
		// 0 = Vererben
		// 1 = Artikel
		// 2 = Home
		// 3 = Thema
		// 4 = Publikationen
		// 5 = Suche: Standard
		// 6 = Suche: Keine Ergebnisse
		// 7 = Mein RKW
		// 8 = Spezialseiten
		// 9 = Blog Startseite
		// 10 = Broken Link
		// 100 = Berater Detailseite
		// 200 = Experten Listenansicht
		// 210 = Experten Detailseite
		// 300 = Veranstaltungen Detailseite

        removeItems = 4,6,7,8,9

    }

}

