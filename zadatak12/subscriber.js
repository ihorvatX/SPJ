var mqtt = require('mqtt')

const fs = require('fs');


var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
client.subscribe('broj')
});
console.log('Subsciber #1 is online!');
console.log('Receiving message...');
client.on('message', function(topic, message) {
context = message.toString();
fs.appendFile('message.txt', context + '\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
console.log(context)
});