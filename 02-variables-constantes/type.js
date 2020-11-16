// .Js pour la page types de données

// string
let presentation = "Je m'appelle Mike.";
// let presentation = 'Je m\'appelle Michael.';
let age = 25;
let age2 = 60;

console.log(presentation);
console.log(typeof age);

//1- récupérer dans le document un élément dontl'id est p1
// 2- remplacer le contenu d'un élément identifié par son attribut id
// 3- puis on concatène une string et le résultat de la fonction typeof()
// 4- le résultat s'affiche dans la page
document.getElementById('p1') .innerHTML = 'Type de données pour la variable présentation ' + typeof presentation;

document.getElementById('p2') .innerHTML = 'Type de données pour la variable présentation ' + typeof presentation;

document.getElementById('p3') .innerHTML = 'Type de données pour la variable présentation ' + typeof presentation;

// ('...')ou ("...") est le dé-limiteur

let phrase = 'Mon film préféré est "20000 lieues sous les mers".';

console.log(phrase);

// 2-NUMBER

let x = 10;
let y = -20000;
let z = 3.14;

console.log(z);
// deux arguments dans le console.log
console.log(typeof x, z, y);



//3- BOOLEAN

//  vrai = true;
//  faux = false;

let test = 8 > 4;

console.log(test)
console.log(typeof test, test)



//4- NULL et UNDEFINED

let arbre;

console.log(typeof arbre);

let nul = null;
let indefini;

document.getElementById('p4').innerHTML = 'Le type de la variable nul et object'

document.getElementById('p5').innerHTML = 'Le type de la variable nul et undefinned'
