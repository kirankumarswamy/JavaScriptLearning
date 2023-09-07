console.log(``);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19]
console.log(`Given array is :`, arrayNumbers);
console.log(`1) After adding 10 in Each element of array is : `);
const arrayAddNums = arrayNumbers.map((currentValue,index,array)=>{
    return currentValue + 10
})
console.log(arrayAddNums);
console.log(`-------------------------------------------------------------`);


console.log(`2) Cube of Each element of array :`);

const cubeOfElements = arrayNumbers.map((currentValue)=>{
 return currentValue ** 3
})
console.log(cubeOfElements);
console.log(`-------------------------------------------------------------`);

console.log(`3) Adding index value to the corresponding to Each element of array :` );
const addIndex = arrayNumbers.map((currentValue,index)=>{
    return currentValue+index
})
console.log(addIndex);
console.log(`-------------------------------------------------------------`);



