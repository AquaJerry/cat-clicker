# Cat Clicker
Web app for browsering lovely cats.
MIT license.

## Table of Contents

- Usage
- Docs
- Dependencies
- Change Logs

## Usage

So far it only supports running in browser directly.
1. Download this zip.
2. Open index.html.

## Docs

Annotated source code.
- [js/app.js](docs/app.html)

## Dependencies

- [Knockout JS](https://github.com/knockout/knockout) - UI libaray

## Change Logs

### v0.0.1

There should be two menus on a blank.

- List of cat names
- Admin Area

Clicking any of names will show it's cover, leaving menu close.

Admin Area is somewhere you can rename a cat, change its cover photo, or even change the number of how many people love it.

Here's the interaciton spec.

Before | Click | After
-|
blank | menu | menu
menu | blank | blank
menu | menu | blank
menu 1 | menu 2 | blank

```html
<!-- Before: blank -->
<blank>
    <menu click="open"></menu>
    <menu click="open"></menu>
</blank>

<!-- Before: menu -->
<blank click="close">
     <menu open></menu>
     <menu></menu>
</blank>
```

But there seems someting wrong in the actual code.
