 console.log(`===========================Assignment-1===========================`)
 console.log(`==============================step-1==============================`)
function squareOfWordLength(str){
     var result = str.length;
     console.log(` Given word is :"${str}" `)
     console.log(` length of word is :"${result}"`);
     console.log(` square of word is "${result*result}"`);
}
squareOfWordLength("JavaScript")
squareOfWordLength("Google Chrome")
squareOfWordLength("Developer smart")

console.log(`==============================step-2==============================`)
var str = function(givenString){
 console.log(`Given string is : "${givenString}" `);
  var result = givenString.split(" ").length;
 console.log(`2.1)Length of string is:"${givenString.length}" and number of words in string is :"${result}" `);
 console.log(`  -->Division of given string by its number of words is :"${givenString.length / result}" `);
 console.log(`2.2) Multiplication of string with its number of words is :"${givenString.length *result }" `);
}
str("I am Angular Developer")
