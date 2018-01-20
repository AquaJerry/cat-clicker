// (c) 2017 LiuZeyang, Guangzhou University.
// Cat Clicker core is freely distributed under the terms of ISC license.

// - `ko` UI library
// - `open` a menu.
// - `cancel` to close all menus.
import ko from 'knockout';
import vm from './vm';

// Menubar View & Bindings
ko.components.register('menubar', {
  template: '<ul data-bind="click: cancel(), foreach: menus">'+
    '<li data-bind="click: open(), text: text"></li>'+
  '</ul>',
  viewModel: function(menubar) {
    this.cancel = menubar.cancel;
    this.menus = menubar.menus;
  },
});

// - `menu._open` True if the menu open.
// - `menu.name` Something that can be displayed on the menu.
// - `isOrdering` True if at least one menu open.
// - `menu.open` If no menu open, open the clicked one.
// - `menu.text` Final visible label.
class Menubar {
  constructor(names) {
    this.menus = names.map((name) => ({
      name,
      _open: ko.observable(),
    }));

    // Compute after event bubbles end.
    const isOrdering = ko.computed(() => this.menus.some((m) => m._open()))
      .extend({rateLimit: 0});

    this.menus.forEach((m) => {
      m.open = ko.computed(() => !isOrdering() && Menubar.open);
      m.text = ko.computed(() => m.name + (m._open() ? ' (Open)' : ''));
    });

    // Make the view know how to update itself.
    // - `cancel` If no menu open, do nothing.
    vm.push({
      name: 'menubar',
      params: {
        cancel: ko.computed(() => isOrdering() && Menubar.cancel),
        menus: this.menus,
      },
    });
  }
  static cancel(menubar) {
    menubar.menus.forEach((m) => m._open(false));
  }
  static open(menu) {
    menu._open(true);
  }
}

export default Menubar;
