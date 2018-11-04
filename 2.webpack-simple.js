const fs = require('fs');
let input = './src/index.js';
let output = './output/main.js';
// 模板替换插件
const ejs = require('ejs');
let getIntry = fs.readFileSync(input, 'utf-8');

let template = `(function (modules) {
  function __webpack_require__(moduleId) {
    const module = {
      exports:{}
    }
    // 执行该模块
    modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);
    return module.exports;
  }
  return __webpack_require__(0);
})([(function(module,exports,__webpack_require__){
  var result = __webpack_require__(1);
  console.log(result);
}),(function(module,exports){
  module.exports = 123;
})])`;
let result = ejs.render(template, {
  getIntry
});
fs.writeFileSync(output, result);