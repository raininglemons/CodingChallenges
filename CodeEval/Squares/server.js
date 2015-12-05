var fs  = require("fs"),
	squareSolutions = function (n) {
		if (n <= 1)
			return 1;
		
		var top = Math.floor(Math.sqrt(n)),
			matches = 0,
			half = n / 2;
		
		for (; top >= half; top--) {
			var remainder = n - Math.pow(top, 2),
				root = Math.sqrt(remainder);
			
			if (root < top && root == Math.floor(root))
				matches++;
		}
		return matches;
	};
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line, index) {
    if (line != "" && index > 0) {
	    console.log(squareSolutions(line));
    }
});