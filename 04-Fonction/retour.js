//JS. pour la page 04-04 Valeurs

function division(a,b) { // ce sont les paramètres de notre fonction ( paramètres a venir, a mettre plus tard)
    if (b == 0) {
        return 'Division par 0 impossible !';
    }else {
        // alert('attend je calcule !')
        return a / b;
        alert('Ce bloc de code ne s\' affichera pas!') // Après un (return), plus rien ne se passe !!!
    }// fin de if else
}// fin function

// console.log(division(5,2)); //<------ paramètre définit ici .

let nbr1 = prompt('Entrez un premier nombre');
let nbr2 = prompt('Entrez un second nombre qui divisera le premier');

//console.log(nbr, nbr2);

let resultatDivision = division(nbr1, nbr2);// On peut utilisé les variables en arguments.
document.getElementById('p1').innerHTML = resultatDivision;