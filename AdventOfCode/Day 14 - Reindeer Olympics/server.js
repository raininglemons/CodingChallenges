"use strict";

class Reindeer {
	constructor (name, maxSpeed, maxDuration, restTime) {
		this.name = name;
		this.maxSpeed = maxSpeed;
		this.maxDuration = maxDuration;
		this.restTime = restTime;
	}
	
	distanceAt (t) {
		let cycle = (this.restTime + this.maxDuration),
			completeCycles = (t / cycle) >> 0,
			partialCycle = t % cycle;
		return this.maxSpeed * this.maxDuration * completeCycles + (partialCycle >= this.maxDuration ? this.maxSpeed * this.maxDuration : this.maxSpeed * partialCycle);
	}
}

let fs  = require("fs"),
	finish = 2503;
	
let reindeer = fs.readFileSync(process.argv[2])
	.toString()
	.split('\n')
	.filter(_ => _ != "")
	.map(_ => _.match(/^([a-zA-Z]+) can fly ([0-9]+) km\/s for ([0-9]+) seconds, but then must rest for ([0-9]+) seconds/))
	.map(_ => ({name: _[1], distance: 0, reindeer: new Reindeer(_[1], parseInt(_[2]), parseInt(_[3]), parseInt(_[4]))}));
	
// Part 1
//
console.log(`Part 1\n======`);
reindeer.map(_ => {
		_.distance = _.reindeer.distanceAt(finish);
		return _;
	})
	.sort((a, b) => b.distance - a.distance)
	.forEach(_ => console.log(`${_.name}: ${_.distance}km`));
	
// Part 2
//
console.log(`\nPart 2\n======`);
let points = {};

reindeer.forEach(_ => points[_.name] = 0);

for (let i = 1; i <= finish; i++) {
	let progress = reindeer.map(_ => {
			_.distance = _.reindeer.distanceAt(i);
			return _;
		})
		.sort((a, b) => b.distance - a.distance)
		.filter((_, i, a) => _.distance === a[0].distance)
		.forEach(_ => points[_.name]++);
}

Object.keys(points).map(_ => ({name: _, points: points[_]}))
	.sort((a, b) => b.points - a.points)
	.forEach(_ => console.log(`${_.name}: ${_.points}`));