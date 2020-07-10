
plugin.tx_rkwresourcespace_import {

    persistence {
        # cat=plugin.tx_rkwresourcespace_import//a; type=string; label=Default storage PID for logs
        storagePid = 14
    }
    settings {
        # cat=plugin.tx_rkwresourcespace_import//a; type=string; label=the upload destination inside fileadmin (e.g "/media/images/Medienpool/")
        uploadDestination = /media/images/Medienpool/

        # cat=plugin.tx_rkwresourcespace_import//a; type=string; label=local system storage for buffering files (e.g. "/tmp/")
        localBufferDestination = /var/www/rkw-kompetenzzentrum.de/tmp/

        # cat=plugin.tx_rkwresourcespace_import//a; type=integer; label=Log activities in database
        logActivitiesInDb = 0

        # cat=plugin.tx_rkwresourcespace_import//a; type=integer; label=User have to be logged in in db to use this service
        backendLoginIsMandatory = 0

        # cat=plugin.tx_rkwresourcespace_import//a; type=integer; label=Shows a form for user to upload an image by it's resource space uid
        enableFormUpload = 0

        # upload specifications
        upload {

            # cat=plugin.tx_rkwresourcespace_import//a; type=integer; label=uid of storage (table: sys_file_storage)
            sysFileStorageUid = 1

            # image specifications
            processing = 1
            processing {

                # cat=plugin.tx_rkwresourcespace//f; type=string; label=force file extensions (e.g. jpg)
                forceFormat = jpg

                # cat=plugin.tx_rkwresourcespace//f; type=string; label=max width for images
                maxWidth = 3000
            }
        }
    }
}
