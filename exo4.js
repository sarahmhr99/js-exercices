// Exercice 4

var Num0 = 0;

function nul(){
	var Num0 = document.getElementById('Num0').value;
}

function Add10(){

Num0 = Num0 + 10;
Num0 = parseInt(Num0);

console.log(+Num0);
document.getElementById('result-exo-4').innerHTML = +Num0;  

}

function Div5(){

Num0 = Num0 / 5;
Num0 = parseInt(Num0);

console.log(+Num0);
document.getElementById('result-exo-4').innerHTML = +Num0;  
}


function Mult8(){

Num0 = Num0 * 8;
Num0 = parseInt(Num0);

console.log(+Num0);
document.getElementById('result-exo-4').innerHTML = +Num0;  
}


function Sub2(){

Num0 = Num0 - 2;
Num0 = parseInt(Num0);

console.log(+Num0);
document.getElementById('result-exo-4').innerHTML = +Num0;  
}


function Add10Sub2(){

Num0 = Num0 + 10 - 2;
Num0 = parseInt(Num0);

console.log(+Num0);
document.getElementById('result-exo-4').innerHTML = +Num0;  
}

function Reset()

{
Num0 = ''; 
document.getElementById('result-exo-4').innerHTML = +Num0;  
}
