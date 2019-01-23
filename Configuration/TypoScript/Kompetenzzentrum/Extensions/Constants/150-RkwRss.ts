plugin.tx_rkwrss {
    persistence {
        // cat=plugin.tx_rkwsearch//a; type=string; label=Default storage PID
        storagePid = 1
    }

    settings {
        rss {
            // cat=plugin.tx_rkwsearch; type=string; label=Name for RSS-Feed
            feedName = RSS-Feed des RKW Kompetenzzentrums

            // cat=plugin.tx_rkwsearch; type=string; label=Page Description
            feedDescription = Veranstaltungshinweise, Publikationen, Blog-Beiträge und vieles mehr. Bleiben Sie mit unserem RSS-Feed immer auf dem Laufenden.

            // cat=plugin.tx_rkwsearch; type=string; label=Relative Path to Icon of Feed
            feedIcon = {$plugin.tx_rkwtemplate_config.paths.default.images}/website-icons/favicon-32x32.png

            // cat=plugin.tx_rkwrss; type=string; label=Field that is used for sorting
            orderField = txRkwsearchPubdate

            // cat=plugin.tx_rkwrss; type=string; label=Copyright hint
            copyrightHint = RKW Kompetenzzentrum
        }

        instantArticles < .rss
        instantArticles.typeNum = 1449588489
    }
}


