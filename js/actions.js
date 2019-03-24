$(function () {

    $('.bt-home').click(function () {
        $('#containerToSlide').animate({
            left: "0vw"
        }, 1000);
    });
    $('.bt-about').click(function () {
        $('#containerToSlide').animate({
            left: "-80vw"
        }, 1000);
    });
    $('.bt-expert').click(function () {
        $('#containerToSlide').animate({
            left: "-160vw"
        }, 1000);
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