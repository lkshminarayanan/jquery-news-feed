//Plugin Definition
(function ($) {

    $.fn.newsFeed = function (options, callback) {
	
		var divObj = $(this);
		var newsArr = new Array();
		var newsCount;
		var iNews;//iterator 'i'
		var optionsWithDefaults;
		
		var getDisplayHTML = function(){
			var text = "<a href='"+newsArr[iNews].link+"'"
					+((optionsWithDefaults.timeInterval)?"target='_blank'":"")+">"+newsArr[iNews].news+"</a>";
			iNews=(iNews+1)%newsCount;
			return text;
		}
		
		var fadeInfadeOut = function(){
			//console.log(iNews);
			divObj.fadeOut(300,function(){
				divObj.html(getDisplayHTML());
				divObj.fadeIn(300);
			});
		};
	
        var defaults = {
            newsData: {"Error":'javascript:alert("Error! Please fill in newsData.");'},//default data
			timeInterval: 5000, /*in seconds*/
            type: 1, /*1-fadeinfadeout*/
			targetBlank: true /*Open in new Window or not*/
        };
        optionsWithDefaults = $.extend(defaults, options);
        
        optionsWithDefaults.timeInterval = (optionsWithDefaults.timeInterval<0)?5000:optionsWithDefaults.timeInterval;
		
		$.each(optionsWithDefaults.newsData, function (newsText, newsLink) {
			newsArr.push({
				'news':newsText,
				'link':newsLink
			});
		});
        return this.each(function () {
            
			newsCount = newsArr.length;
			iNews =0;
			//the first time
			divObj.hide();
            switch (optionsWithDefaults.type) {
                default:
                    //fade in fade out
                    //default transition here
					divObj.html(getDisplayHTML());
					divObj.fadeIn(300);
					setInterval(fadeInfadeOut,optionsWithDefaults.timeInterval);
                    break;
            }
            if (typeof callback == 'function') { //func check
                callback.call(this); // brings the scope to the callback
            }
        });
    };
})(jQuery);
