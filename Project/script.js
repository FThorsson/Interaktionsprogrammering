$("document").ready(function () {

    /* när man rör musen över produktbilderna (på huvudsidan) byter man namn
    på bilden och den ändras */
    $(".product-image").mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));
    }).mouseout(function() {
        $(this).attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
    });

    /* När man rör med musen över miniatyrbilderna (på huvudsidan) byter man namn
    på produktbilden och den ändras till den nya färgen.
    Funkar inte just nu.. :))) */
    $(".thumbnail-color").mouseover(function() {
        $(".product-image").attr("src", $(this).attr("src"));
    }).mouseout(function() {
        $(".product-image").attr($(this).attr("src"), "src");
    });
});