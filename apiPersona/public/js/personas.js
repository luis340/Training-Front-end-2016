$(function(){



			$(document).ready(function() {
				$('.container').append('<button id="1">'+ 'Refresh'+'</button>');
				$('.container').append('<button id="2">'+ 'Mostar 1'+'</button>');
				$('.container').append('<button id="3">'+ 'Agregar'+'</button>');
				$('.container').append('<button id="4">'+ 'Borrar'+'</button>');
				$('#1').on('click',fullLIst);
				$('#2').on('click',idPer);
				$('#3').on('click',addUser);
				$('#4').on('click',deleteUser);
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

	$('#inp').remove();
	$('#btn').remove();	
	$('.container').append('<input id="inp">' +'</input>');
	
	$('.container').append('<button id="btn">'+ 'Buscar'+'</button>');

	$('#ess').remove();
	$('.container').append('<row id="ess">'+'</row>');

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

	$('#inp').remove();
	$('#btn').remove();	
	$('.container').append('<input id="inp">' +'</input>');
	
	$('.container').append('<button id="btn">'+ 'Eliminar'+'</button>');

	$('#ess').remove();
	$('.container').append('<row id="ess">'+'</row>');

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




});