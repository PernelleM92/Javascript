//JS. pour la page 04-03 Var er let

//let portée de bloc
//var portée élargie

function porteeNew() {
    let xLet = 1;
    var yVar = 2;
    if (true){
        let xLet = 500;
        var yVar = 100;
        document.getElementById('p1').innerHTML = 'La variable let "xlet" dans if = ' + xLet ;
        document.getElementById('p1').innerHTML = 'La variable let "xlet" dans if = ' + yVar ;
        
    }// fin de if true

    document.getElementById('p3').innerHTML = 'La variable let "xlet" dans if = ' + xLet ;
    document.getElementById('p4').innerHTML = 'La variable let "xlet" dans if = ' + yVar ;

}// fin de fonction

porteeNew();