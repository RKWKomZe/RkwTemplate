plugin.tx_rkwinfolayer {
    view {
        // cat=plugin.tx_rkwinfolayer/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:rkw_info_layer/Resources/Private/Templates/
        // cat=plugin.tx_rkwinfolayer/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:rkw_info_layer/Resources/Private/Partials/
        // cat=plugin.tx_rkwinfolayer/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:rkw_info_layer/Resources/Private/Layouts/
    }

    persistence {
        storagePid = 633
    }

    settings {
        // cat=plugin.tx_rkwinfolayer//a; type=boolean; label=Include jQuery?
        includeJQuery = 0

        // cat=plugin.tx_rkwinfolayer//b; type=boolean; label=Include CSS?
        includeCSS = 0

        // cat=plugin.tx_rkwinfolayer//d; type=integer; label=Initial show in seconds
        initialShow = 3

        // cat=plugin.tx_rkwinfolayer//e; type=integer; label=Recall show in seconds
        recallShow = 300

        // cat=plugin.tx_rkwinfolayer//e; type=integer; label=1 out of X times the overlay is displayed (random based mode)
        randomShow = 8

        // cat=plugin.tx_rkwinfolayer//c; type=integer; label=Sets the handling for display of overlay. Allowed values are 1 = time based, 0 = random
        displayType = 1

        // cat=plugin.tx_rkwinfolayer//c; type=integer; label=Sets the pid of the page with the privacy information
        termsPid = 1921

        # cat=plugin.tx_rkwinfolayer//c; type=integer; label=Sets the pid of the page with the imprint
        imprintPid = 409
    }
}
