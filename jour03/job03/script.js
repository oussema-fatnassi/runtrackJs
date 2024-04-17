// // <!-- Prenez ce logo de La Plateforme_ et réalisez un jeu du taquin :
// // Le taquin est composé de 8 carreaux qui glissent dans une grille prévue pour
// // 9.
// // Il consiste à remettre dans l'ordre les 8 carreaux à partir d'une configuration
// // initiale. Le plateau de jeu est initialisé de façon aléatoire.
// // Lorsqu’un carreau est cliqué, il se déplace dans la case vide adjacente (s'il y
// // en a une).
// // Lorsque l’image est correctement recomposée, le message “Vous avez
// // gagné” s’affiche en vert et bloque la partie.
// // Un bouton “Recommencer” apparaît et permet de relancer une partie. -->

$(document).ready(function() {

    var moves = 0;
    function initialize() {
        moves = 0;
        shuffle();
    }
    initialize();
   
    function move(clickedTile) {
        var empty = $('#empty');
        var emptyPos = empty.position();
        var tile = clickedTile;
        var tilePos = tile.position();
        var tileImage = tile.css('background-image');
        var emptyImage = empty.css('background-image');

        var diffX = Math.abs(tilePos.left - emptyPos.left);
        var diffY = Math.abs(tilePos.top - emptyPos.top);

        if ((diffX === 0 && diffY === 479) || (diffX === 479 && diffY === 0)) {
            tile.css('background-image', emptyImage);
            empty.css('background-image', tileImage);

            var tileId = tile.attr('id');
            tile.attr('id', 'empty');
            empty.attr('id', tileId);
            moves++;
        }
        checkVictory();
        console.log('moves'+moves);


    }

    function shuffle() {
        var tiles = $('[id^="col"] [id]');
        var lastTileId;
    
        for (var i = 0; i < 30; i++) {
            var random = Math.floor(Math.random() * tiles.length);
            var tile = tiles.eq(random);
    
            while (tile.attr('id') === lastTileId || !isValidMove(tile)) {
                random = Math.floor(Math.random() * tiles.length);
                tile = tiles.eq(random);
            }
    
            move(tile);
            lastTileId = tile.attr('id');
        }
    }
    
    function isValidMove(tile) {
        var empty = $('#empty');
        var emptyPos = empty.position();
        var tilePos = tile.position();
        var diffX = Math.abs(tilePos.left - emptyPos.left);
        var diffY = Math.abs(tilePos.top - emptyPos.top);
        return (diffX === 0 && diffY === 479) || (diffX === 479 && diffY === 0);
    }
    


    function checkVictory() {
        if (moves>30 && correct == 8){

        var tiles = $('[id^="col"] [id]');
        var correct = 0;

        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles.eq(i);
            var tileId = tile.attr('id');
            var tileBg = tile.css('background-image');

            if (tileId === 'row1col1' && tileBg.includes('1.jpg')) {
                correct++;
            } else if (tileId === 'row1col2' && tileBg.includes('2.jpg')) {
                correct++;
            } else if (tileId === 'row1col3' && tileBg.includes('3.jpg')) {
                correct++;
            } else if (tileId === 'row2col1' && tileBg.includes('4.jpg')) {
                correct++;
            } else if (tileId === 'row2col2' && tileBg.includes('5.jpg')) {
                correct++;
            } else if (tileId === 'row2col3' && tileBg.includes('6.jpg')) {
                correct++;
            } else if (tileId === 'row3col1' && tileBg.includes('7.jpg')) {
                correct++;
            } else if (tileId === 'row3col2' && tileBg.includes('8.jpg')) {
                correct++;
            }
        }

        if (correct === 8) {
            alert('You won!');
        }
    }
    }
    

    $('#game').on('click', '[id^="col"] [id]', function() {
        move($(this));
    });


});
