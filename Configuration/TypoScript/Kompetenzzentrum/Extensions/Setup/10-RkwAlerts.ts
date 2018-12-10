
plugin.tx_rkwalerts {

	settings {

		// sorting for link in alert-email
		linkSortingField = pubdate

		// Additional filter field for selection of pages, only integer fields allowed! (default: crdate)
		filterField = tx_rkwsearch_pubdate

		// Time in seconds from now since creation, matching against the field defined in filterField (default: 432000 = 5 days)
		timeSinceCreation = 604800
	}
}
module.tx_rkwalerts < plugin.tx_rkwalerts
