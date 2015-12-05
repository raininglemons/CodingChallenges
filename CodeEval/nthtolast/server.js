var fs  = require("fs"),
	parts, l, i;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
	    parts = line.split(" ");
	    l = parts.length - 1;
	    i = l - parts[l];
	    if (i < 0)
	    	return;
	    console.log(parts[i]);
    }
});