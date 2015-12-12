/**
 *	@challenge	Day 11 - Corporate Policy
 *	@see		http://adventofcode.com/day/11
 *	@author		dominic england
 *	@description Uses custom string to int fn, removing i, o and l from alphabet
 *				to speed up brute forcing through combos :D
 */
"use strict";

let fs  = require("fs");

class Password {
	constructor (n) {
		this._n = n;
		this._a = Password.numberToArray(this._n);
	}
	
	get n () {
		return this._n;
	}
	
	set n (n) {
		this._n = n;
		this._a = Password.numberToArray(this._n);
	}
	
	get valid () {
		// Passwords must include one increasing straight
		if (!this._a.reduce((_, v, i, a) => a[i-1] === v-1 && a[i-2] === v-2 ? _+1 : _, 0))
			return false;
		
		let pairs = this.toString().match(/([a-z])\1/g);
		if (pairs === null || pairs.length < 2)
			return false;
		
		return true;
	}
	
	toString () {
		return this._a.map(_ => {
				if (_ >= 9)
					_++;
				if (_ >= 12)
					_++;
				if (_ >= 15)
					_++;
				return _;
			})
			.map(_ => String.fromCharCode(_ + 96)).join("");
	}
	
	static numberToString(n) {
		let str = "";
		while (true) {
			let cc = n % 26;
			str += String.fromCharCode(cc + 96);
			if (n < 26)
				return str;
				
			n = (n - cc) / 26;
		}
	}

	static stringToNumber (str) {
		return str.split("")
			.map(_ => _.charCodeAt(0)-96)
			.map(_ => {
				if (_ >= 15)
					_--;
				if (_ >= 12)
					_--;
				if (_ >= 9)
					_--;
				return _;
			})
			.reduce((i, val) => (i * 23) + val, 0);
	}
	
	static numberToArray (n) {
		let a = [];
		while (true) {
			let cc = n % 23 || 23;
			a.push(cc);
			if (n < 24)
				return a.reverse();
				
			n = (n - cc) / 23;
		}
	}
}
	
fs.readFileSync(process.argv[2]).toString().split('\n')
	.filter(_ => _ !== "")
	.forEach(function (line) {
		let password = new Password(Password.stringToNumber(line));
		console.log(`${password.toString()} -> ${password.n} : ${password.valid}`);
		
		// Take 1
		while (!password.valid)
			password.n++;
		console.log(`${password.toString()} -> ${password.n} : ${password.valid}`);
		
		// Take 2
		password.n++;
		while (!password.valid)
			password.n++;
		console.log(`${password.toString()} -> ${password.n} : ${password.valid}`);
	});