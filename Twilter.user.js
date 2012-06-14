// ==UserScript==

// @name          Twilter2s

// @namespace     http://shealr.co.cc

// @description   An example Greasemonkey script that hides every image.

// @include       https://*.twitter.com/*
// @include       http://*.twitter.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// 
// ==/UserScript==

var matches = [/justin/i, /beiber/g, /beliebers/g, /drake/i];

function checkMatch(teststr) {
	
	for (j=0; j<matches.length; j++) {
	var x = false;
		var patt = matches[j];
		x = patt.test(teststr);
		console.log(x);
		if (x == true) {
		return true;
		}
	}
return false;

}


function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
	function twilter() {
	var lis = document.getElementsByTagName('li');
	var tempcount = 0;
	for (i=0; i<lis.length; i++) {
			//alert(lis[i]);
			console.log("bla");
			if (hasClass(lis[i], 'js-trend-item') == 1) {
				if (checkMatch(lis[i].innerHTML) == true) {
				lis[i].style.display = "none";
				}
				console.log(lis[i].innerHTML);
			}
		}

}

waitForKeyElements(".js-trend-item", twilter);


