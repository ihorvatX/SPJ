const rand = require('./zadatak6_dod');

let aBrojevi = [];

for(let i = 0; i < 20; i++)
{
    aBrojevi.push(rand.dajSlucajanBroj(10,20))
}
console.log(aBrojevi);

var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < aBrojevi.length; i += 1) {
      if (aBrojevi[i - 1] > aBrojevi[i]) {
        done = false;
        var tmp = aBrojevi[i - 1];
        aBrojevi[i - 1] = aBrojevi[i];
        aBrojevi[i] = tmp;
      }
    }
  }

  
  console.log(aBrojevi);