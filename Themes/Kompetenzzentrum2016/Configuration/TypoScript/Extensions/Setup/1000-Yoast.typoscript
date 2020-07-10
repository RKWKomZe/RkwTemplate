config.yoast_seo.enabled = 0
config.noPageTitle = 0


plugin.tx_yoastseo {

    view {

       variables >
       variables {

            title =< lib.yoastSEO.pageTitleComplete
            title.stdWrap.required = 1
            title.stdWrap.htmlSpecialChars = 1
            title.stdWrap.wrap = <title>|</title>

            description =< lib.yoastSEO.description
            description.stdWrap.required = 1
            description.stdWrap.htmlSpecialChars = 1
            description.stdWrap.wrap = <meta name="description" content="|" />
        }
    }
}

[globalString = ENV:HTTPS=on]
    plugin.tx_yoastseo.view.variables {


    }
[global]