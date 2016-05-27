$(function(){



			$(document).ready(function() {
				$('.container').append('<button id="1">'+ 'Refresh'+'</button>');
				$('.container').append('<button id="2">'+ 'Mostar 1'+'</button>');
				$('.container').append('<button id="3">'+ 'Agregar'+'</button>');
				$('.container').append('<button id="4">'+ 'Borrar'+'</button>');
				$('.container').append('<button id="5">'+ 'TO-DO'+'</button>');
				$('#1').on('click',fullLIst);
				$('#2').on('click',idPer);
				$('#3').on('click',addUser);
				$('#4').on('click',deleteUser);
				$('#5').on('click',toDo);
			});

			fullLIst();	
				

	


	
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
		$('.container').append('<row id="ess">'+'</row>');


		for(var i =0 ; i< data.length;i++){

    		$('#ess').append('<li>' + data[i].id + '</li>');
    		$('#ess').append('<li>' + data[i].nombre + '</li>');
    		$('#ess').append('<li>' + data[i].edad + '</li>');
    		$('#ess').append('<li>' + data[i].email + '</li>'+'<br>');
			}//cierra el for
		}//cierra la function del success
	

});//cierre del get completo
		return false;
}


	function idPer(){

	redu();
	$('.container').append('<button id="btn">'+ 'Buscar'+'</button>');

	
	$('#btn').off('click').on('click', function() {
		$('#ess').remove();
		$('.container').append('<row id="ess">'+'</row>');

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
		$('#inp1').remove();
		$('#inp2').remove();
		$('#inp3').remove();
		$('#add').remove();
		$('#ess').remove();
		$('.container').append('<row id="ess">'+'</row>');

		$('#inp1').remove();
		$('#inp2').remove();
		$('#inp3').remove();
		$('#add').remove();


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
						$('.container').append('<row id="ess">'+'</row>');

						$('#inp1').remove();
						$('#inp2').remove();
						$('#inp3').remove();
						$('#add').remove();


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
		$('.container').append('<row id="ess">'+'</row>');

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

	});

	return false;
}// cierra funcion Idper

	function redu(){

	$('#inp').remove();
	$('#btn').remove();	
	$('.container').append('<input id="inp">' +'</input>');
	
	

	$('#ess').remove();
	$('.container').append('<row id="ess">'+'</row>');

	}




	function toDo (){
		
		$('#6').remove();
		$('#inp').remove();
		$('#btn').remove();		
		$('#inp1').remove();
		$('#inp2').remove();
		$('#inp3').remove();
		$('#add').remove();
		$('#ess').remove();
		$('.container').append('<row id="ess">'+'</row>');
		$('#ess').append('<form>'+'</form>');
		$('form').append('<p>'+'TO-DO LIST'+'</p>'+'<input id="inp1" placeholder="Agregar nueva tarea">'+'</input>');



		$('#6').on('click',limpiar);
		



		$('form').on('submit', agregarTarea);
   			function agregarTarea(){
   				var todo = $('#inp1').val();
   				
   				
   				$('form').append('<br>'+'<span>'+todo+'</span>'+'<button id="6">'+ 'X' +'</button>');
   				
       			return false;
   			}
   			
	}


	function limpiar(){


		$('span').remove();
		$('#6').remove();
		



	}


});