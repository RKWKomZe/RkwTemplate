# About this folder

This folder contains all basic typoscripts and constants that are used **FOR ALL** websites.

**Changes you do here will affect ALL websites that use this core configuration - so don't change anything here if you don't know what you do!** 

## What you find here
In this folder you find two main files:
- constants.typoscript (lowercase is obligatory in order to be loaded by TYPO3)
- setup.typoscript (lowercase is obligatory in order to be loaded by TYPO3)

This files are included in the TS-template settings of subsequent wesbites.


## The subfolders

Each subfolder contains
- a ```Constants```-Subfolder for configurations concerning constants (mandatory)
- a ```Setup```-Subfolder for configurations concerning setup (mandatory)
- corresponding include-files that are again included in the main include-files (see above). They include
all setting-files of its corresponding subfolders

**NOTE: The file names of the files in the subfolders have to be preceded by a consecutive number (in steps of ten). This numbering determines the loading order of the files.**

### Config
Contains all configuration concerning BE-Layouts, RTE, TCE, and basic configurations (e.g. baseURL)

### Extensions
Contains configurations for used extensions. The files here override existing extension settings.
Please create a new file for each extension  (e.g. RkwSearch.typoscript)

### Marker
Contains all configuration for markers/variables

### Pages
Configuration of basic page-types.
