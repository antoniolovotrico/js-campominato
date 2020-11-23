//Il computer deve generare 16 numeri casuali tra 1 e 100

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
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
var numUtente = Number(prompt("inserisci un numero da 1 a 100 ma non ripetere limmissione di un numero già inserito"));
if (arrNumber.includes(numUtente) || arrNumberUtente.includes(numUtente)) {
    console.log("hai perso");   
} else {
    arrNumberUtente.push(numUtente);
}
console.log(arrNumberUtente);
    //console.log(numUtente);

//var arrNumberUtente = [] ;

//while (arrNumberUtente.length < 5)  {

    
    //console.log(numUtente);

    //if (arrNumberUtente.includes(numUtente)== false) {
      //  arrNumberUtente.push(numUtente);
   // }
//} 
//console.log(arrNumberUtente);   

    /*if (arrNumberUtente.includes(numUtente) == false && arrNumber.includes(numUtente) == false ) {
        arrNumberUtente.push(numUtente);
        console.log(arrNumberUtente);
    }*/


//}

