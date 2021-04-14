function Printer(nivoTonera, dvostranoIspisivanje)
{
    if(nivoTonera <=0)
    {
        this.NivoTonera = 0;
    }
    else if(nivoTonera > 0 && nivoTonera <= 100)
    {
        this.NivoTonera = nivoTonera;
    }
    else
    {
        this.NivoTonera = 100;
    }

    this.DvostranoIspisivanje = dvostranoIspisivanje;
    this.UkupanBrojStranica = 0;
    
}


var Samsung_M283x = new Printer(30,true);
var Epson_Sx105 = new Printer(10, false);
var Cannon_Pixma = new Printer(70, true)
var HP_Smart_tank_500 = new Printer(100,true);



Printer.prototype.dodajBoju = function(nivoTonera)
{
    if(this.NivoTonera === 0)
    {
        this.NivoTonera = nivoTonera;
    }
    else
    {
        this.NivoTonera += nivoTonera; 
    }
    if(this.nivoTonera >= 100)
    {
        this.NivoTonera = 100;
    }
}


Printer.prototype.printaj = function (brojStranica)
{
    if(brojStranica % 2 !== 0 )
    {
        this.UkupanBrojStranica++;
        this.NivoTonera -= 0.2;
    }

    for(let i = 0; i < brojStranica; i++)
    {
        if(this.DvostranoIspisivanje)
        {
            if(i % 2 !== 0)
            {
                this.UkupanBrojStranica++
                this.NivoTonera -= 0.2;
            }
            
        }
        else if(this.NivoTonera === 0)
        {
            console.log("Printer je prazan");
            break;
        }
        else
        {
            this.UkupanBrojStranica++
            this.NivoTonera -= 0.1;
        }
    }
    
}


Printer.prototype.nivoTonera = function ()
{
    return `Nivo tonera ${this.NivoTonera}`;
}

Printer.prototype.brojIspisanihStranica = function()
{
    return `Broj ispisanih listova ${this.UkupanBrojStranica}`;
}

Samsung_M283x.printaj(20);

console.log(Samsung_M283x.nivoTonera());
console.log(Samsung_M283x.brojIspisanihStranica());

