//Plugin Definition
(function ($) {

    $.fn.addText = function (options, callback) {
        var defaults = {
            newsData: {"Error":"javascript:alert('Error! Please fill in newsData.');"},
            type: 1 /*1-fadeinfadeout*/
        };
        var optionsWithDefaults = $.extend(defaults, options);
        return this.each(function () {
            var obj = $(this);
            switch (optionsWithDefaults.type) {
                default:
                    //fade in fade out
                    //default transition here
                    break;
            }
            if (typeof callback == 'function') { //func check
                callback.call(this); // brings the scope to the callback
            }
        });
    };
})(jQuery);