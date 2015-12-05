/**
 *	@challenge	Day 2 - I Was Told There Would Be No Math
 *	@see		http://adventofcode.com/day/2
 *	@author		dominic england
 */
var fs  = require("fs"),
	parts, wrappingPaper = 0,
	i, ribbon = 0;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
	    parts = line.split("x");
	    parts.sort(function (a, b) {
			return a - b; 
	    });
	    for (i = 0; i < parts.length; i++)
	    	parts[i] = parseFloat(parts[i]);
	    wrappingPaper += 2 * parts[0] * parts[1]
	    	+ 2 * parts[1] * parts[2]
	    	+ 2 * parts[2] * parts[0];
	    wrappingPaper += parts[0] * parts[1];
	    
	    ribbon += 2*parts[0] + 2*parts[1];
	    ribbon += parts[0] * parts[1] * parts[2];
    }
});

console.log("wrapping paper: " + wrappingPaper);
console.log("ribbon: " + ribbon);