
//suma con el for
function sumF(){ 
		



		var vectornum =[1,2,3,4];
		var sum;
		sum=0;


		for (var i = 0; i < vectornum.length; i++) 
			{
			sum += vectornum [i];}  
			console.log("el resultado del for es :",sum);
			
	};



//suma con el while
function sumW(){
	var vectornum =[1,2,3,4,5,6];
		var sum;
		var i;
		sum=0;
		i=0;

		while (i<vectornum.length) 
			{
				sum += vectornum [i];
				i++;
			}  
			console.log("el resultado del while es :",sum);
			
	};
//suma con recursion
	function recu(){
			

			if (i == vectornum.length){
				return res;}
			else
				{

			 	res += vectornum[i];	
			 	
			 	recu(vectornum,i++,res)
				}
				console.log("el resultado de la recursion es :",res);	





	};
	var vectornum =[1,2,3,4,5];
	var i=0;
	var res=0;


sumF(); //Llamo a la funcion sumaFor
sumW(); //Llamo a la funcion sumaWhile
recu();	//Llamo a la funcion sumaRecurcion


var vector1 = new Array(5);
var vector2 = new Array(5);
var vector3 = new Array(10);
var i;
var j;

for (i = 0; i < 5; i++) {
  vector1[i]=i;
};

vector2=["a","b","c","d","e"];

j=0;

for (i = 0; i < 5; i++) {
 vector3[j]= vector1[i];
 j++;
 vector3[j]= vector2[i];
 j++;
};

 console.log("Vector Merge ",vector3);




