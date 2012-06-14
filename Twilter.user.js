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

var matches = ["justin", "beiber", "beliebers", "drake", "flag"];
var arr = $.makeArray(matches);
arr = JSON.stringify(arr);

GM_setValue("bla", arr);

//GM_deleteValue("bla");
function checkMatch(teststr) {
	
	for (j=0; j<matches.length; j++) {
	var x = false;
		var patt1 = matches[j];
		patt = RegExp(patt1, "i");
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


