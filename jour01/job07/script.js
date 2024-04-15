// Créez une fonction “jourTravaille” qui prend en paramètre une date au
// format Date. Si la date correspond à un jour férié de l’année 2024, la fonction
// affiche “Le jour mois année est un jour férié”. Si elle correspond à un samedi
// ou un dimanche, alors le message affiché est “Non, jour mois année est un
// week-end”, sinon afficher “Oui, jour mois année est un jour travaillé” ou jour,
// mois et année correspond aux paramètres passés à la fonction.

function workingDay(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const publicHolidays = ["2024-01-01", "2024-04-01", "2024-05-01", "2024-05-08", "2024-05-20", "2024-07-14", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"];
    const dateObj = new Date(date);
    const dayOfWeek = days[dateObj.getDay()];
    const formattedDate = `${dayOfWeek} ${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

    if (publicHolidays.includes(date)) {
        console.log(`The ${formattedDate} is a holiday.`);
        alert(`The ${formattedDate} is a holiday.`);
    } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        console.log(`No, ${formattedDate} is a weekend.`);
        alert(`No, ${formattedDate} is a weelekend.`);
    } else {
        console.log(`Yes, ${formattedDate} is a working day.`);
        alert(`Yes, ${formattedDate} is a working day.`);
    }
}

const date = prompt("Give me a date in this format yyyy-mm-dd : ");
workingDay(date);
