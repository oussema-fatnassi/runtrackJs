// Créez un fichier JSON nommé utilisateur.json contenant des informations
// utilisateurs. Chaque utilisateur possède un id, un nom, un prénom et un
// email.
// Ajouter des utilisateurs dans votre fichier.

// Dans votre page index.html, créez un tableau <table> permettant de
// contenir les informations des utilisateurs ainsi qu’un <button> “update”.
// Lorsque l’on clique sur ce bouton, le tableau doit se mettre à jour et contenir
// l’ensemble des informations des utilisateurs présents dans le fichier.
// Vous pouvez tester votre code en ajoutant/supprimant des utilisateurs.

$(document).ready(function(){

    let autoUpdate = false;
    let previousData = null;
    async function fetchUserData() {
        const response = await fetch('user.json');
        return response.json();
    }

    async function updateUserTable() {
        if (!autoUpdate) return;
        const data = await fetchUserData();
        // if ( JSON.stringify(data) !== JSON.stringify(previousData)) {
        //     alert('Data has changed. Please click the "update" button to refresh the table.');
        // }
        $('#result').empty();

        data.forEach(function(user) {
            $('<tr>').append(
                $('<td>').text(user.id),
                $('<td>').text(user.first_name),
                $('<td>').text(user.last_name),
                $('<td>').text(user.email)
            ).appendTo('#result');
        });

    }
    updateUserTable();
    $('#update').click(function() {
        autoUpdate = true;
        updateUserTable();});

});

