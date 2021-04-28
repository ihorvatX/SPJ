var oSlike = {
    1: "slider_1.jpg",
    2: "slider_2.jpg",
    3: "slider_3.jpg",
    4: "slider_4.jpg",
    5: "slider_5.jpg"
}

function Prev() 
{
    let objectLenght = Object.keys(oSlike).length;

    let current = $("#slika");
    let idSlike = parseInt(current.attr("data-slika-id"));

    if(idSlike === 1)
    {
        CrtajSliku(objectLenght)

    }
    else
    {
        CrtajSliku(idSlike-1)
    }
}

function Next() 
{

    let objectLenght = Object.keys(oSlike).length;

    let current = $("#slika");
    let idSlike = parseInt(current.attr("data-slika-id"));

    if(idSlike === objectLenght)
    {
       CrtajSliku(1)
    }
    else
    {
        CrtajSliku(idSlike+1)
    }
}

function CrtajSliku(id)
{
    $("#slika").attr("data-slika-id", id)
    $("#slika").attr("src", `img/${oSlike[id]}` );
}