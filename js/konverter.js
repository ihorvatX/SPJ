function calculation() {
    var iznos = document.getElementById('iznos').value;
    var prvaValuta = document.getElementById('iz').value;
    var drugaValuta = document.getElementById('u').value;

    switch (prvaValuta + ' ' + drugaValuta) {
        case "Kuna Kuna":
            var y = iznos * 1;
            console.log(y)
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Kuna Euro":
            var y = iznos * 0.13;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Kuna Dolar":
            var y = iznos * 0.16;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Kuna Funta":
            var y = iznos * 0.12;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Kuna Dinar":
            var y = iznos * 15.56;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break

        case "Euro Kuna":
            var y = iznos * 7.56;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Euro Euro":
            var y = iznos * 1;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Euro Dolar":
            var y = iznos * 1.21;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Euro Funta":
            var y = iznos * 0.87;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Euro Dinar":
            var y = iznos * 117.58;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break

        case "Dolar Kuna":
            var y = iznos * 6.26;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Dolar Euro":
            var y = iznos * 0.83;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Dolar Dolar":
            var y = iznos * 1;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Dolar Funta":
            var y = iznos * 0.72;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "Dolar Dinar":
            var y = iznos * 97.36;
            document.getElementById('rezultat').value = parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break

        
        }
}