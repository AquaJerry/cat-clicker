// (c) 2018 LiuZeyang, Guangzhou University.
// Cat Clicker Menu is freely distributed under the terms of ISC license.

// - `ko` UI lib
import ko from 'knockout';

// ### Menu
// A menu can
// - be opened or closed
// - be asked what state it is
class Menu {
    // Constructor.
    // - params:
    //  - {object} [cfg = {}] - what a menu is at first
    //  - {bool} [cfg.open = false] - open?
    constructor({open = false} = {}) {
        this._open = ko.observable(open);
    }
    // Get current state.
    // - return {string} 'open'|'close'
    get state() {
        return this._open() ? 'open' : 'close';
    }
}

export default Menu;
