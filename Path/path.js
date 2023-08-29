const path = require('path');
const fs = require('fs');

let fullPath = path.join(__dirname,"abc.js");

let ext = path.extname(fullPath);
console.log(ext); 

let basename = path.basename(fullPath);
console.log(basename);

let dirPath = path.basename(__dirname);
console.log(dirPath);