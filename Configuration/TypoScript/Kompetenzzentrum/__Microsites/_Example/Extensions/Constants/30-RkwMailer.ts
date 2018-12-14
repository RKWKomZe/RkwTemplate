module.tx_rkwmailer {

    settings {

        // Page for redirect plugin
        redirectPid = 3617

        // Delay for redirect
        redirectDelay = 0

        // Link plugin for pixel counter (HTML-mails only)
        counterPixelPid = 3617

        // URL for hard-links in templates
        baseUrl = https://mein.rkw.de

        // Path for images in templates
        basePathImages = fileadmin/templates/_EXAMPLE-MICROSITE_/images/emails

        // Path for logo in templates
        basePathLogo = fileadmin/templates/_EXAMPLE-MICROSITE_/images/logos/logo-emails.png
    }
}

plugin.tx_rkwmailer < module.tx_rkwmailer