
console.log(`======================Assignment-1=========================`);
console.log(`--------------------------Step-1--------------------------`);

let greet = ()=>{
    console.log("1a)Good Morning, Today is Monday");
}
greet();

console.log(`--------------------------Step-2---------------------------`);

let multiply = (num1,num2,num3=1)=>{
    return num1*num2*num3;
}
let result = multiply(5,5,2)
console.log(`2a) Values are (5, 5, 2) and Multiplication is = ${result} `);
let res = multiply(10,4)
console.log(`2b) Values are (10,4,num3=1) and Multiplication is = ${res} `);


console.log(`--------------------------Step-3--------------------------`);
let add = (num1,num2,num3,num4,num5)=>{
    return num1+num2+num3+num4+num5;
    
}

let sum = add(100,100,200,349,756)
console.log(`3a,b) Numbers are 100,100,200,349,756 and it's Sum = ${sum}`);

let str  = add("iam ", "learning ", "ES6 ", "features ", "in depth")

console.log(`Concated string is : ${str}`);