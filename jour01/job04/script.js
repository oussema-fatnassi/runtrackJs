// À présent que vous savez comment inclure du JavaScript et que vous
// maitrisez la console web, vous allez pouvoir explorer davantage la syntaxe, la
// grammaire et le lexique du langage JavaScript.

// Pour l’ensemble des exercices suivants, vous devez rendre un fichier script.js
// contenant le rendu de l’exercice et un fichier index.html qui l’inclut.

// Déclarez une fonction “bisextile” qui prend en paramètre une variable
// “année”. Si l’année est bissextile, la fonction retourne true, sinon elle retourne
// false.

function bisextile(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

const userInput = prompt("Enter the year : ");

if (bisextile(userInput)) {
    console.log("The year " + userInput + " is a leap year.");
    alert("The year " + userInput + " is a leap year.");
}
else {
    console.log("The year " + userInput + " is not a leap year.");
    alert("The year " + userInput + " is not a leap year.");
}