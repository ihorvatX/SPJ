// var liba = new _lib("ul");


// liba.ubaciElement("h1","","","tse");

// liba.sakrij();


localStorage.setItem('racunarstvo', 'http://racunarstvo.vuv.hr/');
localStorage.setItem('loomen', 'http://loomen.vsmti.hr/');
localStorage.setItem('imagine', 'http://e5.onthehub.com/d.ashx?s=ui4qkso06k');
localStorage.setItem('studentski_dom', 'http://studom.vsmti.hr/');
localStorage.setItem('office365', 'https://outlook.office365.com/owa/?realm=vsmti.hr%23path=/mail');


var footer = new _lib(".footer-navigation");

for(let i =0; i < localStorage.length; i++)
{
    let liTag = footer.ubaciElement("li","item",i,"");
    var key = localStorage.key(i);
    var item = localStorage.getItem(key);    

    var ss = document.getElementById(i);
    var link = document.createElement("a");
    link.setAttribute("href",item);
    link.innerHTML=key;
    ss.appendChild(link);

    


}
