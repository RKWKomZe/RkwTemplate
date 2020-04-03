#############################################################################
# SPECIAL- MARKER
#############################################################################
page {

	10 {

		variables {

			importantInformation = CONTENT
			importantInformation {

				wrap = <dl>|</dl>

				table = tt_content

				select {
					where = colPos = 4
					orderBy = sorting
					languageField = sys_language_uid
				}

				renderObj = COA
				renderObj {


					10 = TEXT
					10 {
						field = header
						wrap = <dt>|</dt> |*| <dt>|</dt> |*| <dt>|</dt>
					}

					20 = TEXT
					20 {
						field = bodytext
						wrap = <dd><div class="wysiwyg">|</div></dd>
						stdWrap.parseFunc = < lib.parseFunc_RTE
					}

				}

			}

			faqText = CONTENT
			faqText {

				wrap = <dl>|</dl>

				table = tt_content

				select {
					where = colPos = 5
					orderBy = sorting
					languageField = sys_language_uid
				}

				renderObj = COA
				renderObj {


					10 = TEXT
					10 {
						field = header
						wrap = <dt>|</dt> |*| <dt>|</dt> |*| <dt>|</dt>
					}

					20 = TEXT
					20 {
						field = bodytext
						wrap = <dd><div class="wysiwyg">|</div></dd>
						stdWrap.parseFunc = < lib.parseFunc_RTE
					}
				}
			}
		}
	}
}