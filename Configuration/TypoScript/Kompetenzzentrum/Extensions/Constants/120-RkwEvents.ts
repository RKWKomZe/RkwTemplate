
plugin.tx_rkwevents {

	persistence {
		// cat=plugin.tx_rkwevents; type=integer; label=Default storage PID
		storagePid = 2986,3234,3469,3621,3652,4244

        # cat=plugin.tx_rkwevents; type=integer; label=Default storage PID for eventReservation (write only). PID set here has to be included in storagePid-List
        eventReservation.newRecordStoragePid = 4244

        # cat=plugin.tx_rkwevents; type=integer; label=Default storage PID for eventReservationAddPerson (write only). PID set here has to be included in storagePid-List
        eventReservationAddPerson.newRecordStoragePid = 4244
    }

	settings {

		// cat=plugin.tx_rkwevents; type=integer; label=PID for list view
		listPid = 1369

		// cat=plugin.tx_rkwevents; type=integer; label=PID for detail view
		showPid = 2982

		// cat=plugin.tx_rkwevents; type=integer; label=PID for login
		loginPid = 	610

		// cat=plugin.tx_rkwevents; type=integer; label=PID for create new reservation
		reservationPid = 2983

		// cat=plugin.tx_rkwevents; type=integer; label=PID for create new FeUser
		storagePidFeUser = 618

		// cat=plugin.tx_rkwevents; type=integer; label=PID for terms and conditions (AGB)
		termsPid = 1381

		// cat=plugin.tx_rkwevents; type=integer; label=PID for terms and conditions (AGB)
		terms2Pid = 3039

		// cat=plugin.tx_rkwevents; type=integer; label=PID for list future user events view
		myEventsPid = 3003

        // cat=plugin.tx_rkwevents; type=integer; label=Defines the parent category for the FE-filter in event listing
        parentCategoryForFilter = 23

		// cat=plugin.tx_rkwevents; type=integer; label=PID for gallery and sheets for event view
		sheetsForEventPid = 2982

		// cat=plugin.tx_rkwevents; type=integer; label=PID for archive list
		archivePid = 2984

		// cat=plugin.tx_rkwevents; type=integer; label=Number of items in list view (default 10)
        itemsPerPage = 10

		// cat=plugin.tx_rkwevents; type=integer; label=PageNum for AJAX-requests
		ajaxTypeNum = 1472648979

		mandatoryFields {

			// cat=plugin.tx_rkwevents; type=string; label=Mandatory fields for registration of main person. Comma separated lists with property names (e.g. salutation, firstName, lastName, address, zip, city, email)
			eventReservationMainPerson = salutation, firstName, lastName, email, address, zip, city

			// cat=plugin.tx_rkwevents; type=string; label=Mandatory fields for registration of additional persons. Comma separated lists with property names (e.g. salutation, firstName, lastName, address, zip, city, email)
			eventReservationAdditionalPersons = salutation, firstName, lastName,
		}

		mail {
			// cat=plugin.tx_rkwevents; type=string; label=Uids of be_users for E-mail notification
			backendUser  = 1
		}
	}
}





