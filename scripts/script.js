(function($) {


    /* Gallery */

    var $gallery = $(".gallery");
    var $galleryViewport = $(".gallery__viewport");
    var rightScrollEdge = $('.gallery__ribbon').outerWidth() - $galleryViewport.outerWidth();
    var distance = 254; /* one tile  */
    var scrollTo = distance;
    var time = 400;

    if( $(window).outerWidth() > 960 ) {
        distance = 508;
        time = 600;
    }

    function rotateArrow() {

        if( $galleryViewport.scrollLeft() === 0 ) {
            $gallery.addClass('gallery--forwards').removeClass('gallery--backwards')
        }
        if( $galleryViewport.scrollLeft() === rightScrollEdge ) {
            $gallery.addClass('gallery--backwards').removeClass('gallery--forwards')
        }
    }

    $(".gallery__swipe").on('click', function() {

        if( $gallery.hasClass('gallery--forwards') ) {
            scrollTo = distance;
        }
        if( $gallery.hasClass('gallery--backwards') ) {
            scrollTo = -1 * distance;
        }

        $galleryViewport.css('scroll-snap-type', 'none'); /* conflict in Chrome */
        $($galleryViewport).animate({ scrollLeft: $galleryViewport.scrollLeft() + scrollTo }, time, rotateArrow);

    });

    $galleryViewport.on('scroll', rotateArrow);

})(jQuery);
