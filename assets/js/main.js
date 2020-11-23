//Il computer deve generare 16 numeri casuali tra 1 e 100
/*
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
var listRan  = getRandomInt(1 , 100);
console.log(listRan);


function insArray(number) {
    var arrNumber = [];
    for (var i = 0; i < 16; i++) {
    arrNumber.push(number);
    }
    return arrNumber
}

var arry = insArray(listRan);
console.log(arry);
*/


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
    var arrNumber = [];
    for (var i = 0; i < 16; i++) {
    arrNumber.push(arrNumber[i]);
    }
    return arrNumber
}
var listRan  = getRandomInt(1 , 100);
console.log(listRan);
