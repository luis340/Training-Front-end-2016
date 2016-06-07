(function(){
	var form;

	function init(){
		form = $('form');
		setupListeners();

	}
	function setupListeners(){
		form.on('submit',onFormSubmit);
		
	}
	function onFormSubmit(){
		var serializeData = form.serializeArray();
		var data={};

		serializeData.forEach(function(keyvalue){
			data[keyvalue.name]=keyvalue.value;
		
		});

		service.createUser(data)
			.done(function(){
				window.location ="google.com";
			});	

	}	

init();


}());


var service =(function(){
	var create_URL ='qqwdas'

	function createUser(user){
		return $.post(create_URL,user);

	}

	return{
		createUser:createUser	

	}

}());