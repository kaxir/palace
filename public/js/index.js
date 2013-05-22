$(document).ready(function() {

    // resize first
    resizeAll();

    // set scroll
    $.localScroll();
    
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
}

function setLogoSize(h) {
    $(".logo-intro").height( h );
}

function setSlidesSize(h) {
    $('.slides').height( h ); 
}

