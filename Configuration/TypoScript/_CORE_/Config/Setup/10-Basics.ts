// ############################################################################
// ALLGEMEINE EINSTELLUNGEN
// ############################################################################
config {

	//===============================================================
	// Caching / Allgemein
	//===============================================================

	// Cache deaktivieren (nur für Entwicklung)
	no_cache = 0

    // TTL of cache, Default: 86400 (= 24 hours), set to 365 Days
    cache_period = 31536000

	// AdminPanel (auch für FE-Editing benötigt)
	admPanel = 0
	
	// Cache- Headers für intern gecachte Seiten
	sendCacheHeaders = 1
	
	// WICHTIG: Abschließender Slash, damit Click-Enlarge funktioniert!
	baseURL = {$plugin.tx_rkwtemplate_config.baseUrl}

	//===============================================================
	// Speaking URLs /SEO
	//===============================================================

	// Staticdocuments
	simulateStaticDocuments = 0
	
	// RealUrl
	tx_realurl_enable = 1


    //===============================================================
    // Exceptions for FE-Rendering
    //===============================================================
    // Default exception handler (default = 1 in production context)
    config.contentObjectExceptionHandler = 1

    // Custom class
    contentObjectExceptionHandler = RKW\RkwBasics\Error\ContentObjectProductionExceptionHandler

    // Customizing error message
    contentObjectExceptionHandler.errorMessage = Leider ist ein Fehler aufgetreten. Helfen Sie uns, den Fehler zu beheben und schreiben Sie uns unter Angabe des Fehlercodes "%s" an <a href="mailto:service@rkw.de?subject=Errorcode:%20%s">service@rkw.de</a>

    // Ignore these error codes
    // contentObjectExceptionHandler.ignoreCodes.10 = 1414512813

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

	//===============================================================
	// HTML
	//===============================================================
	// Einstellen des DocType
	doctype = html5
		
	// XHTML Cleaning aktivieren
	xhtml_cleaning >
	
  	// <?xml... ?> Prolog deaktivieren
	xmlprologue = none	

	// Keine Kommentare ausgeben
	disablePrefixComment = 1
	
	// Header- Kommentar
	headerComment = Website by RKW Kompetenzzentrum 

	//===============================================================
	// JS
	//===============================================================
	// Default Javascripts in externes File auslagern
	removeDefaultJS = 1
	removeDefaultJS = external
	
	// ausgelagertes JS in den Footer verlagern
	moveJsFromHeaderToFooter = 1
	
	// Compress and concatenate
	concatenateJs = 1
	compressJs = 1
	
	//===============================================================
	// CSS
	//===============================================================
	// CSS aus Extensions löschen - Achtung löscht auch CSS-Styled
	removeDefaultCss = 0
	
  	// Inline- CSS in externes File auslagern
	inlineStyle2TempFile = 1	

	// Compress and concatenate
	concatenateCss = 1
	compressCss = 1

	//===============================================================
	// Linkziele
	//===============================================================
	intTarget =
	extTarget = _blank
	fileTarget = _blank
	
	//===============================================================
	// Sprache
	//===============================================================
  	// Mulit-Lingualität herstellen, zunächst Standard setzen
	linkVars=L
	prefixLocalAnchors = all
	
	// Wenn Übersetzung nicht vorhanden, auf Standard-Sprache zurückgreifen
	sys_language_mode = content_fallback
	
	// Bilder und Überschriften ggf. aus Standard-Sprache holen, wenn nicht separat übersetzt
	sys_language_softMergeIfNotBlank = tt_content:image, tt_content:header
	
	// Standardsprache UID 0 -> Deutsch
	sys_language_uid = 0
	sys_language_isocode_default = de
	language = de
	locale_all = de_DE
	htmlTag_langKey = de-DE  	
	
	//===============================================================
	// Multi-Domain
	//===============================================================
  	// Fix für Blank-Pages bei Multi-Domain-Seiten
	typolinkCheckRootline = 1
	
	// Erlauben, die Domains untereinander zu verlinken
	typolinkEnableLinksAcrossDomains = 1
	content_from_pid_allowOutsideDomain=1
	
	//===============================================================
	// Spamprotection
	//===============================================================
	spamProtectEmailAddresses = 3
	spamProtectEmailAddresses_atSubst = (at)

	//===============================================================
	// Flash-Messages: Bind queue to extension
	//===============================================================
	tx_extbase.legacy.enableLegacyFlashMessageHandling = 0
}
