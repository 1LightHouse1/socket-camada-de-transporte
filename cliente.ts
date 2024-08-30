import * as net from 'net';
import * as readline from 'readline';

const HOST = 'localhost';
const PORT = 5000;

const client = new net.Socket();

const mensagem = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.connect(PORT, HOST, () => {
    console.log('Conectado ao servidor');
    
    mensagem.question('Digite sua mensagem: ', (message) => {
        client.write(message);
    });
});

client.on('data', (data) => {
    console.log('Mensagem do servidor:', data.toString());
    client.destroy(); 
});


client.on('close', () => {
    console.log('Conexão encerrada');
    mensagem.close();
});


client.on('error', (err) => {
    console.error('Erro na conexão com o servidor:', err.message);
});
