

console.log(`========================================Assignment-1===========================================`);
console.log(``);
console.log(`----------==========--------(Implicit conversion to string)-----------==========--------`);

x= '3';
y = 2;
result = '3' + 2;
console.log(`values are "${x}" and ${y} : After '3'+ 2 , the result is "${result}" and type is "${typeof result}" 
because,the implicit conversion of number 2 to string is "2" and "3"+"2" = "32"`);

console.log(`--------------------------------------------------------------------------------------------------`);

x = '3';
y = true;
result = '3' + true;
console.log(`values are "${x}" and ${y} : After '3'+true , the result is "${result}" and type is "${typeof result}" 
because,the implicit conversion from boolean value true to string true is "true" and "3"+"true" = "3true"`);

console.log(`---------------------------------------------------------------------------------------------------`);

x = '3';
y = undefined;
result = '3'+undefined;
console.log(`values are "${x}" and ${y} : After '3'+undefined , the result is "${result}" and type is "${typeof result}"
because,the implicit conversion of undefined value to string is "undefined" and '3'+"undefined" = "3undefined"`);

console.log(`----------------------------------------------------------------------------------------------------`);

x = '3';
y = null;
result = '3'+null;
console.log(`values are "${x}" and ${y} : After '3'+null , the result is "${result}" and type is "${typeof result}"
because,the implicit conversion of null value to string is "null" and "3"+"null" = "3null"`);

console.log(`========-------------==========(Implicit boolean conversion to Number)======-------------============`);

x = "4";
y = true;
result = "4" - true;
console.log(`values are "${x}" and ${y} : After '4'-true , the result is ${result} and type is "${typeof result}"
because,the implicit conversion from boolean value true to number is 1 and 4-1 = 3`);

console.log(`-----------------------------------------------------------------------------------------------------`);

x = 4;
y = true;
result = 4 + true;
console.log(`values are ${x} and ${y} : After 4 + true , the result is ${result} and type is "${typeof result}"
because,the implicit conversion from boolean value true to number is 1 and 4+1 = 5`);

console.log(`------------------------------------------------------------------------------------------------------`);

x = 4;
y = false;
result = 4 + false;
console.log(`values are ${x} and ${y} : After 4 + flase , the result is ${result} and type is "${typeof result}"
because,the implicit conversion from boolean value flase to number is 0 and 4-0 = 4`);

console.log(`========-------------==========(Implicit String conversion to Number)========-------------==========`);
x = '4';
y = '2';
result = '4' - '2';
console.log(`values are "${x}" and "${y}" : After '4'-'2' , the result is ${result} and type is "${typeof result}"
because,the implicit conversion from string value "4"-"2" to number is 4-2 = 2`);

console.log(`-------------------------------------------------------------------------------------------------------`);

x = '4';
y = 2;
result = '4' - 2;
console.log(`values are "${x}" and ${y} : After '4'-2 , the result is ${result} and type is "${typeof result}"
because,the implicit conversion from string value "4"-2 to number is 4-2 = 2`);

console.log(`---------------------------------------------------------------------------------------------------------`);

x = '4';
y = 2;
result = '4' * 2;
console.log(`values are "${x}" and ${y} : After '4'*2 , the result is ${result} and type is "${typeof result}"
because,the implicit conversion from string value "4"*2 to number is 4*2 = 8`);

console.log(`----------------------------------------------------------------------------------------------------------`);

x = '4';
y = 2;
result = '4' / 2;
console.log(`values are "${x}" and ${y} : After '4'/ 2 , the result is ${result} and type is "${typeof result}"
because,the implicit conversion from string value "4"/ 2 to number is 4/2 = 2`);