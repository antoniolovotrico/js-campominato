// chiedere liv difficoltà all'utente
var livDiff = Number(prompt("Scegli il livello di difficoltà al quale vuoi giocare: 0 = Facile    1 = Medio    2 = Difficile"));
    //    BONUS
/*all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */
switch (livDiff) {
    case 0 :
        console.log("Hai scelto il livello Facile");
        var maxi = 100;
        var mini = 1;
        break;
    case 1 :
        console.log("Hai scelto il livello Medio");
        var maxi = 80;
        var mini = 1;
        break;
    case 2 :
        console.log("Hai scelto il livello Difficile");
        var maxi  = 50;
        var mini = 1;
        break;
    default :
        alert("Devi inserire un numero da 0 a 2 per scegliere il livello di difficoltà")
        var livDiff = Number(prompt("Scegli il livello di difficoltà al quale vuoi giocare: 0 = Facile    1 = Medio    2 = Difficile"));
}
//Il computer deve generare 16 numeri casuali tra 1 e 100

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

var arrNumber = [];
//var arrNumberUtente = [] ;
while (arrNumber.length < 16) {
    var rnNum  = getRandomInt(mini , maxi);
    //console.log(rnNum);
    if (arrNumber.includes(rnNum)== false) {
        arrNumber.push(rnNum);
    }

}
console.log(arrNumber);


// modifica dei livelli di scelta e dei messaggi prompt

var arrNumberUtente = [] ;


while (arrNumberUtente.length < (maxi - 16) && arrNumber.includes(numUtente) == false) {   
        var numUtente = Number(prompt("inserisci un numero da 1 a 100"));
        if (!arrNumberUtente.includes(numUtente)) {
             arrNumberUtente.push(numUtente);
             console.log(arrNumberUtente);
        } else {
            alert("Non puoi inserire il numero nuovamente, Inserisci un altro numero");
        }
    } 



console.log("!!!!BOOM!!!!, sei riuscito ad inserire " + arrNumberUtente.length + " numeri consentiti Bravissimo!!");



