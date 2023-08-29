// Files -> create, read, update, delete
let fs = require('fs');

// Read
let buffer = fs.readFileSync("abc.js");
console.log(buffer.toString());

// Create
// fs.openSync("abc.txt","w");

// Update -> Create/Replace
fs.writeFileSync("abc.txt","We are happy today.");

// Append -> Create/Append
fs.appendFileSync("abc.txt","Why?");