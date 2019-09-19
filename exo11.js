// Exercice 11


function Cote()

{	var rando = Math.floor(Math.random() * (10 - 0) + 0);

 	document.getElementById('rand').innerHTML = rando;
}


function Benefices()

{	var mont = document.getElementById('montant').value;
 	rando = document.getElementById('rand').innerHTML;

	cot = mont * rando;

console.log(mont);
console.log(rando);
console.log(cot);

	document.getElementById('result').innerHTML = cot; 
}

