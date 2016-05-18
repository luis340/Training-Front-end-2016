module.exports = function(server){
	 var UsersModel=function(){ 
	 	var usuarios=[{ //declaracion del array de usuarios 
	 		name:'pablo',
	 		email:'pablo.petran@globallogic.com'

	 	},{
	 		name:'agustin',
	 		email:'agustin.diaz@gl.com'
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

	 		}
	 	this.addUser=function(req,res,next){ //agrega un usuario al vector Usuarios
	 		var user = {}; //creo un objeto user
  			  user.name = req.params.name;
  			  user.email = req.params.email;
  			  
	 		  usuarios.push(user);
	 		  var id = usuarios.length -1; //toma el id del ultimo elemento agregado 
	 		  res.send(201,usuarios[id]);

	 		  
	 				if(usuarios[id]){
	 					
	 					res.send(201,usuarios[id]);

	 	}else{res.send(404,'Usuario Invalido ')}
	 		return next();

	 		}	
	 	};
	 	var User= new UsersModel();
	 	server.get({
	 		path:'/usuarios/:id',
	 		version:'1.0.0'

	 	},User.getUser);
	 	server.put({
	 		path:'/usuarios/:id',
	 		version:'1.0.0'

	 	},User.editUser);

	 	server.post({
	 		path:'/usuarios/:id',
	 		version:'1.0.0'

	 	},User.addUser)

};