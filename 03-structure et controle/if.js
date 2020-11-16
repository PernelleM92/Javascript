// js pour la page 

let x = 4;
let y = 0; 

if(x > 1){ /* La condition est évalué a true */
    alert('x contient une valeur supérieure a 1'); /* si c'est true on exécute ce bloc de code */
}

if(x == y){
    alert('x et y contiennent la même valeur');
}

if(y){ /* l'alerte ne s'affiche pas car la valeur de y contient 0, qui est une ds valeurs qui renvoit false(cf. la liste ds la page.html) */
    alert('La valeur de y est évalué à true')
}


// Inversion du test logique - vérifier si c'est faux

if((x > 1)==false){ /* au lieu de verifier que le test est vrai on vas verifier qu'il est faux */
    alert('x contient une valeur inférieur à 1');
}

if((x == y) == false){
    alert('x contient une vleur inférieure a 1');
}

