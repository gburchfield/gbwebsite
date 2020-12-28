//SERVICES

$(function () {
    //animate on scroll
    new WOW().init();
});

//CAREER

$(function(){
    $(".open-popup-link").magnificPopup(
        {
            midClick: true,
            type: "inline",
            gallery:{
                enabled:true
            }
        }
    );
});

//NAVIGATION

$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() < 100){
            $("nav").removeClass("glen-top-nav")
        }
        else {
            $("nav").addClass("glen-top-nav")
        }
    })
});

//SCROLL

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section).offset().top - 65
        }, 1250, "easeInOutExpo");
    })
});

//PROJECTS

$(function () {
    $("#project-members").owlCarousel({
        items:2,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        loop: true,
        responsive : {
            0: {
                items:1
            },
            768: {
                items:2
            }
        }
    });
});

//Close mobile menu on click

$(function () {

    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });

});