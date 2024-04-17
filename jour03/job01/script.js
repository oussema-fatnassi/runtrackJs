$(document).ready(function(){
    var $button = $('<button>' ,{text: 'Click Me', id:'button'});
    $('#buttonContainer').append($button);
    $('#button').on("click", showText);

    var textVisible = false

    var $div = $('<div>', {
        id: 'text',
        text: 'Software and cathedrals are a bit the same thing, firstly we build them, then we pray'});

    var $button2 = $('<button>', {text: 'Hide All', id:'button2'});

    function showText(){
        $('#textContainer').append($div);
        $('#buttonContainer').append($button2);
        $('#button2').on("click", hideAll)
        textVisible = true;
    };

    function hideAll(){
        $('#textContainer').hide();
        $('#buttonContainer').hide();
    }
        
    }
);