let anArray = [];
let array = [4,5,4,5,8,5,7,8,9,7,8];
for (const i of array) {
    if(anArray.indexOf(i)===-1){      // if (!anArray.includes(i))
        anArray.push(i)
    }
}
console.log(array);
console.log(`After removing duplicate Values`);
console.log(anArray);