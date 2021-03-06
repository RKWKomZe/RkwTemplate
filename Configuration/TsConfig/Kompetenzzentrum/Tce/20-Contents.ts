//############################################################################
// Customizing tt_content
//############################################################################
TCEFORM.tt_content {
    //===============================================================
    // For layout-settings in tt_content elements (e.g. tables)
    //===============================================================
    layout {
        addItems.4 = Link
        addItems.5 = Download
        addItems.6 = Publikation
        addItems.7 = Thema / Projekt
    }

    //===============================================================
    // for image orientation
    //===============================================================
    // 0 = Above, center
    // 1 = Above, right
    // 2 = Above, left
    // 8 = Below, center
    // 9 = Below, right
    // 10 = Below, left
    // 17 = In text, right
    // 18 = In text, left
    // 25 = In text, right (nowrap)
    // 26 = In text, left (nowrap)
    imageorient {
        removeItems = 1,2,9,10,17,25
    }

    section_frame {

        addItems.100 = Akkordeon
        addItems.101 = Inhaltsverzeichnis

    }
}


