/**
 *	@challenge	PANAGRAMS
 *	@see		https://www.codeeval.com/open_challenges/37/
 *	@author		dominic england
 */

var fs  = require("fs"),
	alphabet = [], i, missing;

for (i = 0; i < 26; i++)
	alphabet.push(String.fromCharCode(i + 97));
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		// Compile line
		missing = "";
		line = line.toLowerCase();
		for (i = 0; i < 26; i++)
			if (line.indexOf(alphabet[i]) == -1)
				missing += alphabet[i];
		console.log(missing == "" ? "NULL" : missing);
	}
});