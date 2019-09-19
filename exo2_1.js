// Exercice 2.1

function Divide()

{ var Num1 = document.getElementById('Num1').value;
var Num2 = document.getElementById('Num2').value;
var result = Num1 / Num2;
console.log(+result);
document.getElementById('result-exo-2-1').innerHTML = +result;  
}

