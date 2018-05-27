// (c) 2018 AquaJerry, Guangzhou University.
// Cat Clicker is freely distributed under the terms of ISC license.

// - a menu can be opened or closed etc
import expect from 'expect.js';
import ko from './knockout';
import menubar from '../src/menubar';

describe('Menubar', () => {
  let menuBar;
  before(() => {
    menubar([
      'Tabby',
      'Scaredy',
    ]);
    expect(menuBar = ko().pop()).to.be.an('object');
    expect(menuBar.name).to.be('menubar');
  });
  // Click to enter
  it('should be able to open a menu', () => {
    const {menus} = menuBar;
    const [menu] = menus;
    const {open, state} = menu;
    expect(state).to.be.a('function');
    expect(state()).to.be('close');
    expect(open).to.be.a('function');
    const openMenu = open();
    expect(openMenu).to.be.a('function');
    openMenu(menu);
    expect(state()).to.be('open');
  });
  // Click the blank to quit
  it('should be able to close all its menus', () => {
    const {cancel} = menuBar;
    expect(cancel).to.be.a('function');
    const close = cancel();
    expect(close).to.be.a('function');
    close(menuBar);
    menuBar.menus.forEach((menu) => {
      expect(menu.state).to.be.a('function');
      expect(menu.state()).to.be('close');
    });
  });
});
