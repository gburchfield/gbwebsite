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