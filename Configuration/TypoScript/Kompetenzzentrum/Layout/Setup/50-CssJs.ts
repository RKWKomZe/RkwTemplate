//############################################################################
// CSS and JS
//############################################################################
page {
    //===============================================================
    // CSS
    //===============================================================
    includeCSS {
        file10 = {$plugin.tx_rkwtemplate_config.paths.default.css}/main.css
        file10.media = screen,print

        file20 = {$plugin.tx_rkwtemplate_config.paths.default.css}/ie9.css
        file20.media = screen,print
        file20.allWrap = <!--[if IE]>|<![endif]-->

        // Nur auf den Druck-Seiten!
        // file30 = {$plugin.tx_rkwtemplate_config.paths.default.css}/print.css
        // file30.media = screen,print
    }

    //===============================================================
    // Other CSS
    //===============================================================
    headerData {
        20 = TEXT
        20 {
            value = <script src="/{$plugin.tx_rkwtemplate_config.paths.default.js}/libs/html5shiv.js"></script>
            wrap = <!--[if lte IE 8]>|<![endif]-->
        }

        30 = TEXT
        30.value = <script src="//use.typekit.net/frq0css.js"></script>

        40 = TEXT
        40.value (
			<script>document.createElement("picture");</script>
			<script src="{$plugin.tx_rkwtemplate_config.paths.default.js}/libs/picturefill.js" async></script>
        )
    }

    //===============================================================
    // JS
    //===============================================================
    // Remove JavaScripts from header
    includeJS >

    // Include JavaScripts in footer (loading time optimization)
    includeJSFooter {

    }

    // Incldue as lib because it contains jQuery
    includeJSFooterlibs {
        // Important: Force on top is dependent on its call in script, so the latest call is the first script being loaded
        // it is NOT dependent on the number given to that file
        file10 = {$plugin.tx_rkwtemplate_config.paths.default.js}/main.js
        file10.forceOnTop = 1

        file5 = {$plugin.tx_rkwtemplate_config.paths.default.js}/libs/polyfills.js
        file5.forceOnTop = 1

        file15 = {$plugin.tx_rkwtemplate_config.paths.default.js}/libs/jquery-ui.js

        file20 = {$plugin.tx_rkwtemplate_config.paths.default.js}/libs/responsive-tables.js
    }
}

