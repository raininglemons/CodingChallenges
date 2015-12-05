var fs  = require("fs"),
	data = fs.readFileSync(process.argv[2]).toString().split('\n'),
	limit = parseInt(data[0]),
	min = 10000,
	offset = 1,
	i, ii, wdistance, data;

while (limit > 0) {
	var points = [];
	for (i = offset; i < limit + offset; i++) {
		points[i] = data[i].split(" ");
	}
	
	for (i = offset; i < limit + offset; i++) {
		for (ii = i+1; ii < limit + offset; ii++)
			if (ii === i) continue;
			else {
				wdistance = Math.sqrt(Math.pow(points[i][0] - points[ii][0], 2) + Math.pow(points[i][1] - points[ii][1], 2));
				if (wdistance < min)
					min = wdistance;
			}
	}
	
	if (min === 10000)
		console.log("INFINITY");
	else
		console.log(min.toFixed(4));
		
	min = 10000;
	offset = limit + offset + 1;
	limit = parseInt(data[offset - 1]);
}