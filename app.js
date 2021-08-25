const fs = require('fs');


fs.writeFile('file.txt', "HI asif from node.js", () => {
    console.log("everythings good")
})   