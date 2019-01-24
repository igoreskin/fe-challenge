/*
 We have set a jQuery wrapper for you to write any JS code -- however you are free to use any framework or library you want. Hint: to accomplish the responsive requriement, a bit of JS coding might be needed.
*/

(function ($) {

    var textBlockRatio = 0.37645448;
    const imageRatio = 1.66666666;
    $(window).resize(function () {
        let height = $('.image-block').height();
        let width1 = $(window).width();
        $('.image-block').width(height / imageRatio);
    })

})(jQuery);


