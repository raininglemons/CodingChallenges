var fs  = require("fs");
	
fs.readFileSync(process.argv[2]).toString().split("\n").forEach(function (line) {
	line = line.split(",");
	console.log(line[0].replace(new RegExp("[" + line[1].trim() + "]*", "g"), ""));
});