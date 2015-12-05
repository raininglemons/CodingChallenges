var fs  = require("fs"),
	toLower = function two (c) {
		var i = c.charCodeAt(0);
		if (i >= 65 && i <= 90)
			return String.fromCharCode(i + 32);
		return c;
	};
	
console.log(fs.readFileSync(process.argv[2]).toString().toLowerCase());