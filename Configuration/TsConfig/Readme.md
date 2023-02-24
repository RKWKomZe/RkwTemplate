# About this folder

This folder contains the TsConfig- scripts for the extension

## What you find here
In this folder you find one main file:
- TsConfig.typoscript

This file has to be included in the TsConfig of the rootpage of the websites.

**NOTE: Please not that it is NOT possible to use relative paths to include the TypoScript-files via INCLUDE_TYPOSCRIPT here.**

## The subfolders
**NOTE: The file names of the files in the subfolders have to be preceded by a consecutive number (in steps of ten). This numbering determines the loading order of the files.**

### ContentElements
Contains default configurations of custom content elements. These can be overridden by configurations of themes.

### GridElements
Contains default configurations of grid elements. These can be overridden by configurations of themes.

Please note the special subfolder ```ContentContainer``` here which contains all grids related to col-based display of standard contents.
