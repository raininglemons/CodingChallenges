function Benchmark (fn, count) {
	count = count || 1000000;
	var now = function () { return +new Date(); },
		curried = typeof fn() == "function";
		
	return function runBenchmark () {
		var exec = fn;
		if (curried)
			exec = fn();
		
		var start = now();
		for (var i = 0; i < count; i++)
			exec();
		
		var end = now(),
			total = end - start;
		
		return {
			total: total,
			average: total / count,
			iterations: count
		}
	}
}

var str = "asdasfsdgsgsdfg";

/*function one (ii, p, f) {
	n = 10;
	var s = "",
		l = f.length - ii - 1,
		m = l / p.length;
		
	if (parseInt(m) == m)
		return false;
	
	for (var i = 0; i < m; i++)
		s += p;
	
	return s == f.substr(ii);
}*/

function one (ii, p, f) {
	var str = f.substr(ii),
		l = f.length,
		pl = p.length;
	
	for (var i = 0; i < l; i += pl)
		if (f.substr(i, pl) != p)
			return false;
	
	return true;
}

function two (ii, p, f) {
	return !!f.substr(ii).match(new RegExp("^(" + p + ")+$"));
}


//console.log(three(list));
console.log(one(4, "12 3", "12 312 312 312 312 312 312 312 4"));
console.log(two(4, "12 3", "12 312 312 312 312 312 312 312 4"));

console.log("One", new Benchmark(function () { one(4, "12 3", "12 312 312 312 312 312 312 312 4") })());
console.log("Two", new Benchmark(function () { two(4, "12 3", "12 312 312 312 312 312 312 312 4") })());