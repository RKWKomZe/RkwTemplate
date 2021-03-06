module.tx_rkwmailer {

    view {
        partialRootPath = {$plugin.tx_rkwtemplate_config.paths.extensions.partials}/RkwMailer
    }

    settings {

        // Page for redirect plugin
        redirectPid = 3786

        // Delay for redirect
        redirectDelay = 0

        // Link plugin for pixel counter (HTML-mails only)
        counterPixelPid = 3786

        // URL for hard-links in templates
        baseUrl = https://mein.rkw.de

    }
}

plugin.tx_rkwmailer < module.tx_rkwmailer