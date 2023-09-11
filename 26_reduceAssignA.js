
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90,  60, 2, 19]

console.log(`Array is :`, array_numbers);

console.log(`1) Sum of all Numbers using reduce and traditional method`);
console.log(`------Using Traditional method-------`);

let sum = 0;
for (const nums of array_numbers) {
    sum += nums
}
console.log(`Total sum is :`,sum);

console.log(`------Using reduce() method-------`);

const totalNums = array_numbers.reduce((runningTotal,nums)=>{
    return runningTotal+nums
})
console.log(`Total sum is :`, totalNums);
console.log(`===========================================================`);
console.log(`2)Find the Numbers Multiple of 5`);

const multipleOf5 = array_numbers.filter((array_numbers)=>{
    return array_numbers %5===0
})

let totalSum = 0;
for (const nums of multipleOf5) {
    totalSum = totalSum + nums
}
console.log(`Multiple of 5 are ${multipleOf5} and its sum is = ${totalSum}`);