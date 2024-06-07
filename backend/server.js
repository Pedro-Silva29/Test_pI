const http = require('http');
const app = require('./app');

// Definir a porta da aplicação
const PORT = process.env.PORT || 3000;

// Criar o servidor HTTP
const server = http.createServer(app);

// Iniciar o servidor
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Manipular erros no servidor
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});

// Escutar eventos do servidor
server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log(`Listening on ${bind}`);
});
