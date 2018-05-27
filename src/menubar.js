// (c) 2017 AquaJerry, Guangzhou University.
// Cat Clicker is freely distributed under the terms of ISC license.

// - ko, UI library
// - vm, view model
import ko from 'knockout';
import vm from './vm';

// Register "Menubar" on knockout
ko.components.register('menubar', {
  template: '<ul data-bind="click: cancel(), foreach: menus">' +
    '<li data-bind="click: open(), text: text"></li></ul>',
  viewModel({cancel, menus}) {
    this.menus = menus;
    this.cancel = cancel;
  },
});

// Helpers for newing a menubar
// - cancel, closes all menus
// - open, opens a menu
const cancel = (menubar) => {
  menubar.menus.forEach((menu) => {
    menu.state('close');
  });
};
const open = (menu) => {
  menu.state('open');
};

// New a menubar
// - cancel, either closes all menus or does nothing if no menu open
// - isOrdering, true if at least one menu open, computed as event bubbles out
// - name, string that can be displayed on the menu
// - open, opens the clicked one if no menu open
// - state, either 'close' or 'open'
// - text, final visible label
// - vm.push, make the view know how to update itself
export default (names) => {
  const menus = names.map((name) => ({
    name,
    state: ko.observable('close'),
  }));
  const isOrdering = ko.computed(() => menus.some((menu) =>
    menu.state() === 'open')).extend({rateLimit: 0});

  menus.forEach((menu) => {
    Object.assign(menu, {
      open: ko.computed(() => !isOrdering() && open),
      text: ko.computed(() => `${menu.name} (${menu.state()})`),
    });
  });

  vm.push({
    name: 'menubar',
    menus,
    cancel: ko.computed(() => isOrdering() && cancel),
  });
};
