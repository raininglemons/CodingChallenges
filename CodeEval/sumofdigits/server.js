var fs  = require("fs"),
	i, sum;
	
fs.readFileSync(process.argv[2]).toString().split("\n").forEach(function (line) {
	sum = 0;
	for (i = 0; i < line.length; i++)
		sum += parseInt(line[i]);
	console.log(sum);
});