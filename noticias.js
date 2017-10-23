var http = require('http');
//require é uma função js que permite incorporar outros arquivos a um arquivo corrente

var server = http.createServer( function(req, res){

	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end("<html><body>Notícias de Tecnologia</body></html>");
		//resposta à requisição que será feita pelo http.createServer
	}else if(categoria=='/moda'){
		res.end("<html><body>Notícias de Moda</body></html>");
	}else if(categoria=='/w wbeleza'){
		res.end("<html><body>Notícias de Beleza</body></html>");
	}else {
		res.end("<html><body>Portal de Notícias</body></html>");
	}

});

server.listen(3000);
//criando um servidor