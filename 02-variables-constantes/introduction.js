//Les scripts pour l'intro sur les variable
//mon second fichier JS
//création de 3variable, cependant elles ne stockent pas de valeur

// let prenom;
// let monAGe;

// var ville;
//on déclare une variable et on l'initialise en même temps

let prenom = 'Jean';// une chaine de caractère

//Pour initialiser une variable on utilise l'operateur = CE N'EST PAS LE SIGNE EGAL!!!! c'est un opérateur d'affection

//Autre moyen d'initialiser une variable 
let monAge;
monAge = 27; //un chiffre (une valeur numérique) n'a pas besoin de guillemet ("")

console.log(prenom);
console.log(monAge);

prenom = 'Mike';
monAge = 27;

console.log(prenom);

//Ceci ne fonctionne pas 
// ville = 'Suresnes';
// let ville;

let ville;
ville = 'Suresnes';

console.log(ville)

// avec prompt() on a une fenêtre avec un champ de saisie
// prompt();

// red&éclaration des variables

//Ceci fonctionne
var chien = 'Médor'
var chien = 'Max'

console.log(chien);

// Ceci ne fonctionne pas
// let chat = 'minou';
// let chat = 'Garfield';