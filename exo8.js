// Exercice 8

function Divide(){

var Num1 = 20;
var Num2 = 2;
var Num3 = 5
var result1 = Num1 / Num2;
var result2 = result1 / Num3
	document.getElementById('Num1').innerHTML = +Num1
	document.getElementById('Num2').innerHTML = +Num2
	document.getElementById('Num3').innerHTML = +Num3

 	document.getElementById('result-exo-8').innerHTML = +result2;  
}

window.onload = Divide(); 