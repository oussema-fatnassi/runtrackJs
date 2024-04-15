// Créez une fonction “sommeNombresPremiers” qui prend en paramètres
// deux variables. Si ces deux variables sont des nombres premiers, alors la
// fonction retourne leur somme. Sinon, la fonction retourne false.

function additionOfPrimeNumbers(number1, number2 ) {
    let sum = Number(number1) + Number(number2);
    let isPrime = true;

    if (number1 <= 1 || number2 <= 1) {
        isPrime = false;
    }
    else {
        for (let i = 2; i <= number1 / 2; i++) {
            if (number1 % i == 0) {
                isPrime = false;
                break;
            }
        }
        for (let i = 2; i <= number2 / 2; i++) {
            if (number2 % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(sum);
        alert("The sum of " + number1 + " and " + number2  + " is " + sum + " They are prime numbers");
    }
    else {
        alert(number1 + " and " + number2 + " are not prime numbers");
        console.log("False");
    }
}

let number1 = prompt("Enter a number");
let number2 = prompt("Enter another number");

additionOfPrimeNumbers(number1, number2);
