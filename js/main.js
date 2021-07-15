$(function() {
    const log = console.log
    particlesJS.load('particles-js', 'js/lib/config.json', function() {});
    window.addEventListener('scroll', function() {
        let Ypos = document.documentElement.scrollHeight - document.documentElement.clientHeight
        if ( pageYOffset >= document.documentElement.clientHeight ) {
            $('nav').css({'position':'fixed'})
            $('#navmargin').css({'margin-top':'50px'})
        } else {
            $('nav').css({'position':'relative'})
            $('#navmargin').css({'margin-top':'0px'})
        }
        if ( pageYOffset >= Ypos*0.40 ) { // pageYoffset / document.documentElement.scrollHeight
            $('.me .photo div:nth-child(1)').css({'top': '-8px','left': '8px'})
            $('.me .photo div:nth-child(3)').css({'top': '8px','left': '-8px'})
        }
        if ( pageYOffset >= Ypos*0.45 ) {
            $('.graph:nth-child(1) .range div').css({'width': '80%'})
            $('.graph:nth-child(2) .range div').css({'width': '75%'})
            $('.graph:nth-child(3) .range div').css({'width': '75%'})
            $('.graph:nth-child(4) .range div').css({'width': '50%'})
            $('.graph:nth-child(5) .range div').css({'width': '40%'})
        }
        if ( pageYOffset >= Ypos*0.7314 ) { // pageYoffset / Ypos
            $('.portfolio').css({'border-radius':'0'})
        } else {
            $('.portfolio').css({'border-radius':'0 0 200% 200%'})
        }
        console.log(pageYOffset / Ypos)
    });
    document.querySelector('#button').addEventListener('click', function() {
        // window.scrollTo(0,document.documentElement.clientHeight)
        document.getElementsByClassName('section')[0].scrollIntoView()
    });
});