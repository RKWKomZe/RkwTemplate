
plugin.tx_rkwform {

    settings {
        mandatoryFields {
            # cat=plugin.tx_rkwform//f; type=string; label=mandatory fields for standard form (e.g. salutation, firstName, lastName, company, email, phone, text )
            standard = firstName, lastName, email, salutation, text
        }

        mail {
            # cat=plugin.tx_rkwform//f; type=string; label=comma-separated list of backend user-uids (fallback)
            fallbackBackendUser = 1
        }
    }
}
