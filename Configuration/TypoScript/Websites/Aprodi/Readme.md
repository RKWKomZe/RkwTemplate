# About this folder

This folder contains all typoscripts and constants that are used in this website.
It inherits the ```Kompetenzzentrum``` and ```_CORE_``` scripts.

## What you find here
In this folder you find two main files:
- constants.ts (lowercase is obligatory in order to be loaded by TYPO3)
- setup.ts (lowercase is obligatory in order to be loaded by TYPO3)

This files are included in the TS-template settings of the TYPO3-Backend of the current project.
The files are used as a container in order to inherit the settings from the "_CORE_"-folder and
to override or extend them with further settings.

Example:
```
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/_CORE_/Setup.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Config/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TypoScript/Kompetenzzentrum/Extensions/Setup.ts">
...
```

## The subfolders

Each subfolder contains
- a ```Constants```-Subfolder for configurations concerning constants (mandatory)
- a ```Setup```-Subfolder for configurations concerning setup (mandatory)
- corresponding include-files that are again included in the main include-files (see above). They include
all setting-files of its corresponding subfolders

### Config
Contains all configuration concerning BE-Layouts, RTE, TCE, and basic configurations (e.g. baseURL)

### Extensions
Contains configurations for used extensions. The files here override existing extension settings.
Please create a new file for each extension  (e.g. RkwSearch.ts)

### Layouts
Contains configuration concerning Body-Tag, CSS- and JS-Inclusion, paths to templates

### Marker
Contains all configuration for markers/variables

### Menu
Contains all configuration for menus

### Special
Contains special configuations like schema.org-stuff etc. Everything that does not belong in one of the other folders ;-)