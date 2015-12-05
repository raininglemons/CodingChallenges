var fs  = require("fs"),
	register = [{"name":"PENNY","value":0.01},{"name":"NICKEL","value":0.05},{"name":"DIME","value":0.1},{"name":"QUARTER","value":0.25},{"name":"HALF DOLLAR","value":0.5},{"name":"ONE","value":1},{"name":"TWO","value":2},{"name":"FIVE","value":5},{"name":"TEN","value":10},{"name":"TWENTY","value":20},{"name":"FIFTY","value":50},{"name":"ONE HUNDRED","value":100}],
	i, str, change;
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		line = line.split(";");
		change = (parseFloat(line[1]) - parseFloat(line[0])).toFixed(2);
		
		if (change < 0)
			return console.log("ERROR");
		else if (change == 0)
			return console.log("ZERO");
			
		str = "";
			
		for (i = 11; i >= 0; i--) {
			while (register[i].value < change) {
				str += register[i].name + ",";
				change = (change - register[i].value).toFixed(2);
			}
			if (register[i].value == change)
				return console.log(str + register[i].name);
		}
		
		return console.log("ERROR");
	}
});