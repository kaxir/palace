$(document).ready(function() {

    // resize first
    resizeAll();

    // set scroll
    $.localScroll();

    // set stellar
    $.stellar();
    
    // animate
    var delay = 1800;

    $(".logo-up").addClass("animated fadeOutUpBig");
    $(".logo-down").addClass("animated fadeOutDownBig");

    setTimeout(function() {
        $(".logo-intro").addClass("hide");
    }, delay + 1000);

});

function resizeAll() {

    var w = $(window).width(),
        h = $(window).height();

    setSlidesSize(h);
    setLogoSize(h);
    setLeftNav(h);
}

function setLogoSize(h) {
    $(".logo-intro").height( h );
}

function setSlidesSize(h) {
    $('.slides').height( h ); 
}

function setLeftNav(h) {

    var $leftNavList = $(".left-navigation li");

    // set default nav-index
    $(window).data("nav-index", function() {
        return getCurrentSlideIndex();
    });

    // set scroll event
    $(window).on("scroll", function() {
        var currentTop = $(this).scrollTop(),
            oldNavIndex = $(this).data("nav-index"),
            newNavIndex = getCurrentSlideIndex();

        if ( newNavIndex !== oldNavIndex ) {
            $(this).data("nav-index", newNavIndex);

            $leftNavList.removeClass("active");
            $leftNavList.eq(newNavIndex).addClass("active");
        }
    });
}

function getCurrentSlideIndex() {

    var h = $(window).height(),
        currentTop = $(window).scrollTop();

    // fix apple bouncing effect
    if ( currentTop <= 0 ) { 
        currentTop = 0;
    }

    return Math.floor( currentTop / h );
}
