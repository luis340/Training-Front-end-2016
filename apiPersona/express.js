var express = require('express'),
	server = express(),
	bodyParser=require('body-parser'),
	personas=[
		{
			id:'1',
			nombre:'Persona1',
			edad:24,
			email:'persona1@persona.com'
		},
		{
			id:'2',
			nombre:'Persona2',
			edad:18,
			email:'persona2@persona.com'
		},
		{
			id:'3',
			nombre:'Persona3',
			edad:30,
			email:'persona3@persona.com'
		},

		{	
			id:'4',
			nombre:'Persona4',
			edad:26,
			email:'persona4@persona.com'
		},
		{
			id:'5',
			nombre:'Persona5',
			edad:17,
			email:'persona5@persona.com'
		},



	];

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true}));


//Listar todas las pesonas
server.get('/persona',function(req,res,next){
	res.send(200,personas);
	return next();

});

//Detalle de una persona

server.get('/persona/:id',function(req,res,next){
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

server.put('/persona/:id',function(req,res,next){
	 		var userId = req.params.id,
	 			newName= req.query.name;
	 			if(personas[userId]){
	 				personas[userId].nombre=newName;
	 				res.send(201,personas[userId]);

	 			}else{res.send(404,'Usuario Invalido ')} //si el usuario es invalido		
	 				return next();

	 		


});

server.post('/persona/',function(req,res,next){
   var id = personas.length ;
 	var user = {}; //creo un objeto user
  			  user.id=id+1;
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