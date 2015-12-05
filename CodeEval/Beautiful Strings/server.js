var str = "ABbCcc",
	score = 152,
	alpha = (function () {
		var o = {};
		for (var i = 0; i <= 26; i++)
			o[i] = 0;
		return o;
		})(),
	usedletters = [],
	known = [
		24,
		25,
		26
	],
	letter;

for (var i = 0; i < str.length; i++) {
	letter = str.charCodeAt(i);
	if (letter >= 65 && letter <= 90) {
		var l = letter - 65;
		alpha[l]++;
		if (alpha[l] === 1)
			usedletters.push(l);
	} else if (letter >= 97 && letter <= 122) {
		var l = letter - 97;
		alpha[l]++;
		if (alpha[l] === 1)
			usedletters.push(l);
	}
}
		
console.log(alpha, usedletters);

function tryme (letter, used, scoret) {
	if (known[usedletters[letter]] === undefined) {
		for (var i = 1; i <= 26; i++) {
			//console.log("reaching for " + letter);
			if (letter == 0)
				console.log(i / 26 * 100, "%");
			if (used[i] !== undefined)
				continue;
			else if (scoret + (i * alpha[usedletters[letter]]) <= score) {
					//console.log(letter + " could be " + i);
					scoret += (i * alpha[usedletters[letter]]);
					used[i] = usedletters[letter];
					if (letter == usedletters.length - 1 && scoret == score) {
						console.log("COMPLETED", used);
					} else if (letter < usedletters.length - 1) {
						for (var ii = letter + 1; ii < usedletters.length; ii++) {
							//console.log("Passing on to " + ii);
							tryme(ii, used, scoret);
						}
					}
					scoret -= (i * alpha[usedletters[letter]]);
					delete used[i];
				}
		}
	} else {
		var i = known[usedletters[letter]];
		if (scoret + (i * alpha[usedletters[letter]]) <= score) {
			//console.log(letter + " could be " + i);
			scoret += (i * alpha[usedletters[letter]]);
			used[i] = usedletters[letter];
			if (letter == usedletters.length - 1 && scoret == score) {
				console.log("COMPLETED", used);
			} else if (letter < usedletters.length - 1) {
				for (var ii = letter + 1; ii < usedletters.length; ii++) {
					//console.log("Passing on to " + ii);
					tryme(ii, used, scoret);
				}
			}
			scoret -= (i * alpha[usedletters[letter]]);
			delete used[i];
		}
	}
}

var used = [];
for (var i = 0; i <= 26; i++)
	if (known[i] !== undefined)
		used[known[i]] = i;

tryme(0, used, 0);