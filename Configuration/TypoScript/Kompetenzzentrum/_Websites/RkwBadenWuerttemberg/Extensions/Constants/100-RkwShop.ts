plugin.tx_rkwshop {
    persistence {
        // cat=plugin.tx_rkwshop //a; type=string; label=Default storage PID
        storagePid = 5596

    }


	settings {

        # cat=plugin.tx_rkwshop/a; type=boolean; label=Include jQuery?
        includeJQuery = 0

		# cat=plugin.tx_rkwshop//a; type=integer; label=Pid of terms & conditions
		termsPid = 5081

        # cat=plugin.tx_rkwshop/a; type=boolean; label=Disable admin mails?
        disableAdminMails = 0

		# cat=plugin.tx_rkwshop//a; type=string; label=Username of BE-User if none is set in plugin
		fallbackBackendUserForAdminMails = admin

		# cat=plugin.tx_rkwshop//a; type=integer; label=Maximum amount per order item
		maxOrderItemAmount = 100

		# cat=plugin.tx_rkwshop//a; type=string; label=List of required fields for shipping address
		requiredFields = gender, firstName, lastName, address, zip, city
	}
}
