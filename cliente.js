"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var readline = require("readline");
var HOST = 'localhost';
var PORT = 5000;
var client = new net.Socket();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.connect(PORT, HOST, function () {
    console.log('Conectado ao servidor');
    rl.question('Digite sua mensagem: ', function (message) {
        client.write(message);
    });
});

client.on('data', function (data) {
    console.log('Mensagem do servidor:', data.toString());
    client.destroy(); 
});

client.on('close', function () {
    console.log('Conexão encerrada');
    rl.close();
});

client.on('error', function (err) {
    console.error('Erro na conexão com o servidor:', err.message);
});
