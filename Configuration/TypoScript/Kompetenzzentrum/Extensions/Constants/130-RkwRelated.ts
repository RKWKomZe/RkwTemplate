module.tx_rkwrelated {

    settings {
        # cat=plugin.tx_rkwrelated; type=string; label=List of PIDs whose cache is to delete, when contents are saved
        clearCachePageList = 1, 3561, 158, 378, 3795, 3595, 3471, 3757
    }
}

plugin.tx_rkwrelated_similarcontent {

    settings {

        # cat=plugin.tx_rkwrelated_morecontent//f; type=integer; label=PID to start search from
        startingPid =

        # cat=plugin.tx_rkwrelated_morecontent//f; type=string; label=PIDs to include in list (comma separated)
        startingPidList = 1, 3561, 158, 378, 3795, 3595, 3471, 3757

        # cat=plugin.tx_rkwrelated_similarcontent//a; type=float; label=Items per hundred signs
        itemsPerHundredSigns = 0.30

        # cat=plugin.tx_rkwrelated_similarcontent//a; type=integer; label=Minimum items
        minItems = 5

        # cat=plugin.tx_rkwrelated_similarcontent//a; type=integer; label=Default header text cropping
        headerCrop = 60

        # cat=plugin.tx_rkwrelated_similarcontent//a; type=integer; label=Default body text cropping
        contentCrop = 230

        # cat=plugin.tx_rkwrelated_similarcontent//a; type=integer; label=Default footer text cropping
        footerCrop = 20

        # cat=plugin.tx_rkwrelated_similarcontent//a; type=boolean; label=Use rkw_search fields for sorting if installed 1 = yes
        useRkwSearchForSorting = 1

        # cat=plugin.tx_rkwrelated_similarcontent//a; type=boolean; label=ID of parent sys_category for similar search
        sysCategoryParentUid = 24
    }
}

plugin.tx_rkwrelated_morecontent {

    settings {

        # cat=plugin.tx_rkwrelated_morecontent//f; type=integer; label=PID to start search from
        startingPid =

        # cat=plugin.tx_rkwrelated_morecontent//f; type=string; label=PIDs to include in list (comma separated)
        startingPidList = 1, 3561, 158, 378, 3795, 3595, 3471, 3757

        # cat=plugin.tx_rkwrelated_morecontent//a; type=integer; label=Default header text cropping
        headerCrop = 60

        # cat=plugin.tx_rkwrelated_morecontent//a; type=integer; label=Default body text cropping
        contentCrop = 230

        # cat=plugin.tx_rkwrelated_morecontent//a; type=integer; label=Default footer text cropping
        footerCrop = 20

        # cat=plugin.tx_rkwrelated_morecontent//a; type=integer; label=Default footer text cropping
        publicationCrop = 30

        # cat=plugin.tx_rkwrelated_morecontent//a; type=integer; label=Starting year of filter option "sort by year" (default:2011)
        staticInitialYearForFilter =

        # cat=plugin.tx_rkwrelated_morecontent//a; type=boolean; label=Use rkw_search fields for sorting if installed 1 = yes
        useRkwSearchForSorting = 1
    }
}
