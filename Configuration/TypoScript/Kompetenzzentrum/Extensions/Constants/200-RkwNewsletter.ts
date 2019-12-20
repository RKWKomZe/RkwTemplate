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
        requiredFieldsSubscription =

        pages {

            # permissions for pages elements
            permissions {
                # on create of a new issue
                stage1 {
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=UserId permission
                    userId = 1
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=GroupId permission
                    groupId = 43
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of user (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    user = 31
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of group (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    group = 18
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of everybody (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    everybody = 1
                }
                # perms which come into effect on approve of stage 1
                stage2 {
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=UserId permission
                    userId = 1
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=GroupId permission
                    groupId = 44
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of user (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    user = 31
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of group (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    group = 18
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of everybody (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    everybody = 1
                }
                # perms which come into effect on approve of stage 2
                release {
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=UserId permission
                    userId = 1
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=GroupId permission
                    groupId = 45
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of user (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    user = 31
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of group (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    group = 18
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of everybody (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    everybody = 1
                }
                # perms which come into effect after final sending of the issue
                sent {
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=UserId permission
                    userId = 1
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=GroupId permission
                    groupId = 45
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of user (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    user = 31
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of group (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    group = 1
                    # cat=plugin.tx_rkwnewsletter//a; type=integer; label=Perms of everybody (0, 1, 2, 4, 8, 16 - and every possible combination of it)
                    everybody = 1
                }
            }
        }
    }
}

module.tx_rkwnewsletter {

    settings < plugin.tx_rkwnewsletter.settings
    persistence < plugin.tx_rkwnewsletter.persistence

}
