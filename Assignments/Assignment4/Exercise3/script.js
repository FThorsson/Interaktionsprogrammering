$(document).ready(function () {
    $("#my-table").tablesorter();
    $("#myTable").tablesorter({ sortList: [[0, 0], [1, 0]] });

    $(".draggable").draggable({
        revert: true
    });

    $(".droppable").droppable({
        drop: function (event, ui) {
            let currentIndex = document.getElementsByClassName("droppable");
            for (let i = 0; i < currentIndex.length; i++) {
                if ($(currentIndex[i]).find("img").attr("src") != $(ui.draggable).find("img").attr("src")) {
                } else {
                    return;
                }
            }
            $(this).empty();
            $(this).append(`<a href="${$(ui.draggable).find("img").attr("src")}" data-lighter>
                            <img src="${$(ui.draggable).find("img").attr("src")}"></img></a>`);
        }
    });

    $(".clearbutton").click(function () {
        $(".droppable").find("img").removeAttr("src");
        $(".droppable").find("a").removeAttr("href");
    });
});
