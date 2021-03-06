// ############################################################################
// Layout switch
// ############################################################################
// Select template based on layout
page {
    10 = FLUIDTEMPLATE
    10 {
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {
            // slide the template
            key.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
            key.override.field = layout

            // default template file
            default = TEXT
            default.value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Article.html

            1 = TEXT
            1 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Article.html
            }

            2 = TEXT
            2 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Home.html
            }

            3 = TEXT
            3 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Topic.html
            }

            4 = TEXT
            4 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Publications.html
            }

            5 = TEXT
            5 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Search.html
            }

            6 = TEXT
            6 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/SearchEmptyResults.html
            }

            7 = TEXT
            7 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Topic.html
            }

            8 = TEXT
            8 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Special.html
            }

            9 = TEXT
            9 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Blog.html
            }

            10 = TEXT
            10 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/BrokenLink.html
            }

            11 = TEXT
            11 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Map.html
            }

            12 = TEXT
            12 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/Tools.html
            }

            100 = TEXT
            100 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/ConsultantDetail.html
            }

            200 = TEXT
            200 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/AuthorList.html
            }

            210 = TEXT
            210 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/AuthorDetail.html
            }

            300 = TEXT
            300 {
                value = {$plugin.tx_rkwtemplate_config.paths.default.templates}/EventDetail.html
            }
        }

        partialRootPaths {
            10 = {$plugin.tx_rkwtemplate_config.paths.default.partials}
        }

        layoutRootPaths {
            10 = {$plugin.tx_rkwtemplate_config.paths.default.layouts}
        }
    }
}
