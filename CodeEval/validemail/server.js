var fs  = require("fs"),
	emailreg = /^[\"]?[a-zA-Z0-9\-_\+\.]+[\"]?@[a-zA-Z0-9\-_\.]+\.([a-zA-Z]{3}|[a-zA-Z]{2}\.a-zA-Z]{2})/;
	
fs.readFileSync(process.argv[2]).toString().split("\n").forEach(function (line) {
	console.log(!!line.match(emailreg));
});