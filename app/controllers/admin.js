module.exports.formulario_inclusao_noticia = function(application, req, res){
	res.render('admin/form_add_noticia',{validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(application, req, res){
	var noticia = req.body;
            
        console.log(noticia);
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();//pega o erro de validação em um json e joga na variavel erros
        
        console.log(erros);

        if(erros){//true or false
            res.render('admin/form_add_noticia', {validacao : erros, noticia : noticia});
            //validacao: manda as mensagens de erro de validacao pra view de formulario
            // noticia: devolve pra view de formulario, os campos que foram fornecidos anteriormente
            return;//return vazio interrompe a execução
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
}