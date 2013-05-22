$(document).ready(function() {
    resizeAll();
    
    $('.each-member').bind('mouseenter', function() {
        var name = $(this).data('name');
        showMemberInfo( name );
    });

    // animate
    $(".logo-up").addClass("animated fadeOutUpBig");
    $(".logo-down").addClass("animated fadeOutDownBig");
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
