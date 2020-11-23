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