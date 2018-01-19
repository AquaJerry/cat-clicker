// (c) 2018 LiuZeyang, Guangzhou University.
// Cat Clicker Pizza Test is freely distributed under the terms of ISC license.

// - `Menu`s can be opened or closed etc.
// - `vm` can tell the view what to de.
import assert from 'assert';
import Menu from '../src/components/menu';
import vm from '../src/components/vm';

// View Model
describe('vm', () => {
    // Click to enter.
    it('.open() should open a menu', () => {
        const menu = new Menu;
        vm.open(menu);
        assert.equal(menu.state, 'open');
    });
    // Click the blank to quit.
    it('.cancel() should close all menus of a model', () => {
        const model = {
            menus: Array.from({length: 10}).map(() => new Menu({open: true})),
        };
        vm.cancel(model);
        assert.equal(model.menus.every((menu) => 'close' === menu.state), true);
    });
});
