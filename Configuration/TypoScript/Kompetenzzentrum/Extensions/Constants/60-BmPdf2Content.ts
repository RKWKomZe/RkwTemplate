plugin.tx_bmpdf2content {
    view {
        // cat=plugin.tx_bmpdf2content/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:bm_pdf2content/Resources/Private/Templates/
        // cat=plugin.tx_bmpdf2content/file; type=string; label=Path to partial root (FE)
        partialRootPath = EXT:bm_pdf2content/Resources/Private/Partials/
    }

    settings {
        // cat=plugin.tx_bmpdf2content//a; type=integer; label=Page column position on rendered pages
        colpos = 0
        // cat=plugin.tx_bmpdf2content//a; type=boolean; label=Include CSS?
        includeCSS = 0
    }
}