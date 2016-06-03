var calculadora = (function calc(){
	var   resultado=0;		 
	function sumar (input){
		 input=tryParse(input);
		 resultado += input;
		 return resultado;

	}
	function restar (input){
		input=tryParse(input);
		resultado -=input;
		 return resultado;

	}
	function dividir(input){
		input=tryParse(input);
		if(input===0){
			throw'Math Error';
		}
		resultado = resultado / input;
		return resultado;

	}
	function multi(input){
		input=tryParse(input);
		resultado = resultado * input;
		return resultado;

	}
	function cls(){
		init();


	}

	function init(){
		resultado=0;

	}

	function tryParse(input){
		input=parseInt(input,10);
		if(isNaN(input)){
			throw 'Invalid Number'

		}return input;

	}

	function asignarValor(input){
		input = tryParse(input);
		resultado = input;
		return (resultado);

	}
	function obtenerValor(){
		return resultado;
	}

	return {

		sumar:sumar,
		restar:restar,
		dividir:dividir,
		multi:multi,
		cls:cls,
		asignarValor:asignarValor,
		obtenerValor:obtenerValor
	}
})();



$(function(){
    var $calc,
        inputNumero,
        operacion,
        concatenaNumero,
        numero;

    init(); 
    
    function init(){
        $calc = $('.container'),
        inputNumero = $calc.find('.input');
        
        // set initial value
        clear();
        
        // set listeners
        $calc.find('.butonNumero').on('click', onNumberPress);
        $calc.find('.operacion').on('click', onOperationPress);
    }
    
    function onNumberPress(){
        var numero = $(this).html();
        if(concatenaNumero){
        	numero=parseInt(inputNumero.val() + numero, 10);

       	}       
        concatenaNumero=true;
        inputNumero.val(numero);
        
        // si aprete una operacion => reemplaza el numero
        if(!operacion){
        	calculadora.asignarValor(numero);        	
        }
    }
    
    function onOperationPress(){
        var nuevaOperacion = $(this).data('operacion');
        

        concatenaNumero=false;
        if(nuevaOperacion ==='cls'){
        	return clear();
        }
        if (nuevaOperacion === 'igual'){
        	if(operacion){
	        	var resultado = calculadora[operacion](inputNumero.val());
	        	inputNumero.val(resultado);
	        	console.log(resultado);
        	}	
        	return;
        }if(nuevaOperacion){ 
        	numero=parseInt(inputNumero.val(),10);
        	operacion=nuevaOperacion;
        }
        
        console.log(operacion);
        //console.log(mantengo);
    };

    function clear(){
    	inputNumero.val(calculadora.cls());
    	concatenaNumero=true;
    	operacion=null;


    }
    
});