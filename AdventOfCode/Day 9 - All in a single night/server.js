/**
 *	@challenge	Day 9: All in a Single Night
 *	@see		http://adventofcode.com/day/9
 *	@author		dominic england
 */

var fs  = require("fs");

var cities = [], routes, route, i,
	cityMap = [], shortestDuration = null,
	longestDuration = null,
	City = function (toCity, duration) {
		this.endpoint = [];
		this.duration = [];
	};

City.prototype.addRoad = function (city, duration) {
	this.endpoint.push(city);
	this.duration.push(duration);	
};

City.prototype.follow = function (history, duration) {
	(history = history || []).push(this);
	duration = duration || 0;
	
	if (history.length == cities.length) {
		// Hit all cities :D
		//
		if (shortestDuration === null || duration < shortestDuration)
			shortestDuration = duration;
		if (longestDuration === null || duration > longestDuration)
			longestDuration = duration;
	} else {
		// Keep going...
		//
		this.endpoint.forEach((endpoint, i) => 
				history.indexOf(endpoint) == -1 ? 
					endpoint.follow(history, duration + this.duration[i])
					: null
			);
	}
	history.splice(history.length-1, 1);
}

City.connect = function (a, b, duration) {
	var aI, bI;
	if ((aI = cityMap.indexOf(a)) == -1) {
		aI = (cityMap.push(a) - 1);
		cities[aI] = new City();
	}
	
	if ((bI = cityMap.indexOf(b)) == -1) {
		bI = (cityMap.push(b) - 1);
		cities[bI] = new City();
	}
	
	cities[aI].addRoad(cities[bI], duration);
	cities[bI].addRoad(cities[aI], duration);
}
	
fs.readFileSync(process.argv[2]).toString().split('\n')
	.filter(line => line !== "")
	.map(line => line.match(/^([a-zA-Z]+) to ([a-zA-Z]+) = ([0-9]+)/))
	.forEach(route => City.connect(route[1], route[2], parseInt(route[3])));


for (i = 0; i < cities.length; i++)
	cities[i].follow();
	
console.log(shortestDuration === null ? "false" : shortestDuration);

console.log(longestDuration === null ? "false" : longestDuration);