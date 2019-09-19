// Exercice 9

function Convert()

{ var Num1 = document.getElementById('kg').value;
var Num2 = document.getElementById('lbs').value;

var result1 = Num1 * 2.205;
var result2 = Num2 / 2.205;

console.log(+result1);
console.log(+result2);

document.getElementById('result-kg').innerHTML = +result1;  
document.getElementById('result-lbs').innerHTML = +result2;  
}
