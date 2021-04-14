function Izracunaj()
{
    let z1Real = parseInt($('#z1Real').val());
    let z1Imag = parseInt($('#z1Imag').val());
    
    let z2Real = parseInt($('#z2Real').val());
    let z2Imag = parseInt($('#z2Imag').val());

    let operacije = $('#operacije').val();

    console.log(operacije);

    $('#z3Real').val("");
    $('#z3Imag').val("");
    switch(operacije)
    {
        case "zbrajanje":
        {
            let sumReal = z1Real + z2Real;
            let sumImag = z1Imag + z2Imag;

            $('#z3Real').val(sumReal);
            $('#z3Imag').val(sumImag);
            break;

        }
        case  "mnozenje":
        {
            let mulReal = (z1Real * z2Real) - (z1Imag * z2Imag);
            let mulImag = (z1Imag * z2Real) + (z1Real * z2Imag);
 
            $('#z3Real').val(mulReal);
            $('#z3Imag').val(mulImag);
            break;
        }
        default :
        {
            break;
        }
    }
}