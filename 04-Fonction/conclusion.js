//JS pour la page 04-05 conclusion

// on va créer une fonction anonyme

// function () {
//     alert('alerte éxécutée par une fonction anonyme');
// }

// ?, Comment appeler ma fonction si elle n'a pas de nom ?

// let alerte = function () {
//     alert('alerte éxécutée par une fonction anonyme');
// }

// alerte ();

//auto-invocation d'une fonction anonyme
// cela ne fonctionne pas 
// function() {
//     alert('Alerte !!!! Seconde éxécution d\'une fonction anonyme)
// }

(function () {// (fonction(){bloc de code})();
    alert('Alerte !!! Seconde exécution d\'une fonction anonyme');
})();

// Les fonctions auto-invoquées (self-invoked functions en anglais) vont être des fonctions qui vont s'appeler elles-mêmes. Pour créer une fonction auto-invoquée à partir d'une fonction, il va tout simplement falloir rajouter un couple de parenthèses autour de la fonction et un second après le code de la fonction.

// au déplacement d'un évènement

// function () {
//     alert( 'Eh ! tu as bien cliqu2 sur le paragraphe 1 !');
// }

// let paragraphe1 = document.getElementById('p1');

// paragraphe1.addEventListener('click', function() {
//     alert('Eh ! Tu as bien cliqué sur le paragraphe 1 !');
// });


let paragraphe2 = document.getElementById('p3');

paragraphe2.addEventListener('click', function() {
    alert(' BRAVO ! Tu as gagné le gros lot !');
});


// fonction récursive

function decompte(t) {
    if(t > 10){
        document.getElementById('p3').innerHTML += t + '<br>';
        return decompte(t - 1);
    }else {
        return t;
    }// fin de if else
}// fin function

decompte(15);