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

    //Sorteringsknapp kategorisida
    $(".sort-button").click(function () {
        $(".dropdown-content").slideDown(200);
        $(this).find("i").removeClass("fas fa-chevron-down").addClass("fas fa-chevron-up"); //ändrar pilen
    });

    //Ändrar bilden som man klickar på, på produktsidan
    $(".thumbnail-image").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".main-image img").attr("src", $(this).attr("src").replace());
    });

    /* När man klickar på produktbild på kategorisidan hamnar den bilden på produktsidan */
    $(".product-image").click(function () {
        $("#image-1").addClass("active").siblings().removeClass("active");
        $(".category-page").css("display", "none");
        $(".product-page").css("display", "block");
        $(".main-image img").attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
        $("#image-1").attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
        $("#image-2").attr("src", $(this).attr("src").replace("-rum.jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace());
        $("#color-1").attr("src", $(".main-image img").attr("src"));
        $("#color-2").attr("src");

        //Försöker få så produktnamnet hamnar på produktsidan, på h3 taggen... (blir sen samma för thumbnail)
        $(".product-information").attr("h3", $(".product-name").attr("h3"));
    });

    /* När man klickar på miniatyrbilden på kategorisidan hamnar den bilden på produktsidan */
    $(".thumbnail-color").click(function () {
        $("#image-1").addClass("active").siblings().removeClass("active");
        $(".category-page").css("display", "none");
        $(".product-page").css("display", "block");
        $(".main-image img").attr("src", $(this).attr("src").replace());
        $("#image-1").attr("src", $(this).attr("src").replace());
        $("#image-2").attr("src", $(this).attr("src").replace(".jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));

        //FRÅGA: Vissa soffor har inte tre olika produktbilder (bara två), hur gör man då?????
    });

    //Dropdown meny med färgalternativ produktsida
    $(".color-button").click(function () {
        $(".dropdown-color-content").slideDown(200);
        $(this).find("i").removeClass("fas fa-chevron-down").addClass("fas fa-chevron-up"); //ändrar pilen
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