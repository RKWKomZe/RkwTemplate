#############################################################################
// STANDARD- SEITENOBJEKT
#############################################################################
page = PAGE
page {

	//===============================================================
	// Seiten-Typ
	//===============================================================
	stdWrap=1
	typeNum =0
	
	//===============================================================
	// Globale Einstellungen
	//===============================================================
	config {
	
		// Charset für Frontend
		metaCharset = utf-8
		additionalHeaders.10.header = Content-Type:text/html;charset=utf-8
		
		// Für Suche
		index_enable = 0 

		// Suche indiziert auch Meta-Tags
		index_metatags = 0

		// Für Suche: PDFs, Docs etc auch indexieren (ACHTUNG: benötigt bestimmte PHP-Module!)
		index_externals = 0
		
		// Standard-Seitentitel abschalten
		noPageTitle = 1

		// Kommentar
		headerComment = Created by RKW Kompetenzzentrum
	}


	// Favicon
	shortcutIcon = {$plugin.tx_rkwtemplate_config.paths.default.icons}/favicon.ico

	//===============================================================
	// Header
	//===============================================================
    headerData {


		//===============================================================
		// Title-Tag
		//===============================================================
		100 = COA
		100 {

			// Titel
			10 = TEXT
			10.field = title

			// Untertitel hinzufügen, wenn gesetzt
			20 = TEXT
			20 {
				field = subtitle
				noTrimWrap = | - ||
				required = 1
			}

			// Website Name einfügen
			30 = TEXT
			30 {
				value = example.com
				noTrimWrap = | - ||
			}

			// Wrapper außen rum
			stdWrap.wrap = <title>|</title>

			// Sonderzeichen valide umwandeln, auch für den Titel (machen wir auch meistens in den Menüs)
			stdWrap.htmlSpecialChars = 1

		}

		//===============================================================
		// Canonical-Tag
		//===============================================================
		4000 = TEXT
		4000 < plugin.tx_rkwbasics.libs.canonical


		//===============================================================
		// OpenGraph
		//===============================================================
		5000 = COA
		5000 {

			10 = TEXT
			10.value = <meta property="og:type" content="article" />

			20 = TEXT
			20 {
				value < config.locale_all
				wrap = <meta property="og:locale" content="|" />
			}

			30 = COA
			30 < page.headerData.100
			30 {

				30 >
				stdWrap.wrap = <meta property="og:title" content="|" />
				stdWrap.htmlSpecialChars = 1
			}

			40 = TEXT
			40 {
				value = Example Company
				wrap = <meta property="og:site_name" content="|" />
				stdWrap.htmlSpecialChars = 1
			}

			50 = TEXT
			50 {
                description.data = levelfield:-1, tx_rkwbasics_teaser_text, slide
                description.override {
                    field = description
                    if.isTrue.field = description
                }
				wrap = <meta property="og:description" content="|" />
				stdWrap.htmlSpecialChars = 1
			}

			60 = COA
			60 {

				10 = COA
				10 {

					// teaser immage with fallbaacks
					10 = FILES
					10 {

						references {
							table = pages
                            data =  levelmedia : -1,slide
							override.data = levelfield : -1, tx_rkwbasics_teaser_image, slide
							override.required = 1
							override.override.data = levelfield : -1, tx_rkwbasics_article_image, slide
                            override.override.required = 1
						}

						maxItems = 1

						renderObj = IMG_RESOURCE
						renderObj {

							// Aktuellen file einfach nehmen
							file.import.data = file:current:publicUrl

							// maximale Breite des Fallback-Images
							// see: https://developers.facebook.com/docs/sharing/best-practices#images
							file {
								maxW = 1200
								maxH = 630

								minW = 200
								minH = 200
							}
						}
					}

				}

				wrap = <meta property="og:image" content="{$plugin.tx_rkwtemplate_config.baseUrl}|">
			}

			70 = TEXT
			70 {
				value = https://www.facebook.com/EXAMPLE
				wrap = <meta property="article:publisher" content="|" />
			}
		}

		//===============================================================
		// Icons
		//===============================================================
		6000 = TEXT
		6000.value (
			<link rel="apple-touch-icon" sizes="57x57" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/apple-icon-57x57.png">
			<link rel="apple-touch-icon" sizes="60x60" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/apple-icon-60x60.png">
			<link rel="apple-touch-icon" sizes="72x72" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/apple-icon-72x72.png">
			<link rel="apple-touch-icon" sizes="76x76" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/apple-icon-76x76.png">
			<link rel="apple-touch-icon" sizes="114x114" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/apple-icon-114x114.png">
			<link rel="apple-touch-icon" sizes="120x120" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/apple-icon-120x120.png">
			<link rel="apple-touch-icon" sizes="144x144" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/apple-icon-144x144.png">
			<link rel="apple-touch-icon" sizes="152x152" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/apple-icon-152x152.png">
			<link rel="apple-touch-icon" sizes="180x180" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/apple-icon-180x180.png">
			<link rel="icon" type="image/png" sizes="192x192" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/android-icon-192x192.png">
			<link rel="icon" type="image/png" sizes="32x32" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/favicon-32x32.png">
			<link rel="icon" type="image/png" sizes="96x96" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/favicon-96x96.png">
			<link rel="icon" type="image/png" sizes="16x16" href="/{$plugin.tx_rkwtemplate_config.paths.default.icons}/favicon-16x16.png">
		)
		
	}
	
	
	//===============================================================
	// Body- Tag
	//===============================================================
	bodyTag >
	bodyTagCObject = COA
	bodyTagCObject {
	
		5 = TEXT
		5.value = <body
		5.noTrimWrap = || |
		
		10 = COA
		10 {

			// Zusatzklasse je nach gewähltem Layout ausgeben
			// Dabei Vererbungsfeld berücksichtigen !
			10 = COA
			10 {
			
				// Fall 1: Wenn kein Layout gesetzt ODER wenn explizit das default-Layout gewählt wurde
				// (layout < 2 bzw. felayout_next_level < 2)
				// -- > 1 wird zu default gezählt, weil ist aktive Auswahl des default-layouts!
				10 = TEXT
				10 {
				
					value = default
					
					if.value.field = layout
					if.isGreaterThan = 2
					if.isGreaterThan.if.value.data = levelfield:-2,tx_comwrap_felayout_next_level,slide 
					if.isGreaterThan.if.isGreaterThan = 2				
				}		
				
				// Fall 2: Layout- Feld als Klasse setzen
				// aber nur, wenn es > 1 ist (1 wird ignoriert, weil ist aktive Auswahl des default-layouts!)
				20 = TEXT
				20 {
					
					field = layout
					
					if.value.field = layout
					if.isLessThan = 1				
				}
				
				// Fall 3: Layoutvererbungs- Feld als Klasse setzen
				// aber nur, wenn es > 1 ist UND layout nicht gesetzt
				30 = TEXT
				30 {
					
					data = levelfield:-2,tx_comwrap_felayout_next_level,slide 
					
					if.value.data = levelfield:-2,tx_comwrap_felayout_next_level,slide 
					if.isLessThan = 1
					if.isLessThan.if.isFalse = layout
	
				}
	
				stdWrap.noTrimWrap = | page-||			
			}
			
			20 = TEXT
			20.value = lid-0
			20.noTrimWrap = | ||

			wrap = class="no-js|"
		}
	
		20 = TEXT
		20.value = >
		
	}
}
