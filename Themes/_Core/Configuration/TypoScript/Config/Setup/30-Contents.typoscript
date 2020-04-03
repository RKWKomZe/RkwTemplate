//############################################################################
// TUNING FÜR ÜBERSCHRIFTEN
//############################################################################
// Headlines einstellen für das Feld "Überschrift", ggf. spaltenabhängig
// Erst mal alle Wraps & Klassen weg machen
lib.stdheader {

	// Wenn drin, dann kann der Kunde die Ausrichtung der Headline bestimmen
	// 2.headerStyle >

	// KLasse für erste Überschrift löschen (optional)
	// 3.headerClass >
	
	// Wrap um Headline
	stdWrap.dataWrap = |	

}




//############################################################################
// TUNING FÜR INHALTSELEMENTE (tt_content)
//############################################################################
tt_content {

	//===============================================================
	// Standard-Wrapper
	//===============================================================
	stdWrap {
	
		// Abstands- Gifs rauswerfen
		space = 0|0
	
		// Wrapper und Kommentare weglöschen
		prefixComment >
		
		// Div um gesamten Content leeren
		// Deaktiviert aber auch Anker im Content !!!!
		// innerWrap >
	}
	
	//===============================================================
	// Wrapper für Unterüberschriften
	//===============================================================
	header {
		
		// Abstands- Gifs rauswerfen
		stdWrap.space = 0|0
		
		// Wrap für Subüberschrift
		20.dataWrap = <p class="csc-subheader csc-subheader-{field:layout}">|</p>
		20.prefixComment >
	}

	//===============================================================
	// Wrapper für Bilder
	//===============================================================
	image.20 {
	
		// entfernen des spacer.gif bzw. clear.gif
		spaceBelowAbove = 0
	    	
		// Kommentare wegmachen
		stdWrap.prefixComment >
		
		// Ein Link pro Zeile
		1.imageLinkWrap {
			enable.ifEmpty.typolink.parameter.listNum.splitChar = 10
			typolink.parameter.override.listNum.splitChar = 10
		}	
	}
	
	//===============================================================
	// Wrapper für Text
	//===============================================================
	text {
	
		// entfernen des spacer.gif bzw. clear.gif
		20.parseFunc.tags.typohead.stdWrap.space = 0|0
		20.text.wrap >
		
		// Kommentare entfernen
		stdWrap.prefixComment >
		20.prefixComment >
	}
	
	//===============================================================
	// Wrapper für Text-mit-Bild
	//===============================================================
	textpic.20 {
	
		// entfernen des spacer.gif bzw. clear.gif
		spaceBelowAbove = 0
		noStretchAndMarginCells = 1
		
		// Kommentare entfernen
		stdWrap.prefixComment >
	}

	//===============================================================
	// Wrapper für Extensions entfernen!
	//===============================================================
	stdWrap.innerWrap {
        cObject {
            default {

                // opening div-container-part
                10 {
                    cObject {

                       // for plugins do nothing
                       list = COA
                    }
                }

                // classes and stuff
                20 {
                    40 = TEXT
                    40.value = csc-element-n{cObj:parentRecordNumber}
                    40.insertData = 1

                    // for plugins do nothing
                    if {
                        equals = list
                        value.field =  CType
                        negate = 1
                    }
                }

                // closing div-container-part
                30 {
                    cObject {
                       // for plugins do nothing
                       list = COA

                    }
                }
            }
        }
    }


	//===============================================================
	// Kommentare entfernen
	//===============================================================
	default.prefixComment >
	bullets.prefixComment >
	table.20.stdWrap.prefixComment >
	uploads.20.stdWrap.prefixComment >
	multimedia.20.stdWrap.prefixComment >
	swfobject.20.stdWrap.prefixComment >
	qtobject.20.stdWrap.prefixComment >
	media.20.stdWrap.prefixComment >
	mailform.20.stdWrap.prefixComment >
	search.20.stdWrap.prefixComment >
	search.30.stdWrap.prefixComment >
	login.20.stdWrap.prefixComment >
	menu.20.stdWrap.prefixComment >
	shortcut.20.stdWrap.prefixComment >
	list.20.stdWrap.prefixComment >
	script.prefixComment > 
	div.prefixComment >
	html.prefixComment > 	
	
}


//############################################################################
// TUNING FÜR RTE- INHALTE
//############################################################################
lib.parseFunc_RTE {

	//===============================================================
	// Standardklassen und Wraps
	//===============================================================
	nonTypoTagStdWrap.encapsLines {
   
		// RTE Tuning --> gegen Standardklassen
		addAttributes.P.class >
		remapTag >
		addAttributes.DIV.class >

		// Angabe von Tags, die nicht mit einem zusätzlichen wrap umgeben werden dürfen
		encapsTagList = cite, div, p, pre, h1, h2, h3, h4, h5, h6, ul, ol, li

	}

	externalBlocks {

		//===============================================================
		// Keine P-Tags in Tabellen
		//===============================================================
		table.HTMLtableCells {
			
			default >
			default.stdWrap {
				parseFunc =< lib.parseFunc
				HTMLparser {
					removeTags = p
					keepNonMatchedTags = 1
				}
			}
   		}

   
   		//===============================================================
		// Anpassung CSS- Klassen für Listenelemente und Tabellen
		//===============================================================
		table.stdWrap.HTMLparser = 1
		table.stdWrap.HTMLparser.tags.table.fixAttrib.class {
			default = contenttable responsive
			always = 1
			list = responsive,contenttable,contenttable-1
		}

   		dl >
		dl {
			stripNL = 1

			// Entfernen von p-Tags um dl-tags
      		stdWrap{
				HTMLparser{
				  // tags zum expliziten Entfernen
				  removeTags = p

				  // alle anderen behalten wir (z.B. li)
				  keepNonMatchedTags = 1
				}
        	}
		}


   		ul >
		ul {
			stripNL = 1
			callRecursive = 1
			callRecursive {
				tagStdWrap.HTMLparser = 1
				tagStdWrap.HTMLparser.tags.ul.fixAttrib.class {
					default = content-unordered-list
					always = 1

				}
			}

			// Entfernen von p-Tags um li-tags
      		stdWrap{
				HTMLparser{
				  // tags zum expliziten Entfernen
				  removeTags = p

				  // alle anderen behalten wir (z.B. li)
				  keepNonMatchedTags = 1
				}
        	}
		}

		ol >
		ol < .ul
		ol {
			callRecursive {
				tagStdWrap.HTMLparser.tags.ol.fixAttrib.class {
					default = content-unordered-list
					always = 1
				}
			}
        }

        // Entfernen des style-Attributs
		blockquote {
			callRecursive = 1
			callRecursive {
				tagStdWrap.HTMLparser = 1
				tagStdWrap.HTMLparser.tags.blockquote.overrideAttribs >
			}
		}
	}
}






