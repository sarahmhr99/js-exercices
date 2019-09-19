// Exercice 2.2

function Add()

{ var Num1 = document.getElementById('Num1').value;
var Num2 = document.getElementById('Num2').value;


Num1 = parseInt(Num1);
Num2 = parseInt(Num2);


var result = Num1 + Num2;
console.log(+result);
document.getElementById('result-exo-2-2').innerHTML = +result;  
}
