$(document).ready(function() {
    resizeAll();
    
    $('.each-member').bind('mouseenter', function() {
        var name = $(this).data('name');
        showMemberInfo( name );
    });
});

function resizeAll() {

    var w = $(window).width(),
        h = $(window).height();

    setSlidesSize(h);
    // setLogoSize(w, h);
    // setFacebookCommentsSize(w);
}

function setSlidesSize(h) {
    $('.slides').height( h ); 
}

function setLogoSize(w, h) {
    $('#logo').width(w)
              .height(h);
}

function setFacebookCommentsSize(w) {
    console.log( w );
    var leftPartWidth = $('#contact .left').width();
    $('.fb-comments').attr({ 'data-width' : w-leftPartWidth-1 })
}

function showMemberInfo( e ) {
    console.log( e );
}
