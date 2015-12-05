/**
 *	@challenge	Day 3 - Perfectly Spherical Houses in a Vacuum
 *	@see		http://adventofcode.com/day/3
 *	@author		dominic england
 */
var fs  = require("fs"),
	sleigh = function sleigh (x, y) {
		this.x = x || 0;
		this.y = y || 0;
		this.move(0, 0);
	}, i,
	presents = [],
	unique = 0,
	duplicates = 0;
	
	sleigh.prototype.move = function (x, y) {
		this.x += x;
		this.y += y;
		if (!presents[this.x])
			presents[this.x] = [];
		if (!presents[this.x][this.y]) {
			presents[this.x][this.y] = 1;
			unique++;
		} else if (++presents[this.x][this.y] == 2)
			duplicates++;
	}
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
	    var santa = new sleigh(),
	    	robot = new sleigh();
	    	
	    for (i = 0; i < line.length; i++) {
		    var activeSleigh = (i % 2 ? santa : robot);
		    switch (line[i]) {
			    case ">":
			    activeSleigh.move(1, 0);
			    break;
			    case "<":
			    activeSleigh.move(-1, 0);
			    break;
			    case "^":
			    activeSleigh.move(0, 1);
			    break;
			    case "v":
			    activeSleigh.move(0, -1);
			    break;
		    }
	    }
	    console.log(santa);
	    console.log(robot);
	    console.log("================================");
	    console.log("duplicates at: " + duplicates);
	    console.log("unique at: " + unique);
    }
});