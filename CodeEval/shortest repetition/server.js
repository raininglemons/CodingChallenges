/**
 *	@challenge	SHORTEST REPETITION
 *	@see		https://www.codeeval.com/open_challenges/107/
 *	@author		dominic england
 */

var fs  = require("fs"),
	regex = /(.+?)(\1|$)/;
	
fs.readFileSync(process.argv[2]).toString().split('\n')
	// Node on codeeval doesn't seem to support arrow functions?
	//
	//.forEach((statement) => statement !== "" ? console.log(statement.match(regex)[1].length) : false);
	.forEach((statement) => statement !== "" ? console.log(statement.match(regex)[1].length) : false);