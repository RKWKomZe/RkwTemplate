<INCLUDE_TYPOSCRIPT: source="FILE:../../setup.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:./Config/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Extensions/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Layout/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Marker/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Menus/Setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./Special/Setup.ts">

<INCLUDE_TYPOSCRIPT: source="FILE:../../../_CORE/Pages/Setup/50-Print.ts">

# Environments
[applicationContext = Development*]
    <INCLUDE_TYPOSCRIPT: source="FILE:./_DEV/Setup.ts">
[global]

[applicationContext = Production/Staging]
    <INCLUDE_TYPOSCRIPT: source="FILE:./_STAGE/Setup.ts">
[global]

