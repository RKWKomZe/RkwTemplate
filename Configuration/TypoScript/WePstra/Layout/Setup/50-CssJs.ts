#############################################################################
# CSS and JS
#############################################################################
page {

	#===============================================================
	# Other CSS
	#===============================================================
	headerData {

		20 = TEXT
		20 {

			value = <script src="{$plugin.tx_rkwtemplate_config.paths.default.js}/libs/html5shiv.js</script>
			wrap = <!--[if lte IE 8]>|<![endif]-->
		}

		30 = TEXT
		30.value (
			<script src="//use.typekit.net/frq0css.js"></script>
			<script>try{Typekit.load();}catch(e){}</script>
		)
	}


    #===============================================================
    # CSS
    #===============================================================
    includeCSS {

        // WePstra App-Extension only!
        file10 = EXT:rkw_wepstra/Resources/Public/Styles/main.css
        file10.media = screen,print
        file10.if {
            value = 5
            equals.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
            equals.override.field = layout
            negate = 1
        }

        // Landingpage only!
        file20 = {$plugin.tx_rkwtemplate_config.paths.default.css}/main.css
        file20.media = screen,print
        file20.if {
            value = 5
            equals.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
            equals.override.field = layout
        }


    }

    #===============================================================
    # JS
    #===============================================================

    // JS for header
    includeJS >

    // JS in foot of page
    includeJSFooter >

    includeJSFooterlibs {

        # Important: Force on top is dependent on its call in script, so the latest call is the first script being loaded
        # it is NOT dependent on the number given to that file
        file5 = EXT:rkw_wepstra/Resources/Public/Scripts/libs/polyfill.js

        // WePstra App-Extension only!
        file10 = EXT:rkw_wepstra/Resources/Public/Scripts/libs/chartjs.js
        file10.if {
            value = 5
            equals.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
            equals.override.field = layout
            negate = 1
        }

        // WePstra App-Extension only!
        file15 = EXT:rkw_wepstra/Resources/Public/Scripts/main.js
        file15.if {
            value = 5
            equals.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
            equals.override.field = layout
            negate = 1
        }

        // Landingpage only!
        file20 = {$plugin.tx_rkwtemplate_config.paths.default.js}/main.js
        file20.if {
            value = 5
            equals.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
            equals.override.field = layout
        }
    }


}
