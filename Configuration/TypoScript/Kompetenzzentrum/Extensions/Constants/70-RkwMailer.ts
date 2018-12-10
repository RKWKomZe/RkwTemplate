module.tx_rkwmailer {
    persistence {
        // cat=module.tx_rkwmailer//a; type=string; label=Default storage PID
        storagePid = 776
    }

    settings {

        // Page for redirect plugin
        redirectPid = 905

        // Delay for redirect
        redirectDelay = 0

        // Link plugin for pixel counter (HTML-mails only)
        counterPixelPid = 905

        // URL for hard-links in templates
        baseUrl = https://www.rkw-kompetenzzentrum.de

        // Path for images in templates
        basePathImages = fileadmin/templates/kompetenzzentrum/images/emails

        // Path for logo in templates
        basePathLogo = fileadmin/templates/kompetenzzentrum/images/logos/logo-emails.png
    }
}

plugin.tx_rkwmailer < module.tx_rkwmailer