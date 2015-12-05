/**
 *
 *	Start: node server.js test
 *
 */
var fs  = require("fs");

function niceWord (word) {
	// Check 3 vowels
	//
	var vowels;
	if ((vowels = word.match(/([^aeiou]?[aeiou][^aeiou]?)/g)) === null || vowels.length < 3)
		return false;
	
	// Check two recurring letters
	//
	if (word.match(/([a-zA-Z])\1/) === null)
		return false;
		
	if (word.match(/(ab|cd|pq|xy)/) !== null)
		return false;
		
	return true;
}

var total = 0, nice = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
	    /* booooo */
	    if (niceWord(line))
	    	nice++;
	    total++;
	    process.stdout.write(nice + "/" + total + '\r');
    }
});
process.stdout.write(nice + "/" + total + '\n');