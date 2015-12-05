/**
 *	@challenge	Array Absurdity
 *	@see		https://www.codeeval.com/open_challenges/41/
 *	@author		dominic england
 */

var fs  = require("fs"),
	len, arr, i;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		line = line.split(";");
		len = parseInt(line[0]);
		arr = line[1].split(",");
		
		for (i = len - 1; i > 0; i--) {
			if (arr.indexOf(arr[i]) != i)
				return console.log(arr[i]);
		}
	}
});