// JavaScript

function openSearch(keywords) {
	// Open a window to search for keywords
	urlSearch = "https://www.google.com/search?hl=en&ref=MathewTyler.co&q=";
	keywordsEncoded = keywords.replace(/ /g,"+").replace(/["]/g,"%22").replace(/[']/g,"%27");
	var win = window.open(urlSearch + keywordsEncoded, "search");
	if (win) win.focus();
	return false;
}
