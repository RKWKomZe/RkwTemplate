plugin.tx_rkwshop {
    persistence {
        // cat=plugin.tx_rkwshop //a; type=string; label=Default storage PID
        storagePid = 2829

        // cat=plugin.tx_rkwshop//a; type=integer; label=Pid of terms & conditions
    }

    settings {
        // cat=plugin.tx_rkwshop//a; type=integer; label=Pid of terms & conditions
        termsPid = 1381

        // cat=plugin.tx_rkwshop//a; type=integer; label=Uid of BE-User if none is set in plugin
        backendUserIdForMails = 1
    }
}
