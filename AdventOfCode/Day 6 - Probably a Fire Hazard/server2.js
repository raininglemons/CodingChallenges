/**
 *	@challenge	Day 6 - Probably a Fire Hazard
 *	@see		http://adventofcode.com/day/6
 *	@author		dominic england
 *
 *	Using instead a flat typed array to try and speed things up...
 *	@see http://jsperf.com/2d-array-of-numbers/2
 */
var fs  = require("fs"),
	//heapdump = require("heapdump"), heapdumped = false,
	//house = Array.apply(null, Array(1000)).map(() => Array.apply(null, Array(1000)).map(Number.bind(this, 0))),//createArray(1000,1000),
	house = new Uint8Array(1000 * 1000),
	brightness = 0, statement = null,
	coords = [[],[]], x, y,
	xDirection, yDirection,
	regex = /(toggle|turn off|turn on) ([0-9]{1,3}),([0-9]{1,3}) through ([0-9]{1,3}),([0-9]{1,3})/,
	xMultiplier = 0;
	
var source = fs.readFileSync(process.argv[2]).toString().split('\n');

source.forEach(function (line, index) {
    if (line != "") {
	    if ((statement = line.match(regex))) {
		    coords[0][0] = parseInt(statement[2]);
		    coords[0][1] = parseInt(statement[3]);
		    coords[1][0] = parseInt(statement[4]);
		    coords[1][1] = parseInt(statement[5]);
		    
		    if (coords[0][0] <= coords[1][0])
		    	xDirection = 1;
		    else
		    	xDirection = -1;
		    
		    if (coords[0][1] <= coords[1][1])
		    	yDirection = 1;
		    else
		    	yDirection = -1;
		    	
			switch (statement[1]) {
				case "toggle":
				for (x = coords[0][0]; x <= coords[1][0]; x += xDirection) {
					xMultipler = x * 1000;
					for (y = coords[0][1]; y <= coords[1][1]; y += yDirection) {
						/*
						Untyped array...
						===========================
						brightness += 2;
						house[x][y] += 2;*/
						brightness += 2;
						house[xMultipler + y] += 2;
						process.stdout.write(" " + Math.round(index / source.length * 100) + "% " + x + "/" + coords[1][0] + "," + y + "/" + coords[1][1] + "; " + brightness + ": " + line + "\r");
					}
				}
				break;
				
				case "turn on":
				for (x = coords[0][0]; x <= coords[1][0]; x += xDirection) {
					xMultipler = x * 1000;
					for (y = coords[0][1]; y <= coords[1][1]; y += yDirection) {
						/*
						Untyped array...
						===========================
						brightness++;
						house[x][y]++;*/
						brightness++;
						house[xMultipler + y]++;
						process.stdout.write(" " + Math.round(index / source.length * 100) + "% " + x + "/" + coords[1][0] + "," + y + "/" + coords[1][1] + "; " + brightness + ": " + line + "\r");
					}
				}
				break;
				
				case "turn off":
				for (x = coords[0][0]; x <= coords[1][0]; x += xDirection) {
					xMultipler = x * 1000;
					for (y = coords[0][1]; y <= coords[1][1]; y += yDirection) {
						/*
						Untyped array...
						===========================
						if (house[x][y] > 0) {
							house[x][y]--;
							brightness--;
						}*/
						if (house[xMultipler + y] > 0) {
							house[xMultipler + y]--;
							brightness--;
						}
						process.stdout.write(" " + Math.round(index / source.length * 100) + "% " + x + "/" + coords[1][0] + "," + y + "/" + coords[1][1] + "; " + brightness + ": " + line + "\r");
					}
				}
				break;
				
				default:
				console.log("failed");
			}
			
	    }
	    //	Enforce garbage collection?
	    //
	    // global.gc();
    }
});

console.log("");
console.log("Answer");
console.log("=====================");
console.log(brightness);