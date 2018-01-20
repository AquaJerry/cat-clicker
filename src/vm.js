// (c) 2018 LiuZeyang, Guangzhou University.
// Cat Clicker View Model is freely distributed under the terms of ISC license.

import ko from 'knockout';

const vm = ko.observableArray();

// Do not notify view in non-browsers, like Node
if ('undefined' !== typeof window) {
  ko.applyBindings(vm);
}

export default vm;
