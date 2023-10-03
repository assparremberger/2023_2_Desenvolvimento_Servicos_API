// console.log( "Oi Galerinha");

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer( (req, res) => {
    res.statusCode = 200 ;
    res.setHeader("Content-type", "text/plain");
    res.end( "Estamos no ar!" );
} );

server.listen( port, hostname , () =>{
    console.log( "Servidor rodando em http://" + hostname+":"+port);
} );