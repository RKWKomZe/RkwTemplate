plugin.tx_rkwnewsletter {


    persistence {
        # cat=plugin.tx_rkwnewsletter//a; type=string; label=Default storage PID
        storagePid = 4600
    }

    settings {

        # cat=plugin.tx_rkwnewsletter//a; type=integer; label=remind BackendUser on stage 1 to approve pages of a new issue
        reminderApprovalStage1 = 302400

        # cat=plugin.tx_rkwnewsletter//a; type=integer; label=remind BackendUser on stage 2 to approve pages of a new issue
        reminderApprovalStage2 = 302400

        # cat=plugin.tx_rkwnewsletter//a; type=integer; label=remind BackendUser on stage 3 to approve pages of a new issue
        reminderApprovalStage3 = 302400

        # cat=plugin.tx_rkwnewsletter//a; type=integer; label=automatic approval of stage 1 after a certain time
        automaticApprovalStage1 = 604800

        # cat=plugin.tx_rkwnewsletter//a; type=integer; label=automatic approval of stage 2 after a certain time
        automaticApprovalStage2 = 604800

        # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Pid of login mask
        loginPid = 610

        # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Pid of terms
        termsPid = 1381

        # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Pid for subscriptions
        subscriptionPid = 4695

        # cat=plugin.tx_rkwnewsletter//a; type=string; label=Required fields for subscription
        requiredFieldsSubscription = txRkwregistrationGender, firstName, lastName

    }
}

module.tx_rkwnewsletter {

    settings < plugin.tx_rkwnewsletter.settings
    persistence < plugin.tx_rkwnewsletter.persistence

}
