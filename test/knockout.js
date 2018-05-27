import assert from 'assert';
import ko from 'knockout';

let viewModel;

ko.applyBindings = (vm) => {
  assert.equal(typeof vm, 'function', 'ViewModel should be a function');
  assert(vm() instanceof Array, 'Bindings should be an array');
  viewModel = vm;
};

export default () => viewModel && viewModel();
