// ###########################################################################
// Setup for page-properties -> layout
// ############################################################################
TCEFORM.pages {
    //===============================================================
    // FrontendLayout without subpages
    //===============================================================
    // change label of select-box
    layout.label = Frontend Layout (ohne Unterseiten)

    // determine selectable layouts
    // value = 0 equals inheritance, value = 1 is default
    layout {
        // removeItems = 100
        altLabels.0 = Vererben
        altLabels.1 = Artikel
        altLabels.2 = Home
        altLabels.3 = Thema

        // add more items
        addItems.4 = Publikationen
        addItems.5 = Suche: Standard
        addItems.6 = Suche: Keine Ergebnisse
        addItems.7 = Mein RKW
        addItems.8 = Spezialseiten
        addItems.9 = Blog Startseite
        addItems.10 = Broken Link
        addItems.11 = RKW Karte
        addItems.12 = Tools
        addItems.100 = Berater Detailseite
        addItems.200 = Experten Listenansicht
        addItems.210 = Experten Detailseite
        addItems.300 = Veranstaltungen Detailseite
    }

    //===============================================================
    // FrontendLayout with subpages
    //===============================================================
    // determine selectable layouts
    // value = 0 equals inheritance, value = 1 is default
    tx_rkwbasics_fe_layout_next_level {
        altLabels.0 = Vererben
        altLabels.1 = Artikel
        altLabels.2 = Home
        altLabels.3 = Thema

        // add more items
        addItems.4 = Publikationen
        addItems.5 = Suche: Standard
        addItems.6 = Suche: Keine Ergebnisse
        addItems.7 = Mein RKW
        addItems.8 = Spezialseiten
        addItems.9 = Blog Startseite
        addItems.10 = Broken Link
        addItems.11 = RKW Karte
        addItems.12 = Tools
        addItems.100 = Berater Detailseite
        addItems.200 = Experten Listenansicht
        addItems.210 = Experten Detailseite
        addItems.300 = Veranstaltungen Detailseite
    }

    //===============================================================
    // CSS- classes e.g. for menu
    //===============================================================
    tx_rkwbasics_css_class {

        removeItems = 2, 3
        altLabels.1 = 4-spaltiges Layout
        // altLabels.3 = Innovation

        // add more items
        // addItems.4 = Fachkräftesicherung
        // addItems.5 = Hauptmenü 5
    }
}

