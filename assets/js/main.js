//Il computer deve generare 16 numeri casuali tra 1 e 100

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

var arrNumber = [];
while (arrNumber.length < 16) {
    var rnNum  = getRandomInt(1 , 100);
    //console.log(rnNum);
    if (arrNumber.includes(rnNum)== false) {
        arrNumber.push(rnNum);
    }

}
console.log(arrNumber);




var arrNumberUtente = [] ;

while (arrNumberUtente.length < 84 && arrNumber.includes(numUtente) == false) {   
    var numUtente = Number(prompt("inserisci un numero da 1 a 100"));
    if (!arrNumberUtente.includes(numUtente)) {
        arrNumberUtente.push(numUtente);
        console.log(arrNumberUtente);
    } else {
        alert("Non puoi inserire il numero nuovamente, Inserisci un altro numero");
    }
} 

console.log("hai perso, sei riuscito ad inserire " + arrNumberUtente.length + " numeri consentiti Bravissimo!!");



