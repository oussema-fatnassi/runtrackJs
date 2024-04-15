// Créez une fonction “afficherJoursSemaines”. Cette fonction ne prend pas de
// paramètre. Créez un tableau de strings “joursSemaines” qui contient
// l’ensemble des jours de la semaine, du lundi au dimanche. Ensuite, à l’aide
// d’une boucle for (for!) affichez un par un ces jours.

function showWeekDays() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for  (let i = 0; i < days.length; i++) {
        console.log(days[i]);
    }
}
showWeekDays();