// modules 就是 key 是路径 + 文件名,value 是包裹了一层导出的对象
(function (modules) {
    // 定义一个浏览器中没有的 require 函数
    function require(fileName) {
        const fn = modules[fileName];
        const exports = {};
        fn(require, exports);
        return exports;
    }

    require('/Users/bjhl/Documents/手写系列/webpack/src/index.js');
})({
    '/Users/bjhl/Documents/手写系列/webpack/src/index.js': function (require, exports) {
        'use strict';

        var _welcome = require('./welcome.js');
        document.body.appendChild((0, _welcome.welcome)('leo'));

        // babylon 会报错
        // import('./dynamic.js').then(console.log);

        // 最后一行如果是注释和连起来导致出问题
        // import('./dynamic.js').then(console.log); },'./welcome.js': function (require, exports) { "use strict";
        // console.log(1)
    },
    './welcome.js': function (require, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true,
        });
        exports.welcome = welcome;
        function welcome(name) {
            // return <h1>123123</h1>
            var h1Element = document.createElement('h1');
            h1Element.textContent = 'Hello, '.concat(name, '!');
            return h1Element;
        }
    },
});
