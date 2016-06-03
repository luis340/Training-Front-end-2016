var calculadora = (function calc(){
	var  num = 1;
		 resultado=0;	 
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
		resultado = num * input;
		return resultado;

	}
	function cls(){
		init();


	}

	function init(){
		num=1;
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
	return {

		sumar:sumar,
		restar:restar,
		dividir:dividir,
		multi:multi,
		cls:cls,
		asignarValor:asignarValor

	}
})();



/*$(function(){
	var  form = $('.container');

	form.find('#1').on('click',uno);
	form.find('#2').on('click',dos);
	form.find('#3').on('click',tres);
	form.find('#4').on('click',cuatro);
	form.find('#5').on('click',cinco);
	form.find('#6').on('click',seis);
	form.find('#7').on('click',siete);
	form.find('#8').on('click',ocho);
	form.find('#9').on('click',nueve);
	form.find('#0').on('click',cero);
	form.find('#barra').on('click',dividir);
	form.find('#mul').on('click',multi);
	form.find('#res').on('click',res);
	form.find('#suma').on('click',sum);
	form.find('#igual').on('click',igual);
	form.find('#cls').on('click',borrar);
	
	function uno(){
		calculadora.sumar(5);
		console.log(resultado);

	}
	function igual(){
		console.log('TE MANDO EL VALOR AMEGO');

	}
	function sum(){


	}

	function borrar(){
		calculadora.cls();

	}*/

$(function(){
    var $calc,
        inputNumero,
        operacion,
        concatenaNumero;

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
        if (nuevaOperacion === 'igual'&& operacion){
        	var resultado = calculadora[operacion](inputNumero.val());
        	inputNumero.val(resultado);
        	console.log(resultado);

        }
        operacion=nuevaOperacion;
        console.log(operacion);
    }

    function clear(){
    	inputNumero.val(calculadora.cls());
    	concatenaNumero=true;
    	operacion=null;


    }
    
});