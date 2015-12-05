var fs  = require("fs"),
	i, ii,
	tmp, len,
	toEnd = function one (ii, p, f) {
		var str = f.substr(ii),
			l = str.length,
			pl = p.length;
		
		//console.log(str +"|" + p + " - " + pl + " - " + l, str.substr(0, pl) == p, str.substr(6, pl) == p);
		
		for (var i = 0; i < l; i += pl + 1)
			if (str.substr(i, pl) != p)
				return false;
		
		//console.log("MATCHED");
		return true;
	};
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
	    //console.log(line.match(/([0-9][ 0-9]*)+$/));
	    //return;
		for (i = 1; i < line.length; i++) {
			if (line[i] == " ")
				continue;
			for (ii = 0; ii < i && (len = i - ii + 1) >= 2; ii++) {
				if (line[ii] == " ")
					continue;

				tmp = line.substr(ii, len);

				//if (!!line.substr(i + 2, len).match(new RegExp("^(" + tmp + ")+$"))) {
				if (toEnd(i+2, tmp, line)) {
					console.log(tmp);
					return;
				}
			}
		}
    }
});