$(function() {
    const log = console.log
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('.burger').on('click', function(e) {
            // e.preventDefault();
            $('.burger div').toggleClass('burger-active')
            $('nav').toggleClass('nav-active')
            $('.nav-links').toggleClass('nav-links-active')
            $('.social-links').toggleClass('social-links-active')
        })
        particlesJS.load('particles-js', 'js/lib/config-lite.json', function() {});
    } else {
        particlesJS.load('particles-js', 'js/lib/config.json', function() {});
    }
    function isPartiallyVisible(el,persent=30) {
        var elementBoundary = el.getBoundingClientRect();
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
        var height = elementBoundary.height;
        return ((top + height-10 >= 0) && (height + window.innerHeight >= bottom*(persent/100+1)));
    }
    window.addEventListener('scroll', function() {
        if ( pageYOffset >= document.documentElement.clientHeight ) {
            $('nav').css({'position':'fixed'})
            $('#navmargin').css({'margin-top':'50px'})
        } else {
            $('nav').css({'position':'relative'})
            $('#navmargin').css({'margin-top':'0px'})
        }
        if (isPartiallyVisible(document.getElementsByClassName('photo')[0],20)) { // pageYoffset / document.documentElement.scrollHeight
            $('.me .photo div:nth-child(1)').css({'top': '-8px','left': '8px'})
            $('.me .photo div:nth-child(3)').css({'top': '8px','left': '-8px'})
        }
        if (isPartiallyVisible(document.getElementsByClassName('graphs')[0],40)) {
            $('.graph:nth-child(1) .range div').css({'width': '90%'})
            $('.graph:nth-child(2) .range div').css({'width': '85%'})
            $('.graph:nth-child(3) .range div').css({'width': '80%'})
            $('.graph:nth-child(4) .range div').css({'width': '60%'})
            $('.graph:nth-child(5) .range div').css({'width': '50%'})
        }
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {
            if (isPartiallyVisible(document.getElementsByClassName('header')[0],40)) {
                $('#home').css({'color': '#F500C2'})
            } else {
                $('#home').css({'color': '#f5f5f5'})
            }
            if (isPartiallyVisible(document.getElementsByClassName('about')[0],55)) {
                $('#about').css({'color': '#F500C2'})
            } else {
                $('#about').css({'color': '#f5f5f5'})
            }
            if (isPartiallyVisible(document.getElementsByClassName('portfolio-cards')[0],40)) {
                $('#portfolio').css({'color': '#F500C2'})
            } else {
                $('#portfolio').css({'color': '#f5f5f5'})
            }
            if (isPartiallyVisible(document.getElementsByClassName('contact')[0],80)) {
                $('#contact').css({'color': '#F500C2'})
            } else {
                $('#contact').css({'color': '#f5f5f5'})
            }
        }
        // if (isPartiallyVisible(document.getElementsByClassName('portfolio')[0],90)) { // pageYoffset / Ypos
        //     $('.portfolio p::before').css({'left': '-10em'})
        //     $('.portfolio p::after').css({'right': '-10em'})
        // } 
    });
    
    document.querySelector('#button').addEventListener('click', function() {
        // window.scrollTo(0,document.documentElement.clientHeight)
        document.getElementsByClassName('section')[0].scrollIntoView()
        $('.burger div').toggleClass('burger-active')
        $('nav').toggleClass('nav-active')
        $('.nav-links').toggleClass('nav-links-active')
        $('.social-links').toggleClass('social-links-active')
    });
    document.querySelector('#home').addEventListener('click', function() {
        // window.scrollTo(0,document.documentElement.clientHeight)
        document.getElementsByClassName('header')[0].scrollIntoView()
        $('.burger div').toggleClass('burger-active')
        $('nav').toggleClass('nav-active')
        $('.nav-links').toggleClass('nav-links-active')
        $('.social-links').toggleClass('social-links-active')
    });
    document.querySelector('#about').addEventListener('click', function() {
        // window.scrollTo(0,document.documentElement.clientHeight)
        document.getElementsByClassName('about')[0].scrollIntoView()
        $('.burger div').toggleClass('burger-active')
        $('nav').toggleClass('nav-active')
        $('.nav-links').toggleClass('nav-links-active')
        $('.social-links').toggleClass('social-links-active')
    });
    document.querySelector('#portfolio').addEventListener('click', function() {
        // window.scrollTo(0,document.documentElement.clientHeight)
        document.getElementsByClassName('portfolio-cards')[0].scrollIntoView()
        $('.burger div').toggleClass('burger-active')
        $('nav').toggleClass('nav-active')
        $('.nav-links').toggleClass('nav-links-active')
        $('.social-links').toggleClass('social-links-active')
    });
    document.querySelector('#contact').addEventListener('click', function() {
        // window.scrollTo(0,document.documentElement.clientHeight)
        document.getElementsByClassName('contact')[0].scrollIntoView()
        $('.burger div').toggleClass('burger-active')
        $('nav').toggleClass('nav-active')
        $('.nav-links').toggleClass('nav-links-active')
        $('.social-links').toggleClass('social-links-active')
    });

    // var cvs = document.getElementById("bubbles");
    // cvs.width = window.innerWidth;
    // cvs.height = Math.round(window.innerHeight/5);
    // let w = window.innerWidth,
    //     h = Math.round(window.innerHeight/5);
    // if (cvs.getContext) {
    //     var ctx = cvs.getContext('2d');
    //     let x = 0
    //     function draw() {
    //         ctx.fillStyle = '#121212';
    //         ctx.fillRect(0, 0, w, h);

    //         ctx.beginPath();
    //         ctx.fillStyle = "#21FFA9";
    //         ctx.arc(x, 50, 20, 0, 2 * Math.PI);
    //         ctx.closePath();
    //         ctx.fill()

    //         x = x + 1
    //         window.requestAnimationFrame(draw);
    //     }
    //     draw()
    //   }
});