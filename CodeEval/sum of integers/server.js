var fs = require("fs"),
	min = null, len,
	i, ii, rt = 0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		line = line.split(",");
		len = line.length;
		min = null;
		for (i = 0; i < len; i++)
			line[i] = parseInt(line[i]);
		for (i = 0; i < len; i++) {
			rt = line[i];
			if (min === null || rt > min)
				min = rt;
				
			for (ii = i+1; ii < len; ii++) {
				rt += line[ii];
				if (rt > min)
					min = rt;
			}
		}
		console.log(min);
	}
});