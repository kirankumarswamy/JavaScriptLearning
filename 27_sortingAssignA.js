

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
console.log(`Given Array is :`,arrayRollNumbers);

console.log(`==========================================================`);

arrayRollNumbers.reverse()
console.log(`1) After reversing array  :`,arrayRollNumbers);

console.log(`==========================================================`);

arrayRollNumbers.sort()
console.log(`2) sort() method without any logic :`
,arrayRollNumbers);

console.log(`==========================================================`);

arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2 ? 1 : -1;
})

console.log(`3) Ascending order :`,arrayRollNumbers);

console.log(`==========================================================`);

console.log(`4) Greatest Number From array :`,arrayRollNumbers[arrayRollNumbers.length-1])

console.log(`==========================================================`);
console.log(`5) Smallest Number from array :`, arrayRollNumbers[0]);

console.log(`==========================================================`);

function removeDuplicates(){
    return arrayRollNumbers .filter((num,index)=> arrayRollNumbers.indexOf(num)===index)
    }
console.log(`6) After remobing duplicates Numbers array is :`,removeDuplicates(arrayRollNumbers));