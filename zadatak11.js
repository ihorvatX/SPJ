const http = require('http');
const fs = require('fs');

let osobe = JSON.parse(fs.readFileSync('osobe.json'));
console.log(osobe);

var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);

http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    response.write(JSON.stringify(osobe))

response.end();
}).listen(nPort);