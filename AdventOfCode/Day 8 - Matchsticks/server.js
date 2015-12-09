/**
 *
 *	Start: node server.js test
 *
 */
var fs  = require("fs");
	
var source = fs.readFileSync(process.argv[2])
		.toString().split('\n')
		.filter(line => line != ""),
	original = source.reduce((i, line) => i + line.length, 0);

/**
 *
 *	PART 1
 *
 */
var part1 = source.map((line) => eval(line))
		.reduce((i, val) => i + val.length, 0);
	
console.log(original - part1);

/**
 *
 *	PART 2
 *
 */
var part2 = source.map(line => "\"" + line.replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"")
		.reduce((i, line) => i + line.length, 0);
		
console.log(part2 - original);