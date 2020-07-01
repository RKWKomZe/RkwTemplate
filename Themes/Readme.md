# Basic Rules
* The file names of the files in the ```Configuration```-folder **have to be preceded by a consecutive number (in steps of ten)**. This numbering determines the loading order of the files.
* We use prefer to use ```lib``` instead of ```page.variables``` in the TypoScript-section because they can e. g. be used nicely in combination with GridElements
* Each ```lib```-definition **has to be** preceded with the txRkwTemplate-Namespace
* Each```lib```-definition **has to be** supplied with a meaningful section-name which makes the basic function clear
* Make sure that the object-names in combination with the section-name does not create redundancies (e.g. ``lib.txRkwTemplate.navigation.sub`` instead of ``lib.txRkwTemplate.navigation.subNavigation``) 
* All names have to be written in lowerCamelCase
* For readability reasons, larger TypoScript files should be split into several smaller ones

Examples:
```
lib.txRkwTemplate {  <-- Namespace

    keyvisual {    <-- Section-Part

        topic = COA   <-- Object-name without redundancies
        topic {
           ...
```
```
lib.txRkwTemplate {  <-- Namespace

    navigation {   <-- Section-Part

        sub = COA  <-- Object-name without redundancies
        sub {
           ...
```

# What is this?
The themes extend the standard configuration of the extension by a specific layout.
This includes corresponding configurations.

Each theme contains a folder structure that is essentially identical to the folder structure of TYPO3-extensions.
This structure is shown and explained below.

