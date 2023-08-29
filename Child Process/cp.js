let cp = require('child_process');
console.log("Trying to open calculator.");

cp.execSync("calc");
console.log("Calculator opened.");

cp.execSync("start chrome https://www.pepcoding.com");
cp.execSync("code");

let output = cp.execSync("node abc.js");
console.log(output.toString());