function KompleksniBroj(realniDio, imaginarniDio)
{
    this.RealniDio = realniDio;
    this.ImaginarniDio = imaginarniDio;
}


var oKompl1 = new KompleksniBroj(54,3);
var oKompl2 = new KompleksniBroj(21,22);
var oKompl3 = new KompleksniBroj(1,7);
var oKompl4 = new KompleksniBroj(97,45);
var oKompl5 = new KompleksniBroj(12,9);

var _kb = {
    ispisiKompleksniBroj : function(kompBroj)
    {
        return `z = ${kompBroj.RealniDio} + ${kompBroj.ImaginarniDio}i`
    },

    zbroji : function(komp1, komp2)
    {
        let sumReal = komp1.RealniDio + komp2.RealniDio;
        let sumImag = komp1.ImaginarniDio + komp2.ImaginarniDio

        return `z = ${sumReal} + ${sumImag}i`;
    },

    mnozenje : function (komp1, komp2)
    {
        let mulReal = (komp1.RealniDio * komp2.RealniDio) - (komp1.ImaginarniDio * komp2.ImaginarniDio);
        let mulImag = (komp1.ImaginarniDio * komp2.RealniDio) + (komp1.RealniDio * komp2.ImaginarniDio);

        return `Z = ${mulReal} + ${mulImag}i`
    }
}

console.log(_kb.ispisiKompleksniBroj(oKompl1));
console.log(_kb.ispisiKompleksniBroj(oKompl2));
console.log(_kb.ispisiKompleksniBroj(oKompl3));
console.log(_kb.ispisiKompleksniBroj(oKompl4));
console.log(_kb.ispisiKompleksniBroj(oKompl5));

console.log();
console.log(_kb.zbroji(oKompl1,oKompl2));
console.log(_kb.mnozenje(oKompl4, oKompl5))
