/**
 *	@challenge	Trailing String
 *	@see		https://www.codeeval.com/open_challenges/32/
 *	@author		dominic england
 */

var fs  = require("fs");
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		line = line.split(",");
		if (line[0].substr(-line[1].length) == line[1])
			console.log(1);
		else
			console.log(0);
	}
});