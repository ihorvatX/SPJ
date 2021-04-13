const rand = require('./zadatak6_dod');

let aBrojevi = [];

for (let i = 0 ; i <50; i++)
{
    aBrojevi.push(rand.dajSlucajanBroj(1,20))
}



const unique = Array.from(new Set(aBrojevi))
unique.sort();

console.log(aBrojevi);
console.log(unique);