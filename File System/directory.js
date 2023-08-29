const fs = require('fs');

// Create
fs.mkdirSync("MyDir");

// Creating a file
fs.writeFileSync("MyDir/myFile.txt", 'My Content.');


// Reading a direcotry
let content = fs.readdirSync("MyDir");
for (let file of content) {

    console.log(file);
    // Removing a file
    fs.unlinkSync("MyDir/" + file);
}

// Remove direcotry
fs.rmdirSync("MyDir");

let doesExist = fs.existsSync("abc2.js");
console.log(doesExist);

let detailsObj = fs.lstatSync(__dirname + "//abc.js");
console.log(detailsObj);
let ans = detailsObj.isFile();
console.log(ans);

ans = detailsObj.isDirectory();
console.log(ans);

