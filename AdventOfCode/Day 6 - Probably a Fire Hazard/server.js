/**
 *	@challenge	Day 6 - Probably a Fire Hazard
 *	@see		http://adventofcode.com/day/6
 *	@author		dominic england
 */
var fs  = require("fs"),
	house = Array.apply(null, Array(1000)).map(() => Array.apply(null, Array(1000)).map(Boolean)),//createArray(1000,1000),
	lightsOn = 0, statement = null,
	coords = [[],[]], x, y,
	xDirection, yDirection,
	regex = /(toggle|turn off|turn on) ([0-9]{1,3}),([0-9]{1,3}) through ([0-9]{1,3}),([0-9]{1,3})/;
	
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
				for (x = coords[0][0]; x <= coords[1][0]; x += xDirection)  
					for (y = coords[0][1]; y <= coords[1][1]; y += yDirection) {
						//setIfEmpty(x, y);
						if ((house[x][y] = !house[x][y]))
							lightsOn++;
						else
							lightsOn--;
						process.stdout.write(Math.round(index / source.length * 100) + "% " + x + "/" + coords[1][0] + "," + y + "/" + coords[1][1] + "; " + lightsOn + ": " + line + "\r");
					}
				break;
				
				case "turn on":
				for (x = coords[0][0]; x <= coords[1][0]; x += xDirection)  
					for (y = coords[0][1]; y <= coords[1][1]; y += yDirection) {
						//if (!setIfEmpty(x, y, true))
						if (!house[x][y]) {
							lightsOn++;
							house[x][y] = true;
						}
						process.stdout.write(Math.round(index / source.length * 100) + "% " + x + "/" + coords[1][0] + "," + y + "/" + coords[1][1] + "; " + lightsOn + ": " + line + "\r");
					}
				break;
				
				case "turn off":
				for (x = coords[0][0]; x <= coords[1][0]; x += xDirection)  
					for (y = coords[0][1]; y <= coords[1][1]; y += yDirection) {
						//if (setIfEmpty(x, y, false))
						if (house[x][y]) {
							lightsOn--;
							house[x][y] = false;
							// Free up space?
							//
							//delete house[x][y];
						}
						process.stdout.write(Math.round(index / source.length * 100) + "% " + x + "/" + coords[1][0] + "," + y + "/" + coords[1][1] + "; " + lightsOn + ": " + line + "\r");
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

console.log("Answer");
console.log("=====================");
console.log(lightsOn);