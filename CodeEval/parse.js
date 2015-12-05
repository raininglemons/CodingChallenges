(function (element) {
	"use strict";
	var elementStore = {},
		regexStore = {};
	
	function replaceWithPrefix (prefix, text) {
		if (regexStore[prefix])
			return text.replace(regexStore[prefix], "");
		return text.replace((regexStore[prefix] = new RegExp("(\-webkit\-|)" + prefix + "([a-zA-Z\-]+):([^;]+);", "g")), "");
	}
	
	function parse (el, returnEl) {
		// Append styles...
		//
		var newEl = el.cloneNode(false);
		var cssText = window.getComputedStyle(el).cssText.replace(/([a-zA-Z\-]+): (0px|0s|auto|none);/g, "");
		if (cssText.match(/animation\-name:\s*none;/))
			// Strip all animation references...
			//
			cssText = replaceWithPrefix("animation", cssText);
		
		newEl.setAttribute("style", cssText);
		
		for (var i = 0; i < el.childNodes.length; i++)
			if (el.childNodes[i].nodeType == 1)
				newEl.appendChild(parse(el.childNodes[i], true));
			else
				newEl.appendChild(el.childNodes[i].cloneNode(false));
				
		return returnEl ? newEl : newEl.outerHTML;
	};
	
	if (element)
		console.log(parse(element));
	
	window.parse = parse;
})();