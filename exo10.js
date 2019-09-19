// Exercice 10

var Num1 = ' ';
console.log(Num1);

function Add()

{var txt = document.getElementById('txt').value;

Num1 = Num1 + txt;


console.log(txt);

document.getElementById('result').innerHTML = Num1;  

}

function Reset()

{
Num1 = ''; 
document.getElementById('result').innerHTML = Num1;  
}
