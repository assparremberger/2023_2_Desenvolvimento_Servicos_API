const restify = require("restify");
const errors = require("restify-errors");

// const corsMiddleware = require('restify-cors-middleware2');

// const cors = corsMiddleware({
//   origins: ['*'],
// });

const servidor = restify.createServer({
    name : 'loja' ,
    version : '1.0.0'
});

servidor.use( restify.plugins.acceptParser(servidor.acceptable) );
servidor.use( restify.plugins.queryParser());
servidor.use( restify.plugins.bodyParser());

// servidor.pre(cors.preflight);
// servidor.use(cors.actual);

servidor.listen( 8001 , function(){
    console.log("%s executando em %s", 
    servidor.name, servidor.url);
});

var knex = require('knex')({
    client : 'mysql' ,
    connection : {
        host : 'localhost' ,
        user : 'root' ,
        password : '' ,
        database : 'loja_2023_2'
    }
});

servidor.get( '/' , (req, res, next) => {
    res.send('Bem-vindo(a) `a API Loja!');
});

servidor.get( '/produtos' , (req, res, next) => {
    knex('produtos').then( (dados) =>{
        res.send( dados );
    }, next) ; 
});

servidor.get( '/produtos/:idProd' , (req, res, next) => {
    const idProduto = req.params.idProd;
    knex('produtos')
        .where( 'id' , idProduto)
        .first()
        .then( (dados) =>{
            if( !dados || dados =="" ){
                return res.send(
                    new errors.BadRequestError('Produto não encontrado'));
            }
            res.send( dados );
        }, next) ; 
});

servidor.post( '/produtos' , (req, res, next) => {
    knex('produtos')
        .insert( req.body )
        .then( (dados) =>{
            res.send( dados );
        }, next) ; 
});

servidor.put( '/produtos/:idProd' , (req, res, next) => {
    const idProduto = req.params.idProd;
    knex('produtos')
        .where( 'id' , idProduto)
        .update( req.body )
        .then( (dados) =>{
            if( !dados ){
                return res.send(
                    new errors.BadRequestError('Produto não encontrado'));
            }
            res.send( "Produto Atualizado" );
        }, next) ; 
});

servidor.del( '/produtos/:idProd' , (req, res, next) => {
    const idProduto = req.params.idProd;
    knex('produtos')
        .where( 'id' , idProduto)
        .delete()
        .then( (dados) =>{
            if( !dados ){
                return res.send(
                    new errors.BadRequestError('Produto não encontrado'));
            }
            res.send( "Produto Deletado" );
        }, next) ; 
});