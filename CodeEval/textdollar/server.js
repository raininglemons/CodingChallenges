var fs  = require("fs"),
	singles = [
		"",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen"
	],
	tens = [
		"",
		"Ten",
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety"
	],
	factors = [
		"",
		"Thousand",
		"Million",
		"Billion"	
	],
	hundreds = function (n) {
		var ret = "";
		if (n >= 100)
			ret += singles[Math.floor(n / 100)] + "Hundred";
		var ten = Math.floor(n % 100 / 10);
		if (ten >= 2)
			ret += tens[ten] + singles[n % 10];
		else
			ret += singles[n % 100];
		return ret;
	},
	text,
	part;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
		text = "";
		
		for (var f = 3; f >= 0; f--) {
			part = Math.floor(line / Math.pow(1000, f)) % 1000;
			if (part == 0)
				continue;
			text += hundreds(part) + factors[f];
		}
		
		console.log(text + "Dollars");
    }
});