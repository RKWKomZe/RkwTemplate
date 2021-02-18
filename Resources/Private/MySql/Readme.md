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
