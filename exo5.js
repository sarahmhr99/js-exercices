// Exercice 5

function rand()

{ 

var nombreRandom = Math.floor(Math.random() * (1000 - 50) + 50);
console.log(nombreRandom);
document.getElementById('result-exo-5').innerHTML = +nombreRandom;  
}



window.onload = rand(); 
