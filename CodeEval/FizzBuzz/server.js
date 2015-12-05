var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var conf = line.split(" "),
        	X = conf[0],
        	Y = conf[1],
        	N = conf[2],
        	answer = "";
        
        for (var i = 1; i <= N; i++) {
	        if (!(i % X) && !(i % Y))
	        	answer += "FB ";
	        else if (!(i % X))
	        	answer += "F ";
	        else if (!(i % Y))
	        	answer += "B ";
	        else
	        	answer += i + " ";
        }
        console.log(answer.length > 0 ? answer.substr(0, answer.length - 1) : answer);
    }
});