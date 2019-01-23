//############################################################################
// Content
//############################################################################
page {
    10 {
        variables {
            // Delete unused markers
            leftContent >
            borderContent >

            //=================================================================
            // Introduction
            //=================================================================
            searchDescription = CONTENT
            searchDescription {
                table = tt_content
                select {
                    where = colPos = 10
                    orderBy = sorting
                    languageField = sys_language_uid
                }
            }

            //=================================================================
            // Headline-Content
            //=================================================================
            headlineContent = CONTENT
            headlineContent {
                table = tt_content
                select {
                    where = colPos = 11
                    orderBy = sorting
                    languageField = sys_language_uid
                }

                renderObj = COA
                renderObj < tt_content.list
                renderObj {
                    // set plugin content
                    20 < tt_content.list.20

                    wrap = <header class="page-headings page-headings--no-image">|</header>
                }
            }

        }
    }
}