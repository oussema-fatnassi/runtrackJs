function bisextile(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
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