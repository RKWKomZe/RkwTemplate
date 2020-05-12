# About this folder

This folder contains all typoscripts and constants that are used by default.

## What you find here
In this folder you find two main files:
- constants.typoscript (lowercase is obligatory in order to be loaded by TYPO3)
- setup.typoscript (lowercase is obligatory in order to be loaded by TYPO3)

This files have to included in the TS-template settings of the TYPO3-Backend of the current rootpage.

**NOTE: Please use relative paths to add further TypoScript-files via INCLUDE_TYPOSCRIPT.**

## The subfolders

Each subfolder contains
- a ```Constants```-Subfolder for configurations concerning constants (mandatory)
- a ```Setup```-Subfolder for configurations concerning setup (mandatory)
- corresponding include-files that are again included in the main include-files (see above). They include
all setting-files of its corresponding subfolders

**NOTE: The file names of the files in the subfolders have to be preceded by a consecutive number (in steps of ten). This numbering determines the loading order of the files.**

### ContentElements
Contains default configurations for Custom Content Elements. 
The file ```Setup/0-Paths.typoscript``` has to be included at first because it contains
* the paths to the default templates for custom content elements
* the paths to the templates of the selected theme which can override the default templates  

### Fluid Styled Contents
Contains overriding configurations for Fluid Styled Contents. 
The file ```Setup/0-Paths.typoscript``` has to be included at first because it contains
* the paths to the templates of the selected theme which can override the default templates of Fluid Styled Contents  

### GridElements
Contains default configurations for Custom Content Elements. 
The file ```Setup/0-Paths.typoscript``` has to be included at first because it contains
* the paths to the default templates
* the paths to the templates of the selected theme which can override the default templates  
