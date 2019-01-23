module.tx_rkwmailer {

    settings {

        // Path for images in templates
        basePathImages = {$plugin.tx_rkwtemplate_config.paths.default.images}/emails

        // Path for logo in templates
        basePathLogo = {$plugin.tx_rkwtemplate_config.paths.default.logos}/logo-emails.png
    }
}

plugin.tx_rkwmailer < module.tx_rkwmailer