// operateurs logiques

// exemples
let x = 5;
let y = -20;

// getElementById nous sert à acceder à un id présent dans la page HTML et a inserer avec .innerHTML le texte renseigne après l'operateur d'affectation
if( x >= 0 && x <=10){/* ET dans cet exemple chaque condition doit etre vrai */
    document.getElementById('p1').innerHTML = ' x vaut ' +  x  + ' et est une valeur comprise entre 0 et 10 ';
}

//|| OU
if ( y < -10 || y > 10){
    document.getElementById('p2').innerHTML = ' y vaut ' +  y  + ' et est une valeur plus petite que -10 ou plus grande que 10';
}

//NO
if ( ! (x <=2) ){//NO
    document.getElementById('p3').innerHTML = 'x contient une valeur strictement supérieure à 2';

} 