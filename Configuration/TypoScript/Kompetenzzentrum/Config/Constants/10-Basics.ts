// ############################################################################
// Global paths
// ############################################################################
plugin.tx_rkwtemplate_config {

    paths {

        default {

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to templates
            templates = EXT:rkw_template/Resources/Private/Templates/Kompetenzzentrum

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to partials
            partials = EXT:rkw_template/Resources/Private/Partials/Kompetenzzentrum

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to layouts
            layouts = EXT:rkw_template/Resources/Private/Layouts/Kompetenzzentrum

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to CSS-file
            css = EXT:rkw_template/Resources/Public/Kompetenzzentrum/css

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to images
            images = EXT:rkw_template/Resources/Public/Kompetenzzentrum/images

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to logos
            logos = EXT:rkw_template/Resources/Public/Kompetenzzentrum/images/logos

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to icons
            icons = EXT:rkw_template/Resources/Public/Kompetenzzentrum/images/icons/white

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to JavaScripts
            js = EXT:rkw_template/Resources/Public/Kompetenzzentrum/js

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to special stuff
            specials = EXT:rkw_template/Resources/Kompetenzzentrum/specials

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to libs
            lib = EXT:rkw_template/Resources/Kompetenzzentrum/libs
        }

        extensions {
            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to templates
            templates = EXT:rkw_template/Resources/Private/Templates/Kompetenzzentrum/Extensions

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to partials
            partials = EXT:rkw_template/Resources/Private/Partials/Kompetenzzentrum/Extensions

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to layouts
            layouts = EXT:rkw_template/Resources/Private/Layouts/Kompetenzzentrum/Extensions

        }

        microsite {

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to images
            mainWebsiteImages = EXT:rkw_template/Resources/Public/Kompetenzzentrum/images

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to logos
            mainWebsiteLogos = EXT:rkw_template/Resources/Public/Kompetenzzentrum/images/logos
        }
    }


    breakpoints {

        # cat=plugin.tx_rkwtemplate_config; type=integer; label=Mobile breakpoint (in pixel)
        mobile = 320

        # cat=plugin.tx_rkwtemplate_config; type=integer; label=Tablet breakpoint (in pixel)
        tablet = 768

        # cat=plugin.tx_rkwtemplate_config; type=integer; label=Desktop breakpoint (in pixel)
        desktop = 1024
    }

    # cat=plugin.tx_rkwtemplate_config; type=string; label=baseUrl (With / at the end for ClickEnlarge)
    baseUrl = https://www.rkw-kompetenzzentrum.de/

    website {

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Name of website
        name = RKW Kompetenzzentrum

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Logo of website (desktop-version)
        logoFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo.png

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Logo of website (offcanvas-version)
        logoOffcanvasFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo-offcanvas.png

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Icon of website (offcanvas-version)
        logoOffcanvasIconOnlyFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo-offcanvas-icon.png

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Broken link logo of website
        logoBrokenLinkFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/broken-link.png

    }


    microsite {

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Logo of website (tablet-version, on microsites only)
        logoTabletFile = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo-tablet.png

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Vertical text (on microsites only)
        textVertical = Ein Angebot des RKW Kompetenzzentrums

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Link to main website (on microsites only)
        mainWebsiteUrl = https://www.rkw-kompezenzzentrum.de

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Name of main website (on microsites only)
        mainWebsiteName = RKW Kompetenzzentrum

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Icon of main website (on microsites only)
        mainWebsiteLogoFile = {$plugin.tx_rkwtemplate_config.paths.microsite.mainWebsiteLogos}/logo-icon.png

    }


    # cat=plugin.tx_rkwtemplate_config; type=boolean; label=Show social media icons
    socialMedia = 1

    # cat=plugin.tx_rkwtemplate_config; type=boolean; label=Is this website a microsite?
    isMicrosite = 0

}
