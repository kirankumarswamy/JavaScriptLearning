

const array = [1, 2, 3, 5, 7, 9]
//Transform 
// Output should be squre of elements : [1, 4, 9, 25, 49, 81]

// array.map((currentValue , index, array)=>{
//     console.log(currentValue , index, array);
// });

const arrayOfSquare = array.map((currentValue , index, array)=>{
    return currentValue  * currentValue
});
console.log(arrayOfSquare);