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
        function _typeof(obj) {
            '@babel/helpers - typeof';
            return (
                (_typeof =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (obj) {
                              return typeof obj;
                          }
                        : function (obj) {
                              return obj &&
                                  'function' == typeof Symbol &&
                                  obj.constructor === Symbol &&
                                  obj !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof obj;
                          }),
                _typeof(obj)
            );
        }
        function _getRequireWildcardCache(nodeInterop) {
            if (typeof WeakMap !== 'function') return null;
            var cacheBabelInterop = new WeakMap();
            var cacheNodeInterop = new WeakMap();
            return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
            })(nodeInterop);
        }
        function _interopRequireWildcard(obj, nodeInterop) {
            if (!nodeInterop && obj && obj.__esModule) {
                return obj;
            }
            if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
                return {default: obj};
            }
            var cache = _getRequireWildcardCache(nodeInterop);
            if (cache && cache.has(obj)) {
                return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) {
                if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                    if (desc && (desc.get || desc.set)) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
            newObj['default'] = obj;
            if (cache) {
                cache.set(obj, newObj);
            }
            return newObj;
        }
        document.body.appendChild((0, _welcome.welcome)('leo'));

        // babylon 会报错
        // import('./dynamic.js').then(console.log);

        // 最后一行如果是注释和连起来导致出问题
        Promise.resolve()
            .then(function () {
                return _interopRequireWildcard(require('./dynamic.js'));
            })
            .then(console.log);
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
    './dynamic.js': function (require, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true,
        });
        exports['default'] = void 0;
        console.log(233333);
        var _default = 324;
        exports['default'] = _default;
    },
});
