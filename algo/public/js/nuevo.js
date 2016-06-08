var miClosure = (function() {
	var form = $('.container');
	$('#bot').on('click',addUser);
	$('#lis').on('click',listar);

/*	function modify(e,data){
		e.preventDefault();
		console.log('entro');
		var iN = $(this).attr('data-id');

		$.ajax({
			url:'https://connectedin.herokuapp.com/person:'+data[i]._id,
			method:'PUT'

		});

	}*/


	function listar(e){
		e.preventDefault();
		

		$.ajax({
			url:'https://connectedin.herokuapp.com/person',
			method:'GET',
			success:function(data){
				var myDiv='<table id="tablaM">'+'<tr>'+
						  '<th> ID </th>'+
						  '<th> firstName </th>'+
						  '<th> lastName </th>'+
						  '<th> gender </th>'+
						  '<th> birthday </th>'+
						  '<th> address </th>'+
						  '<th> photo </th>'+
						  '<th> email </th>'+
						  '<th> password </th>'+
						  '<th> education </th>'+
						  '<th> experience </th>'+
						  '<th> Modificar </th>'+'</tr>';
				$('#lista').append(myDiv);		  
				for(var i=0; i<data.length; i++){
					var remplazo = '<tr>'+'<td>'+data[i]._id+'</td>'+
								   '<td>'+data[i].firstName+'</td>'+
								   '<td>'+data[i].lastName+'</td>'+
								   '<td>'+data[i].gender+'</td>'+
								   '<td>'+data[i].birthday+'</td>'+
								   '<td>'+data[i].address+'</td>'+
								   '<td>'+data[i].photo+'</td>'+
								   '<td>'+data[i].email+'</td>'+
								   '<td>'+data[i].password+'</td>'+
								   '<td>'+data[i].education+'</td>'+
								   '<td>'+data[i].experience+'</td>'+
								   '<td>'+'<button id="'+i+'" class="btn btn-danger">'+'Modificar'+'</button>'+'</tr>'; 
					$('#tablaM').append(remplazo);

					$('#'+i).attr('data-id',i).on('click',function(){
						var iN = $(this).attr('data-id');
						console.log(iN);
					});
							
				}// cierra el for
				
				$('#lista').append('</table>');
								 
				
			}
			

		});	

	}	


	function addUser(e){
		e.preventDefault();
		var user={
			firstName: form.find('#nombre').val(),
			lastName: form.find('#apellido').val(),
			gender: form.find('#sexo').val(),
			birthday: form.find('#date').val(),
			address: form.find('#dir').val(),
			photo: form.find('#photo').val(),
			email: form.find('#mail').val(),
			password: form.find('#pass').val(),
			education: form.find('#edu').val(),
			experience: form.find('#exp').val()

		};
		console.log(user);
		$.ajax({
			url:'https://connectedin.herokuapp.com/person', 
			method:'post',
			data:JSON.stringify(user),
			contentType:'application/json',
			success:function(data){
				
				alert('usuario agregado');
			}
			
		});
		return false;
	};
}());