plugin.tx_rkwsearch {
	persistence {
		// cat=plugin.tx_rkwsearch//a; type=string; label=Default storage PID
		storagePid = 1
	}

	settings {

        import {

            // cat=plugin.tx_rkwsearch; type=string; label=Comma-separated list of PIDs. All objects that are in the rootline of this pages will be imported
            rootPages = 1,11
        }

		search {
			// cat=plugin.tx_rkwsearch; type=integer; label=Uid of page which should be loaded when not results have been found
			emptyResultPid = 1371

			// cat=plugin.tx_rkwsearch; type=integer; label=Uid of page for consultant details
			consultantsDetailPid = 2294

			// cat=plugin.tx_rkwsearch; type=integer; label=Uid of page for internal consultant details
			consultantsInternalDetailPid = 2525

			// cat=plugin.tx_rkwsearch; type=integer; label=Uid of page for author details
			authorsDetailPid = 2814

			related {
				// cat=plugin.tx_rkwsearch; type=float; label=Tolerance for score values for keywords used for related search
				scoreTolerance = 0.2

				// cat=plugin.tx_rkwsearch; type=float; label=Items per hundred signs of text
				// old value with half-boxes: 0.55
				itemsPerHundredSigns = 0.35

				// cat=plugin.tx_rkwsearch; type=integer; label=Minimum number of items
				minItems = 5
			}

		}
	}

}


