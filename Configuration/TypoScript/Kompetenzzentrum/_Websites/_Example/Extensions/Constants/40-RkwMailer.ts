module.tx_rkwmailer {

    view {
        partialRootPath = fileadmin/templates/_EXAMPLE-WEBSITE_/html/Extensions/RkwMailer/Partials
    }

    settings {

        // Page for redirect plugin
        redirectPid = 3617

        // Link plugin for pixel counter (HTML-mails only)
        counterPixelPid = 3617

        // URL for hard-links in templates
        baseUrl = https://www.rkw-nord.de

        // Path for images in templates
        basePathImages = fileadmin/templates/_EXAMPLE-WEBSITE_/images/emails

        // Path for logo in templates
        basePathLogo = fileadmin/templates/_EXAMPLE-WEBSITE_/images/logos/logo-emails.png
    }
}

plugin.tx_rkwmailer < module.tx_rkwmailer