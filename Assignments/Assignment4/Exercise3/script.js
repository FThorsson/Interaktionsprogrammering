$(document).ready(function () {
    $("#my-table").tablesorter();
    $("#myTable").tablesorter({ sortList: [[0, 0], [1, 0]] });

    $(".draggable").draggable({
        revert: true
    });

    $(".droppable").droppable({
        drop: function (event, ui) {
            let currentIndex = document.getElementsByClassName("droppable");
            console.log(currentIndex);
            for (let i = 0; i < currentIndex.length; i++) {
                if ($(currentIndex[i]).find("img").attr("src") != $(ui.draggable).find("img").attr("src")) {
                } else {
                    return;
                }
            }
            $(this).find("a").attr("href", $(ui.draggable).find("img").attr("src"));
            $(this).find("img").attr("src", $(ui.draggable).find("img").attr("src"));
        }
    });

    $(".clearbutton").click(function () {
        $(".droppable").find("img").removeAttr("src");
        $(".droppable").find("a").removeAttr("href");
    });
});
