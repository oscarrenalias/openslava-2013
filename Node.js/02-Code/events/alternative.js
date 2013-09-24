var fs = require("fs");

var cb = function(err, data) {
	if (err) throw err;
	console.log("File contents: " + data);
}

fs.readFile("./file1.txt", cb);
fs.readFile("./file2.txt", cb);