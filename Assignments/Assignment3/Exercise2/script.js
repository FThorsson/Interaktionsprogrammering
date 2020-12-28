$(document).ready(function () {
    $("#box-select").change(function () {

        let squareArray = [];
        $(".fas").each(function () {
            squareArray.push($(this).attr("id"));
        });

        for (let i = 0; i < squareArray.length; i++) {
            if (squareArray[i] > $(this).val()) {
            $('#' + squareArray[i]).hide();
            
            } else if (squareArray[i] <= $(this).val()) {
            $('#' + squareArray[i]).show();
            }
        }
     });
});