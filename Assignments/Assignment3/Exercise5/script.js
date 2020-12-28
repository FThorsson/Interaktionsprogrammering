$(document).ready(function () {
    $('.dropdown').mouseover(function(){
        $(this).stop().animate({"height": "600px"}, 1000);
      }).mouseout(function(){ 
        $(this).stop().animate({"height": "50px"}, 1000);
      });
});