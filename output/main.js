(function (modules) {
  function __webpack_require__(moduleId) {
    const module = {
      exports:{}
    }
    // 执行该模块
    moduleId.call(module.exports,module,module.exports,__webpack_require__);
    return module.exports;
  }
  return __webpack_require__(modules[0]);
})([(function(module,exports){
  // import test from './test.js';

// test();

console.log('haha');
})])