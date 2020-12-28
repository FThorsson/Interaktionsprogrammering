$(document).ready(function () {

    $(".circles").click(function () {
        if ($(this).css("background-color") == "rgb(171, 205, 239)") {
            $(this).css("background-color", "green");
        } else {
            $(this).css("background-color", "rgb(171, 205, 239)");
        }
    });

    $(".squares").click(function () {
        $(this).resize(function () {
            $(this).width($(this).width() / 2 + "px");
            $(this).height($(this).height() / 2 + "px");
        }).resize();
    });

    $(".rectangles").click(function () {
        let currentPosition = $(this).css("bottom");
        console.log(currentPosition);
        $(this).css({ "position": "relative" }).animate({ currentPosition: '-=10' + 'px' });
        $(this).css({ "bottom": "-=10" + "px" });

    });
});