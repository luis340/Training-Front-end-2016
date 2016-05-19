module.exports = function(server){
	 var UsersModel=function(){ 
	 	var usuarios=[{ //declaracion del array de usuarios 
	 		name:'pablo',
	 		email:'pablo.petran@globallogic.com',
	 		comentario:''

	 	},{
	 		name:'agustin',
	 		email:'agustin.diaz@gl.com',
	 		comentario:''
	 	}];
	 	this.getUser=function(req,res,next){
	 		var userId = req.params.id;
	 		if(usuarios[userId]){
	 			res.send(200,usuarios[userId]); //si encuentra usuario , lo devuelve

	 		}
	 		else{res.send(404,'Usuario Invalido')} //devuelve mensaje de error si el usuario invalido 

	 		return next();

	 	};
	 	this.editUser=function(req,res,next){ // edita un usuario a partir de tomar un ID pasado por parametro
	 		var userId = req.params.id,
	 			newName=req.params.name;
	 			if(usuarios[userId]){
	 				usuarios[userId].name=newName;
	 				res.send(200,usuarios[userId]);

	 	}else{res.send(404,'Usuario Invalido ')} //si el usuario es invalido		
	 		return next();

	 		};
	 	this.addUser=function(req,res,next){ //agrega un usuario al vector Usuarios
	 		  var user = {}; //creo un objeto user
  			  user.name = req.params.name;
  			  user.email = req.params.email;
  			  
	 		  usuarios.push(user);
	 		  var id = usuarios.length -1; //toma el id del ultimo elemento agregado 
	 		  

	 		  
	 				if(usuarios[id]){
	 					
	 					res.send(201,usuarios[id]);

	 			}else{res.send(404,'Usuario Invalido ')}
	 				return next();

	 		};

	 		this.borrarUser=function(req,res,next){ //borra un usuario a partir de tomar un ID pasado por parametro
	 			var userId = req.params.id;
	 			
	 				
	 		if(usuarios[userId]){
	 			delete (usuarios[userId]);//BORRA EL QUE LE PASAS POR ID
	 			//usuarios.pop(userId);//Borra solo el ultimo elemento	 		;
	 			res.send(200,'borro el user');
	 			

	 	}else{
	 		res.send(404,'Usuario Invalido ')} //si el usuario es invalido 
	 		return next();

	 		};

	 		this.commentUser=function(req,res,next){ // agrega comentario partir de un ID pasado por parametro
	 			
	 			var userId = req.params.id,
	 			    newComent=req.params.comentario;
	 			   	
	 			   if(usuarios[userId]){
	 			   		
	 				 	usuarios[userId].comentario=newComent;
	 					res.send(200,usuarios[userId]);

	 	}else{res.send(404,'Usuario Invalido ')} //si el usuario es invalido	
	 		return next();

	 		};
	 		this.getAllUser = function (req, res, next){
  			 
	 			res.send(200,usuarios); //Imprime todos los Usuarios del vector juntos
	 			return next();
  			 }

   				
  			}





	 	var User = new UsersModel();
	 	server.get({
	 		path:'/usuarios/:id',
	 		version:'1.0.0'

	 	},User.getUser); //Devuelve el usuario POR ID
	 	server.put({
	 		path:'/usuarios/:id',
	 		version:'1.0.0'

	 	},User.editUser);//Edita el usuario POR ID

	 	server.post({
	 		path:'/usuarios/:id',
	 		version:'1.0.0'

	 	},User.addUser);// Agrega un usuario

	 	server.del({
	 		path:'/usuarios/:id',
	 		version:'1.0.0'

	 	},User.borrarUser);//Borra un usuario POR ID

	 	server.get({
	 		path:'/usuarios',
	 		version:'1.0.0'

	 	},User.getAllUser);//Imprime todos los usuarios
	 	server.put({
	 		path:'/comentario/:id',
	 		version:'1.0.0'

	 	},User.commentUser);

};