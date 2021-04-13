let num = 826;


if (num <= 99) {
    console.log("Broj mora biti veci od 99");
    return
}

let lastDigit = num % 10;
console.log(lastDigit)

let firstDigit = num;

while (num >= 10) {
    num = num / 10;
}

firstDigit = Math.floor(num);

console.log(firstDigit);

let sum = firstDigit + lastDigit;
console.log(sum);