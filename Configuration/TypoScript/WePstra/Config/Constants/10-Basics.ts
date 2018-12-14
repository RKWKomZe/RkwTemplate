// ############################################################################
// Global paths
// ############################################################################
globalWebsiteConfig {

	templatePaths {
		default {
			templates = fileadmin/templates/wepstra/html/Main/Templates
			partials = fileadmin/templates/wepstra/html/Main/Partials
			layouts = fileadmin/templates/wepstra/html/Main/Layouts
			css = fileadmin/templates/wepstra/css
			images = fileadmin/templates/wepstra/images
            icons = fileadmin/templates/kompetenzzentrum/images/icons/white
            logos = fileadmin/templates/wepstra/images
            js = fileadmin/templates/wepstra/js
			specials = fileadmin/templates/wepstra/specials
			lib = fileadmin/templates/wepstra/lib
		}

        extensions {
            templates = fileadmin/templates/wepstra/html/Extensions
            partials = fileadmin/templates/wepstra/html/Extensions
            layouts = fileadmin/templates/wepstra/html/Extensions
        }
	}

	breakpoints {
		mobile = 320
		tablet = 768
		desktop = 1024

	}

	# IMPORTANT: With / at the end for ClickEnlarge
	baseUrl = https://wepstra-app.rkw-kompetenzzentrum.de/
    websiteName = RKW Kompetenzzentrum - Web-App Strategische Personalarbeit
    websiteLogoFile = {$globalWebsiteConfig.templatePaths.default.logos}/logo.svg

}


// ############################################################################
// Global paths
// ############################################################################
plugin.tx_rkwtemplate_config {

    paths {

        default {

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to templates
            templates = EXT:rkw_template/Resources/Private/Templates/WePstra

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to partials
            partials = EXT:rkw_template/Resources/Private/Partials/WePstra

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to layouts
            layouts = EXT:rkw_template/Resources/Private/Layouts/WePstra

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to CSS-file
            css = EXT:rkw_template/Resources/Public/WePstra/css

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to images
            images = EXT:rkw_template/Resources/Public/WePstra/images

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to logos
            logos = EXT:rkw_template/Resources/Public/WePstra/images

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to icons
            icons = EXT:rkw_template/Resources/Public/Kompetenzzentrum/images/icons/white

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to JavaScripts
            js = EXT:rkw_template/Resources/Public/WePstra/js

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to special stuff
            specials = EXT:rkw_template/Resources/WePstra/specials

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to libs
            lib = EXT:rkw_template/Resources/WePstra/libs
        }

        extensions {
            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to templates
            templates = EXT:rkw_template/Resources/Private/Templates/WePstra/Extensions

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to partials
            # partials = EXT:rkw_template/Resources/Private/Partials/WePstra/Extensions

            # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Path to layouts
            # layouts = EXT:rkw_template/Resources/Private/Layouts/WePstra/Extensions

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
    baseUrl = https://wepstra-app.rkw-kompetenzzentrum.de/

    website {

        # cat=plugin.tx_rkwtemplate_config; type=string; label=Name of website
        name = RKW Kompetenzzentrum - Web-App Strategische Personalarbeit

        # cat=plugin.tx_rkwtemplate_config/file; type=string; label=Logo of website (desktop-version)
        logoFile = {$globalWebsiteConfig.templatePaths.default.logos}/logo.svg
    }

}
