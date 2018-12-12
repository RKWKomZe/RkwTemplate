<INCLUDE_TYPOSCRIPT: source="FILE:../_CORE/constants.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:./Config/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Extensions/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Layout/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Marker/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Menus/Constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Specials/Constants.ts">

# Environments
[applicationContext = Development*]
    <INCLUDE_TYPOSCRIPT: source="FILE:./_DEV/Constants.ts">
[global]

[applicationContext = Production/Staging]
    <INCLUDE_TYPOSCRIPT: source="FILE:./_STAGE/Constants.ts">
[global]