$(function() {
    particlesJS.load('particles-js', 'js/lib/config.json', function() {});
    window.addEventListener('scroll', function() {
        if ( pageYOffset >= document.documentElement.clientHeight ) {
            $('nav').css({'position':'fixed'})
        } else {
            $('nav').css({'position':'relative'})
        }
    });
    // document.
    console.log(pageYOffset)
    document.querySelector('#button').addEventListener('click', function() {
        // window.scrollTo(0,document.documentElement.clientHeight)
        document.getElementsByClassName('section')[0].scrollIntoView()
    });
});