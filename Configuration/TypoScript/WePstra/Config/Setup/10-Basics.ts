#############################################################################
// ALLGEMEINE EINSTELLUNGEN
#############################################################################
config {

	//==============================================================
	// Caching / Allgemein
	//===============================================================

	// Cache deaktivieren (nur für Entwicklung)
	no_cache = 0

	// AdminPanel (auch für FE-Editing benötigt)
	admPanel = 0

	//===============================================================
	// Speaking URLs /SEO
	//===============================================================

	// RealUrl
	tx_realurl_enable = 1

	// CDN
    tx_rkwbasics_cdn {
        enable = 0
        enablePostProc = 0
    }

	//===============================================================
	// Suche
	//===============================================================
	// Indexed Search --> steht zusätzlich noch mal im Seitentemplate
	// Globales Indexed Search hier wird nur für Crawler benötigt!
	// WICHTIG: Frontend-Indexierung dann ausschalten, weil es Einstellungen für die PageTypes überschreibt 
	// und so auch die Druckansicht usw. indexiert werden, wenn Frontend-Indexierung an ist!!!
	// Umgekehrt geht der Crawler nicht, wenn es hier global nicht eingeschaltet ist.
	// Also: Entweder Crawler ODER Frontend-Indexierung!!!
	index_enable = 0
	index_externals =0


}

