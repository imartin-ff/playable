$(document).ready(function(){
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    
    
    $('body').scroll(function(event){
        didScroll = true;
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    });

    function hasScrolled() {
        if($('body').scrollTop() > 100){
            var st = $('body').scrollTop();
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta) return;
            
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('header').removeClass('header--open').addClass('header--hide');
            } else {
                // Scroll Up
                if(st + $('body').height() < $(document).height()) {
                    $('header').removeClass('header--hide').addClass('header--open');
                }
            }
            
            lastScrollTop = st;
        }else{
            $('header').removeClass('header--open').removeClass('header--hide');
        }
       
    }
})
