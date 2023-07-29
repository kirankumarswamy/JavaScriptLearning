console.log(`    `);
console.log(`=======================Assignment-1========================`);
var voteEligible = function(age){
    var ageValue = +age;
    if (age<=0 || age>130 || isNaN(ageValue)) {
        console.log(`Your age ${age} is invalid input`);
    } else {
        if (age>=18) {
            console.log(`your age is ${age} and You are eligible for vote`);
        } else {
            console.log(`your age is ${age} and You are not eligible for vote`);
            
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);

console.log(`--------------------------------------------------------------------------`);
console.log(`=======================Assignment-2========================`);
console.log(`-------=====step-1=======-------`);
function EvenOdd(num){
    if (num%2==0) 
    {
        console.log(`Given num is ${num} and is Even`);
    } else 
    {
        console.log(`Given num is ${num} and is Odd`);
        
    }

}
EvenOdd(45)
EvenOdd(70)
EvenOdd(67)
EvenOdd(98)


console.log(`-------=====step-2=======-------`);
    function  StringName (str){
    if (str.length>10) {
        console.log(`string is "${str}"`);
        console.log(`String has more than 10 characters and 
        its length is ${str.length}`);
    } else {
        console.log(` String has ${str.length} characters`);
    }
    console.log(`-------=====step-3=======-------`);
    if (str.startsWith("java")) {
        console.log(`string is "${str}" and it starts with name "java"`);
    } else {
        console.log(`string "${str}" not starts with name java`);
        
    }
    }
    StringName("javaScript-ES6")
