(function($) {


    /* Gallery */

    var $galleryViewport = $(".gallery__viewport");
    var distance = 254; /* one tile  */
    var time = 400;

    if( $(window).outerWidth() > 960 ) {
        distance = 508;
        time = 600;
    }

    $(".gallery__swipe").on('click', function() {
        $galleryViewport.css('scroll-snap-type', 'none'); /* conflict in Chrome */
        $($galleryViewport).animate({ scrollLeft: $galleryViewport.scrollLeft() + distance }, time);
    });


})(jQuery);
