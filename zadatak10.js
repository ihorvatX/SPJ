var http = require('http');
const rand = require('./zadatak6_dod');

var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);

http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
for(let i = 0; i <10; i++)
{
    response.write(String(rand.dajSlucajanBroj(10,100) + '\n'))
}
response.end();
}).listen(nPort);