// ############################################################################
// TCEMAIN
// ############################################################################
TCEMAIN {

	// Set additional params for previews with varnish
	preview {
		pages {
			additionalGetParameters {
				no_varnish = 1
			}
		}
	}
}


// ############################################################################
// SONSTIGE EINSTELLUNGEN
// ############################################################################
tx_version.workspaces.stageNotificationEmail.subject = Status-Änderung für Eintrag
tx_version.workspaces.stageNotificationEmail.message (
Liebe Kolleginnen und Kollegen,

auf unserer Website (###SITE_URL###)
wurde im Workspace "###WORKSPACE_TITLE###" (###WORKSPACE_UID###)
der Status für die folgenden Einträge geändert:

"###RECORD_TITLE###" (###ELEMENT_NAME###)

Zu finden ist der Eintrag im Backend hier:
###RECORD_PATH###

Neuer Status:
###NEXT_STAGE###

Geändert durch:
###USER_FULLNAME##// (Nutzername: ###USER_USERNAME###)

Kommentar:
###COMMENT###
)


