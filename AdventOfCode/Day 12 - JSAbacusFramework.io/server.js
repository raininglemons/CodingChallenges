/**
 *	@challenge	Day 12 - JSAbacusFramework.io
 *	@see		http://adventofcode.com/day/12
 *	@author		dominic england
 */
"use strict";

let fs  = require("fs");
	
fs.readFileSync(process.argv[2]).toString().split('\n')
	.filter(_ => _ !== "")
	.forEach(function (line) {
		// Part 1
		//
		console.log(`Part 1: ${line.match(/\-?([0-9]+)(\.[0-9]+)?/g).reduce((i, v) => i + parseFloat(v), 0)}`);
		
		// Part 2
		//
		line = JSON.parse(line);
		console.log(`Part 2: ${parse(line)}`);
	});
	
function parse (o) {
	if (o instanceof Array) 
		return o.reduce((i, v) => i + (v.constructor === Number ? v : parse(v)), 0);
	else if (o instanceof Object) {
		o = Object.keys(o).map(k => o[k]);
		return o.indexOf("red") > -1 ? 0 : parse(o);
	} else
		return 0;
}