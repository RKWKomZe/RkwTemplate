# About this folder

This folder contains all typoscripts and constants that are used in this website.
It inherits the ```Kompetenzzentrum``` and ```_Core``` scripts.

## What you find here
In this folder you find two main files:
- constants.typoscript (lowercase is obligatory in order to be loaded by TYPO3)
- setup.typoscript (lowercase is obligatory in order to be loaded by TYPO3)

This files are included in the TS-template settings of the TYPO3-Backend of the current project.
The files are used as a container in order to inherit the settings from the "_Core"-folder and
to override or extend them with further settings.

Example:
```
<INCLUDE_TYPOSCRIPT: source="FILE:../../_Core/Setup.typoscript">

<INCLUDE_TYPOSCRIPT: source="FILE:./Config/Setup.typoscript">
<INCLUDE_TYPOSCRIPT: source="FILE:./Extensions/Setup.typoscript">
...
```
**NOTE: Please use relative paths to include the TypoScript-files via INCLUDE_TYPOSCRIPT.**

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

### Layout
Contains configuration concerning Body-Tag, CSS- and JS-Inclusion, paths to templates

### Marker
Contains all configuration for markers/variables

### Menus
Contains all configuration for menus

### Special
Contains special configuations like schema.org-stuff etc. Everything that does not belong in one of the other folders ;-)