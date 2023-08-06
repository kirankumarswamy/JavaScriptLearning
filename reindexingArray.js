var testArray = new Array();
testArray[3]="qwerty";
testArray[5]="asdfgh";
testArray[9]="zxcvbn";

console.log(testArray);


// To Reindex an array,use Obect.values
var sparseArray = new Array();
sparseArray[3] = "qwerty";
sparseArray[7] = "asdfgh";
sparseArray[13] = "zxcvbn";

let result = Object.values(sparseArray);
console.log(result);







