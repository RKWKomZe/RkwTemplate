plugin.tx_rkwregistration {
    persistence {
        // cat=plugin.tx_abounitreservation//a; type=string; label=Default storage PID
        storagePid = 618
    }

    settings {

        # cat=plugin.tx_rkwregistration//a; type=string; label=Comma-separated list of allowd domains for redirect after login
        redirectDomains = www.rkw-kompetenzzentrum.de, www.rkw-sachsenanhalt.de, www.rkw-thueringen.de, www.rkw-bremen.de, mein.rkw.de, www.karriereseiten-check.de

        users {
            // cat=plugin.tx_rkwregistration//a; type=integer; label=Storage Pid
            storagePid = 618

            // cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of login mask
            loginPid = 610

            # cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of external login mask
            loginExternalPid =

            // cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of logout mask
            logoutPid = 623

            // cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of registration mask
            registrationPid = 620

            // cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of welcome page
            welcomePid = 621

            // cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of edit user mask
            editUserPid = 613

            // cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of delete user mask
            deleteUserPid = 614

            // cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of edit password mask
            editPasswordPid = 622

            // cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of terms & conditions
            termsPid = 1381

            # cat=plugin.tx_rkwregistration//a; type=integer; label=Pid of privacy & conditions
            privacyPid = 1921

            // cat=plugin.tx_rkwregistration//a; type=string; label=Groups a user is added to when registering
            groupsOnRegister = 2

            # cat=plugin.tx_rkwregistration//a; type=string; label=Groups a user is added to when registering anonymous
            groupsOnRegisterAnonymous = 7

            // cat=plugin.tx_rkwregistration//a; type=string; label=Language-key on registering (default:default)
            languageKeyOnRegister = de

            // cat=plugin.tx_rkwregistration//a; type=integer; label=How many days a user has to opt in via email
            daysForOptIn = 7

            // cat=plugin.tx_rkwregistration//a; type=integer; label=How many times a user can try to login before his user is disabled
            maxLoginErrors = 5

            # cat=plugin.tx_rkwregistration//a; type=integer; label=Lifetime of registered users (default = 0 = unlimited)
            lifetime = 0

            # cat=plugin.tx_rkwregistration//a; type=integer; label=Lifetime of registered anonymous users (default = 7776000 = 90 days)
            lifetimeAnonymous = 7776000

            passwordSettings {
                # cat=plugin.tx_rkwregistration//a; type=integer; label=Minimum password length (default = 8)
                minLength = 10

                # cat=plugin.tx_rkwregistration//a; type=boolean; label=Password must contain letters and numbers (default = false)
                alphaNum = 1
            }
        }

        services {
            adminOptInPid = 616

            // how many days a admin has to opt in a user via email
            daysForOptIn = 30
        }
    }
}