function fib (n) {
	if (n < 1)
		return 0;
	if (n === 1 || n === 2)
		return 1;
	return fib(n-1) + fib(n-2);
}

var fs  = require("fs");
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "")
		console.log(fib(parseInt(line)));
});