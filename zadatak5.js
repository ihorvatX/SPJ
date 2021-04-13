let aPolje = [];

for(let i = 0; i <= 50; i++)
{
    if(i%7 === 0)
    {
        aPolje.push(i);
    }
}

let aParniBrojevi = [];

aPolje.forEach(element => {
    if(element % 2 === 0 )
    {
        aParniBrojevi.push(element);
    }
});

console.log(aParniBrojevi);