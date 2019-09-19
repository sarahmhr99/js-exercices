// Exercice 1.4

function Substract()

{ var Num1 = document.getElementById('Num1').value;
var Num2 = document.getElementById('Num2').value;
var result = Num1 - Num2;
console.log(+result);
document.getElementById('result-exo-1-4').innerHTML = +result;  
}

