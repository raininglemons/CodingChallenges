var fs = require("fs"),
	n = fs.readFileSync(process.argv[2]).toString().split('\n'),
	limit = n.splice(0, 1);

n.sort(function (a, b) {
	return b.length - a.length;
});

for (var i = 0; i < limit; i++)
	console.log(n[i]);