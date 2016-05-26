$(function(){


	
	var form = $('form'),
		usuario=form.find('input[type=text]'),
		password=form.find('input[type=password]');
	form
		.find('input[type=submit]')
		.on('click',onClick);            //MEJORA EL RENDIMINETO DEL SITIO YA QUE SINO COMPARA SIEMPRE TODOS LOS ELEMENTOS


	//$('form input[type=submit]').on('click',onClick);

	function validateEmail(email) {
    	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
			}

		function onClick(){
			

        if(!usuario.val().length){
            usuario.parents('.form-group').addClass('required');
        }
        else{
           usuario.parents('.form-group').removeClass('required');
        }
        
        if(usuario.val().length && usuario.val().length < 3){
            usuario.parents('.form-group').addClass('invalid');
        }
        else{
            usuario.parents('.form-group').removeClass('invalid');
        }
        
        if(usuario.parents('.form-group.required, .form-group.invalid').length){
            usuario.parents('.form-group').addClass('has-error');
        }
        else{
            usuario.parents('.form-group').removeClass('has-error');            
        }
        
        if(!password.val().length){
            password.parents('.form-group').addClass('has-error required');
        }
        else{
            password.parents('.form-group').removeClass('has-error required');

        }

        if(form.find('.has-error').length){            
            return false;
        	}

			/*	if(!usuario.lenght  || !password.lenght ){
				usuario.parents('.form-group').addClass('has-error required');	
				

			}else{usuario.parents('.form-group').removeClass('required')}*/
			

		
			$.post({
				url:'/persona',
				data:{
					usuario:form.find('input[type=text]').val(), //TOMO LE VALOR DEL INPUT
					password:form.find('input[type=password]').val()
				},
			success:function(data){
				console.log(data);

			}

		});
			return false;
		}

	});