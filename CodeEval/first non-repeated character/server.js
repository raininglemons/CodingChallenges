/**
 *	@challenge	First Non-repeated Character
 *	@see		https://www.codeeval.com/open_challenges/12/
 *	@author		dominic england
 */

var fs  = require("fs"),
	i, history;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		history = [];
		for (i = 0; i < line.length; i++)
			if (history.indexOf(line[i]) === -1 && line.indexOf(line[i], i+1) === -1)
				return console.log(line[i]);
			else
				history.push(line[i]);
	}
});