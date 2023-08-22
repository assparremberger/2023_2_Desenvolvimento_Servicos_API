$(document).ready(function(){
        $("#minhaDiv").css("width", "200px");
        $("#minhaDiv").css("height", "300px");
        $("#minhaDiv").css("background-color", "#f0f");
        $("#minhaDiv").css("color", "white");
        $("#minhaDiv").html("<i>Olá<i>");

    }
);

$(fuction(){
    $("#btnAlterar").click(function(){
        $("#minhaDiv").hide(3000, function(){
            $("#minhaDibv").show(1000);
        });
    })   
});