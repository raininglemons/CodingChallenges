/**
 *	@challenge	Chardonnay or Cabernet
 *	@see		https://www.codeeval.com/open_challenges/211/
 *	@author		dominic england
 */

var fs  = require("fs"),
	matches, i, ii, history;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		line = line.split(" | ", 2);
		line[0] = line[0].split(" ");
		matches = [];
		wine: for (i = 0; i < line[0].length; i++) {
			history = {};
			for (ii = 0; ii < line[1].length; ii++)
				if ((history[line[1][ii]] !== undefined && (history[line[1][ii]] = line[0][i].indexOf(line[1][ii], history[line[1][ii]]) + 1) === 0) || (history[line[1][ii]] === undefined && (history[line[1][ii]] = line[0][i].indexOf(line[1][ii]) + 1) === 0))
					continue wine;
					
			matches.push(line[0][i]);
		}
		if (matches.length > 0)
			console.log(matches.join(" "));
		else
			console.log("False");
	}
});