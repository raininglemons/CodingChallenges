/**
 *	@challenge	LONGEST COMMON SUBSEQUENCE
 *	@see		https://www.codeeval.com/open_challenges/6/
 *	@author		dominic england
 */

var fs  = require("fs"),
	substring, substringLength,
	i, ii;
	
function processSubstring (a, b, i, ii, prefix) {
	prefix = prefix || "";
	var str = "", ii2 = ii;
	for (; i < a.length; i++)
		for (ii = ii2; ii < b.length; ii++) {
			if (a[i] == b[ii]) {
				processSubstring(a, b, i+1, ii+1, prefix + a[i]);
			}
		}

	if (prefix.length > substring.length)
		substring = prefix;
}
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		// Compile line
		line = line.split(";");
		substring = "";
		
		// Work the left hand string
		//
		for (i = 0; i < line[0].length - 1; i++) {
			// Work along right hand string
			//			
			for (ii = 0; ii < line[1].length - 1; ii++) {
				if (line[0][i] == line[1][ii])
					processSubstring(line[0], line[1], i+1, ii+1, line[0][i]);
			}
		}
		console.log(substring == "" ? "NULL" : substring);
	}
});