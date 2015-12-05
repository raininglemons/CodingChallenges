function score (str) {
	var alpha = (function () {
			var o = [];
			for (var i = 0; i <= 26; i++)
				o[i] = 0;
			return o;
			})();
	
	for (var i = 0; i < str.length; i++) {
		letter = str.charCodeAt(i);
		if (letter >= 65 && letter <= 90) {
			alpha[letter - 65]++;
		} else if (letter >= 97 && letter <= 122) {
			alpha[letter - 97]++;
		}
	}
	
	var sorted = [];
	for (var i = 0; i <= 26; i++)
		sorted[i] = {key: i, i: alpha[i]};
		
	sorted.sort(function (a, b) {
		return b.i - a.i;
	});
	
	var tmpScore = 0;
	for (var i = 0; i <= 26; i++) {
		tmpScore += sorted[i]["i"] * (26 - i);
	}
	return tmpScore;
}
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	console.log(score(line));
});