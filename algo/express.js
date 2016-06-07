var express = require('express'),
	server = express(),
	bodyParser=require('body-parser'),
	personas=[];
var idgen =personas.length +1 ;	

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true}));


//Listar todas las pesonas
server.get('Connectedin.herouapp.com/person/',function(req,res,next){
	res.send(200,personas);
	return next();

});

//Detalle de una persona

server.get('Connectedin.herouapp.com/person/:id',function(req,res,next){
		var userId = req.params.id;
	 		if(userId){

	 			for(var i =0 ; i < personas.length; i++) {
	 				if(personas[i].id == userId){
	 					res.send(200,personas[i]);	
	 				}

	 			};

	 			

	 		}
	 		else{res.send(404,'Usuario Invalido')} //devuelve mensaje de error si el usuario invalido 

	 		return next();

	 	

});

server.put('/Connectedin.herouapp.com/person/:id',function(req,res,next){
	 		var userId = req.params.id,
	 			newName= req.query.name;
	 			if(personas[userId]){
	 				personas[userId].nombre=newName;
	 				res.send(201,personas[userId]);

	 			}else{res.send(404,'Usuario Invalido ')} //si el usuario es invalido		
	 				return next();

	 		


});

server.post('Connectedin.herouapp.com/person/',function(req,res,next){
   	var id = personas.length ;
 	var user = {}; //creo un objeto user
  			  user.id=idgen ++;
  			  user.nombre = req.body.nombre;
  			  user.edad = req.body.edad;
  			  user.email = req.body.email;
  			  
	 		  personas.push(user);
	 		
	 				if(personas[id]){
	 					
	 					res.send(201,personas[id]);

	 			}else{res.send(404,'Usuario Invalido ')}
	 				return next();

	 		});

			server.delete('/persona/:id',function(req,res,next){
			var userId = req.params.id;
				 		if(userId){

				 			for(var i =0 ; i < personas.length; i++) {
				 				if(personas[i].id == userId){
				 					personas.splice(i,1);
				 					res.send(200,'usuario elim')

				 			};
				 		}
				 	}else{res.send(404,'Usuario Invalido')} //devuelve mensaje de error si el usuario invalido 

				 		return next();

				 	

			});






server.listen(3000,function(){
	console.log('ESTOY CORRIENDO');


});