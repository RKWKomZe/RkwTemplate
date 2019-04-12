plugin.tx_rkwauthors {

	persistence {
		// cat=plugin.tx_rkwauthors//a; type=string; label=Default storage PID
		storagePid = 4787
	}

	settings {
		// cat=plugin.tx_rkwauthors//a; type=string; label=BaseUrl for schema.org images of authors
		baseUrlSchemaOrg = https://www.rkw-bremen.de/

        # cat=plugin.tx_rkwauthors//a; type=boolean; label=Sets all detail-link with target=_blank
        detailLinkTargetBlank = 1
    }
}

