plugin.tx_rkwetracker {
    persistence {
        // cat=plugin.tx_rkwetracker; type=integer; label=Default storage PID
        storagePid = 3364
    }

    settings {
        // cat=plugin.tx_rkwetracker; type=string; Account start date
        accountStartDate = 2016-01-18

        // cat=plugin.tx_rkwetracker; type=integer; Pid for SingleSignOn
        singleSignOnPid = 3369

        # cat=plugin.tx_rkwetracker; type=string; Domains which names won't be displayed in report
        reportDomainExcludeList = www.rkw-kompetenzzentrum.de
    }
}

module.tx_rkwetracker.persistence < plugin.tx_rkwetracker.persistence
module.tx_rkwetracker.settings < plugin.tx_rkwetracker.settings