var fs  = require("fs"),
	md5 = require("md5"),
	i = 0, cachedMd5;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
	    for (i = 0; (cachedMd5 = md5(line + i)).substr(0, 6) != "000000"; i++) {
		    process.stdout.write("#" + i + ": " + cachedMd5 + '\r');
	    }
	    process.stdout.write("#" + i + ": " + cachedMd5 + '\n');
    }
});