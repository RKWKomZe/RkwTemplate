#############################################################################
# Global paths
#############################################################################

plugin.tx_rkwtemplate_config {

	# IMPORTANT: With / at the end for ClickEnlarge
	baseUrl = http://rkw-kompetenzzentrum.rkw.codes/

}


plugin.tx_rkwgeolocation {

    settings {
        # proxy = 192.168.1.8:80
        proxyUsername =
        proxyPassword =
    }
}

plugin.tx_rkwregistration {

    settings {
        # proxy = 192.168.1.8:80
        proxyUsername =
        proxyPassword =

    }
}
module.tx_rkwmailer {

    settings {

        // URL for hard-links in templates
        baseUrl = http://rkw-kompetenzzentrum.rkw.codes

    }
}
plugin.tx_rkwmailer < module.tx_rkwmailer


plugin.tx_rkwetracker {

    settings {

       # proxy = 192.168.1.8:80

    }
}
