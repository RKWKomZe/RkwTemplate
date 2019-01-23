// ############################################################################
// Global paths
// ############################################################################
plugin.tx_rkwtemplate_config {
    paths {
        default {

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to logos
            logos = EXT:rkw_template/Resources/Public/Kompetenzzentrum/_Websites/RkwNord/images/logos

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to icons
            # icons = EXT:rkw_template/Resources/Public/Kompetenzzentrum/images/icons/grey
        }

        extensions {

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to partials
            partials = EXT:rkw_template/Resources/Private/Partials/Kompetenzzentrum/_Websites/RkwNord/Extensions
        }
    }

    # cat=plugin.tx_rkwtemplate_config; type=string; label=baseUrl (With / at the end for ClickEnlarge)
    baseUrl = https://nord.rkw-kompetenzzentrum.de/

    website {

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Name of website
        name = RKW Nord

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Logo of website (desktop-version)
        logoFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo.png

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Logo of website (offcanvas-version)
        logoOffcanvasFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo-offcanvas.png

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Icon of website (offcanvas-version)
        logoOffcanvasIconOnlyFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo-offcanvas-icon.png

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Broken link logo of website
        logoBrokenLinkFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/broken-link.png
    }


    # cat=plugin.tx_rkwtemplate_config; type=boolean; label=Show social media icons
    socialMedia = 0

    # cat=plugin.tx_rkwtemplate_config; type=boolean; label=Is this website a microsite?
    isMicrosite = 0

}

