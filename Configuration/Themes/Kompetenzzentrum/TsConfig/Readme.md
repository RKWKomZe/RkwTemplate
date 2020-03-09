# About this folder

This folder contains the TsConfig- scripts for this website.
It inherits the ```_Core```- scripts.

## What you find here
In this folder you find one main file:
- TsConfig.typoscript

This file has to be included in the TsConfig of the rootpage of the websites.

**NOTE: Please not that it is NOT possible to use relative paths to include the TypoScript-files via INCLUDE_TYPOSCRIPT here.**

## The subfolders
**NOTE: The file names of the files in the subfolders have to be preceded by a consecutive number (in steps of ten). This numbering determines the loading order of the files.**

### _Microsites
Contains configurations for microsites that inherit the configuration of this site

### _Websites
Contains configurations for websites that inherit the configuration of this site

### Config
Contains basic configurations

### ContentElements
Contains configurations of custom content elements

### Permissions
Contains all configurations for page permissions

### RTE
Contains all configuration for the RTE

### TCE
Contains all configuration for content-elements and pages in backend