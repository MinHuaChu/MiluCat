$(document).ready(function () {
    $('.top a').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.bottom1').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 900
        }, 1000);
    });

    $('.bottom2').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 2300
        }, 1500);
    });

    $('.bottom3').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 3100
        }, 1700);
    });

    $('.bottom4').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 3800
        }, 2000);
    });
});