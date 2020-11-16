//JS. Pour la page Portée des variables

//Deux variables globales
let x = 5;
var y = 10;

function portee1() { // 1ère fonctions des variables globalex
    document.getElementById('p1').innerHTML = 'Depuis portee1() : x = ' + x + 'y = ' + y ;
}



function portee2() {// 2nde fonction qui définit des variables locales
    let a = 1;
    var b = 2; 
    document.getElementById('p2').innerHTML = 'Depuis portee2() : a = ' + a + 'b = ' + b ;
}

function portee3() { // une 3ème fonction avec de nouveau des locales qui portent le même nom que les globales
    let x = 20; // Bien qu'elles portent le même nom que les globales, ce sont 2 entités différente
    var y = 40;// La fonction va donc utiliser les locales
    document.getElementById('p3').innerHTML = 'Depuis portee3() : x = ' + x + 'y = ' + y ;
}
portee1();
portee2(); 
portee3(); //<---- Appelé la fonction, si on ne le fais pas ca sert a rien

// On tente d'afficher les globales 
document.getElementById('p4').innerHTML = 'Depuis l\'espace global : x = ' + x + 'y = ' + y ;

// On tente d'afficher les locales
document.getElementById('p4').innerHTML = 'Depuis l\'espace global : a = ' + a + 'b = ' + b ;