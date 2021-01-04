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

    $(".popular-sort").click(function() {
        //Visa alla produkter i den "ordinarie" ordningen
    });

    $(".lowest-price-sort").click(function() {
        //Visa produkter i stigande prisordning
        $()
    });

    $(".highest-price-sort").click(function() {
        //Visa produkter i stigande prisordning
    });

    //Ändrar bilden som man klickar på, på produktsidan
    $(".thumbnail-image").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".main-image img").attr("src", $(this).attr("src").replace());
    });

    /* När man klickar på produktbild på kategorisidan hamnar den bilden på produktsidan */
    $(".product-image").click(function () {
        $("#image-1").addClass("active").siblings().removeClass("active");
        $(".main-page").css("display", "none");
        $(".category-page").css("display", "none");
        $(".product-page").css("display", "block");
        $(".main-image img").attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
        $("#image-1").attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
        $("#image-2").attr("src", $(this).attr("src").replace("-rum.jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace());
        $("#color-1").attr("src", $(".main-image img").attr("src"));
        $("#color-2").attr("src", $(this).siblings().attr("src"));
        $(".product-information").children("h3").text($(this).siblings().children("h3").text());
        $(".product-information").children("p").text($(this).siblings().children(".price").text());
        $("#output").text($("#output").attr("default"));
    });

    /* När man klickar på miniatyrbilden på kategorisidan hamnar den bilden på produktsidan */
    $(".thumbnail-color").click(function () {
        $("#image-1").addClass("active").siblings().removeClass("active");
        $(".main-page").css("display", "none");
        $(".category-page").css("display", "none");
        $(".product-page").css("display", "block");
        $(".main-image img").attr("src", $(this).attr("src").replace());
        $("#image-1").attr("src", $(this).attr("src").replace());
        $("#image-2").attr("src", $(this).attr("src").replace(".jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));
        $("#color-1").attr("src", $(this).attr("src"));
        $("#color-2").attr("src", $(this).prev().attr("default"));
        $(".product-information").children("h3").text($(this).siblings().children("h3").text());
        $(".product-information").children("p").text($(this).siblings().children(".price").text());
        $("#output").text($("#output").attr("default"));
    });

    //Dropdown meny med färgalternativ produktsida
    $(".color-button").click(function () {
        $(".dropdown-color-content").slideDown(200);
        $(this).find("i").removeClass("fas fa-chevron-down").addClass("fas fa-chevron-up"); //ändrar pilen
    });

    $("#color-1").click(function () {
        //När man väljer ny färg i dropdown menyn - ändra produktbilderna
        $(".main-image img").attr("src", $(this).attr("src").replace());
        $("#image-1").attr("src", $(this).attr("src").replace());
        $("#image-2").attr("src", $(this).attr("src").replace(".jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));
        $("#output").text($("#output").attr("default"));
    });
    $("#color-2").click(function () {
        //När man väljer ny färg i dropdown menyn - ändra produktbilderna
        $(".main-image img").attr("src", $(this).attr("src").replace());
        $("#image-1").attr("src", $(this).attr("src").replace());
        $("#image-2").attr("src", $(this).attr("src").replace(".jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));
        $("#output").text($("#output").attr("default"));
    });

    $("#increase").click(function () {
        $("#output").html(function (i, val) {
            return val * 1 + 1;
        });
    });

    $("#decrease").click(function () {
        $("#output").html(function (i, val) {
            if (val > 1) {
                return val * 1 - 1;
            }
        });
    });

    $(".add-button").click(function () {
        /* Lägger till i kundkorgen, måste kolla vald produkt (namn, pris), 
        valt antal, hämta produktbild - Koppla till det som visas i kundkorgen */
    });

    $("#show-menu").click(function () {
        $(".side-menu").toggleClass("side-menu--open");
    });

    $("#arrow").click(function () {
        $(".side-menu").toggleClass("side-menu--open");
    });

    $("#show-cart").click(function () {
        $(".shopping-cart").toggleClass("shopping-cart--open");

    });

    $(".filter-button").click(function () {
        $(".filter-menu").toggleClass("filter-menu--open");
    });

    $(".slider").on("change", function (){
        let priceValue = $(this).val();
        $(".price-max").text(priceValue);
    });

    $(".category-1").click(function() {
        $(".main-page").css("display", "none");
        $(".product-page").css("display", "none");
        $(".category-page").css("display", "block");
        $(".side-menu").toggleClass("side-menu--open");
    });

});