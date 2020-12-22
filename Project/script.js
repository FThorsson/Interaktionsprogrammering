$("document").ready(function () {

    /* när man rör musen över produktbilderna (på huvudsidan) byter man namn
    på bilden och den ändras */
    $(".product-image").mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));
    }).mouseout(function() {
        $(this).attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
    });

    /* Ändra produktbild och beskrivning av färg när man hovrar över thumbnail */
    $(".thumbnail-color").mouseover(function() {
        $(".product-image").attr("src", $(this).attr("src"));
        //ändra texten för färg här
    }).mouseout(function() {
        $(".product-image").attr("src");
    });
});