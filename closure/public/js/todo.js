var muestra;


var closure =(function toDo (){

				var i =0,
				selec=$('.container');
				
				
				
				
				
				function agregarTarea(){
					i++;
					var todo = $('#inp1').val();
					var prueba ='<br>'+
					'<span> %name% </span>'+
					'<button id="borrar'+i+'">'+ 
					'X' +
					'</button>';
					
					$('#ess').append('<div  class="bla" id="jss'+i+'">'+ '</div>');
					var template=prueba.replace(/%name%/gi, todo);
					$('#jss'+i).append(template);
					
					$('#borrar'+i).attr('data-id',i).on('click',limpiar);
					return false;
				}

				function limpiar(){
					var iNuevo =$(this).attr('data-id');
					$('#jss'+iNuevo).remove();
				}
				function init(){
					var templateContainer = $('#template');
					templateContainer.load('/template/todotemplate.html',function(){
							muestra = templateContainer.html();
						
						//selec.find('form').append('<div id="ess">'+'</div>');
						selec.find('form').append(muestra);
						selec.find('form').off('submit').on('submit', agregarTarea);
						});
						return false;
						
				};
				

				return {
					init:init,
					agregarTarea:agregarTarea
			}
			
		
})();
