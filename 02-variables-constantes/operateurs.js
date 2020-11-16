// .js pour la page pour les operateurs

//opérateur artihmétiques
let x = 2;
let y = 50;
let z = 4;

let a = x + 1;
let b = x + y;
let c = x - y;
let d = x * z;
let e = x / y;
let f = 5 % 3 ;
let g = 2 ** 3;

console.log(a, b, c, d, e);

console.log(f);

console.log(g);

// \n permet d'aller à la ligne dans l'alerte

alert('a contient : ' + a +
    '\nb contient : ' + b +
    '\nc contient : ' + c +
    '\nd contient : ' + d +
    '\ne contient : ' + e +
    '\nf contient : ' + f +
    '\ng contient : ' + g 
    );

    // priorité des calcculs
    let h = 1 - 2 - 3;

    // Le calcul dans h se fait de gauche à droite
    console.log(h);

    let j = 2 ** 3 ** 2;

    //Le calcul dans j se fait de droite à gauche
    console.log(j);

    let k = 1 + 4 - 5

    console.log(k);

    let l = 1 - (2 - 3);

    console.log(l)

    alert('h contient : ' + h +
        '\nk contient : ' + k +
        '\nj contient : ' + j +
        '\nl contient : ' + l 
    );


    






