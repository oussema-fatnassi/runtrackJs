// Créez une fonction “tri” qui prend en paramètres un tableau de nombres
// nommé “numbers” et une variable “order” qui contient “asc” ou “desc”.
// Développer un algorithme qui doit trier le tableau dans l’ordre ascendant ou
// décroissant, selon le paramètre passé, puis retourner le tableau trié.

let numbers = [59, 7, 99, 0, 16, 3, 42, 1, 8, 4];

function sort(numbers, order) {
    let length = numbers.length;
    let counter = 0;

    console.log("Original array:", numbers);

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (order === "asc") {
                if (numbers[j] > numbers[j + 1]) {
                    let temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                    counter++;
                    console.log(numbers);
                }
            } else if (order === "desc") {
                if (numbers[j] < numbers[j + 1]) {
                    let temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                    counter++;
                    console.log(numbers);
                }
            }
        }
    }
    return numbers;
}

let order1 = "asc";
alert(sort(numbers, order1));
let order2 = "desc";
alert(sort(numbers, order2));
