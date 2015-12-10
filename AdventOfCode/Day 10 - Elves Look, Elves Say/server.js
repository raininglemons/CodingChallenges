/**
 *	@challenge	Day 10 - Elves Look, Elves Say
 *	@see		http://adventofcode.com/day/10
 *	@author		dominic england
 */
"use strict";

var fs  = require("fs");
	
fs.readFileSync(process.argv[2]).toString().split('\n')
	.filter(_ => _ !== "")
	.forEach(function (line) {
		for (let i = 0; i < 40; i++)
			line = line.match(/([0-9])\1*/g).map(_ => _.length + _.substr(0, 1)).join("");
		console.log(line.length);
		for (let i = 0; i < 10; i++)
			line = line.match(/([0-9])\1*/g).map(_ => _.length + _.substr(0, 1)).join("");
		console.log(line.length);
	});