/**
 *
 *	Start: node server.js test
 *
 */
var fs  = require("fs");

function niceWord (word) {
	// Check 2 repeated 2 character repeated
	//
	if (word.match(/([a-z]{2}).*\1/) === null)
		return false;
	
	// Check two same letters separated by one letter
	//
	if (word.match(/([a-z])[a-z]\1/) === null)
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