// Used for os interaction with backend server
let os = require('os');

console.log(os.arch());
console.log(os.type());
console.log(os.platform());
console.log(os.networkInterfaces());
console.log(os.cpus());