//este modulo exporta uma função que esta sendo executada pelo modulo app
var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
//require é uma função js que permite incorporar outros arquivos a um arquivo corrente

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));//informa onde estao os arquivos de imagens e etc
app.use(bodyparser.urlencoded({extended:true}));
app.use(expressValidator());//inclui o express validator

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);
//incluindo das rotas das views e joga dentro do servidor

module.exports = app;