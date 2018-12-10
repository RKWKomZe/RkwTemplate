// ############################################################################
// Configure Backend-RTE
// ############################################################################
RTE {

	//===============================================================
	// RTE classes
	//===============================================================
	classes {

		align-left {
			name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifyleft
			value = text-align: left;
		}
		align-center {
			name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifycenter
			value = text-align: center;
		}
		align-right {
			name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifyright
			value = text-align: right;
		}
		align-justify {
			name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifyfull
			value = text-align: justify;
		}
		contenttable {
			name = Tabelle (normal)
			value = background-color:#d7ffbd;
		}
		contenttable-1 {
			name = Tabelle (abwechselnd)
			value = background-color:#d7ffbd;
			alternating.rows {
				// 0 = even, 1  = odd
				startAt = 0
				oddClass = odd
				evenClass = even
				oddHeaderClass = odd
				evenHeaderClass = even
			}
		}

	}			
	
	//===============================================================
	// Links
	//===============================================================
	classesAnchor {
	
		externalLink {
			class = external-link
			type = url
			altText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:external_link_altText
			titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:external_link_titleText
		}
		externalLinkInNewWindow {
			class = external-link-new-window
			type = url
			altText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:external_link_new_window_altText
			titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:external_link_new_window_titleText
		}
		internalLink {
			class = internal-link
			type = page
			altText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:internal_link_altText
			titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:internal_link_titleText
		}
		internalLinkInNewWindow {
			class = internal-link-new-window
			type = page
			altText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:internal_link_new_window_altText
			titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:internal_link_new_window_titleText
		}
		download {
			class = download
			type = file
			altText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:download_altText
			titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:download_titleText
		}
		mail {
			class = mail
			type = mail
			altText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:mail_altText
			titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:mail_titleText
		}
	}
		

	//===============================================================
	// Basic configuration
	//===============================================================
	default {
	
		// Set CSS-File for RTE
		contentCSS = EXT:rkw_template/Resources/Public/_CORE_/css/rte.css
	
		// ????
		// useCSS = 0
		
		// ------------------------------------------------------------
		// Markup options
		// ------------------------------------------------------------
		enableWordClean = 1
		removeTrailingBR = 1
		removeComments = 1
		removeTags = center, font, o:p, sdfield, strike, u, div, span
		removeTagsAndContents = link, meta, script, style, title	
	
		
		// ------------------------------------------------------------
		// Buttons and functions in dialogs
		// ------------------------------------------------------------
		// defines buttons to show (may be excerpted from source-code in BE)
		showButtons (
			bold, italic, underline, superscript, subscript, blockquote,
			undo, redo, copy, cut, paste, removeformat, pastetoggle, pastebehaviour, cleanword,
			insertparagraphbefore, insertparagraphafter, formatblock, chMode,
			left, center, right, justifyfull, indent, outdent, orderedlist, unorderedlist,
			blockstylelabel, blockstyle, insertcharacter, textstylelabel, textstyle,
			link, unlink,  findreplace, definitionlist, definitionitem,
			table, toggleborders, tableproperties, tablerestyle, rowproperties, rowinsertabove, rowinsertunder,
			rowdelete, rowsplit, columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit,
			cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
				    
		)
		
		// defines which buttons to hide
		hideButtons (
			strikethrough, bar, linebreak, space, insertsofthyphen, showhelp, textindicator, inserttag,
			lefttoright, righttoleft, user, image, emoticon, editelement, showmicrodata, showlanguagemarks, line, about, language
			
		)
		
		// More toolbar options
		keepButtonGroupTogether = 1		
		
		// Enable status bar
		showStatusBar =  1

		// Dialogs
		buttons {
			
			// Hide infrequently used block types in the block formatting selector
			formatblock.removeItems = h1,h2,h3,h4,h5,h6,blockquote,pre,address,aside,nav,div,article,section,header,footer
		
			// Show borders on table creation
			toggleborders.setOnTableCreation = 1	
		
			// Options for link-popup
			link {
				
				// Activate possibility to add QueryString
				queryParametersSelector.enabled = 1		
			
				// Activate possibility to set page-id manually
				// pageIdSelector.enabled = 1
				
				// Deactivate title field
				// properties.title.readOnly = 1
			}
		}
		
		// Configuration specific to the TableOperations feature
		// Remove the following fieldsets from the table operations dialogs
		disableAlignmentFieldsetInTableOperations = 1
		disableSpacingFieldsetInTableOperations = 1
		disableColorFieldsetInTableOperations = 1
		disableLayoutFieldsetInTableOperations = 1
		disableBordersFieldsetInTableOperations = 1
		
		// ------------------------------------------------------------
		// Classes
		// ------------------------------------------------------------
		// List all class selectors that are allowed on the way to the database
		proc.allowedClasses (
			external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail,
			align-left, align-center, align-right, align-justify,
			contenttable, contenttable-1,
			indent
		)	
		
		// Restrict the list of class selectors presented by the RTE to the following for the specified tags:
		buttons.blockstyle.tags.div.allowedClasses = align-left, align-center, align-right, csc-frame-frame1, csc-frame-frame2
		buttons.blockstyle.tags.table.allowedClasses = contenttable, contenttable-1
		buttons.blockstyle.tags.td.allowedClasses = align-left, align-center, align-right
		buttons.blockstyle.tags.tr.allowedClasses = odd, even
		buttons.textstyle.tags.span.allowedClasses =

		// Configuration of links
		// These classes should also be in the list proc.allowedClasses
		buttons.link.properties.class.allowedClasses = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
		buttons.link.page.properties.class.default = internal-link
		buttons.link.url.properties.class.default = external-link-new-window
		buttons.link.file.properties.class.default = download
		buttons.link.mail.properties.class.default = mail
		
		// ------------------------------------------------------------
		// Labels
		// ------------------------------------------------------------
		buttons.formatblock.items {
	  	 	h1.label = Überschrift 1
	  	 	h2.label = Überschrift 2
	  	 	h3.label = Überschrift 3
	  	 	h4.label = Überschrift 4 	  	 	
		}
		
		// ------------------------------------------------------------
		// Parsing
		// ------------------------------------------------------------
		// Set cleanup for elements when saving to DB
		proc.entryHTMLparser_db = 1
		proc.entryHTMLparser_db {
			
			// Since we do not use any custom- Tags, we delete unknown
			keepNonMatchedTags = 0

			// take settings from RTE.default here
			allowTags < RTE.default.proc.allowTags
			denyTags < RTE.default.proc.denyTags
			
			tags {
			
				// clean attributes on the following tags
				span { 
					allowedAttribs = id, title, dir, lang, xml:lang, class, itemscope, itemtype, itemprop
					rmTagIfNoAttrib = 1
					fixAttrib {
					
						// Remove those evil ones
						align.unset = 1
						style.unset = 1
					}
				}
				
				p {
					allowedAttribs = id, title, dir, lang, xml:lang, class, itemscope, itemtype, itemprop
					fixAttrib {
					
						// Remove those evil ones
						align.unset = 1
						style.unset = 1
						
						// Allow only the defined list of classes
						class.list < RTE.default.proc.allowedClasses
					}
				}


				// Inherit to all elements
				div < .p
				h1 < .p
				h2 < .p
				h3 < .p
				h4 < .p
				h5 < .p
				h6 < .p				
				hr < .p
				b < .p
				bdo < .p
				big < .p
				blockquote < .p
				cite < .p
				code < .p
				del < .p
				dfn < .p
				em < .p
				i < .p
				ins < .p
				kbd < .p
				label < .p
				q < .p
				samp < .p
				small < .p
				strike < .p
				strong < .p
				sub < .p
				sup < .p
				table  < .p
				tt < .p
				u < .p
				var < .p
			}
		}

		// Use same processing as on entry to database to clean content pasted into the editor
		enableWordClean.HTMLparser < .proc.entryHTMLparser_db
	}
	
	// Set mutally exclusive classes
	mutuallyExclusiveClasses = odd,even

}

