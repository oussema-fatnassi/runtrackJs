$(document).ready(function(){
    function draggable() {
        $( "#image1" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "30" });
        $( "#image2" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
        $( "#image3" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
        $( "#image4" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
        $( "#image5" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
        $( "#image6" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
      } 
    draggable();

    function check(){

        var image1Top = $("#image1").position().top;
        var position1Top = $("#position1").position().top;
        var image2Top = $("#image2").position().top;
        var position2Top = $("#position2").position().top;
        var image3Top = $("#image3").position().top;
        var position3Top = $("#position3").position().top;
        var image4Top = $("#image4").position().top;
        var position4Top = $("#position4").position().top;
        var image5Top = $("#image5").position().top;
        var position5Top = $("#position5").position().top;
        var image6Top = $("#image6").position().top;
        var position6Top = $("#position6").position().top;

        var image1Left = $("#image1").position().left;
        var position1Left = $("#position1").position().left;
        var image2Left = $("#image2").position().left;
        var position2Left = $("#position2").position().left;
        var image3Left = $("#image3").position().left;
        var position3Left = $("#position3").position().left;
        var image4Left = $("#image4").position().left;
        var position4Left = $("#position4").position().left;
        var image5Left = $("#image5").position().left;
        var position5Left = $("#position5").position().left;
        var image6Left = $("#image6").position().left;
        var position6Left = $("#position6").position().left;

        var topOk = false;
        var leftOk = false;

        if (image1Top == position1Top && image2Top == position2Top && image3Top == position3Top && image4Top == position4Top && image5Top == position5Top && image6Top == position6Top){
            topOk = true;
        }
        if (position1Left - image1Left == 4 && position2Left - image2Left == 5 && position3Left - image3Left == 4 && position4Left - image4Left == 4 && position5Left - image5Left == 5 && position6Left - image6Left == 4){
            leftOk = true;
        }

        if (topOk && leftOk)
        {
            {   var $textWin = $('<p>', {text: 'YOU WON!'});
                $("#result").css("color", "green");
                $("#result").append($textWin);
                $('#Check').prop('disabled', true);
            }
        }
        else
        {
            var $textLose = $('<p>', {text: 'YOU LOST !'});
            $("#result").css("color", "red");
            $("#result").append($textLose);
            $('#Check').prop('disabled', true);
        }
    };

    $("#Check").click(function(){
        check();
    });

    function shuffle(){

        $("#image1").css("top", "0px");
        $("#image2").css("top", "0px");
        $("#image3").css("top", "0px");
        $("#image4").css("top", "0px");
        $("#image5").css("top", "0px");
        $("#image6").css("top", "0px");
        $("#image1").css("left", "0px");
        $("#image2").css("left", "0px");
        $("#image3").css("left", "0px");
        $("#image4").css("left", "0px");
        $("#image5").css("left", "0px");
        $("#image6").css("left", "0px");
        var container = $("#initialContainer");
        var elements = container.children();
        for (var i = elements.length; i >= 0; i--) {
            container.append(elements.eq(Math.floor(Math.random() * i)));
        }
        $("#result").empty();
        $('#Check').prop('disabled', false);

    }

    $("#Shuffle").click(function(){
        shuffle();
    });
});