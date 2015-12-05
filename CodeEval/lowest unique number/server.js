var fs  = require("fs"),
	stack, i, max, player;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		line = line.split(" ");
		stack = [];
		player = [];
		max = 0;
		for (i = 0; i < line.length; i++) {
			stack[line[i]] = (stack[line[i]] || 0)+1;
			player[line[i]] = i+1;
			if (line[i] > max)
				max = line[i];
		}
		for (i = 0; i <= max; i++)
			if (stack[i] === 1)
				return console.log(player[i]);
				
		console.log("0");
	}
});