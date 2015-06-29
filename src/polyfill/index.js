require('./Object.assign');
require('./Date.now');
//require('./performance'); is a polyfill for the global "performance" object, 
//but it's changed from the original so it doesn't pollute the global scope 
//because the previous polyfill was not a comprehensive polyfill and interfered with other libraries
require('./requestAnimationFrame');
