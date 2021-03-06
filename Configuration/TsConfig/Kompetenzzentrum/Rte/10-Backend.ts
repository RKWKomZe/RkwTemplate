// ############################################################################
// Configure Backend-RTE
// ############################################################################
RTE {
    //===============================================================
    // RTE classes
    //===============================================================
    classes >
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

        links-list {
            name = Download-Liste
            value = background-color:#F0FF69;
        }

        contenttable-events {
            name = Tabelle für Veranstaltungsprogramm
            value = background-color:#F0FF69;
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

        externalLinkIconPlanet {
            class = icon-planet
            name = Externer Link (Icon)
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

        internalLinkIconArticle {
            class = icon-article
            name = Artikel (Icon)
            type = page
            altText = Öffnet Link in gleichem Fenster
            titleText = Öffnet Link in gleichem Fenster
        }

        internalLinkIconBook {
            class = icon-book
            name = Publikation (Icon)
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

        downloadIcon {
            class = icon-file
            name = Download (Icon)
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
        contentCSS = EXT:rkw_template/Resources/Public/Kompetenzzentrum/css/rte.css

        // ------------------------------------------------------------
        // Buttons and functions in dialogs
        // ------------------------------------------------------------

        // Hide some buttons
        showButtons := removeFromList(textstylelabel, textstyle)
        hideButtons := addToList(textstylelabel, textstyle)

        // Dialogs
        buttons {
            // Hide infrequently used block types in the block formatting selector
            formatblock.removeItems = pre,address,aside,nav,div,article,section,header,footer,h1,h5,h6
        }

        // ------------------------------------------------------------
        // Classes
        // ------------------------------------------------------------
        // List all class selectors that are allowed on the way to the database
        proc.allowedClasses (
			external-link, icon-planet, internal-link, icon-article, icon-book, download, icon-file, mail,
			align-left, align-center, align-right, align-justify,
			contenttable, contenttable-1, contenttable-events,
			indent, links-list, button
        )

        // Restrict the list of class selectors presented by the RTE to the following for the specified tags:
        buttons.blockstyle.tags.div.allowedClasses = align-left, align-center, align-right, csc-frame-frame1, csc-frame-frame2
        buttons.blockstyle.tags.table.allowedClasses = contenttable, contenttable-1, contenttable-events
        buttons.blockstyle.tags.td.allowedClasses = align-left, align-center, align-right
        buttons.blockstyle.tags.tr.allowedClasses = odd, even
        buttons.blockstyle.tags.ul.allowedClasses = links-list
        buttons.textstyle.tags.span.allowedClasses =

        // Configuration of links
        // These classes should also be in the list proc.allowedClasses
        buttons.link.properties.class.allowedClasses = external-link, icon-planet, internal-link, icon-article, icon-book, download, icon-file, mail, button
        buttons.link.page.properties.class.default = internal-link
        buttons.link.url.properties.class.default = external-link
        buttons.link.file.properties.class.default = download
        buttons.link.mail.properties.class.default = mail

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
                table < .p
                tt < .p
                u < .p
                var < .p
            }
        }

        // Use same processing as on entry to database to clean content pasted into the editor
        enableWordClean.HTMLparser < .proc.entryHTMLparser_db
    }
}

