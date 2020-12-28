$(document).ready(function () {
    $("#box-select").change(function () {
        $(".box-area").children("#squares").remove();
        let size = $("#box-select").val();
        for (let i = 0; i < size; i++) {
            $(".box-area").append('<i class="fas fa-square fa-5x" id="squares"></i>')
        }
     });
});
