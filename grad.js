function Grad(nazivGrada, brojStanovnika, latituda, longituda)
{
    this.NazivGrada = nazivGrada;
    this.BrojStanovnika = brojStanovnika;
    this.Latituda = latituda;
    this.Longituda = longituda;
}


var oVirovitica = new Grad("Virovitica", 21291, 45.83194, 17.38389);
var oSlatina = new Grad("Slatina", 13686, 45.70333, 17.70278);
var oBjelovar = new Grad("Bjelovar",40276, 45.89861, 16.84889);
var oOsijek = new Grad("Osijek", 108048, 45.55111, 18.69389);
var oZagreb = new Grad("Zagreb", 806341, 45.81444, 15.97798);




Grad.prototype.dajVelicinuGrada = function()
{
    if(this.BrojStanovnika <= 30000)
    {
        return 1;
    }
    else if(this.BrojStanovnika > 30000 && this.BrojStanovnika <= 200000)
    {
        return 2;
    }
    else
    {
        return 3
    }
}

Number.prototype.toRad = function() {
    return this * Math.PI / 180;
 }
 
function dajUdaljenost(grad1, grad2)
{
    
    
    var R = 6371; // km 
    var x1 = grad2.Latituda-grad1.Latituda;
    var dLat = x1.toRad();  
    var x2 = grad2.Longituda-grad1.Longituda;
    var dLon = x2.toRad();  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                    Math.cos(grad1.Latituda.toRad()) * Math.cos(grad2.Latituda.toRad()) * 
                    Math.sin(dLon/2) * Math.sin(dLon/2);  
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c; 
}

console.log(oBjelovar.dajVelicinuGrada())

console.log(dajUdaljenost(oVirovitica,oSlatina));