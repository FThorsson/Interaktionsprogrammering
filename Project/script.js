$("document").ready(function () {

    /* när man rör musen över produktbilderna (på huvudsidan) byter man namn
    på bilden och den ändras */
    $(".product-image").mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace(".jpg", "-rum.jpg"));
    }).mouseout(function() {
        $(this).attr("src", $(this).attr("src").replace("-rum.jpg", ".jpg"));
    });

    /* Ändra produktbild när man hovrar över thumbnail */
    $(".thumbnail-color").mouseover(function() {
        $(this).prev().attr("src", $(this).attr("src"));
    }).mouseout(function() {
        $(this).prev().attr("src", $(this).prev().attr("default"));
    });

    //Rotera meny
    $(".sort-button").click(function() {
        $(".dropdown-content").slideDown(100);
    });

    document.getElementById('.fas').addEventListener('click', function() {
        let icon = this.querySelector('.right i.fa');
        icon.classList.toggle('rotate');
      });
});