# The folders and their function
```
├── Configuration
│   ├── TsConfig
│   │   ├── Config
│   │   │     > Contains theme-specific TsConfig, e. g. backend layouts
│   │   ├── Extensions
│   │   │     > Contains theme-specific TsConfig for extensions
│   │   ├── Permissions
│   │   │     > Contains theme-specific TsConfig for page permissions 
│   │   ├── Rte
│   │   │     > Contains theme-specific TsConfig for the RTE
│   │   ├── Tce
│   │   │     > Contains theme-specific TsConfig for folders for TCA, overrides for BE fields etc. 
│   │   ├── Wizards
│   │   │     > ontains theme-specific TsConfig for allowed content elements in wizards 
│   │   └── TsConfig.typoscript
│   │         > This is the main file which is included in BE
│   ├── TsConfigBeGroups
│   │     > Contains configurations to be included in BE-Groups
│   └── TypoScript
│       ├── __DEV
│       │   │   > The two files here contain overrides for DEV-Environment
│       │   ├── Constants.typoscript
│       │   └── Setup.typoscript
│       ├── constants.typoscript
│       ├── __STAGE
│       │   │   > The two files here contain overrides for STAGE-Environment
│       │   ├── Constants.typoscript
│       │   └── Setup.typoscript
│       ├── Config
│       │   │   > Contains all configuration concerning BE-Layouts, 
│       │   │     RTE, TCE, and basic configurations (e.g. baseURL)
│       │   ├── Constants
│       │   │   └── ...
│       │   ├── Setup
│       │   │   └── ...
│       │   ├── Constants.typoscript
│       │   │     > Includes all Constants-configurations from the subfolder "Constants" 
│       │   └── Setup.typoscript
│       │        > Includes all TypoScript-configurations from the subfolder "Setup" 
│       ├── Extensions
│       │   │   > Contains configurations for used extensions. The files here override existing extension settings.
│       │   │     Please create a new file for each extension  (e.g. 10-RkwBasics.typoscript)
│       │   ├── Constants
│       │   │   └── ...
│       │   ├── Setup
│       │   │   └── ...
│       │   ├── Constants.typoscript
│       │   │     > Includes all Constants-configurations from the subfolder "Constants" 
│       │   └── Setup.typoscript
│       │        > Includes all TypoScript-configurations from the subfolder "Setup"
│       ├── Layout
│       │   │   > Contains configuration concerning Body-Tag, CSS-  
│       │   │     and JS-Inclusion, paths to templates
│       │   ├── Constants
│       │   │   └── ...
│       │   ├── Setup
│       │   │   └── ...
│       │   ├── Constants.typoscript
│       │   │     > Includes all Constants-configurations from the subfolder "Constants" 
│       │   └── Setup.typoscript
│       │        > Includes all TypoScript-configurations from the subfolder "Setup"
│       ├── Marker
│       │   │   > Contains all configuration for markers/variables
│       │   ├── Constants
│       │   │   └── ...
│       │   ├── Setup
│       │   │   └── ...
│       │   ├── Constants.typoscript
│       │   │     > Includes all Constants-configurations from the subfolder "Constants" 
│       │   └── Setup.typoscript
│       │        > Includes all TypoScript-configurations from the subfolder "Setup"
│       ├── Menus
│       │   │   > Contains all configuration for menus
│       │   ├── Constants
│       │   │   └── ...
│       │   ├── Setup
│       │   │   └── ...
│       │   ├── Constants.typoscript
│       │   │     > Includes all Constants-configurations from the subfolder "Constants" 
│       │   └── Setup.typoscript
│       │        > Includes all TypoScript-configurations from the subfolder "Setup"
│       ├── Special
│       │   │   > Contains special configuations like schema.org-stuff etc.  
│       │   │     Everything that does not belong in one of the other folders ;-)
│       │   ├── Constants
│       │   │   └── ...
│       │   ├── Setup
│       │   │   └── ...
│       │   ├── Constants.typoscript
│       │   │     > Includes all Constants-configurations from the subfolder "Constants" 
│       │   └── Setup.typoscript
│       │        > Includes all TypoScript-configurations from the subfolder "Setup"
│       ├── constants.typoscript
│       │      > This file includes all "Constants.typoscript"-files from the subfolder and is included in the BE
│       │        Note the lower case here!
│       └── setup.typoscript
│              > This file includes all "Setup.typoscript"-files from the subfolder and is included in the BE.
│                Note the lower case here!
├── Readme.md
│     > Well, should be evident, stupid!
├── Resources
│   ├── Private
│   │   ├── Language
│   │   │   <ContainsLanguage files relevant for the theme>
│   │   ├── Layouts
│   │   │   │   > Contains layout files relevant for the theme
│   │   │   ├── Extensions
│   │   │   │     > Contains layouts that override templates of other extensions. 
│   │   │   │       Each extensions gets a separate subfolder here
│   │   │   └── ...
│   │   ├── Partials
│   │   │   │   > Contains partial files relevant for the theme
│   │   │   ├── Extensions
│   │   │   │     > Contains partials that override templates of other extensions. 
│   │   │   │       Each extensions gets a separate subfolder here>
│   │   │   ├── GridElements
│   │   │   │     > Contains theme-specific overrides of grid-elements defined 
│   │   │   │       in the extension
│   │   │   └── ...
│   │   └── Templates
│   │       │   > Contains template files relevant for the theme
│   │       ├── Extensions
│   │       │     > Contains zemplates that override templates of other extensions. 
│   │       │       Each extensions gets a separate subfolder here
│   │       ├── FluidTemplateLibs
│   │       │     > Contains templates that are used in TypoScript libs 
│   │       │       with FluidTemplate e.g. for Responsive Images
│   │       ├── GridElements
│   │       │     > Contains theme-specific overrides of grid-elements defined 
│   │       │       in the extension>
│   │       └── ...
│   └── Public
│       ├── css
│       │     > Contains CSS files relevant for the theme
│       ├── fonts
│       │     > Contains font files relevant for the theme
│       ├── images
│       │     > Contains images relevant for the theme
│       └── js
│             > Contains JS-files relevant for the theme
└── theme.typoscript
      > Contains the basic configuation of the theme
```
# _Core, _Mircosites & _Landingpages
* ```_Core``` is the basic configuration on which all themes are based. It is therefore inherited by all themes.
* ```_Microsites``` and ```_Landingpages``` contain sub-themes that make use of another main-theme and overwrite single configurations or templates of it. Strictly speaking, these are no independent themes. They are more a kind of an Add-On.
