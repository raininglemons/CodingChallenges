/**
 *	@challenge	THE TOURIST
 *	@see		https://www.codeeval.com/open_challenges/219/
 *	@author		dominic england
 */

var fs  = require("fs");

var cities = [], routes, route, i,
	cityMap = [], shortestDuration,
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
			
	} else {
		for (var i = 0; i < this.endpoint.length; i++) {
			if (history.indexOf(this.endpoint[i]) == -1) {
				// Not been here before :D
				//
				this.endpoint[i].follow(history, duration + this.duration[i]);
			}
		}
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
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		// Reset info
		//
		cities = [];
		cityMap = [];
		shortestDuration = null;
		routes = line.split(" | ");
		
		// Add routes
		//
		for (i = 0; i < routes.length; i++) {
			route = routes[i].split(" ");
			City.connect(route[0], route[1], parseInt(route[2]));
		}
		
		for (i = 0; i < cities.length; i++)
			cities[i].follow();
		
		console.log(shortestDuration === null ? "false" : shortestDuration);
	}
});