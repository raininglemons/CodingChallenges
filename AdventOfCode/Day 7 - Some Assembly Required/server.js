/**
 *	@challenge	Day 7 - Some Assembly Required
 *	@see		http://adventofcode.com/day/7
 *	@author		dominic england
 */
 
var fs  = require("fs"),
    regex = /^(([0-9a-z]+)|(([a-z0-9]+)? ?(OR|AND|LSHIFT|RSHIFT|NOT) ([a-z0-9]+))) -> ([a-z]+)$/,
    logicGate = function (query) {
        var info = query.match(regex);
        if (!info) return console.log("ERR: " + query);
        if (info[2] && this.isInt(info[2]))
            this.source = parseInt(info[2]);
        else if (info[2])
            this.source = ["PASS", info[2]];
        else
            this.source = info[4] ? [info[5], info[4], info[6]] : [info[5], info[6]];
        
        this.name = info[7];
        this.gates[info[7]] = this;
    };

    logicGate.prototype.gates = {};
    
    logicGate.prototype.isInt = (val) => !!val.match(/^[0-9]+/);
    
    logicGate.prototype.getValueAt = (val) => logicGate.prototype.isInt(val) ? parseInt(val) : logicGate.prototype.gates[val].getValue();
    
    logicGate.prototype.cachedVal = null;
    
    logicGate.prototype.getValue = function () {
	    // Speed things up by caching values
	    //
	    if (this.cachedVal !== null)
	    	return this.cachedVal;
	    	
        if (this.source instanceof Array) {
            switch (this.source[0]) {
                case "AND":
                    return (this.cachedVal = this.getValueAt(this.source[1]) & this.getValueAt(this.source[2]));
            
                case "OR":
                    return (this.cachedVal = this.getValueAt(this.source[1]) | this.getValueAt(this.source[2]));
                
                case "RSHIFT":
                    return (this.cachedVal = this.getValueAt(this.source[1]) >> this.getValueAt(this.source[2]));
                
                case "LSHIFT":
                    return (this.cachedVal = this.getValueAt(this.source[1]) << this.getValueAt(this.source[2]));
                
                case "NOT":
                    return (this.cachedVal = ~ (this.getValueAt(this.source[1]) >>> 0));
                    
                case "PASS":
                    return (this.cachedVal = this.getValueAt(this.source[1]));
            }
        } else {
            return this.source;
        }
    }

fs.readFileSync(process.argv[2]).toString().split('\n')
    .map((line) => new logicGate(line));
    
var a = logicGate.prototype.gates["a"].getValue();
console.log(a);

// Reset cached values
//
Object.keys(logicGate.prototype.gates)
	.forEach(gate => logicGate.prototype.gates[gate].cachedVal = null);

// Fake b to have value a has
//
logicGate.prototype.gates["b"].cachedVal = a;

// Take 2
//
console.log(logicGate.prototype.gates["a"].getValue());