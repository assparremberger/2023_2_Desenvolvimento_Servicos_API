var express = require("express");
var http = require("http");
var app = express();

var produtos = ["Coca-Cola" , "Pepsi"]

app.get( '/' , (req, res) => {
    res.status(200).send("Bem-vindo ao API REST");
} );

app.get( '/produtos' , (req, res) => {
    res.status(200).send(produtos);
} );

app.get( '/produtos/:posicao' , (req, res) => {
    index = parseInt( req.params.posicao ) -1;
    res.status(200).send( produtos[index] );
} );

app.post( '/produtos' , (req, res) => {
    nome = "Prod_" + produtos.length;
    produtos.push( nome );
    res.status(200).send("Produto " + nome + " adicionado");
} );

app.delete( '/produtos/:posicao' , (req, res) => {
    index = parseInt( req.params.posicao ) -1;
    produtos.splice(index, 1);
    res.status(200).send( "Produto removido!"  );
} );

http.createServer(app).listen( 8001 , () => {
    console.log("Servidor iniciado em http://127.0.0.1:8001");
} );