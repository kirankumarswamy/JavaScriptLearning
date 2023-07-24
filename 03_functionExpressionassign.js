

// var squre = function(){
// console.log(`Squre of "5" is = '${5**2}'`);
// console.log(`Squre of "6" is = '${6**2}'`);
// console.log(`Squre of "25" is = '${25**2}'`);
// console.log(`Squre of "100" is = '${100**2}'`);
// console.log(`Squre of "67.89" is = '${67.89**2}'`);
// console.log(`Squre of "59" is = '${59**2}'`);
 
// }
// squre()

console.log(`===========Assignment============`);
console.log(`------------Step 1--------------`);
 var square = function(num){
    var result = num * num;
    console.log(`Squre of '${num}' is : '${result}'`);
 }
 square(5)
 square(6)
 square(25)
 square(100)
 square(67.89)
 square(59)

console.log(`----------------Step 2------------------`)
 var str = function(){
    console.log(` Log type of function is : '${typeof(str)}'`);
 }
str("")

console.log(`----------------Step 3------------------`)

var areaOfRect = function(l,b){
    var result = l * b;
    console.log(`Area of rectangle having length-499 and width-917 is : "${result}"`);
}
areaOfRect(499,917)

console.log(`-------------------------Step 4---------------------------`)
var swapValues = function (arg1,arg2){
    console.log(`Before swap the values are : '${arg1}'and '${arg2}'`);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(`After swap the values are : '${arg1}'and '${arg2}'`);
}
swapValues("Mahi","Raina");
swapValues("55","77");

console.log(`-------------------------------Step 5---------------------------------`)

var str = function(givenString){
    console.log(`Given string is : "${givenString}"`);
  console.log(`A) Total character available in string : '${givenString.length}'`);

  console.log(`B) character at index 6 is : '${givenString.charAt(6)}'`);

  console.log(`C) character at index 11 is : '${givenString.charAt(11)}'`);

  console.log(`D) Last charater of given string is : '${givenString.charAt(givenString.length-1)}'`);

  console.log(`E) Very first character of given string is : '${givenString.charAt(0)}'`);

  console.log(`F) Third last charater of given string is : '${givenString.charAt(givenString.length-3)}'`);

  var result = givenString.split(' ');
  var words = result.length;
  console.log(`H) Total number of words in given string is : '${words}' and squre of the number is : "${words * words}"`);
  

}
str("JS is the most popular language of internet");

