


// function add(num1,num2, ...num ){
//     let sum = num1 + num2;
//    for (const item of num) {
//       sum += item
//    }
//    console.log(`The Numbers are : ${num1}, ${num2}, ${num} and its Sum is ${sum}`);
//    return sum;
// }
// add(5, 6);
// add(9, 5, 6);
// add(78, 90, 51, 68);
// add(89, 90, 45,78, 90, 51, 68);

// OR //

function add(num1,num2, ...num ){
    let sum = num1 + num2;
  for (let i = 0; i < num.length; i++) {
    sum += num[i]    
  }
   console.log(`The Numbers are : ${num1}, ${num2}, ${num} and its Sum is=> ${sum}`);
   return sum;
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);
