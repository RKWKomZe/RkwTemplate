// ############################################################################
// Multi language ts
// ############################################################################

// Standardssprache für Suche setzen
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 0

//===============================================================

// Englisch, sys_language.uid = 1
// Alternativ mit Domain: [globalVar = GP:L = 1]  || [globalString = ENV:HTTP_HOST=www.rkw.com]
[globalVar = GP:L = 1]
	config{

		// Erlaubt spezielle Domains für eine Sprache
		// baseURL = http://www.rkw.com/
		sys_language_uid = 1
		sys_language_isocode = en
		language = en
		locale_all = en_US
		htmlTag_langKey = en-US    
	}
	plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 1

[global]

// Französisch, sys_language.uid = 2
// Alternativ mit Domain: [globalVar = GP:L = 2]  || [globalString = ENV:HTTP_HOST=www.rkw.fr]
[globalVar = GP:L = 2]
	config{

		// Erlaubt spezielle Domains für eine Sprache
		// baseURL = http://www.rkw.fr/
		sys_language_uid = 2
		sys_language_isocode = fr
		language = fr
		locale_all = fr_FR
		htmlTag_langKey = fr-FR   
	}
	plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 2

[global]

// Italienisch, sys_language.uid = 3
// Alternativ mit Domain: [globalVar = GP:L = 3]  || [globalString = ENV:HTTP_HOST=www.rkw.it]
[globalVar = GP:L = 3]
	config{

		// Erlaubt spezielle Domains für eine Sprache
		// baseURL = http://www.rkw.it/
		sys_language_uid = 3
		sys_language_isocode = it
		language = it
		locale_all = it_IT
		htmlTag_langKey = it-IT    
	}
	plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 3

[global]

// Russisch, sys_language.uid = 4
// Alternativ mit Domain: [globalVar = GP:L = 4]  || [globalString = ENV:HTTP_HOST=www.rkw.ru]
[globalVar = GP:L = 4]
	config{

		// Erlaubt spezielle Domains für eine Sprache
		// baseURL = http://www.rkw.ru/
		sys_language_uid = 4
		sys_language_isocode = ru
		language = ru
		locale_all = ru_RU
		htmlTag_langKey = ru-RU    
	}
	plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 4

[global]


