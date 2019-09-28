// Exercice 13

var largeur = document.body.clientWidth;
var available = window.innerWidth;


function Larg()

{ 

document.getElementById('result-initial').innerHTML = largeur;  

console.log(largeur);
  
}

function avail()

{ 

document.getElementById('result-width').innerHTML = available;  

console.log(available);
  
}

window.onload = avail();
