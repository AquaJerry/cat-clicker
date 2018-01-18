// (c) 2017 LiuZeyang, Guangzhou University.
// Cat Clicker core is freely distributed under the terms of MIT license.

// UI library
import ko from "knockout";

// Private Namespace
(() => {
    // ## Helpers

    // Open a menu.
    let open = it => it._open(true);
    // Close all menus.
    let cancel = it => it.menus.map(m => m._open(false));

    // ## View Model

    // - `menu._open` True if the menu open.
    // - `menu.name` Something that can be displayed on the menu.
    // - `isOrdering` True if at least one menu open.
    // - `menu.open` If no menu open, open the clicked one.
    // - `menu.text` Final visible label.
    let menus = [ { _open: ko.observable(), name: 'List of Cat Names' },
        { _open: ko.observable(), name: 'Admin Area' } ];
    let isOrdering = ko.computed(() => menus.some(m => m._open()));

    menus.forEach(m => {
        m.open = ko.computed(() => !isOrdering() && open);
        m.text = ko.computed(() => m.name + (m._open() ? ' (Open)' : ''));
    });

    // Make the view know how to update itself.
    // - `cancel` If no menu open, do nothing.
    ko.applyBindings({
        menus,
        cancel: ko.computed(() => isOrdering() && cancel)
    });
})();
