import * as net from 'net';

const HOST = 'localhost';
const PORT = 5000;

const server = net.createServer((socket) => {
    console.log('Cliente conectado:', socket.remoteAddress, socket.remotePort);

    socket.on('data', (data) => {
        console.log('Mensagem recebida do cliente:', data.toString());
        socket.write('Mensagem recebida!');
    });

    socket.on('close', () => {
        console.log('Conexão fechada com o cliente');
    });

    socket.on('error', (err) => {
        console.error('Erro na conexão com o cliente:', err.message);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em ${HOST}:${PORT}`);
});
