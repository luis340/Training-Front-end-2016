var express = require('express'),
	server = express(),
	bodyParser=require('body-parser');

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true}));

server.post('/persona',function(req,res,next){
	console.log('body',req.body);
	console.log('querystring',req.query);//me muestra los parametros que recivo
	var persona ={
		'usuario':req.query.usuario,
		'password':req.query.password

		/*'nombre':'Hernesto',
		'Años':'1000'*/

	}
	if(!req.body.usuario.length  || !req.body.password.length ){

		return res.send('Campos vacios')

	}else{


	
	if (req.body.usuario ==='luis' && req.body.password === '1234'){

		return res.send({
			usuario:true,
			password:true

			});
	}else{ res.send('Usuario Incorrecto');	

	}
	}

		//res.send(persona);



});



server.listen(3000,function(){
	console.log('ESTOY CORRIENDO');


});