var fs = require("fs"),
	reg = /0/g;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "")
		console.log((line >>> 0).toString(2).replace(reg, "").length);
});