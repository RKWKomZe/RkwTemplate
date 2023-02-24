# Using of the MySQL files

## *.template.sql files
The *.template.sql files can be imported via PHPMyAdmin to edit the site structure and content in a graphical interface.
The tables are reduced to the really relevant fields and some of the fields are provided with placeholders as strings.

**Important: the import should be done in a separate database and NOT in an existing TYPO3 database, to avoid collisions with existing tables!**

Once the editing is finished, the whole thing is exported again.
When exporting, please make sure, 
* that the uid is NOT exported (we want to have this assigned dynamically)
* that each record is provided with a complete INSERT (export options in PHPMyAdmin).

After that you can copy the single lines into the actual MySQL script. To make the placeholders work you have to do the following search and replace:
* Search: "'#@" 
* Replace: "@"


* Search: "#'"
* Replace: ""

# Permissions for pages
## Overview of permissions available
| Show Page | Edit Content | Edit Page | Delete Page | New Pages | Value | Comment                                                            |
|-----------|--------------|-----------|-------------|-----------|-------|--------------------------------------------------------------------|
| y         | y            | y         | y           | y         | 31    |                                                                    |
| y         | y            | y         | n           | y         | 27    |                                                                    |
| y         | y            | y         | n           | n         | 19    |                                                                    |
| y         | n            | y         | n           | y         | 11    | Not recommended, because no images can be added to page-properties |
| y         | n            | y         | n           | n         | 3     | Not recommended, because no images can be added to page-properties |
| y         | n            | n         | n           | n         | 1     |                                                                    |

## Permissions for normal websites (except RKW KomZe)
| What?                   | User | Group | All |
|-------------------------|------|-------|-----|
| Main folder             | 31   | 1     | 1   |
| Rootpage                | 31   | 27    | 27  |
| Events List             | 31   | 19    | 19  |
| Events Details etc.     | 31   | 19    | 1   |
| Contact                 | 31   | 27    | 27  |
| Contact List            | 31   | 19    | 19  |
| Login                   | 31   | 19    | 1   |
| Folder for law-stuff    | 31   | 27    | 27  |
| In folder for law-stuff | 31   | 19    | 19  |
| Folder for other stuff  | 31   | 27    | 27  |
| 404-page                | 31   | 19    | 19  |
| Forward-page            | 31   | 1     | 1   |


## Permissions for internal microsites websites 
| What?                   | User | Group | All |
|-------------------------|------|-------|-----|
| Main folder             | 31   | 1     | 1   |
| Rootpage                | 31   | 27    | 27  |
| Events List             | 31   | 19    | 1   |
| Events Details etc.     | 31   | 19    | 1   |
| Contact List            | 31   | 19    | 1   |
| Login                   | 31   | 19    | 1   |
| Folder for law-stuff    | 31   | 27    | 1   |
| In folder for law-stuff | 31   | 19    | 1   |
| Folder for other stuff  | 31   | 27    | 27  |
| 404-page                | 31   | 19    | 1   |
| Forward-page            | 31   | 1     | 1   |
