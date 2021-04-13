const rand = require('./zadatak6_dod');

let aBrojevi = [];

for(let i = 0; i < 100; i++)
{
    aBrojevi.push(rand.dajSlucajanBroj(150,1500))
}


var max = aBrojevi[0];
var min = aBrojevi[0];


aBrojevi.forEach(element => {
    if(element > max)
    {
        max = element
    }
    else if (element < min)
    {
        min = element
    }
});

console.log(max);
console.log(min)