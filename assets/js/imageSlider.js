$(function () {

    $('.slider__next').click(function(event) {
        var currentImg = $('.activeSlide');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('activeSlide').css('z-index', -10);
            nextImg.addClass('activeSlide').css('z-index', 10);
        }
        
        else {
            currentImg.removeClass('activeSlide').css('z-index', -10);
            $('#firstSlide').addClass('activeSlide').css('z-index', 10);
        }
    });


    $('.slider__prev').on('click', function () {
        var currentImg = $('.activeSlide');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('activeSlide').css('z-index', -10);
            prevImg.addClass('activeSlide').css('z-index', 10);
        } 
        
        else {
            currentImg.removeClass('activeSlide').css('z-index', -10);
            $('#lastSlide').addClass('activeSlide').css('z-index', 10);
        }
    });
});