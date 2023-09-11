console.log(``);
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90,  60, 2, 19]
console.log(`Given array is :`, arrayNumbers);

console.log(`1) Numbers greater then 50 are :`);
const graterNums = arrayNumbers.filter((currentValue)=>{
    return currentValue >50
})
console.log(graterNums);
console.log(`------------------------------------------`);

console.log(`2)Even Numbers`);
const evenNums = arrayNumbers.filter((currentValue)=>{
    return currentValue % 2 ==0
})
console.log(evenNums);
console.log(`------------------------------------------`);

console.log(`3)Odd Numbers`);
const oddNums = arrayNumbers.filter((currentValue)=>{
    return currentValue % 2 !==0
})
console.log(oddNums);
console.log(`------------------------------------------`);


console.log(`4)Multiple of 5 `);
const multipleOf5 = arrayNumbers.filter((currentValue)=>{
    return currentValue % 5 ==0
})
console.log(multipleOf5);
console.log(`------------------------------------------`);

console.log(`5)Numbers between 20 and 50 :`);
const betweenNums = arrayNumbers.filter((currentValue)=>{
    return (currentValue > 20 && currentValue < 50)
})
console.log(betweenNums);
console.log(`------------------------------------------`);


