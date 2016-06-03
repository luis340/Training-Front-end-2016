var menu,
	lista;


$(function(){
	
		

			//$(document).ready(function() {
					var templateContainer = $('#template');
					templateContainer.load('/template/menu.html',function(){
					menu = templateContainer.html();	
					$('.container').append(menu);
					$('#1').on('click',fullLIst);
					$('#2').on('click',idPer);
					$('#3').on('click',addUser);
					$('#4').on('click',deleteUser);
					$('#5').on('click',toDo);
					fullLIst();	

				});	//cierra funcion del temp

				
			//});//cierra document

			
				

	function fullLIst(){

		$.get({
		url:'/persona/',
				data:{

					id:'',
					nombre:'',
					edad:'',
					email:''
				},

		success:function(data){
	

		$('#inp').remove();
		$('#btn').remove();	
		$('#ess').remove();
		$('.container').append('<div id="ess">'+'</div>');

		var templatelista= $('#ess2');
		templatelista.load('/template/lista.html',function(){
		lista = templatelista.html();
	
		for(var i =0 ; i< data.length;i++){
			var magia = lista
					.replace(/%id%/g , data[i].id)
					.replace(/%nombre%/gi , data[i].nombre)
					.replace(/%edad%/gi , data[i].edad)
					.replace(/%email%/gi , data[i].email);
				$('#ess').append(magia);
		}

		});
			
				
			
		/*for(var i =0 ; i< data.length;i++){
					


			
			var listaDOS = lista
						.replace(/%id%/g , data[i].id)
						.replace(/%nombre%/gi , data[i].nombre)
						.replace(/%edad%/gi , data[i].edad)
						.replace(/%email%/gi , data[i].email);
    		$('#ess').append(listaDOS);*/
    		
			//}//cierra el for
		}//cierra la function del success
	

});//cierre del get completo
		return false;
}


	function idPer(){

	redu();

	$('.container').append('<button id="btn">'+ 'Buscar'+'</button>');

	
	$('#btn').off('click').on('click', function() {
		$('#ess').remove();
		$('.container').append('<div id="ess">'+'</div>');

			$.get({
				url:'/persona/' + $('#inp').val(),
				data:{

					id:$('#inp').val(),
					nombre:'',
					edad:'',
					email:''
				},

		success:function(data){		
						
	 					$('#ess').append('<li>' + data.id + '</li>');
    					$('#ess').append('<li>' + data.nombre + '</li>');
    					$('#ess').append('<li>' + data.edad + '</li>');
    					$('#ess').append('<li>' + data.email + '</li>'+'<br>');

					
			}//cierra funcion


		}).fail(function(){
			$('#ess').append('<br>'+ '<span>'+'Usuario Invalido' +'</span>');
		})	//cierra get

	});

	return false;
}// cierra funcion Idper

	function addUser(){
		
		$('#inp').remove();
		$('#btn').remove();		
		
		$('#ess').remove();
		$('.container').append('<div id="ess">'+'</div>');

	


		$('#ess').append('<br>'+ '<input placeholder="Nombre" id="inp1">' +'</input>');
		$('#ess').append('<br>'+'<input placeholder="Edad" id="inp2">' +'</input>');
		$('#ess').append('<br>'+'<input placeholder="Email" id="inp3">' +'</input>');
		$('#ess').append('<br>'+'<button id="add">'+ 'Add'+'</button>');
		$('#add').off('click').on('click', function() {
			
			$.post({
			url:'/persona/',	
				data:{
					id:'',
					nombre:$('#inp1').val(),
					edad:$('#inp2').val(),
					email:$('#inp3').val()
				},

			success:function(data){	
						$('#ess').remove();
						$('.container').append('<div id="ess">'+'</div>');
						$('#ess').append('<br>'+ '<input placeholder="Nombre" id="inp1">' +'</input>');
						$('#ess').append('<br>'+'<input placeholder="Edad" id="inp2">' +'</input>');
						$('#ess').append('<br>'+'<input placeholder="Email" id="inp3">' +'</input>');
						$('#ess').append('<br>'+'<button id="add">'+ 'Add'+'</button>');	
	 					$('#ess').append('<br>'+ '<span>'+'Usuario Agregado' +'</span>');
					}//cierra funcion	
			});
		}	
	)}


		function deleteUser(){

			redu();
			
			$('.container').append('<button id="btn">'+ 'Eliminar'+'</button>');

			

	$('#btn').off('click').on('click', function() {
		$('#ess').remove();
		$('.container').append('<div id="ess">'+'</div>');

			$.ajax({
				url:'/persona/' + $('#inp').val(),
				method:'DELETE',
				
				data:{

					id:$('#inp').val(),
					nombre:'',
					edad:'',
					email:''
				},

		success:function(data){		
						$('#ess').append('<br>'+ '<span>'+'Usuario Borrado' +'</span>');
	 					
					
			}//cierra funcion


		}).fail(function(){
			$('#ess').append('<br>'+ '<span>'+'Usuario Invalido' +'</span>');
		})	//cierra get

	});//cierra funcion delete User

	return false;
}// cierra funcion Idper

	function redu(){

	$('#inp').remove();
	$('#btn').remove();	
	$('#ess').remove();
	$('.container').append('<row id="ess">'+'</row>');
	$('.container').append('<input id="inp">' +'</input>');

	}

	function toDo (){
		var i =0,
		botone='<p>'+
		'TO-DO LIST'+
		'</p>'+
		'<input id="inp1" placeholder="Agregar nueva tarea">'+
		'</input>';

		
		$('#inp').remove();
		$('#btn').remove();		
		$('#ess').remove();
		$('.container').append('<div id="ess">'+'</div>');
		$('#ess').append('<form>'+'</form>');
		$('form').append(botone);
		$('form').on('submit', agregarTarea);
		function agregarTarea(){
			i++;
			var todo = $('#inp1').val();
			var prueba ='<br>'+
			'<span> %name% </span>'+
			'<button id="borrar'+i+'">'+ 
			'X' +
			'</button>';
			
			$('#ess').append('<div  class="bla" id="jss'+i+'">'+ '</div>')
			var template=prueba.replace(/%name%/gi, todo);
			$('#jss'+i).append(template);
			
			$('#borrar'+i).attr('data-id',i).on('click',limpiar);
			return false;
		}
   			
	}


	function limpiar(){
		var iNuevo =$(this).attr('data-id');
		$('#jss'+iNuevo).remove();
	}
});