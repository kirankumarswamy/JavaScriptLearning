
function stringHandsOn(){
var str = "     Hey you are doing good, keep it up       "
console.log(`---------------step1--------------`);
console.log(`Given string is : \"${str}"`);

console.log(`---------------step2--------------`);
    var strLength =str.length ;
    console.log(`Total length of the string is :\"${strLength}"`);

console.log(`---------------step3--------------`);
 var result = str.trim();
 console.log(`Before Trim String length : ${str.length}, After Trim string is :\"${result}"\  and it's length is : "${result.length}"`);

 console.log(`---------------step4--------------`);
 var extraSpaces = str.length - result.length;
 console.log(`Total Number of extra spaces removed :"${extraSpaces}"`);

 console.log(`---------------step5--------------`);
 var afterTrim = str.trim();
 var afterTrimCharAt0 = afterTrim.charAt(0);
 var afterTrimCharAtLast = afterTrim.charAt(afterTrim.length-1);
console.log(`After trim the first charactr is : "${afterTrimCharAt0}", and last character is : "${afterTrimCharAtLast}"  `);

console.log(`---------------step6--------------`);
var strTrim = str.trim()
console.log(`"${strTrim}"`);
var result = strTrim.split(' ');
var words = result.length;
console.log(`Total number of words are : ${words}`);

console.log(`---------------step7--------------`);
var result = str.trim();
var word = result.indexOf("good")
console.log(`index of the word "good" is :"${word}"`);

console.log(`---------------step8--------------`);
 var result = str.trim();
 var word = result.substring(22)   
//  var word = result.slice(22)             // Both substring and slice works same
 console.log(` Substring starting from index 22 is :"${word}"`);

console.log(`---------------step9--------------`);
var trimming = str.trim()
 var result = trimming.endsWith("up")
 console.log(`whether the string ends with word "up" :"${result}"  `);

console.log(`---------------step10--------------`);
var trimming = str.trim()
 var result = trimming.startsWith("Hey")
 console.log(`whether the string starts with word "Hey" :"${result}"  `);
}
stringHandsOn();




