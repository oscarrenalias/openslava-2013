var fs = require("fs");

fs.readFile('./file1.txt', function (err, data) {
	if (err) throw err;
	console.log("File1.txt contents: " + data);
});

fs.readFile("./file2.txt"), function(err, data) {
	if (err) throw err;
	console.log("File1.txt contents: " + data);	
});