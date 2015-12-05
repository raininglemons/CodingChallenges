/**
 *	@challenge	TWENTY FORTY EIGHT
 *	@see		https://www.codeeval.com/open_challenges/194/
 *	@author		dominic england
 */

var fs  = require("fs"),
	direction, directionReversed, gridSize,
	gridSource, i, ii, result, notJustOnes;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		// Compile line
		line = line.split("; ");
		direction = line[0];
		gridSize = line[1];
		gridSource = line[2].split("|");
		
		for (i = 0; i < gridSize; i++)
			gridSource[i] = gridSource[i].split(" ");
			
		directionReversed = false;
		grid = [];
		
		// Parse grid and invert as necessary
		//
		switch (direction) {
			case "UP":
			directionReversed = true;
			case "DOWN":
			// Compile in vertical arrays
			for (i = 0; i < gridSize; i++) {
				// h
				grid[i] = [];
				for (ii = 0; ii < gridSize; ii++) {
					if (gridSource[(directionReversed ? gridSize - ii - 1 : ii )][i] != 0)
						grid[i].push(gridSource[(directionReversed ? gridSize - ii - 1 : ii )][i]);
				}
			}
			break;
			
			case "LEFT":
			directionReversed = true;
			case "RIGHT":
			// Compile in horizontal arrays
			for (i = 0; i < gridSize; i++) {
				// v
				grid[i] = [];
				for (ii = 0; ii < gridSize; ii++) {
					if (gridSource[i][(directionReversed ? gridSize - ii - 1 : ii )] != 0)
					grid[i].push(gridSource[i][(directionReversed ? gridSize - ii - 1 : ii )]);
				}
			}
			break;
			
			default:
			// Errored somewhere :(
			return;
		}
		
		console.log(grid);
				
		// All directions are now shifted into grid
		// array as if the direction is RIGHT
		//
		for (ii = 0; ii < gridSize; ii++) {
			// Shift everything in the places of the 0's
			// first
			//
			/*notJustOnes = grid[ii][0] != 0;
			for (i = 1; i < gridSize; i++) {
				if (notJustOnes && grid[ii][i] == 0) {
					grid[ii].splice(i, 1);
					grid[ii].splice(0, 0, 0);
				}
				else if (grid[ii][i] !== 0)
					notJustOnes = true;
			}*/
			
			// Start from the right and work to the left
			// combining where possible...
			//
			for (i = grid[ii].length - 1; i > 0; i--) {
				if (grid[ii][i] == grid[ii][i-1]) {
					grid[ii][i] *= 2;
					grid[ii].splice(i-1, 1);
					grid[ii].splice(0, 0, 0);
				}
			}
		}
				
		// Recompile grid back into flat string
		//
		result = "";
		switch (direction) {
			case "UP":
			case "DOWN":
			for (i = 0; i < gridSize; i++) {
				for (ii = 0; ii < gridSize; ii++)
					result += (ii ? " " : "") + grid[ii][(directionReversed ? gridSize - i - 1 : i )];
				
				if (i != gridSize - 1)
					result += "|";
			}
			break;
			
			case "LEFT":
			case "RIGHT":
			for (i = 0; i < gridSize; i++) {
				// v
				for (ii = grid[i].length; ii < gridSize; ii++)
					result += (ii != grid[i].length ? " 0" : "0");
					
				for (ii = 0; ii < grid[i].length; ii++) {
					result += (ii || grid[i].length != gridSize ? " " : "") + grid[i][(directionReversed ? gridSize - ii - 1 : ii )];
				}
				
				if (i != gridSize - 1)
					result += "|";
			}
			break;
		}
		console.log(result);
	}
});