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
        $(".dropdown-content").toggleClass("show-sort");
        if ($(".dropdown-content").hasClass(("show-sort"))) {
            $(".sort-button").find("i").removeClass("fas fa-chevron-down").addClass("fas fa-chevron-up");
        } else {
            $(".sort-button").find("i").removeClass("fas fa-chevron-up").addClass("fas fa-chevron-down");
        };
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
        $(".dropdown-color-content").toggleClass("show-dropdown-color-content");
        if ($(".dropdown-color-content").hasClass(("show-dropdown-color-content"))) {
            $(".color-button").find("i").removeClass("fas fa-chevron-down").addClass("fas fa-chevron-up");
        } else {
            $(".color-button").find("i").removeClass("fas fa-chevron-up").addClass("fas fa-chevron-down");
        };
    });

    $("#color-1").click(function () {
        $(".main-image img").attr("src", $(this).attr("src").replace());
        $("#image-1").attr("src", $(this).attr("src").replace());
        $("#image-2").attr("src", $(this).attr("src").replace(".jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));
        $("#output").text($("#output").attr("default"));
        $(".dropdown-color-content").toggleClass("show-dropdown-color-content");
    });
    $("#color-2").click(function () {
        $(".main-image img").attr("src", $(this).attr("src").replace());
        $("#image-1").attr("src", $(this).attr("src").replace());
        $("#image-2").attr("src", $(this).attr("src").replace(".jpg", "-profil.jpg"));
        $("#image-3").attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));
        $("#output").text($("#output").attr("default"));
        $(".dropdown-color-content").toggleClass("show-dropdown-color-content");
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

    $("#increase-shop").click(function () {
        $("#output-shop").html(function (i, val) {
            return val * 1 + 1;
        });
    });

    $("#decrease-shop").click(function () {
        $("#output-shop").html(function (i, val) {
            if (val > 1) {
                return val * 1 - 1;
            }
        });
        console.log("klIckar på minus i kassan");
    });

    $(".add-button").click(function () {
        $(".shopping-cart").toggleClass("shopping-cart--open");
        $(".shopping-cart").append(`<div class="cart-products">
                <i class="fas fa-times-circle"></i>
                <img src="${$(".thumbnail-container").find("img").attr("src")}"></img>
                <div class="product-info">
                    <p>${$(".name").text()}</p>
                    <p>${$(".product-price").text()}</p>
                    <div class="quantity">
                        <i class="fas fa-minus" id="decrease-shop"></i>
                        <p id="output-shop">${$("#output").text()}</p>
                        <i class="fas fa-plus" id="increase-shop"></i>
                    </div>
                </div>
            </div>`
        );
        getTotalAmount();
    });

    let total = 0;
    function getTotalAmount() {
        $('.product-price').each(function(){
            total += parseFloat($(this).text());
            $('.total-amount').text(total);
            console.log("räknar ihop totalen");
        });
    }
    
    $(".fa-times-circle").click(function() {
        $(".cart-products").empty();
        console.log("klickar på att ta bort vara");
    })

    $(".back-button").click(function() {
        $(".main-page").css("display", "none");
        $(".product-page").css("display", "none");
        $(".category-page").css("display", "block");
    });

    $(".checkout-button").click(function() {
        $(".shopping-cart").toggleClass("shopping-cart--open");
    });

    $("#show-menu").click(function () {
        $(".side-menu").toggleClass("side-menu--open");
    });

    $(".category-1").click(function() {
        $(".main-page").css("display", "none");
        $(".product-page").css("display", "none");
        $(".category-page").css("display", "block");
        $(".side-menu").toggleClass("side-menu--open");
    });

    $(".back-start-button").click(function() {
        $(".main-page").css("display", "block");
        $(".product-page").css("display", "none");
        $(".category-page").css("display", "none");
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

    $(".color-circle").click(function() {
        $(".color-circle").css("border", "solid 1px rgb(206, 206, 206)");
        $(this).css("border", "solid rgb(100,100,100)");
    })

    $(".slider").on("change", function (){
        let priceValue = $(this).val();
        $(".price-max").text(priceValue);
    });

    $(".save-filter").click(function() {
        $(".filter-menu").toggleClass("filter-menu--open");
    });

    $(".heading").click(function() {
        $(".main-page").css("display", "block");
        $(".product-page").css("display", "none");
        $(".category-page").css("display", "none");
    })

});