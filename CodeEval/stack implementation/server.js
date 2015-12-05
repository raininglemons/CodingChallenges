var fs  = require("fs"),
	stack = [], cache,
	i, output, even;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
		even = true;
		output = "";
		cache = "";
		
		for (i = line.length-1; i >= 0; i--) {
			if (line[i] === " " || i === 0) {
				if (even)
					output = output + (i == 0 ? line[0] : "") + cache + (i == 0 ? "" : " ");
				cache = "";
				even = !even;
			} else
				cache = line[i] + cache;
		}
		console.log(output);
    }
});