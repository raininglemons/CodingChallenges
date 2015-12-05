/**
 *	@challenge	Peak Traffic
 *	@see		https://www.codeeval.com/open_challenges/19/
 *	@author		dominic england
 */

var fs  = require("fs"),
	index = {};
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		line = line.split("    ");
		if ((index[line[1]] || (index[line[1]] = [])).indexOf(line[2]) == -1)
			index[line[1]].push(line[2]);
		if ((index[line[2]] || (index[line[2]] = [])).indexOf(line[1]) == -1)
			index[line[2]].push(line[1]);
	}
});

console.log(index);