// ############################################################################
// Anpassung für Inhaltselemente
// ############################################################################
TCEFORM.tt_content {
	
	//===============================================================
	// Für die Headlines in den Content-Elementen
	//===============================================================
	header_layout{
		removeItems >
	}
	
	//===============================================================
	// Für den Section-Frame innerhalb der Elemente
	//===============================================================
	section_frame {
		removeItems = 1,5,6,12,10,11,20,21,66	
	}
	
	//===============================================================
	// Für Layoutvergabe innerhalb der Elemente (z.B. Tabellen)
	//===============================================================
	layout{
		removeItems = 1,2,3
	}

	//===============================================================
	// Für die Bildausrichtung
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
		removeItems =
	}
}


