//Js page for pour

for ( var i = 0; i < 10; i++){ // for (1-initialisation de la variable 2- test ou condition de sortie- incrémentation)
    document.getElementById('p1').innerHTML += ' i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle. <br> '
} 

console.log(i);



for (let i = 0; i < 18; i++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('tr1').innerHTML += '<tr><td>i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle.</td><td>passage n° ' + (i +1) + '</td></tr>';
}

//root = racine
// i = itérator = "curseur"



// for avec if et l'instruction break

// if (test) {
     // blocdecodeOUinstruction
//}

for (let arreteToi = 0; arreteToi < 1000; arreteToi++) {
        if ( arreteToi == 569){ // test
            break; // instruction

        } // fin du if
    document.getElementById('p2').innerHTML += 'arreteToi contient la valeur ' + arreteToi + ' qui est incrémenté à chaque passage de la boucle. <br>'
}// fin du for

// for avec une instruction continue

for (let item = 0; item < 10; item++) {
    if ( item % 2 != 0) { // reste de la division n'est pas égal à 0 ( donc item est un chiffre impair)
            continue;// passe à la suivante
    }// fin du if
    document.getElementById('p3').innerHTML += ' La variable item contient a valeur ' + item + ' à chaque passage de la boucle.<br> ';
    
}// fin fu for


