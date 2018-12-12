// ###########################################################################
// Anpassung für Seiteneigenschaften -> Erscheinungsbild -> Layout
// ############################################################################
TCEFORM.pages{

	// BackendLayouts aktivieren und ID wo sie liegen angeben
	// backend_layout.PAGE_TSCONFIG_ID=321
	// backend_layout_next_level.PAGE_TSCONFIG_ID=321

	//===============================================================
	// Frontendlayout ohne Unterseiten
	//===============================================================
	// Label der Layoutauswahlbox abändern
	layout.label = Frontend Layout (ohne Unterseiten)
	
	// Die Layouts die man auswählen kann können hier benannt werden
	// Der Wert für 0 sollte leer bleiben, 1 entspricht default
	layout {
	
		// removeItems = 100
		altLabels.0 = Vererben
		altLabels.1 = Standard
		altLabels.2 = Layout 1
		altLabels.3 = Layout 2	
	
		// für mehr Layoutauswahlmöglichkeiten folgendes nehmen
		// addItems.4 = Layout 3
		// addItems.5 = Layout 4
	}
	
	//===============================================================
	// Frontendlayout mit Unterseiten
	//===============================================================
	// Der Wert für 0 sollte leer bleiben, 1 entspricht default
	tx_rkwbasics_fe_layout_next_level {
		altLabels.0 = Vererben
		altLabels.1 = Standard
		altLabels.2 = Layout 1
		altLabels.3 = Layout 2
	
		// für mehr Layoutauswahlmöglichkeiten folgendes nehmen
		// addItems.4 = Layout 3
		// addItems.5 = Layout 4
	}

	//===============================================================
	// CSS- Klassen für z.B. Menü
	//===============================================================
	tx_rkwbasics_css_class {
		// altLabels.1 = Hauptmenü 1
		// altLabels.2 = Hauptmenü 2
		// altLabels.3 = Hauptmenü 3
	
		// fuer mehr Layoutauswahlmöglichkeiten folgendes nehmen
		// addItems.4 = Hauptmenü 4
		// addItems.5 = Hauptmenü 5
	}
}
