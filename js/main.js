$(function() {
    particlesJS.load('particles-js', 'js/lib/config.json', function() { 
        console.log('patritcles!!!');
    });
    top = $('.logo').scrollTop();
    window.addEventListener('scroll', function() {
        console.log(top)
        if ( pageYOffset >= 20 ) {
            $('nav').css({'position':'fixed', 'padding':'0 0', 'background-color':'#00000099'})
        } else {
            $('nav').css({'position':'absolute', 'padding':'20px 0', 'background-color':'#00000000'})
        }
        if ( pageYOffset >= 150 ) {
            $('.header-main').css('opacity', '0')
        } else {
            $('.header-main').css('opacity', '1')
        }
    });
});