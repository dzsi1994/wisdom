$(function () {
   "use strict";
   var topoffset = 50;
   var slideqty = $('#featured item').length;
   // Activate Scrollpy

    $('body').scrollspy({
       target: 'header .navbar',
       offset: topoffset
    });

    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#featured'){
        $('header nav').addClass('inbody');
    } else{
        $('header nav').removeClass('inbody');
    }
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
        var hash = $(this).find('li.active a').attr('href');
        if(hash !== '#featured'){
            $('header nav').addClass('inbody');
        } else{
            $('header nav').removeClass('inbody');
        }
    });
    // add inbody scrollspy
    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') ===
            this.pathname.replace(/^\//,'') &&
            location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-topoffset+2
                }, 500);
                return false;
            } //target.length
        } //click function
    }); //smooth scrolling

    // Automatically generate carousel indicators
    for(var i = 0; i<slideqty.length; i++){
        var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
        $('#featured ol').append(insertText);
    }

    $('.carousel').carousel({
        pause: false
    });
});