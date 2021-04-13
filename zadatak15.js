const rand = require('./zadatak6_dod');

let aBrojevi = [];

for(let i = 0; i <3 ; i++)
{
     aBrojevi.push(rand.dajSlucajanBroj(10,100));
}
console.log(aBrojevi)

function getLastDigit(n){
    let  lastDigit = Math.abs(n % 10);
    return lastDigit;
}

let lastDigits = []

aBrojevi.forEach(element => {
    lastDigits.push(getLastDigit(element))
});


function Duplikati(array) {
    console.log((new Set(array)).size )
    console.log(array.length)
    return (new Set(array)).size !== array.length;
}

console.log(Duplikati(lastDigits));