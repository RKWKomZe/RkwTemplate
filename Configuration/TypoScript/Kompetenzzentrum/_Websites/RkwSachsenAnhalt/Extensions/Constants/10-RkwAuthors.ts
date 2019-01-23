plugin.tx_rkwauthors {
	persistence {
		// cat=plugin.tx_rkwauthors//a; type=string; label=Default storage PID
		storagePid = 3467
	}

	settings {
		// cat=plugin.tx_rkwauthors//a; type=string; label=BaseUrl for schema.org images of authors
		baseUrlSchemaOrg = https://www.rkw-sachsenanhalt.de/

		// cat=plugin.tx_rkwauthors//a; type=boolean; label=list pid
		listPid = 3581

		// cat=plugin.tx_rkwauthors//a; type=boolean; label=show pid
		showPid = 3582

        # cat=plugin.tx_rkwauthors//a; type=integer; label=Phone extension length
        phoneExtensionLength = 2
    }
}

