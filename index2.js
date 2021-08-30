// CRUD (Create) (update) (Read) (Delete)

// create a folder

const fs = require("fs");

fs.mkdirSync("RAJDEEP");

// Create again a file inside the file and add some data in the new file

fs.writeFileSync("RAJDEEP/bio.txt", "My name is RAJDEEP");

// Add more data in the previous file

fs.appendFileSync("RAJDEEP/bio.txt", "And this Task is done by RAJDEEP");

// Read the data without getting buffer data at first

// "utf8" is used to overcome the buffer

const data = fs.readFileSync("RAJDEEP/bio.txt", "utf8");
console.log(data);

// Rename the file

fs.renameSync("RAJDEEPbio.txt", "RAJDEEP/RAJbio.txt");

// Deleting

fs.unlinkSync("RAJDEEP/RAJDEEPbio.txt");

fs.rmdirSync("RAJDEEP");
