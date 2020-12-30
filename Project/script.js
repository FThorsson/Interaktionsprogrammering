$("document").ready(function () {

    /* när man rör musen över produktbilderna (på huvudsidan) byter man namn
    på bilden och den ändras */
    $(".product-image").mouseover(function () {
        $(this).attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));
    }).mouseout(function () {
        $(this).attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
    });

    /* Ändra produktbild när man hovrar över thumbnail */
    $(".thumbnail-color").mouseover(function () {
        $(this).prev().attr("src", $(this).attr("src"));
    }).mouseout(function () {
        $(this).prev().attr("src", $(this).prev().attr("default"));
    });

    //Rotera meny
    $(".sort-button").click(function () {
        $(".dropdown-content").slideDown(100);
    });

    //Ändrar bilden som man klickar på, på produktsidan
    $(".thumbnail-image").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".main-image img").attr("src", $(this).attr("src").replace());
    });

    /* När man klickar på produktbild på kategorisidan hamnar den bilden på produktsidan */
    $(".product-image").click(function () {
        $("#image-1").addClass("active").siblings().removeClass("active");
        /* $(".category-page").css("display", "none");
        $(".product-page").css("display", "block"); */
        $(".main-image img").attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
        $("#image-1").attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
        $("#image-2").attr("src", $(this).attr("src").replace("-rum.jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace());
        $(".information-container").attr("h3", $(this).attr("h3"));
        console.log($(".information-container").attr("h3", $(this).siblings().find().attr("product-name"), $(this).attr("product-name")));
    });

    /* När man klickar på miniatyrbilden på kategorisidan hamnar den bilden på produktsidan */
    $(".thumbnail-color").click(function () {
        $("#image-1").addClass("active").siblings().removeClass("active");
        /* $(".category-page").css("display", "none");
        $(".product-page").css("display", "block"); */
        $(".main-image img").attr("src", $(this).attr("src").replace());
        $("#image-1").attr("src", $(this).attr("src").replace());
        $("#image-2").attr("src", $(this).attr("src").replace(".jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));

        //FRÅGA: Vissa soffor har inte tre olika produktbilder (bara två), hur gör man då?????
    });


    //sortera knapp
    $(".sort-button").click(function () {
        $(".dropdown-content").css("display", "block");
        $("fas fa-chevron-down").toggleClass("fas fa-chevron-up"); //Vill byta ikonen här...
    });

    //Visa meny
    $("#menu-icon").click(function () {
        $(".side-menu").animate({
            width: 'toggle'
        });

    });

    //Göm meny
    $("#hide").click(function () {
        $(".side-menu").animate({
            width: 'toggle'
        });
    });

    //Visa kassa
    $("#shopping-icon").click(function () {
        $(".shopping-cart").animate({
            width: 'toggle'
        });

    });

    //Göm kassa
    $("#hide-cart").click(function () {
        $(".shopping-cart").animate({
            width: 'toggle'
        });
    });

});