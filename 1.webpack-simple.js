const fs = require('fs');
let input = './src/index.js';
let output ='./output/main.js';
// 模板替换插件
const ejs = require('ejs');
let getIntry = fs.readFileSync(input,'utf-8');

let template = `(function (modules) {
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
  <%- getIntry %>
})])`;
let result = ejs.render(template,{
  getIntry
});
fs.writeFileSync(output,result);