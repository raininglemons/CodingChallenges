var fs  = require("fs"),
	isChar = function two (c) {
		var i = c.charCodeAt(0);
		if (i >= 65 && i <= 90)
			return 2;
		if (i >= 97 && i <= 122)
			return 1;
		return false;
	},
	uppercase, tranformed, valid;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
	    uppercase = true;
	    transformed = "";
        for (var i = 0; i < line.length; i++) {
	        valid = isChar(line[i]);

	        if (!valid) {
		        transformed += line[i];
		        continue;
	        }
	        	
	        if (uppercase && valid == 1)
	        	transformed += String.fromCharCode(line.charCodeAt(i) - 32);
	        else if (!uppercase && valid == 2)
	        	transformed += String.fromCharCode(line.charCodeAt(i) + 32);
	        else
	        	transformed += line[i];
	        
	        uppercase = !uppercase;
        }
        console.log(transformed);
    }
});