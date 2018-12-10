# About this folder

This folder contains the TsConfig- scripts that are used by all websites.

**Changes you do here will affect ALL websites that use this core configuration - so don't change anything here if you don't know what you do!** 

## What you find here
In this folder you find one main file:
- TsConfig.ts

This file has to be included in the TsConfig of the rootpage of relevant websites.
In most cases this file will be included indirectly be including a concrete TsConfig that uses this core configuration.

Example:
```
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rkw_template/Configuration/TsConfig/_CORE_/TsConfig.ts">
...
```

## The subfolders

### Config
Contains basic configurations

### Permissions
Contains all configurations for page permissions

### RTE
Contains all configuration for the RTE

### TCE
Contains all configuration for content-elements and pages in backend