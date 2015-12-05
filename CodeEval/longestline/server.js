var fs = require("fs"),
	n = fs.readFileSync(process.argv[2]).toString().split('\n'),
	limit = n.splice(0, 1),
	index = [],
	ref = [],
	found = 0,
	l, i, ii;
			
for (i = 0; i < n.length; i++) {
	l = n[i].length;
	index.push(l);
	if (ref[l])
		ref[l].push(i);
	else
		ref[l] = [i];
}

index.sort(function (a, b) { return b - a; });

for (i = 0; i < limit; i++)
	for (ii = 0; ii < ref[index[i]].length; ii++ && i++)
		console.log(n[ref[index[i]][ii]]);