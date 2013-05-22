$(document).ready(function() {
    resizeAll();
    
    $('.each-member').bind('mouseenter', function() {
        var name = $(this).data('name');
        showMemberInfo( name );
    });

    // animate
    var delay = 1800;

    $(".logo-up").addClass("animated fadeOutUpBig");
    $(".logo-down").addClass("animated fadeOutDownBig");

    setTimeout(function() {
        console.log('x');
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

function showMemberInfo( e ) {
    console.log( e );
}

