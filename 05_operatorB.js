


console.log(`===================Assignment-2=================`)
console.log(`=====================Step-1====================`)

var greatNumber = function(num1,num2){
 var result = num1 > num2 ? num1 : num2;
console.log(`the greatest number among ${num1} and ${num2} is : "${result}"`);
}
greatNumber(10,-10);
greatNumber(800,899);

console.log(`=====================Step-2====================`)

var isEvenOddNum = function(num){
 var result = num%2==0 ? true:false;
 console.log(`Given numer is ${num} and is "${result}"`);

}
isEvenOddNum(29);
isEvenOddNum(44);
isEvenOddNum(0);
isEvenOddNum(101);

console.log(`=====================Step-3======================`)
var wordLength = function(str){
    var result = str.length % 2 == 0 ? "even":"Odd";
    console.log(`The word "${str}" length is '${str.length}' and is '${result}'`);
}
wordLength("JavaScript")
wordLength("developer")
wordLength("Google")