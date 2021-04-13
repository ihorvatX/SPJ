const rand = require('../zadatak6_dod');

const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1');
// console.log(client);
client.on('connect', function() {
console.log('Publisher is online!');
setInterval(function() {
var broj = rand.dajSlucajanBroj(10,1000);
client.publish('broj', 'Broj je: ' + broj);
console.log('Message sent!');
}, 5000);
});