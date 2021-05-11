const path = require('path');
const fs = require('fs');
let filePath = path.resolve(__dirname, './main.ts');
fs.watchFile(filePath,function(){
    console.log(filePath + "change");
    let mocks = fs.readFile(filePath);
    console.log(mocks)

  })