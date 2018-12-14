############################################################################
# Anpassung für Seiteneigenschaften -> Erscheinungsbild -> Layout
#############################################################################
TCEFORM.pages{

	#===============================================================
	# Frontendlayout ohne Unterseiten
	#===============================================================
	# Label der Layoutauswahlbox abändern
	layout.label = Frontend Layout (ohne Unterseiten)

	# Die Layouts die man auswählen kann können hier benannt werden
	# Der Wert für 0 sollte leer bleiben, 1 entspricht default
	layout {

		# removeItems = 100
		altLabels.0 = Vererben
		altLabels.1 = Standard
		altLabels.2 = FAQ
		altLabels.3 = Wichtige Informationen
		addItems.4 = Weitere Inhalte
        addItems.5 = Landingpage



		# für mehr Layoutauswahlmöglichkeiten folgendes nehmen
		#addItems.4 = Publikationen
		#addItems.5 = Suche: Standard
		#addItems.6 = Suche: Keine Ergebnisse
		#addItems.7 = Mein RKW

	}

	#===============================================================
	# Frontendlayout mit Unterseiten
	#===============================================================
	# Der Wert für 0 sollte leer bleiben, 1 entspricht default
	tx_rkwbasics_fe_layout_next_level {
		altLabels.0 = Vererben
		altLabels.1 = Standard
		altLabels.2 = FAQ
		altLabels.3 = Wichtige Informationen
		addItems.4 = Weitere Inhalte
        addItems.5 = Landingpage


		# für mehr Layoutauswahlmöglichkeiten folgendes nehmen
		#addItems.4 = Publikationen
		#addItems.5 = Suche: Standard
		#addItems.6 = Suche: Keine Ergebnisse
		#addItems.7 = Mein RKW

	}

}