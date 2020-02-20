plugin.tx_rkwprivacy {

	settings {

	    # cat=plugin.tx_rkwprivacy//a; type=int; label=Pid of data protection declaration
        dataProtectionPid = 1921

        # cat=plugin.tx_rkwprivacy//a; type=int; label=Pid of imprint
        imprintPid = 409

        sgCookieOptIn {

            # cat=plugin.tx_rkwprivacy//a; type=int; label=Pid to load data from
			storagePid = 1
		}
    }
}