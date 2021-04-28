function InitializeGodinaElements()
{
	var oSelect = $('#dpGodinaRodjenja');
	for(var i=1975; i<2000; i++)
	{
		// console.log(i);
		oSelect.append('<option value="'+i+'">'+i+'</option>');
	}
}

$(document).ready(function()
{
	// InitializeGodinaElements();

});

function validInteger(theNumber){    
    return String(theNumber).match(/^\d+$/) && parseInt(theNumber) > 0;
}


function Spremi()
{
	let ime = $("#inptIme");
	let prezime = $("#inptPrezime");
	let oib = $("#inptOIB");
	let datumRodjenja = $("#inptDatumRodenja");
	let jmbag = $('#inptJMBAG');
	let adresa = $('#inptAdresa');
	let grad = $('#inptGrad')
	let postanskiBroj = $('#inptPostanskiBroj')

console.log(datumRodjenja.val());

	if(!ime.val()  || !prezime.val() || !oib.val()|| !datumRodjenja.val() 
		|| !jmbag.val() || !adresa.val() || !grad.val() || !postanskiBroj.val())
	{
		alert("Nisu popunjena sva polja")
	}
	else
	{

		if(!validInteger(oib.val()))
		{
			alert("Oib nije broj!");
			return;
		}
		if(!validInteger(postanskiBroj.val()))
		{
			alert("postanski broj nije broj!");
			return;
		}
		if(!validInteger(jmbag.val()))
		{
			alert("jmbag nije broj!")
			return;
		}


		


		let oStudent = {
			imeStudenta: ime.val(),
			prezimeStudenta: prezime.val(),
			JMBAGStudenta: jmbag.val(),
			oibStudenta: oib.val(),
			datumRodjenjaStudenta: datumRodjenja.val(),
			AdresaStudenta: adresa.val(),
			postanskiBrojStudenta: postanskiBroj.val(),
			gradStudenta: grad.val() 

		}
		
		console.log(oStudent);

		ime.val("");
		prezime.val("");
		oib.val("");
		jmbag.val("");
		datumRodjenja.val("");
		adresa.val("");
		postanskiBroj.val("");
		grad.val("");

	}
}