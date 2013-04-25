$('#dwload').affix({
    offset: $('#dwload').position()
});


var newsText = {
		"Aamir Khan on Time's 100 Most Influential People list" : "http://time100.time.com/2013/04/18/time-100/slide/aamir-khan/",
		"India asks China to revert to status quo in Ladakh" : "http://www.thehindu.com/news/national/india-asks-china-to-revert-to-status-quo-in-ladakh/article4647150.ece",
		"Chris Gayle smashes fastest IPL hundred" : "http://www.cricketcountry.com/cricket-articles/Chris-Gayle-smashes-fastest-IPL-hundred/25567",
		"IPL : CSK pulls of a thrilling win over Royals" : "http://www.indianexpress.com/picture-gallery/ipl-6-chennai-super-kings-pull-off-thrilling-win-over-rajasthan-royals/2561-1.html"
}

$('#ex1').newsFeed({
		newsData: newsText,
		type:1
});

