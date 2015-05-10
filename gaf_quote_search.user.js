// ==UserScript==
// @name         NeoGAF Quote Search
// @namespace    http://dmartin.io/
// @version      1.0
// @description  search for yr posts
// @author       dustin martin
// @match        http://*.neogaf.com/*
// @match        https://*.neogaf.com/*
// @grant        none
// ==/UserScript==

var username = document.querySelector("#usercptools > strong").innerHTML;

if (username !== null) {
	var button = document.createElement("input");
	button.type = "button";
	button.onclick = function(){
		var searchField = document.querySelector("#navbar_search_menu > table > tbody > tr:nth-child(2) > td > form > div:nth-child(7) > input.bginput");
		searchField.value = "[quote=" + username;
		document.querySelector("#rb_nb_sp1").checked = true;
		var form = document.querySelector("#navbar_search_menu > table > tbody > tr:nth-child(2) > td > form");
		form.submit();
	};
	button.value = "Search My Quotes";

	document.querySelector("#navbar_search_menu > table > tbody > tr:nth-child(2) > td > form").appendChild(button);
}
