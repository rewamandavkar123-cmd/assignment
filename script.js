// Carousel
$(document).ready(function () {
    $('.carousel-item:first-child').addClass('active');
});

$(document).ready(function () {
    $('#sessionCarousel').carousel({
        interval: 0
    });
});

$(document).ready(function () {
    $('.carousel .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
});