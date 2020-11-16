// JS. pour la page boucles 

//Intro
//Incrémentation et décrémentation

let a = 10, b = 10, c = 20, d = 20;
//console.log(d);
// a++ va incrémenter APRES a de 1, il aoute 1 après
document.getElementById('p1').innerHTML = 'a contient la valeur ' + a + ', là je vais post-incrémenter de 1, ce qui fais toujours a =' + a++ + ' et après ça fera a =' + a ;

console.log(b);

document.getElementById('p2').innerHTML = ' b contient la valeur ' + b + ' là je vais pré-incrémenter avavant, ce qui fais que maintenant b contient ' + ++b;

console.log(c);

document.getElementById('p3').innerHTML = ' c contient la valeur ' + c + ', là je post-décrémente de 1, ce qui fait que c est toujours égal à ' + c -- + ' et donc c sera éfal à ' + c ;

console.log(c);

document.getElementById('p4').innerHTML = ' d contient la valeur ' + d + ', là je pré-décrémente de 1, et donc d est égal à ' + --d;







// A Compléter



//boucle While

let w1 = 0;

while ( w1 < 10 ){ // tant que le test ou la condition est vrai
    // += rajoute de nouveau la chaîne de caractère tant que la boucle n'est pas terminée
    document.getElementById('while1').innerHTML += ' w1 contient la valeur ' + w1 + '<br>';
    w1++; // incrémente la valeur de la variable de départ 
}

// dans le p while2
let w2 = 0;

//boucler tant que w2 est inférieur ou égal à 10

while ( w2 <= 10){
    document.getElementById('while2').innerHTML += ' w2 contient la valeur ' + w2 + '<br>';
    w2++;
}

// On vas faire la même avec do...while "faire... tant que"

let w3 = 0;

do { // fait
    document.getElementById('while3').innerHTML += 'w3 contient la valeur' +w3; '<br>';
    w3++;
}
while ( w2 < 10)