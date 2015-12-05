var fs = require("fs"),
	limit,
	fn = function three (n) {
		var tmp = {},
			max = 0,
			ret = [],
			saved = 0,
			l, i;
			
		for (i = 0; i < n.length; i++) {
			l = n[i].length;
			if (!tmp[l])
				tmp[l] = [n[i]];
			else
				tmp[l].push(n[i]);
			
			if (l > max)
				max = l;
				
		}
			
		for (; max >= 0; max--) {
			if (tmp[max]) {
				for (i = 0; i < tmp[max].length && saved < limit; i++) {
					console.log(tmp[max][i]);
					saved++;
				}
				
				if (saved >= limit)
					return;
			}
		}
		
		return ret;
	};
	
var src = fs.readFileSync(process.argv[2]).toString().split('\n');

limit = src.splice(0, 1);

fn(src);