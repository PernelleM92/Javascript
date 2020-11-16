// page sur les ternaire

let x = 15;
let y = -20;

document.getElementById('p1').innerHTML = 
x >= 10 ? 'x supérieur ou égal à 10' : 'x strictement unférieur à 10';

if (x >= 10){
    document.getElementById('p2').innerHTML = 'Oui il est supérieur a 10';
    
}else{
    document.getElementById('p2').innerHTML = 'x est inférieur à 10';

}

// La même condition en ternaire // ? = if   : = else
document.getElementById('p1').innerHTML = 
x >= 10 ? 'x supérieur ou égal à 10' : 'x est inférieur à 10';


document.getElementById('p3').innerHTML =
y > 10 ? 'y supérieur ou égal à 10': 'y est inférieur à 10';

if (y > 10){
    document.getElementById('p4').innerHTML = 'y est supérieur à 10';
}else{
    document.getElementById('p4').innerHTML = 'y est inférieur à 10';
}