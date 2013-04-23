//Plugin Definition
(function ($) {
    $.fn.newsFeed = function (options, callback) {
        var defaults = {
            newsData: {"Error":'javascript:alert("Error! Please fill in newsData.");'},
			timeInterval: 5000, /*in seconds*/
            type: 1 /*1-fadeinfadeout*/
        };
        var optionsWithDefaults = $.extend(defaults, options);
		var newsArr = new Array();
		$.each(optionsWithDefaults.newsData, function (newsText, newsLink) {
			newsArr.push({
				'news':newsText,
				'link':newsLink
			});
		});
        return this.each(function () {
            var obj = $(this);
			var newsCount = newsArr.length;
			var i =0;
            switch (optionsWithDefaults.type) {
                default:
                    //fade in fade out
                    //default transition here
					console.log(newsArr);
					setInterval(function(){
						$.each(newsArr[i], function (newsText, newsLink) {
							//alert(newsArr[i].news+" "+newsArr[i].link);
							obj.html("<a href='"+newsArr[i].link+"'>"+newsArr[i].news+"</a>");
						});
						i=(i+1)%newsCount;
					},optionsWithDefaults.timeInterval);
                    break;
            }
            if (typeof callback == 'function') { //func check
                callback.call(this); // brings the scope to the callback
            }
        });
    };
})(jQuery);