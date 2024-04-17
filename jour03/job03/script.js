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
   
    function move(){
        var empty = $('#empty');
        var emptyPos = empty.position();
        var tile = $(this);
        var tilePos = tile.position();
        console.log(tilePos);
        console.log(Math.abs(tilePos.top - emptyPos.top))

        if(tilePos.left == emptyPos.left){
            tile.css('top', emptyPos.top);
            tile.css('left', emptyPos.left);
            empty.css('top', tilePos.top);
            empty.css('left', tilePos.left);
        }
    }

    $('[id^="row"] [id]').click(move);
});
