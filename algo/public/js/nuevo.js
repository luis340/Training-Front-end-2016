var miClosure = (function() {
	var form = $('.container');
	$('#bot').on('click',addUser);
	$('#lis').on('click',listar);


	function listar(e){
		e.preventDefault();
		

		$.ajax({
			url:'https://connectedin.herokuapp.com/person',
			method:'GET',
			success:function(data){
				var myDiv='<table>';
				for(var i=0; i<data.length; i++){
					var remplazo= '<tr>'+'<td>'+data[i]._id+'</td>'+
					'<td>'+data[i].firstName+'</td>'+
					'<td>'+data[i].lastName+'</td>'+
					'<td>'+data[i].gender+'</td>'+
					'<td>'+data[i].birthday+'</td>'+
					'<td>'+data[i].address+'</td>'+
					'<td>'+data[i].photo+'</td>'+
					'<td>'+data[i].email+'</td>'+
					'<td>'+data[i].password+'</td>'+
					'<td>'+data[i].education+'</td>'+
					'<td>'+data[i].experience+'</td>'+'<tr>'; 
								 
								
								 
					myDiv +=remplazo;
					
				}// cierra el for
				myDiv+='</table>';
				$('#lista').append(myDiv);
				
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