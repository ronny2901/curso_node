module.exports.index = function(application, req, res){

	var connection =  application.config.dbConnection();//atribui a conexao com o banco de dados

	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias(function(error, result){
		//função render permite passar um json como segundo parametro
		res.render("home/index", {noticias : result});	
	});	
}