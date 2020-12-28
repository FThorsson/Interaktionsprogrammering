$(document).ready(function () {

    $("#button1").click(function () {
        $(".square").removeClass("animate");
        $("#square1").addClass("animate");
        $(".btn").removeClass('active');
        $(this).addClass('active'); 
        let setOpacity = $("#square1").css("opacity");
        $(".slider").val(setOpacity)
        $(".slider").on("change", function (){
            let change = $(this).val();
            $(".animate").css("opacity", change);
            
        });
    });

    $("#button2").click(function () {    
        $(".square").removeClass("animate");
        $("#square2").addClass("animate");
        $(".btn").removeClass('active');
        $(this).addClass('active'); 
        let setOpacity = $("#square2").css("opacity");
        $(".slider").val(setOpacity)
        $(".slider").on("change", function (){
            let change = $(this).val();
            $(".animate").css("opacity", change);
        });
    });

    $("#button3").click(function () {
        $(".square").removeClass("animate");
        $("#square3").addClass("animate");
        $(".btn").removeClass('active');
        $(this).addClass('active');
        let setOpacity = $("#square3").css("opacity");
        $(".slider").val(setOpacity)
        $(".slider").on("change", function (){
            let change = $(this).val();
            $(".animate").css("opacity", change);
        });
    });

});