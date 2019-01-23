plugin.tx_rkwwepstra {

	persistence {

		# cat=plugin.tx_rkwwepstra//a; type=string; label=Default storage PID
		storagePid = 2857

        # cat=plugin.tx_rkwwepstra//a; type=string; label=Storage PID for FE-Users
		storagePidFrontendUser = 618
	}

	settings {


		# cat=plugin.tx_rkwwepstra//a; type=boolean; label=Include JavaScript file?
        includeJavaScripts = 0

        # cat=plugin.tx_rkwwepstra//a; type=boolean; label=Include Styles (CSS)?
        includeStyles = 0

		# cat=plugin.tx_rkwwepstra//a; type=integer; label=PageUid of Wepstra extension
		pageUid = 2854

		# cat=plugin.tx_rkwwepstra//a; type=integer; label=PageUid of information page
		importantInformationPid = 2856

		# cat=plugin.tx_rkwwepstra//a; type=integer; label=PageUid of terms & conditions page
		termsPid = 1381

		# cat=plugin.tx_rkwwepstra//a; type=integer; label=PageUid for menu
		menuPid = 2854
	}
}
