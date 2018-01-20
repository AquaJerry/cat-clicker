// (c) 2018 LiuZeyang, Guangzhou University.
// Cat Clicker Pizza Test is freely distributed under the terms of ISC license.

// - `Menu`s can be opened or closed etc.
import assert from 'assert';
import Menu from '../src/menu';
import Menubar from '../src/menubar';

describe('Menubar', () => {
    // Click to enter.
    it('.open() should open a menu', () => {
        const menu = new Menu;
        Menubar.open(menu);
        assert.equal(menu.state, 'open');
    });
    // Click the blank to quit.
    it('.cancel() should close all its menus', () => {
        const model = {
            menus: Array.from({length: 10}).map(() => new Menu({open: true})),
        };
        Menubar.cancel(model);
        assert.equal(model.menus.every((menu) => 'close' === menu.state), true);
    });
});
