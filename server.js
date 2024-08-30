"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var HOST = 'localhost';
var PORT = 5000;
var server = net.createServer(function (socket) {
    console.log('Cliente conectado:', socket.remoteAddress, socket.remotePort);

    socket.on('data', function (data) {
        console.log('Mensagem recebida do cliente:', data.toString());
        socket.write('Mensagem recebida!');
    });

    socket.on('close', function () {
        console.log('Conexão fechada com o cliente');
    });

    socket.on('error', function (err) {
        console.error('Erro na conexão com o cliente:', err.message);
    });
});

server.listen(PORT, HOST, function () {
    console.log("Servidor rodando em ".concat(HOST, ":").concat(PORT));
});
