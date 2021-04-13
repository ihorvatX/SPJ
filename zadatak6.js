const rand = require('./zadatak6_dod');

let aBrojevi = [];

let parnih = 0;
let neparnih = 0;

for(let i = 0 ; i < 100; i++)
{
    aBrojevi.push(rand.dajSlucajanBroj(50,5000))
}

console.log(aBrojevi);


aBrojevi.forEach(element => {
    if(element % 2 === 0)
    {
        parnih++
    }
    else
    {
        neparnih++
    }
});


console.log(`parnih: ${parnih}`)
console.log(`neparnih: ${neparnih}`) 