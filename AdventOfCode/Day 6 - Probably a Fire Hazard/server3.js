/**
 *	@challenge	Day 6 - Probably a Fire Hazard
 *	@see		http://adventofcode.com/day/6
 *	@author		dominic england
 *
 *	Infinitely faster than the previous attempt!
 *
 */
var fs  = require("fs"),
	regex = /(toggle|turn off|turn on) ([0-9]{1,3}),([0-9]{1,3}) through ([0-9]{1,3}),([0-9]{1,3})/;
	
var brightness = fs.readFileSync(process.argv[2]).toString().split('\n')
	.map((cmd) => cmd.match(regex))
	.reduce((house, cmd) => {
		if (cmd)
			for (var x = parseInt(cmd[2]); x <= parseInt(cmd[4]); x++)
				for (var y = parseInt(cmd[3]); y <= parseInt(cmd[5]); y++)
					house[x][y] = cmd[1] === "toggle" ? 
						house[x][y] + 2
						: (cmd[1] === "turn on" ? 
							house[x][y] + 1 
							: ( house[x][y] > 0 ? 
						 		house[x][y] - 1
						 		: 0
							)
						);
		return house;
	}, new Array(1000).fill().map(_ => Array(1000).fill(0)))
	.reduce((brightness, x) => 
		x.reduce((brightness, y) =>
			brightness + y
		, brightness)
	, 0);
	
console.log(`Sum of brightness: ${brightness}`);