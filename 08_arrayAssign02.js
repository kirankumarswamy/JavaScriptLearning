console.log(`=================Assignment-2==================`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);

console.log(`-----------------------step-1----------------------------`);
console.log(`total elements available in array is : ${arrayNumbers.length}`);

console.log(`-----------------------step-2----------------------------`);
console.log(`The first element in array is : ${arrayNumbers[0]}`);
console.log(`The last element in array is : ${arrayNumbers[arrayNumbers.length-1]}`);

console.log(`----------------------step-3-----------------------------`);
console.log(`the third last element of array is : ${arrayNumbers.slice(arrayNumbers.length-3,9)}`);

console.log(`-----------------------step-4----------------------------`);
console.log("The all even numbers using for loop and log on console");
const evenNumbers = []; //Empty Array to store even numbers 
for (let i = 0; i < arrayNumbers.length; i++) {
    
    if (arrayNumbers[i] % 2 === 0) {
        evenNumbers.push(arrayNumbers[i]);
    }
}
console.log(evenNumbers);

console.log(`-----------------------step-5----------------------------`);
console.log("The all Odd numbers using for loop and log on console");
const oddNumbers = [];

for (let i = 0; i < arrayNumbers.length; i++) {
    
    if (arrayNumbers[i] % 2 !== 0) {
        oddNumbers.push(arrayNumbers[i]);
    }
}

console.log(oddNumbers);

console.log(`----------------------step-6-----------------------------`);
const evenPosNumbers = [];
let evenSum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 === 0) {
    evenPosNumbers.push(arrayNumbers[i]);
   
    evenSum += arrayNumbers[i];   // evenSum = evenSum + arrayNumbers[i];
  }
}
console.log(arrayNumbers);
console.log(`The even element are "${evenPosNumbers.join(', ')}"`);
console.log(`Sum of All the even numbers is: ${evenSum}`);

console.log(`-----------------------step-7--------------------------`);
const oddPosNumbers = [];
let oddSum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
    
    if (i % 2 !== 0) {
        oddPosNumbers.push(arrayNumbers[i]);

        oddSum += arrayNumbers[i]; // oddSum = oddSum + arrayNumber[i];
    }
}
console.log(arrayNumbers);
console.log(`The Odd Numbers are: "${oddPosNumbers.join(', ')}"`);
console.log(`Sum of All the Odd Numbers is: ${oddSum}`);

console.log(`------------------------step-8---------------------------`);
console.log("The sum of all the elements from arrayNumbers");

let totalSum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
    
    totalSum += arrayNumbers[i];  // totalSum = totalSum + arrayNumber[i];
}

console.log(arrayNumbers);
console.log(`Total Sum of All numbers from Array is: "${totalSum}"`);

console.log(`-------------------------step-9--------------------------`)
console.log("The numbers which are multiple of 5 from arrayNumbers");

const multipleOfFive = [];

for (let i = 0; i < arrayNumbers.length; i++) {
    
    if (arrayNumbers[i] % 5 == 0) {
        
        multipleOfFive.push(arrayNumbers[i]);
    }
}

console.log(arrayNumbers);
console.log(`The Multiples of Five are: "${multipleOfFive.join(', ')}"`);

console.log(`-------------------------step-10--------------------------`)
let numberIncludes = arrayNumbers.includes(115);
console.log(`is number 115 availabe in array : ${numberIncludes}`);

console.log(`-------------------------step-11--------------------------`)
let includeNumber = arrayNumbers.includes(23);
console.log(`is number 23 availabe in array : ${includeNumber}`);

console.log(`-------------------------step-12--------------------------`)
console.log(`      Inserting numbers 55,66 before index 3`);
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);
console.log(`------------------------step-13---------------------------`)
console.log(`      Delete 3 elements starting from index 4`);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);
