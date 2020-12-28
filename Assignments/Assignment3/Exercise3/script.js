$(document).ready(function () {
    $("#textInput").keyup(function () {
        let inputText = $(this).val();
        $("#output").text(inputText);
    });

    $("#submitButton").on("click", function (e) {
        e.preventDefault();
        let fontValue = $("#box-select").val();
        $('#output').css("font-family", fontValue);
    });

    $("#newParagraphButton").on("click", function (e) {
        e.preventDefault();
        $(".textRight").append(`<p style="font-family:${$("#box-select").val()};">${$("#textInput").val()}</p>`);
        $("#textInput").val("");
    });

});