// ############################################################################
// Settings from constants for FLUIDTEMPLATE
// ############################################################################
// Select template based on layout
page {
    10 {
        // make settings available in template
        settings {
            imagesPath = /{$plugin.tx_rkwtemplate_config.paths.default.images}

            websiteName = {$plugin.tx_rkwtemplate_config.website.name}

            websiteLogoFile = {$plugin.tx_rkwtemplate_config.website.logoFile}
            websiteLogoOffcanvasFile = {$plugin.tx_rkwtemplate_config.website.logoOffcanvasFile}
            websiteLogoOffcanvasIconOnlyFile = {$plugin.tx_rkwtemplate_config.website.logoOffcanvasIconOnlyFile}
            websiteLogoBrokenLinkFile = {$plugin.tx_rkwtemplate_config.website.logoBrokenLinkFile}
            websiteLogoUrl = {$plugin.tx_rkwtemplate_config.website.logoUrl}

            micrositeLogoTabletFile = {$plugin.tx_rkwtemplate_config.microsite.logoTabletFile}
            micrositeTextVertical = {$plugin.tx_rkwtemplate_config.microsite.textVertical}
            micrositeMainWebsiteUrl = {$plugin.tx_rkwtemplate_config.microsite.mainWebsiteUrl}
            micrositeMainWebsiteName  = {$plugin.tx_rkwtemplate_config.microsite.mainWebsiteName}
            micrositeMainWebsiteLogoFile = {$plugin.tx_rkwtemplate_config.microsite.mainWebsiteLogoFile}

            socialMedia = {$plugin.tx_rkwtemplate_config.socialMedia}
        }
    }
}
