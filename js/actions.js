$(function () {
    new WOW().init();
    /* typing style */
    
    $(".slogan").typed({
        strings : ["Webdesign","Programmation"," all IT solution"],
        typespeed : 1,
        loop : true,
        backDelay : 6000,
        showCursor: true,
		// character for cursor
        cursorChar: "|",
        
  
    });

    $('.scroll-pane').jScrollPane();

    $('.bt-home').click(function () {
        $('#containerToSlide').animate({
            left: "0vw"
        }, 1000, "easeInOutExpo");
    });
    $('.bt-about').click(function () {
        $('#containerToSlide').animate({
            left: "-80vw"
        }, 1000, "easeInOutExpo");
    });
    $('.bt-expert').click(function () {
        $('#containerToSlide').animate({
            left: "-160vw"
        }, 1000, "easeInOutExpo");
    });
    $('.bt-skill').click(function () {
        $('#containerToSlide').animate({
            left: "-240vw"
        }, 1000);
    });
    $('.bt-educ').click(function () {
        $('#containerToSlide').animate({
            left: "-320vw"
        }, 1000);
    });
    $('.bt-portfolio').click(function () {
        $('#containerToSlide').animate({
            left: "-400vw"
        }, 1000);
    });

});