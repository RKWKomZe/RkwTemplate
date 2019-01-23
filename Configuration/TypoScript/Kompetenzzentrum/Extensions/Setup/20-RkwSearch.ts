

plugin.tx_rkwsearch  {

	settings {

		search {

		}
	}
}

// make typoscript available from BE context (e.g. for hooks)
module.tx_rkwsearch.settings < plugin.tx_rkwsearch.settings
TxRkwSearchAjaxPage.10.settings < plugin.tx_rkwsearch.settings


// #########################################################
// AJAX Configuration
// #########################################################
TxRkwSearchNotFoundPage {

	10 >
	10 = CONTENT
	10 < styles.content.get
	10.wrap = <div class="no-search-results first-letter-normal content content-box wysiwyg">|</div>

	20 = CONTENT
	20 {

		table = tt_content
		select {
			where = colPos = 6
			orderBy = sorting
			languageField = sys_language_uid
		}

		renderObj = COA
		renderObj < tt_content.list
		renderObj {

			// set header
			10 = TEXT
			10 {
				field = header
				wrap = <h4 class="section-header h2">|</h4>
				required = 1
			}

			// set plugin content
			20 < tt_content.list.20


			wrap = <section class="section" role="complementary">|</section>
		}
	}

}