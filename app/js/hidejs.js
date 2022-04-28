$( document ).ready(function() {
    $("#hide").click(function(){
        $("#img1").hide(2000,function(){
            $("#img2").hide(2000,function(){
                $("#img3").hide(2000,function(){
                    $("#hide").html("Show");
                });
            });
        });
      
    });
});
$( document ).ready(function() {
    $("#show").click(function(){
        $("#img1").show(2000,function(){
            $("#img2").show(2000,function(){
                $("#img3").show(2000,function(){
                    $("#show").html("Hide");
                });
            });
        });
      
    });
});