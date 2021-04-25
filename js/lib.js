var _lib = function(selektor)
{
  this.selektor = selektor;
  this.el = document.querySelectorAll(this.selektor);
}


_lib.prototype.ubaciElement = function(naziv, klasa, identifikator, tekst)
{
    if(naziv.isEmpty())
    {
        console.log("naziv ne smije biti prazan;")
        return;
    }

    var CreateElement = document.createElement(naziv);
    CreateElement.setAttribute("class", klasa);
    CreateElement.setAttribute("id", identifikator);
    CreateElement.innerHTML = tekst;



    this.el.forEach(elem =>
        {
            elem.appendChild(CreateElement.cloneNode(true));
        })

}

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};


_lib.prototype.dodajKlasu = function(nazivKlase)
{
    this.el.setAttribute("class", nazivKlase);
}

_lib.prototype.dodajAtribut = function(naziv, vrijednost)
{
    this.el.setAttribute(naziv, vrijednost);
}

_lib.prototype.prikazi = function()
{
    this.el.forEach(elem =>
        {
            elem.style.visibility = "visible";
        })
}

_lib.prototype.sakrij = function()
{
    console.log(this.el)
    this.el.forEach(elem =>
        {
            elem.style.visibility = "hidden";
        })
    
   
}