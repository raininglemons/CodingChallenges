var fs  = require("fs"),
	s, i, p;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		s = line.split(",");
		for (i = 1; (p = s[1] * i) < s[0]; i++) { }
		console.log(p);
	}
});