// Exercice 12

var Num0 = 1000;

function Calc()

{ var Num1 = document.getElementById('km').value;

var result0 = (Num1 / Num0);
var result1 = (Num1 / Num0) * 60;


console.log(+Num1);
console.log(+Num0);
console.log(+result0);
console.log(+result1);

document.getElementById('result-km0').innerHTML = +result0; 
document.getElementById('result-km').innerHTML = +result1;  
  
}

function Calc2()

{ var Num2 = document.getElementById('min').value;

var result2 = (Num0 * Num2) / 60;

console.log(+Num0);
console.log(+Num2);
console.log(+result2);

document.getElementById('result-min').innerHTML = +result2;  
  
}

