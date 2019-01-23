plugin.tx_rkwconsultant {
    persistence {
        // cat=plugin.tx_rkwconsultant//a; type=string; label=Default storage PID
        storagePid = 2262
    }

    settings {

        // cat=plugin.tx_rkwconsultant//a; type=boolean; label=Include jQuery?
        includeJQuery = 0

        // cat=plugin.tx_rkwconsultant//a; type=boolean; label=Include Featherlight plugin (online ressouce)?
        includeFeatherlight = 0

        // cat=plugin.tx_rkwconsultant//f; type=integer; label=pageUid of enable / preview actions of consultant plugin
        pageUid = 2525

        // cat=plugin.tx_rkwconsultant//f; type=integer; label=pageUid of list plugin
        pageListUid = 2523

        // cat=plugin.tx_rkwconsultant//f; type=integer; label=pageUid of detail plugin
        pageDetailUid = 2525

        // cat=plugin.tx_rkwconsultant//f; type=integer; label=pageUid of restricted "Mein RKW"-Area, list-view
        restrictedPageUid = 2264

        // cat=plugin.tx_rkwconsultant//f; type=integer; label=pageUid of restricted "Mein RKW"-Area, edit-view
        restrictedPageEditUid = 2341

        // cat=plugin.tx_rkwconsultant//f; type=integer; label=pageUid of restricted "Mein RKW"-Area, new-view
        restrictedPageNewUid = 2340

        # cat=plugin.tx_rkwconsultant//f; type=string; label=for preview and unlocking of an hidden consultant profile (after create / edit)
        allowedRemoteAddr = 195.63.251.130

        // cat=plugin.tx_rkwconsultant//f; type=integer; label=elements per list page
        itemsPerPage = 12

        // cat=plugin.tx_rkwconsultant//f; type=integer; number of mandatory ContactPersons (consultantService)
        numberOfMandatoryContactPersons = 1
        
        mandatoryFields {

            # cat=plugin.tx_rkwconsultant//f; type=string; label=mandatory fields for consultant (e.g. salutation, title, firstName, lastName, company, address, zip, city, state, telephone, fax, email, www, facebook, twitter, googlePlus, shortDescription, reference)
            consultant = shortDescription, company, address, zip, city, email

            # cat=plugin.tx_rkwconsultant//f; type=string; label=mandatory fields for consultantService (e.g. furtherInformations, qualification, subService)
            consultantService = furtherInformations

            # cat=plugin.tx_rkwconsultant//f; type=string; label=mandatory fields for contactPerson (e.g. salutation, title, firstName, lastName, telephone, email)
            contactPerson = firstName, lastName, email

            # cat=plugin.tx_rkwconsultant//f; type=integer; label=define the number of contactPerson, that have to be given in the service form (Possible values: 1-3)
            numberOfMandatoryContactPersons = 1

        }

        consultant {

            # cat=plugin.tx_rkwconsultant//f; type=boolean; label=unlocking by admin (1 = activated)
            adminUnlocking = 1

            # cat=plugin.tx_rkwconsultant//f; type=string; label=ids of admins for unlocking consultant profile (comma seperated)
            adminIdsForEmail = 1,14

            # cat=plugin.tx_rkwconsultant//f; type=integer; label=max profiles per user (no value = no limit)
            maxProfilesUser = 10

            # cat=plugin.tx_rkwconsultant//f; type=integer; label=list of allowed usergroups for profile owners in BE
            allowedOwnerGroupsList = 3,5
        }

    }
}
