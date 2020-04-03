//############################################################################
// Configure Backend-RTE
//############################################################################
RTE {

	//===============================================================
	// RTE classes
	//===============================================================
	classes >
	#classes >
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
	}

	//===============================================================
	// Links
	//===============================================================
	classesAnchor >
	classesAnchor {

		externalLink {
			class = external-link
			name = Externer Link
			type = url
			altText = Öffnet Link in neuem Fenster
			titleText = Öffnet Link in neuem Fenster
		}
		internalLink {
			class = internal-link
			name = Interner Link
			type = page
			altText = Öffnet Link in gleichem Fenster
			titleText = Öffnet Link in gleichem Fenster
		}
		download {
			class = download
			name = Download
			type = file
			altText = Datei herunterladen
			titleText = Datei herunterladen
		}
		mail {
			class = mail
			name = E-Mail
			type = mail
			altText = E-Mail schreiben
			titleText = E-Mail schreiben
		}

	}

	//===============================================================
	// Basic configuration
	//===============================================================
	default {

		// Set CSS-File for RTE
		contentCSS = fileadmin/templates/wepstra/css/rte.css

		// ------------------------------------------------------------
		// Buttons and functions in dialogs
		// ------------------------------------------------------------
		// defines buttons to show (may be excerpted from source-code in BE)
		showButtons (
			bold, italic, underline, superscript, subscript,
			undo, redo, copy, cut, paste, removeformat, pastetoggle, pastebehaviour, cleanword,
			insertparagraphbefore, insertparagraphafter, formatblock, chMode,
			left, center, right, justifyfull, indent, outdent, orderedlist, unorderedlist,
			blockstylelabel, blockstyle, insertcharacter, textstylelabel, textstyle,
			link, unlink, findreplace,

		)

		// defines which buttons to hide
		hideButtons (
			blockquote, strikethrough, bar, linebreak, space, insertsofthyphen, showhelp, textindicator, inserttag,
			lefttoright, righttoleft, user, image, emoticon, editelement, showmicrodata, showlanguagemarks, line, about, language,
			definitionlist, definitionitem,
			table, toggleborders, tableproperties, tablerestyle, rowproperties, rowinsertabove, rowinsertunder,
			rowdelete, rowsplit, columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit,
			cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge

		)



		// ------------------------------------------------------------
		// Classes
		// ------------------------------------------------------------
		// List all class selectors that are allowed on the way to the database
		proc.allowedClasses (
			external-link, icon-planet, internal-link, download, mail,
			align-left, align-center, align-right, align-justify,
			contenttable, contenttable-1,
			indent
		)

		// Dialogs
		buttons {

			// Hide infrequently used block types in the block formatting selector
			formatblock.removeItems = h3,h4,h5,h6,blockquote,pre,address,aside,nav,div,article,section,header,footer

		}

		// Restrict the list of class selectors presented by the RTE to the following for the specified tags:
		buttons.blockstyle.tags.div.allowedClasses = align-left, align-center, align-right, csc-frame-frame1, csc-frame-frame2
		buttons.blockstyle.tags.table.allowedClasses = contenttable, contenttable-1
		buttons.blockstyle.tags.td.allowedClasses = align-left, align-center, align-right
		buttons.blockstyle.tags.tr.allowedClasses = odd, even
		buttons.blockstyle.tags.ul.allowedClasses = links-list
		buttons.textstyle.tags.span.allowedClasses =

		// Configuration of links
		// These classes should also be in the list proc.allowedClasses
		buttons.link.properties.class.allowedClasses = external-link, internal-link, download, mail
		buttons.link.page.properties.class.default = internal-link
		buttons.link.url.properties.class.default = external-link
		buttons.link.file.properties.class.default = download
		buttons.link.mail.properties.class.default = mail

	}
}
