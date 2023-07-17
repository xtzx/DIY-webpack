import {welcome} from './welcome.js';

document.body.appendChild(welcome('leo'));

// babylon 会报错
// import('./dynamic.js').then(console.log);

// 最后一行如果是注释和连起来导致出问题
// import('./dynamic.js').then(console.log); },'./welcome.js': function (require, exports) { "use strict";
console.log(1)