var fs = require("fs"),
	stats = fs.statSync(process.argv[2]);
	
console.log(stats["size"]);