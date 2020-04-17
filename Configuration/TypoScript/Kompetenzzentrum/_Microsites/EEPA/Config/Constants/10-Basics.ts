// ############################################################################
// Global paths
// ############################################################################
plugin.tx_rkwtemplate_config {
    paths {
        default {

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to logos
            # logos = EXT:rkw_template/Resources/Public/Kompetenzzentrum/_Microsites/_Example/images/logos
        }
    }

    # cat=plugin.tx_rkwtemplate_config; type=string; label=baseUrl (With / at the end for ClickEnlarge)
    baseUrl = https://eepa.rkw-kompetenzzentrum.de/

    website {

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Name of website
        name = Europäischer Unternehmensförderpreis

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Logo of website (desktop-version)
        logoFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo.png

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Logo of website (offcanvas-version)
        logoOffcanvasFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo-offcanvas.png

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Broken link logo of website
        logoBrokenLinkFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/broken-link.png
    }

    microsite {

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Logo of website (tablet-version, on microsites only)
        logoTabletFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo-tablet.png

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Vertical text (on microsites only)
        textVertical = Ein Angebot des RKW Kompetenzzentrums

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Link to main website (on microsites only)
        mainWebsiteUrl = https://www.rkw-kompetenzzentrum.de

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Name of main website (on microsites only)
        mainWebsiteName = RKW Kompetenzzentrum

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Icon of main website (on microsites only)
        mainWebsiteLogoFile =

    }

    # cat=plugin.tx_rkwtemplate_config; type=boolean; label=Show social media icons
    socialMedia = 0

    # cat=plugin.tx_rkwtemplate_config; type=boolean; label=Is this website a microsite?
    isMicrosite = 1

}

